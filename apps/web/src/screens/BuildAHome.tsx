// AUTO-GENERATED from design/boards/BuildAHome.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './BuildAHome.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Build a Home";

export default function BuildAHomeScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-buildahome">
      <div style={{"width": "1440px", "background": "var(--paper)", "position": "relative", "fontFamily": "'Work Sans',sans-serif"}}>
        {" "}
        {/* UTILITY BAR */}
        {" "}
        <div style={{"background": "var(--navy)", "color": "rgba(255,255,255,.68)", "fontSize": "11.5px", "padding": "8px 64px", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
          {" "}
          <div>
            {"Regulated & verified against  "}
            <span style={{"color": "#fff", "fontWeight": "600"}}>
              {"PCATP · PEC · LDA · CDA · DHA"}
            </span>
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "18px"}}>
            {" "}
            <span>
              {"PKR ▾"}
            </span>
            {" "}
            <span>
              {"English ▾"}
            </span>
            {" "}
            <span>
              {"Dealer Login"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* NAV */}
        {" "}
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "20px 64px", "borderBottom": "1px solid var(--line)", "background": "var(--paper-2)"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}} data-nav="1" onClick={go("/")}>
            {" "}
            <div style={{"width": "38px", "height": "38px", "borderRadius": "7px", "background": "var(--navy)", "color": "var(--gold-light)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontWeight": "700", "fontSize": "15px"}}>
              {"D90"}
            </div>
            {" "}
            <div style={{"fontFamily": "'Work Sans',sans-serif", "fontWeight": "700", "fontSize": "17px", "letterSpacing": "-.01em"}}>
              {"Dealer90.com"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "34px", "fontSize": "14px", "fontWeight": "500", "color": "var(--ink-soft)"}}>
            {" "}
            <A to="/properties">
              {"Properties"}
            </A>
            {" "}
            <A to="/invest">
              {"Invest by ROI"}
            </A>
            {" "}
            <A style={{"color": "var(--navy)", "fontWeight": "700"}} to="/build">
              {"Build a Home"}
            </A>
            {" "}
            <A to="/for-dealers">
              {"For Dealers"}
            </A>
            {" "}
            <A to="/for-builders">
              {"For Builders"}
            </A>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "10px", "alignItems": "center"}}>
            {" "}
            <A className="btn btn-outline" style={{"padding": "10px 18px", "fontSize": "13.5px"}} to="/login">
              {"Log In"}
            </A>
            {" "}
            <A className="btn btn-gold" style={{"padding": "10px 20px", "fontSize": "13.5px"}} to="/for-dealers">
              {"List a Property"}
            </A>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* HERO */}
        {" "}
        <div style={{"display": "flex", "gap": "56px", "padding": "76px 64px 56px", "background": "var(--paper-2)", "borderBottom": "1px solid var(--line)"}}>
          {" "}
          <div style={{"flex": "1.05", "paddingTop": "6px"}}>
            {" "}
            <div className="eyebrow" style={{"marginBottom": "18px"}}>
              {"BUILD COST ESTIMATOR"}
            </div>
            {" "}
            <h1 style={{"fontSize": "46px", "fontWeight": "600", "lineHeight": "1.1", "color": "var(--navy)", "letterSpacing": "-.01em"}}>
              {"Know what a build actually costs — before you commit to it."}
            </h1>
            {" "}
            <p style={{"fontSize": "17px", "lineHeight": "1.6", "color": "var(--ink-soft)", "margin": "22px 0 0", "maxWidth": "480px"}}>
              {"Pick a plot size and design style and get a real construction cost range in under a minute, built from actual submissions by verified architects and contractors — then request quotes when you're ready."}
            </p>
            {" "}
            <div style={{"display": "flex", "gap": "12px", "marginTop": "32px"}}>
              {" "}
              <A className="btn btn-navy" style={{"padding": "14px 26px"}} to="/estimator">
                {"Start an Estimate →"}
              </A>
              {" "}
              <A className="btn btn-outline" style={{"padding": "14px 26px"}} to="/estimator">
                {"Browse Design Gallery"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ESTIMATE PREVIEW */}
          {" "}
          <div style={{"flex": "0.95", "position": "relative", "paddingTop": "6px"}}>
            {" "}
            <div className="card" style={{"overflow": "hidden", "boxShadow": "0 24px 48px -20px rgba(16,33,58,.22)"}}>
              {" "}
              <div style={{"padding": "20px 22px 16px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"fontSize": "13.5px", "fontWeight": "600"}}>
                  {"Build Cost Estimator"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--clay-bg)", "color": "var(--clay)"}}>
                  {"Step 1 of 3"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"padding": "22px"}}>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600", "marginBottom": "10px"}}>
                  {"PLOT SIZE"}
                </div>
                {" "}
                <div style={{"display": "flex", "gap": "8px", "marginBottom": "20px"}}>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"3 Marla"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--navy)", "color": "#fff"}}>
                    {"5 Marla"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"10 Marla"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"1 Kanal"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600", "marginBottom": "10px"}}>
                  {"DESIGN STYLE"}
                </div>
                {" "}
                <div style={{"display": "flex", "gap": "8px", "marginBottom": "20px"}}>
                  {" "}
                  <span className="tag" style={{"background": "var(--gold)", "color": "#fff"}}>
                    {"Modern"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"Contemporary"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"Classic"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "18px", "borderTop": "1px solid var(--line)", "marginBottom": "20px"}}>
                  {" "}
                  <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                    {"Estimated range"}
                  </div>
                  {" "}
                  <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600", "color": "var(--navy)"}}>
                    {"PKR 42–58 Lac"}
                  </div>
                  {" "}
                </div>
                {" "}
                <button className="btn btn-navy" style={{"width": "100%"}} onClick={go("/estimator")}>
                  {"Refine My Estimate →"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* PROOF STRIP */}
        {" "}
        <div style={{"display": "flex", "padding": "26px 64px", "background": "var(--navy)", "color": "#fff"}}>
          {" "}
          <div style={{"flex": "1", "textAlign": "center", "borderRight": "1px solid var(--line-dark)"}}>
            {" "}
            <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600"}}>
              {"3,200+"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"Build cost estimates generated"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "textAlign": "center", "borderRight": "1px solid var(--line-dark)"}}>
            {" "}
            <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600"}}>
              {"240+"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"Verified architects & contractors"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "textAlign": "center", "borderRight": "1px solid var(--line-dark)"}}>
            {" "}
            <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600"}}>
              {"±8%"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"Avg. estimate-to-final-quote accuracy"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "textAlign": "center"}}>
            {" "}
            <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600"}}>
              {"18"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"Cities covered"}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* HOW IT WORKS: ONE BY ONE */}
        {" "}
        <div style={{"padding": "72px 64px 8px", "background": "var(--paper)"}}>
          {" "}
          <div style={{"maxWidth": "560px", "marginBottom": "44px"}}>
            {" "}
            <div className="eyebrow" style={{"marginBottom": "12px"}}>
              {"HOW IT WORKS"}
            </div>
            {" "}
            <h2 style={{"fontSize": "30px", "fontWeight": "600", "color": "var(--navy)"}}>
              {"From plot size to a signed contractor — exactly as it looks."}
            </h2>
            {" "}
          </div>
          {" "}
          {/* ROW 1: PICK PLOT SIZE & DESIGN */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--clay)", "color": "#fff", "marginBottom": "14px"}}>
                {"Step 1 · Plot Size & Design"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Choose plot size and style, get a range instantly."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"The same panel shown in the hero above — pick your plot size in Marla or Kanal and a design style, and the range updates immediately."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "20px"}}>
              {" "}
              <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600", "marginBottom": "10px"}}>
                {"PLOT SIZE"}
              </div>
              {" "}
              <div style={{"display": "flex", "gap": "8px", "marginBottom": "16px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--navy)", "color": "#fff"}}>
                  {"5 Marla"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                  {"10 Marla"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                  {"1 Kanal"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "14px", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Estimated range"}
                </div>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "20px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"PKR 42–58 Lac"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 2: ADD SERVICES (mockup left) */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "20px", "order": "1"}}>
              {" "}
              <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600", "marginBottom": "12px"}}>
                {"SERVICES NEEDED"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "fontSize": "13px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                <span>
                  {"☑ Architecture & Structural Design"}
                </span>
                <span className="num" style={{"color": "var(--ink-soft)"}}>
                  {"Included"}
                </span>
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "fontSize": "13px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                <span>
                  {"☑ LDA / CDA Approval Facilitation"}
                </span>
                <span className="num" style={{"color": "var(--ink-soft)"}}>
                  {"Included"}
                </span>
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "fontSize": "13px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                <span style={{"color": "var(--ink-soft)"}}>
                  {"☐ Interior Design"}
                </span>
                <span className="num" style={{"color": "var(--ink-soft)"}}>
                  {"Skip"}
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "order": "2"}}>
              {" "}
              <span className="tag" style={{"background": "var(--gold)", "color": "#fff", "marginBottom": "14px"}}>
                {"Step 2 · Services You Need"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Pick what you actually need quoted."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Architecture, structural, interiors, LDA/CDA approvals — check what applies to your project and skip the rest. Your quote list updates as you go."}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 3: GET QUOTES */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0 8px", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)", "marginBottom": "14px"}}>
                {"Step 3 · Get Quotes"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Verified providers quote against your exact scope."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Your request goes to architects, contractors and designers with a visible credibility score, and quotes come back to compare side by side."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "18px", "display": "inline-block"}} to="/estimator">
                {"Start an Estimate →"}
              </A>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "0", "overflow": "hidden"}}>
              {" "}
              <div style={{"padding": "14px 18px", "borderBottom": "1px solid var(--line)", "fontSize": "12.5px", "fontWeight": "600"}}>
                {"Quotes Received — 5 Marla, Modern"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "12px 18px", "borderBottom": "1px solid var(--line)"}}>
                {" "}
                <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                  {"Al-Noor Builders"}
                </div>
                {" "}
                <div className="num" style={{"fontSize": "13px", "fontWeight": "600"}}>
                  {"PKR 47 Lac"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"8.7/10"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "12px 18px"}}>
                {" "}
                <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                  {"Capital Frontier"}
                </div>
                {" "}
                <div className="num" style={{"fontSize": "13px", "fontWeight": "600"}}>
                  {"PKR 51 Lac"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"8.1/10"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* DESIGN GALLERY PREVIEW */}
        {" "}
        <div style={{"padding": "16px 64px 72px", "background": "var(--paper)"}}>
          {" "}
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "maxWidth": "900px", "marginBottom": "28px"}}>
            {" "}
            <div>
              {" "}
              <div className="eyebrow" style={{"marginBottom": "12px"}}>
                {"DESIGN STYLES"}
              </div>
              {" "}
              <h2 style={{"fontSize": "26px", "fontWeight": "600", "color": "var(--navy)"}}>
                {"Start from a design that already fits your budget."}
              </h2>
              {" "}
            </div>
            {" "}
            <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)"}} to="/estimator">
              {"See Full Gallery →"}
            </A>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "24px"}}>
            {" "}
            <div className="card" style={{"flex": "1", "overflow": "hidden"}}>
              {" "}
              <div style={{"height": "150px", "background": "linear-gradient(135deg,#2C4463,#10213A)"}}></div>
              {" "}
              <div style={{"padding": "16px 18px"}}>
                {" "}
                <div style={{"fontSize": "14.5px", "fontWeight": "600"}}>
                  {"Modern"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                  {"Clean lines, flat roofs, large glazing"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "overflow": "hidden"}}>
              {" "}
              <div style={{"height": "150px", "background": "linear-gradient(135deg,#9C5B3C,#6B3F29)"}}></div>
              {" "}
              <div style={{"padding": "16px 18px"}}>
                {" "}
                <div style={{"fontSize": "14.5px", "fontWeight": "600"}}>
                  {"Contemporary"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                  {"Mixed materials, open-plan interiors"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "overflow": "hidden"}}>
              {" "}
              <div style={{"height": "150px", "background": "linear-gradient(135deg,#5B4A2C,#3A2E17)"}}></div>
              {" "}
              <div style={{"padding": "16px 18px"}}>
                {" "}
                <div style={{"fontSize": "14.5px", "fontWeight": "600"}}>
                  {"Classic"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                  {"Symmetrical facades, traditional detailing"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* CTA BAND */}
        {" "}
        <div style={{"padding": "56px 64px", "background": "var(--navy-2)", "color": "#fff", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
          {" "}
          <div>
            {" "}
            <div className="eyebrow" style={{"color": "var(--gold-light)", "marginBottom": "8px"}}>
              {"GET A REAL NUMBER"}
            </div>
            {" "}
            <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "26px", "fontWeight": "600", "maxWidth": "480px"}}>
              {"Run a build cost estimate in under a minute."}
            </div>
            {" "}
          </div>
          {" "}
          <A className="btn btn-gold" style={{"padding": "14px 28px"}} to="/estimator">
            {"Start an Estimate →"}
          </A>
          {" "}
        </div>
        {" "}
        {/* FOOTER */}
        {" "}
        <div style={{"padding": "44px 64px", "background": "var(--navy)", "color": "rgba(255,255,255,.6)"}}>
          {" "}
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start", "paddingBottom": "28px", "borderBottom": "1px solid var(--line-dark)"}}>
            {" "}
            <div>
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}} data-nav="1" onClick={go("/")}>
                {" "}
                <div style={{"width": "30px", "height": "30px", "borderRadius": "6px", "background": "rgba(255,255,255,.08)", "color": "var(--gold-light)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontWeight": "700", "fontSize": "12px"}}>
                  {"D90"}
                </div>
                {" "}
                <div style={{"color": "#fff", "fontWeight": "700", "fontSize": "15px"}}>
                  {"Dealer90.com"}
                </div>
                {" "}
              </div>
              {" "}
              <p style={{"fontSize": "12.5px", "maxWidth": "320px", "lineHeight": "1.6", "marginTop": "12px"}}>
                {"Pakistan's installment property and build-services marketplace. Every figure shown is dealer- or provider-supplied — never guaranteed by Dealer90.com."}
              </p>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "56px", "fontSize": "13px"}}>
              {" "}
              <div>
                {" "}
                <div style={{"color": "#fff", "fontWeight": "600", "marginBottom": "10px"}}>
                  {"Tools"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                  {" "}
                  <A to="/invest">
                    {"Invest by ROI"}
                  </A>
                  <A to="/build">
                    {"Build a Home"}
                  </A>
                  <A to="/properties">
                    {"Installment Plans"}
                  </A>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div style={{"color": "#fff", "fontWeight": "600", "marginBottom": "10px"}}>
                  {"Partners"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                  {" "}
                  <A to="/for-dealers">
                    {"For Dealers"}
                  </A>
                  <A to="/for-builders">
                    {"For Builders"}
                  </A>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "20px", "fontSize": "11.5px"}}>
            {" "}
            <div>
              {"© 2026 Dealer90.com"}
            </div>
            {" "}
            <div>
              {"Regulated & verified against PCATP · PEC · LDA · CDA · DHA"}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
