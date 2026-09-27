"""Where live data and behaviour plug into the generated screens.

Screens stay generated from the boards (so they can't drift from the design). A page container in
apps/web/src/pages/<ScreenId>.tsx then supplies:

  content[name]- replaces only the matched element's children (its own box and styles stay).
  slots[name]  - replaces the matched element's markup (e.g. the listing grid). If a container
                 doesn't pass a slot, the board's original markup renders, unchanged.
  bind[name]   - props spread onto the matched element (value/onChange/onClick/className...).
  go[route]    - makes a non-link element navigate (used where a board has no other way back).

Selectors are CSS (soupsieve) matched against the board. "#comment:TEXT" matches the first
element right after the HTML comment <!-- TEXT -->.
"""

BINDINGS = {
    "Customer-Login": {
        "bind": {
            'input[placeholder^="03XX"]': "identifier",
            'input[type="password"]': "password",
            "button.btn-gold": "submit",
        },
        # The amber info note is where sign-in errors are shown (no separate error state was designed).
        "content": {'div:-soup-contains("First time logging in"):not(:has(div))': "note"},
    },
    "Properties": {
        "bind": {
            '.chip:-soup-contains("All Cities")': "city_all",
            '.chip:-soup-contains("Lahore")': "city_lahore",
            '.chip:-soup-contains("Karachi")': "city_karachi",
            '.chip:-soup-contains("Islamabad")': "city_islamabad",
            '.chip:-soup-contains("8–10% ROI")': "roi_8_10",
            '.chip:-soup-contains("10–15% ROI")': "roi_10_15",
            '.chip:-soup-contains("15%+ ROI")': "roi_15",
            '.chip:-soup-contains("Ready to Move")': "delivery_ready",
            '.chip:-soup-contains("Under Construction")': "delivery_uc",
            'a.btn-outline:-soup-contains("Load More Listings")': "load_more",
        },
        "slots": {
            "#comment:RESULTS COUNT": "resultsCount",
            "#comment:LISTING GRID": "listingGrid",
        },
    },
    "SuperAdmin-Approvals": {
        "content": {
            "#comment:STATS >> .card:nth-of-type(1) > div:nth-of-type(2)": "statPending",
            "#comment:STATS >> .card:nth-of-type(2) > div:nth-of-type(2)": "statActive",
            "#comment:STATS >> .card:nth-of-type(3) > div:nth-of-type(2)": "statProperties",
            "#comment:STATS >> .card:nth-of-type(4) > div:nth-of-type(2)": "statCustomers",
        },
        "slots": {
            "#comment:FLAGGED PRICING REVIEW >> table": "flaggedTable",
            "#comment:PENDING TABLE >> table": "registrationsTable",
        },
        "bind": {"#comment:PENDING TABLE >> input": "search"},
    },
    "SuperAdmin-DealerFeatureAccess": {
        "content": {
            'div:-soup-contains("Dealer Approvals / "):not(:has(div))': "breadcrumb",
        },
        "slots": {
            "#comment:MODULE TOGGLES": "modules",
            "#comment:SIDEBAR PREVIEW": "preview",
            "#comment:COMPARE OTHER DEALERS": "compare",
        },
        "bind": {
            'button:-soup-contains("Cancel")': "cancel",
            'button:-soup-contains("Save & Approve Dealer")': "save",
        },
    },
    "Dealer-AddProperty": {
        "bind": {
            'button:-soup-contains("Save as Draft")': "saveDraft",
            'button:-soup-contains("Publish Property")': "publish",
            'input[value^="5 Marla Corner Villa"]': "title",
            '.chip:-soup-contains("Residential")': "type_residential",
            '.chip:-soup-contains("Commercial")': "type_commercial",
            '.chip:-soup-contains("Plot")': "type_plot",
            '.chip:-soup-contains("Rental")': "type_rental",
            '.chip:-soup-contains("Internal Use Only")': "vis_internal",
            '.chip:-soup-contains("Publish Publicly")': "vis_public",
            '.chip:-soup-contains("Yes, display it")': "noc_yes",
            '.chip:-soup-contains("No, keep private")': "noc_no",
            'input[value="DHA Phase 6, Lahore"]': "location",
            'input[value="5 Marla"]': "size",
            "textarea": "description",
            'select:has(option:-soup-contains("Ring Road"))': "corridor",
            '.chip:-soup-contains("Conservative")': "risk_conservative",
            '.chip:-soup-contains("Balanced")': "risk_balanced",
            '.chip:-soup-contains("Aggressive")': "risk_aggressive",
            '.chip:-soup-contains("Low")': "yield_low",
            '.chip:-soup-contains("Medium")': "yield_medium",
            '.chip:-soup-contains("High")': "yield_high",
            'input[value="28,500,000"]': "price",
            'input[value="5,000,000"]': "downPayment",
            'input[value="31,500,000"]': "projected1y",
            'input[value="38,200,000"]': "projected3y",
            '.chip:-soup-contains("Comparable Sales")': "basis_comparable",
            '.chip:-soup-contains("Area Market Trend")': "basis_trend",
            '.chip:-soup-contains("Personal Estimate")': "basis_personal",
            '.card[style^="padding:16px 18px;background:#fff;border:1.5px"]': "confirm",
            '.card[style^="padding:16px 18px;background:#fff;border:1.5px"] > div:nth-of-type(1)': "confirmBox",
            'input[value="12"]': "planMonths",
            'select:has(option:-soup-contains("Quarterly"))': "frequency",
            "input[disabled]": "installment",
        },
        # Where save errors / confirmations are shown: the "Properties / Add New" breadcrumb line.
        "content": {'div:-soup-contains("Properties / Add New"):not(:has(div))': "status"},
        # This board has no sidebar: its breadcrumb line leads back to the dealer dashboard.
        "go": {'div:-soup-contains("Properties / Add New"):not(:has(div))': "/dealer"},
        "slots": {"#comment:LIVE PREVIEW": "preview"},
    },
    "Dealer-Dashboard": {
        "content": {'h1:-soup-contains("Welcome back")': "welcome"},
        "slots": {'span.tag:-soup-contains("Marketing restricted by Admin")': "marketingPill"},
    },
    # Boards drawn without a sidebar: the caption above the page title leads back.
    "Dealer-Customers": {"go": {'div[style="font-size:12px;color:var(--ink-soft);"]:-soup-contains("Al-Noor Builders")': "/dealer"}},
    "Dealer-CreateInstallmentPlan": {"go": {'div:-soup-contains("Customers & Installments / New Plan"):not(:has(div))': "/dealer/customers"}},
}
