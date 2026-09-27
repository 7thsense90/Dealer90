#!/usr/bin/env python3
"""Render-ready copies of the original canvas boards for visual regression.

Each harness page is the board exactly as the canvas renders it (its <style> in <head>,
its root element in <body>), with Google Fonts swapped for the identical self-hosted faces
(the sandbox and CI can't reach Google). The web app is then screenshot-compared to these.
"""
import json
from pathlib import Path

from bs4 import BeautifulSoup, Tag

ROOT = Path(__file__).resolve().parent.parent
BOARDS = ROOT / "design" / "boards"
OUT = ROOT / "apps" / "web" / "visual" / "harness"
manifest = json.loads((ROOT / "design" / "screen-manifest.json").read_text())
OUT.mkdir(parents=True, exist_ok=True)

for m in manifest:
    soup = BeautifulSoup((BOARDS / f"{m['id']}.dc.html").read_text(), "html.parser")
    xdc = soup.find("x-dc")
    css = xdc.find("helmet").find("style").get_text()
    root = next(c for c in xdc.children if isinstance(c, Tag) and c.name == "div")
    fonts = "fonts-" + "-".join(map(str, m["frauncesWeights"])) + ".css"
    html = (
        "<!doctype html><html lang=\"en\"><head><meta charset=\"utf-8\">"
        f"<link rel=\"stylesheet\" href=\"{fonts}\"><style>{css}</style></head>"
        f"<body>{root}</body></html>"
    )
    (OUT / f"{m['id']}.html").write_text(html)
print(f"harness: {len(manifest)} boards")
