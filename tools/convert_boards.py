#!/usr/bin/env python3
"""Convert finalized Claude Design canvas boards (design/boards/*.dc.html) into
pixel-identical React screens (apps/web/src/screens/*).

Hard rule: the UI must stay exactly as designed. This converter therefore does NOT
restyle anything - it transliterates the board's markup and CSS 1:1:

  * the board's <style> is kept verbatim, only scoped to the screen (".pg-<id>") so
    boards with different palettes can live in one app;
  * every element, class and inline style is carried over unchanged;
  * text whitespace is emitted exactly as HTML would render it;
  * the Fraunces weights each board loads are reproduced with a per-board font
    alias, so weight fallback behaves exactly as on the canvas.

The only additions are behavioural: links/buttons listed in tools/screens.py get a
route, which changes nothing visually.

Usage:  python3 tools/convert_boards.py
"""
import json
import re
import sys
from pathlib import Path

from bs4 import BeautifulSoup, Comment, NavigableString, Tag

sys.path.insert(0, str(Path(__file__).parent))
from bindings import BINDINGS  # noqa: E402
from screens import DEALER_FEATURE_BY_LABEL, GROUP_HOME, LINKS, OVERRIDES, SCREENS  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
BOARDS = ROOT / "design" / "boards"
OUT = ROOT / "apps" / "web" / "src" / "screens"

VOID = {"input", "br", "img", "hr", "meta", "link"}
NO_TEXT_CHILDREN = {"table", "thead", "tbody", "tfoot", "tr", "select", "svg", "colgroup"}
SVG_ATTRS = {
    "viewbox": "viewBox", "stroke-width": "strokeWidth", "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin", "stroke-dasharray": "strokeDasharray",
    "font-size": "fontSize", "font-family": "fontFamily", "font-weight": "fontWeight",
    "text-anchor": "textAnchor", "fill-rule": "fillRule", "clip-rule": "clipRule",
    "stop-color": "stopColor", "dominant-baseline": "dominantBaseline",
}
HTML_ATTRS = {
    "class": "className", "for": "htmlFor", "maxlength": "maxLength", "colspan": "colSpan",
    "rowspan": "rowSpan", "tabindex": "tabIndex", "readonly": "readOnly",
    "contenteditable": "contentEditable", "autocomplete": "autoComplete",
}
BOOL_ATTRS = {"disabled", "checked", "selected", "readonly", "multiple", "required"}
WS = re.compile(r"[ \t\n\r\f]+")  # HTML whitespace only - never collapse &nbsp;


# ---------------------------------------------------------------- fonts
def fraunces_variant(head_html: str) -> str:
    """Which Fraunces weights did the board load? -> font alias name."""
    m = re.search(r"family=Fraunces:[^&\"]*?wght@([^&\"]+)", head_html)
    weights = sorted({int(w.split(",")[-1]) for w in m.group(1).split(";")}) if m else [400, 500, 600, 700]
    return "D90 Fraunces " + "-".join(str(w) for w in weights), weights


def swap_fraunces(text: str, alias: str) -> str:
    return re.sub(r"(['\"]?)Fraunces\1(?![\w -])", f"'{alias}'", text)


# ---------------------------------------------------------------- css
def scope_css(css: str, scope: str, alias: str) -> str:
    css = swap_fraunces(css, alias)
    out = []
    for m in re.finditer(r"([^{}]+)\{([^{}]*)\}", css):
        sels, decls = m.group(1).strip(), m.group(2).strip()
        scoped = []
        for sel in (s.strip() for s in sels.split(",")):
            if sel in (":root", "body", "html"):
                scoped.append(scope)
            elif sel == "*":
                scoped += [scope, f"{scope} *"]
            elif sel.startswith(("body ", "html ")):
                scoped.append(scope + sel[4:])
            else:
                scoped.append(f"{scope} {sel}")
        out.append(",".join(dict.fromkeys(scoped)) + "{" + decls + "}")
    return "\n".join(out) + "\n"


# ---------------------------------------------------------------- styles
def camel(prop: str) -> str:
    if prop.startswith("--"):
        return prop
    if prop.startswith("-ms-"):
        prop = prop[1:]
    parts = prop.split("-")
    if parts[0] == "":
        parts = parts[1:]
        parts[0] = parts[0].capitalize()
    return parts[0] + "".join(p.capitalize() for p in parts[1:])


def style_obj(style: str, alias: str) -> str:
    style = swap_fraunces(style, alias)
    items = []
    for decl in style.split(";"):
        if ":" not in decl:
            continue
        k, v = decl.split(":", 1)
        k, v = k.strip(), v.strip()
        if not k or not v:
            continue
        if "!important" in v:
            raise SystemExit(f"!important inline style not supported: {decl}")
        items.append(f"{json.dumps(camel(k.lower()))}: {json.dumps(v, ensure_ascii=False)}")
    return "{{" + ", ".join(items) + "}}"


# ---------------------------------------------------------------- links
def norm_label(el: Tag) -> str:
    # ignore lock icons / hover tooltips inside sidebar items
    t = "".join(str(x) for x in el.find_all(string=True)
                if not any("tooltip" in (p.get("class") or []) or "lock-ic" in (p.get("class") or []) for p in x.parents if isinstance(p, Tag)))
    t = re.sub(r"[→←↗✨]", "", t)
    t = "".join(ch for ch in t if not (0x2190 <= ord(ch) <= 0x2BFF or 0x1F000 <= ord(ch) <= 0x1FAFF or ord(ch) in (0xFE0F, 0x200D)))
    t = WS.sub(" ", t).replace("\xa0", " ").strip()
    t = re.sub(r"\s*\d+( new)?$", "", t).strip()
    return re.sub(r"\s+", " ", t)


def route_for(screen_id: str, group: str, label: str):
    ov = OVERRIDES.get(screen_id, {})
    if label in ov:
        return ov[label]
    if label in LINKS.get(group, {}):
        return LINKS[group][label]
    return LINKS["*"].get(label)


# ---------------------------------------------------------------- jsx
class Emitter:
    def __init__(self, screen_id, group, alias, marks, route="/"):
        self.id, self.group, self.alias, self.route = screen_id, group, alias, route
        self.name_override = {}  # id(element) -> JSX expression replacing its children
        self.marks = marks  # id(element) -> list of (kind, name)
        self.lock_tail = {}
        self.uses_account = False
        self.nav_wired = 0
        self.links = []  # (label, route) for the report

    def in_preview(self, el):
        """The admin Feature Access board embeds a *preview* of a dealer sidebar - never wire that."""
        return self.id == "SuperAdmin-DealerFeatureAccess"

    def attrs(self, el: Tag, extra=None):
        out = []
        tag = el.name
        lock_managed = any("lockable(" in e for e in (extra or []))
        for k, v in el.attrs.items():
            k = k.lower()
            if k == "class" and lock_managed:
                continue  # className comes from lockable()
            if isinstance(v, list):
                v = " ".join(v)
            if k == "style":
                out.append(f"style={style_obj(v, self.alias)}")
                continue
            if k == "href" and tag == "a":
                continue
            if k in BOOL_ATTRS:
                if k == "selected":
                    continue
                out.append({"checked": "defaultChecked", "readonly": "readOnly"}.get(k, k))
                continue
            if k == "value" and tag in ("input", "textarea"):
                k = "defaultValue"
            elif k == "checked":
                k = "defaultChecked"
            elif k == "selected":
                continue
            elif k in SVG_ATTRS:
                k = SVG_ATTRS[k]
            elif k in HTML_ATTRS:
                k = HTML_ATTRS[k]
            if k == "font-family" or k == "fontFamily":
                v = swap_fraunces(v, self.alias)
            if k in ("maxLength", "rows", "cols", "colSpan", "rowSpan", "tabIndex", "size") and str(v).isdigit():
                out.append(f"{k}={{{int(v)}}}")
                continue
            out.append(f"{k}={json.dumps(v, ensure_ascii=False)}")
        if tag == "select":
            sel = el.find("option", selected=True)
            if sel is not None:
                val = sel.get("value", sel.get_text())
                out.append(f"defaultValue={json.dumps(val, ensure_ascii=False)}")
        if tag == "textarea":
            out.append(f"defaultValue={json.dumps(el.get_text(), ensure_ascii=False)}")
        if extra:
            out += extra
        return (" " + " ".join(out)) if out else ""

    def behaviour(self, el: Tag):
        """Returns (tag_override, extra_attrs) for navigable elements."""
        classes = el.get("class", [])
        label = norm_label(el)
        if el.name == "a":
            route = route_for(self.id, self.group, label)
            self.links.append((label, route))
            return "A", ([f"to={json.dumps(route)}"] if route else [])
        if el.name == "button":
            route = route_for(self.id, self.group, label)
            self.links.append((label, route))
            return None, ([f"onClick={{go({json.dumps(route)})}}"] if route else [])
        if "navitem" in classes and self.group == "dealer" and \
                DEALER_FEATURE_BY_LABEL.get(label) is not None and not self.in_preview(el):
            feature = DEALER_FEATURE_BY_LABEL[label]
            route = route_for(self.id, self.group, label)
            self.links.append((label, route))
            design_locked = "locked" in classes
            # Lock state comes from the signed-in dealer's access (design state when rendered standalone).
            for extra_el in el.select(":scope > .lock-ic, :scope > .tooltip"):
                extra_el.decompose()
            self.lock_tail[id(el)] = f"{{lockExtras({json.dumps(feature)}, {str(design_locked).lower()})}}"
            base = " ".join(c for c in classes if c != "locked")
            return None, [f"{{...lockable({json.dumps(feature)}, {json.dumps(route)}, {str(design_locked).lower()}, {json.dumps(base)})}}"]
        if "navitem" in classes or "mtab" in classes:
            if "locked" in classes:
                return None, []
            self.nav_wired += 1
            if self.id == "SuperAdmin-DealerFeatureAccess" and self.nav_wired > 10:
                return None, []  # that board embeds a dealer-sidebar preview; keep it inert
            route = route_for(self.id, self.group, label)
            self.links.append((label, route))
            return None, ([f"data-nav=\"1\" onClick={{go({json.dumps(route)})}}"] if route else [])
        # brand lock-up (D90 badge + name) -> portal home (public home on sign-in / activation screens)
        if el.name == "div" and any(
            isinstance(c, Tag) and c.get_text(strip=True) == "D90" for c in el.children
        ) and "Dealer90.com" in el.get_text():
            route = GROUP_HOME[self.group] if self.in_portal() else "/"
            return None, [f"data-nav=\"1\" onClick={{go({json.dumps(route)})}}"]
        # "Dealer Login" in the public utility bar
        if el.name == "span" and label == "Dealer Login":
            self.links.append((label, "/login"))
            return None, ["data-nav=\"1\" onClick={go(\"/login\")}"]
        # Sidebar account block (avatar + name at the bottom of every portal sidebar):
        # shows the signed-in account's name and a Log out link.
        style = (el.get("style") or "").replace(" ", "")
        if self.in_portal() and el.name == "div" and "margin-top:auto" in style and \
                el.find("div", style=lambda v: v and "border-radius:50%" in v.replace(" ", "")):
            name_el = el.find("div", style=lambda v: v and "color:#fff" in v.replace(" ", ""))
            if name_el is not None:
                kind = "business" if "Credibility" in el.get_text() else "person"
                self.name_override[id(name_el)] = f"{{accountName({json.dumps(kind)}, {json.dumps(name_el.get_text(strip=True))})}}"
                self.lock_tail[id(el)] = "{accountExtras()}"
                self.uses_account = True
        return None, []

    def in_portal(self):
        return self.group in ("dealer", "admin", "provider") or self.route.startswith("/customer")

    def node(self, n, parent_tag, depth):
        pad = "  " * depth
        if isinstance(n, Comment):
            txt = str(n).strip().replace("*/", "* /")
            return [f"{pad}{{/* {txt} */}}"] if txt else []
        if isinstance(n, NavigableString):
            if parent_tag in ("textarea", "style", "script"):
                return []
            t = WS.sub(" ", str(n))
            if t == "":
                return []
            if t == " " and parent_tag in NO_TEXT_CHILDREN:
                return []
            return [f"{pad}{{{json.dumps(t, ensure_ascii=False)}}}"]
        if not isinstance(n, Tag):
            return []
        tag = n.name
        if tag == "table" and any(isinstance(c, Tag) and c.name == "tr" for c in n.children):
            # browsers insert <tbody>; do the same so the DOM (and React) matches
            tb = BeautifulSoup("<tbody></tbody>", "html.parser").tbody
            for c in list(n.children):
                if isinstance(c, Tag) and c.name == "tr" or (isinstance(c, NavigableString) and not c.strip()):
                    tb.append(c.extract())
            n.append(tb)
        override, extra = self.behaviour(n)
        marks = dict(self.marks.get(id(n), []))
        name = override or tag
        a = self.attrs(n, extra)
        if "go" in marks:  # plain navigation for an element that isn't a link on the board
            a += f" data-nav=\"1\" onClick={{go({json.dumps(marks['go'])})}}"
        if "bind" in marks:
            b = marks["bind"]
            a = re.sub(r"defaultValue=(\{[^{}]*\}|\"[^\"]*\")",
                       lambda m: f"defaultValue={{bind.{b}?.value === undefined ? {m.group(1).strip('{}') if m.group(1).startswith('{') else m.group(1)} : undefined}}", a)
            a += f" {{...bind.{b}}}"
        if tag in VOID or tag == "textarea":
            lines = [f"{pad}<{name}{a} />"]
        else:
            kids = []
            if id(n) in self.name_override:
                kids = [pad + "  " + self.name_override[id(n)]]
            else:
                for c in n.children:
                    kids += self.node(c, tag, depth + 1)
            if id(n) in self.lock_tail:
                kids.append(pad + "  " + self.lock_tail[id(n)])
            if "content" in marks:
                kids = [f"{pad}  {{content.{marks['content']} !== undefined ? content.{marks['content']} : (<>"] + kids + [f"{pad}  </>)}}"]
            lines = [f"{pad}<{name}{a}></{name}>"] if not kids else [f"{pad}<{name}{a}>"] + kids + [f"{pad}</{name}>"]
        if "slot" in marks:
            lines = [f"{pad}{{slots.{marks['slot']} !== undefined ? slots.{marks['slot']} : ("] + lines + [f"{pad})}}"]
        return lines


def component_name(screen_id: str) -> str:
    return re.sub(r"[^A-Za-z0-9]", "", screen_id) + "Screen"


def convert(screen_id, route, group):
    src = BOARDS / f"{screen_id}.dc.html"
    raw = src.read_text()
    soup = BeautifulSoup(raw, "html.parser")
    head = str(soup.head)
    title = soup.title.get_text().strip()
    alias, weights = fraunces_variant(head)
    xdc = soup.find("x-dc")
    css = xdc.find("helmet").find("style").get_text()
    root = next(c for c in xdc.children if isinstance(c, Tag) and c.name == "div")
    scope_cls = "pg-" + screen_id.lower()
    marks = {}
    cfg = BINDINGS.get(screen_id, {})
    for kind, key in (("bind", "bind"), ("slot", "slots"), ("content", "content"), ("go", "go")):
        for sel, nm in cfg.get(key, {}).items():
            if sel.startswith("#comment:"):
                txt, _, inner = sel[len("#comment:"):].partition(" >> ")
                c = root.find(string=lambda t: isinstance(t, Comment) and t.strip() == txt)
                found = [c.find_next_sibling(True)] if c else []
                if found and inner:
                    found = found[0].select(inner)
            else:
                found = root.select(sel)
            if len(found) != 1:
                raise SystemExit(f"{screen_id}: binding {sel!r} matched {len(found)} elements (need exactly 1)")
            marks.setdefault(id(found[0]), []).append((kind, nm))
    em = Emitter(screen_id, group, alias, marks, route)
    body = em.node(root, "x-dc", 3)
    uses_a = any("<A" in l for l in body)
    uses_lock = any("lockable(" in l for l in body)
    cname = component_name(screen_id)
    tsx = [
        f"// AUTO-GENERATED from design/boards/{screen_id}.dc.html by tools/convert_boards.py.",
        "// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.",
        f"import './{screen_id}.css';",
        "import { useGo" + (", A" if uses_a else "") + " } from '../lib/nav';",
        "import type { ScreenProps } from '../lib/screen';",
        "import { useFit } from '../lib/fit';",
        *(["import { useDealerLock } from '../lib/dealerAccess';"] if uses_lock else []),
        *(["import { useAccountBlock } from '../lib/account';"] if em.uses_account else []),
        "",
        f"export const title = {json.dumps(title, ensure_ascii=False)};",
        "",
        f"export default function {cname}({{ slots = {{}}, content = {{}}, bind = {{}} }}: ScreenProps = {{}}) {{",
        "  const go = useGo();",
        "  const fitRef = useFit();",
        *(["  const { lockable, lockExtras } = useDealerLock();"] if uses_lock else []),
        *(["  const { accountName, accountExtras } = useAccountBlock();"] if em.uses_account else []),
        "  void go; void slots; void content; void bind;",
        "  return (",
        f"    <div className=\"d90-screen {scope_cls}\" ref={{fitRef}}>",
        *body,
        "    </div>",
        "  );",
        "}",
        "",
    ]
    (OUT / f"{screen_id}.tsx").write_text("\n".join(tsx))
    (OUT / f"{screen_id}.css").write_text(
        f"/* AUTO-GENERATED from design/boards/{screen_id}.dc.html (scoped verbatim copy of the board styles) */\n"
        + scope_css(css, "." + scope_cls, alias)
    )
    return {"id": screen_id, "route": route, "group": group, "title": title, "component": cname,
            "fontAlias": alias, "frauncesWeights": weights,
            "links": [{"label": l, "route": r} for l, r in em.links]}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = [convert(*s) for s in SCREENS]
    boards = {p.name[:-8] for p in BOARDS.glob("*.dc.html")}
    missing = boards - {m["id"] for m in manifest}
    if missing:
        raise SystemExit(f"Boards without a route: {sorted(missing)}")
    # screen registry for the app
    lines = ["// AUTO-GENERATED by tools/convert_boards.py", "import { lazy, type JSX, type LazyExoticComponent } from 'react';", "",
             "export type ScreenDef = { id: string; route: string; group: string; title: string; Component: LazyExoticComponent<() => JSX.Element> };",
             "", "export const screens: ScreenDef[] = ["]
    pages = ROOT / "apps" / "web" / "src" / "pages"
    for m in manifest:
        # A hand-written container in src/pages/<id>.tsx (data + behaviour) wraps the generated screen.
        mod = f"../pages/{m['id']}" if (pages / f"{m['id']}.tsx").exists() else f"./{m['id']}"
        lines.append(f"  {{ id: {json.dumps(m['id'])}, route: {json.dumps(m['route'])}, group: {json.dumps(m['group'])}, "
                     f"title: {json.dumps(m['title'], ensure_ascii=False)}, Component: lazy(() => import('{mod}')) }},")
    lines += ["];", ""]
    (OUT / "index.ts").write_text("\n".join(lines))
    (ROOT / "design" / "screen-manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False))
    # font aliases needed
    variants = sorted({(m["fontAlias"], tuple(m["frauncesWeights"])) for m in manifest})
    (ROOT / "design" / "font-variants.json").write_text(json.dumps([{"alias": a, "weights": list(w)} for a, w in variants], indent=2))
    wired = sum(1 for m in manifest for l in m["links"] if l["route"])
    total = sum(len(m["links"]) for m in manifest)
    print(f"Converted {len(manifest)} screens; {wired}/{total} links & buttons wired; font variants: {[v[0] for v in variants]}")


if __name__ == "__main__":
    main()
