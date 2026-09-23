// AUTO-GENERATED from design/boards/Main-Editorial.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Main-Editorial.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Homepage (Editorial Marketplace Redesign)";

export default function MainEditorialScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-main-editorial">
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
            <A to="/properties">
              {"Properties        Invest by ROI"}
            </A>
            {" "}
            <A to="/build">
              {"Build a Home"}
            </A>
            {" "}
            <A style={{"display": "inline"}} to="/for-dealers">
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
              {"DEALER-BACKED PROPERTY & BUILD TOOLS"}
            </div>
            {" "}
            <h1 style={{"fontSize": "52px", "fontWeight": "600", "lineHeight": "1.08", "color": "var(--navy)", "letterSpacing": "-.01em"}}>
              {"Decide with numbers, not a hunch."}
            </h1>
            {" "}
            <p style={{"fontSize": "17px", "lineHeight": "1.6", "color": "var(--ink-soft)", "margin": "22px 0 0", "maxWidth": "480px"}}>
              {"Dealer90.com isn't a listings board — it's the tooling that gets you to a decision: get matched to an investment by target ROI, get a real construction cost estimate before you build, or get a structured installment plan you can actually track."}
            </p>
            {" "}
            {/* TOOL SWITCHER */}
            {" "}
            <div style={{"display": "flex", "gap": "10px", "marginTop": "34px", "maxWidth": "520px"}}>
              {" "}
              <div style={{"flex": "1", "padding": "14px 16px", "background": "var(--navy)", "borderRadius": "8px"}}>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--gold-light)", "fontWeight": "600"}}>
                  {"Property Advisor"}
                </div>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "rgba(255,255,255,.72)", "marginTop": "3px"}}>
                  {"Match by target ROI"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"flex": "1", "padding": "14px 16px", "background": "#fff", "border": "1px solid var(--line)", "borderRadius": "8px"}}>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--clay)", "fontWeight": "600"}}>
                  {"Cost Estimator"}
                </div>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                  {"Estimate a build"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"flex": "1", "padding": "14px 16px", "background": "#fff", "border": "1px solid var(--line)", "borderRadius": "8px"}}>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--moss)", "fontWeight": "600"}}>
                  {"Installment Plan"}
                </div>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                  {"Structure a payment plan"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* STAT ROW */}
            {" "}
            <div style={{"display": "flex", "gap": "36px", "marginTop": "32px", "paddingTop": "26px", "borderTop": "1px solid var(--line)", "maxWidth": "520px"}}>
              {" "}
              <div>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "25px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"1,860"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                  {"ROI matches made this year"}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "25px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"3,200+"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                  {"Build cost estimates generated"}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "25px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"2,410"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                  {"Installment plans structured"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* HERO ADVISOR PREVIEW */}
          {" "}
          <div style={{"flex": "0.95", "position": "relative", "paddingTop": "6px"}}>
            {" "}
            <div className="card" style={{"overflow": "hidden", "boxShadow": "0 24px 48px -20px rgba(16,33,58,.22)"}}>
              {" "}
              <div style={{"padding": "20px 22px 16px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"fontSize": "13.5px", "fontWeight": "600"}}>
                  {"Property Advisor"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"Step 2 of 3"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"padding": "22px"}}>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600", "marginBottom": "10px"}}>
                  {"TARGET ROI"}
                </div>
                {" "}
                <div style={{"display": "flex", "gap": "8px", "marginBottom": "20px"}}>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"8–10%"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--gold)", "color": "#fff"}}>
                    {"10–15%"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"15%+"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600", "marginBottom": "10px"}}>
                  {"HORIZON"}
                </div>
                {" "}
                <div style={{"height": "6px", "background": "var(--line)", "borderRadius": "99px", "position": "relative", "marginBottom": "8px"}}>
                  {" "}
                  <div style={{"position": "absolute", "left": "0", "top": "0", "height": "100%", "width": "55%", "background": "var(--gold)", "borderRadius": "99px"}}></div>
                  {" "}
                  <div style={{"position": "absolute", "left": "55%", "top": "50%", "transform": "translate(-50%,-50%)", "width": "16px", "height": "16px", "borderRadius": "50%", "background": "var(--navy)", "border": "2px solid #fff", "boxShadow": "0 1px 4px rgba(0,0,0,.2)"}}></div>
                  {" "}
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "11px", "color": "var(--ink-soft)"}}>
                  {" "}
                  <span>
                    {"1 year"}
                  </span>
                  <span>
                    {"3 years"}
                  </span>
                  <span>
                    {"5+ years"}
                  </span>
                  {" "}
                </div>
                {" "}
                <button className="btn btn-navy" style={{"width": "100%", "marginTop": "22px"}} onClick={go("/advisor")}>
                  {"See Matches →"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"position": "absolute", "bottom": "-34px", "right": "-28px", "width": "238px", "padding": "16px 18px", "boxShadow": "0 20px 40px -16px rgba(16,33,58,.28)", "background": "var(--navy)", "border": "none"}}>
              {" "}
              <div style={{"fontSize": "11px", "color": "rgba(255,255,255,.6)", "fontWeight": "600", "textTransform": "uppercase", "letterSpacing": ".04em"}}>
                {"Installment Snapshot"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "marginTop": "10px"}}>
                {" "}
                <div>
                  {" "}
                  <div className="num" style={{"color": "#fff", "fontSize": "18px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 400-500-600-700',serif"}}>
                    {"PKR 5.7L"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "10.5px", "color": "rgba(255,255,255,.55)"}}>
                    {"per month"}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"textAlign": "right"}}>
                  {" "}
                  <div className="num" style={{"color": "var(--gold-light)", "fontSize": "18px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 400-500-600-700',serif"}}>
                    {"36"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "10.5px", "color": "rgba(255,255,255,.55)"}}>
                    {"installments"}
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
        </div>
        {" "}
        {/* PROOF STRIP */}
        {" "}
        <div style={{"display": "flex", "padding": "26px 64px", "background": "var(--navy)", "color": "#fff"}}>
          {" "}
          <div style={{"flex": "1", "textAlign": "center", "borderRight": "1px solid var(--line-dark)"}}>
            {" "}
            <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600"}}>
              {"8.6 / 10"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"Avg. dealer credibility score"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "textAlign": "center", "borderRight": "1px solid var(--line-dark)"}}>
            {" "}
            <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600"}}>
              {"96%"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"Installment plans paid on schedule"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "textAlign": "center", "borderRight": "1px solid var(--line-dark)"}}>
            {" "}
            <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600"}}>
              {"6 yrs"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"Operating across Pakistan"}
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
        {/* THREE PILLARS */}
        {" "}
        <div style={{"padding": "72px 64px", "background": "var(--paper)"}}>
          {" "}
          <div style={{"maxWidth": "560px", "marginBottom": "44px"}}>
            {" "}
            <div className="eyebrow" style={{"marginBottom": "12px"}}>
              {"THREE WAYS IN"}
            </div>
            {" "}
            <h2 style={{"fontSize": "30px", "fontWeight": "600", "color": "var(--navy)"}}>
              {"Whatever brought you here, there's a structured path forward."}
            </h2>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "28px"}}>
            {" "}
            <div style={{"flex": "1", "padding": "28px 26px", "background": "var(--paper-2)", "border": "1px solid var(--line)", "borderRadius": "4px"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "8px", "background": "var(--gold-light)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px"}}>
                {"🏠"}
              </div>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "marginTop": "16px"}}>
                {"Buy on Installments"}
              </div>
              {" "}
              <p style={{"fontSize": "13.5px", "color": "var(--ink-soft)", "lineHeight": "1.6", "margin": "10px 0 0"}}>
                {"Buy directly from a vetted dealer on a payment schedule built around your budget — structured and tracked, no bank required."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "16px", "display": "inline-block"}} to="/invest">
                {"See How It Works →"}
              </A>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "padding": "28px 26px", "background": "var(--paper-2)", "border": "1px solid var(--line)", "borderRadius": "4px"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "8px", "background": "var(--clay-bg)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px"}}>
                {"📈"}
              </div>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "marginTop": "16px"}}>
                {"Invest by Target ROI"}
              </div>
              {" "}
              <p style={{"fontSize": "13.5px", "color": "var(--ink-soft)", "lineHeight": "1.6", "margin": "10px 0 0"}}>
                {"Tell us your horizon and risk appetite — the Property Advisor matches you to listings against a target return band, not a hunch."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "16px", "display": "inline-block"}} to="/advisor">
                {"Get Matched →"}
              </A>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "padding": "28px 26px", "background": "var(--paper-2)", "border": "1px solid var(--line)", "borderRadius": "4px"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "8px", "background": "var(--moss-bg)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px"}}>
                {"📐"}
              </div>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "marginTop": "16px"}}>
                {"Build Your Own Home"}
              </div>
              {" "}
              <p style={{"fontSize": "13.5px", "color": "var(--ink-soft)", "lineHeight": "1.6", "margin": "10px 0 0"}}>
                {"Get a real construction cost estimate by plot size and design in minutes, then request quotes from verified architects and contractors."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "16px", "display": "inline-block"}} to="/estimator">
                {"Start an Estimate →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* TOOL DEEP-DIVES */}
        {" "}
        <div style={{"padding": "16px 64px 72px", "background": "var(--paper)"}}>
          {" "}
          <div style={{"maxWidth": "560px", "marginBottom": "48px"}}>
            {" "}
            <div className="eyebrow" style={{"marginBottom": "12px"}}>
              {"THE TOOLS, NOT JUST THE LISTINGS"}
            </div>
            {" "}
            <h2 style={{"fontSize": "28px", "fontWeight": "600", "color": "var(--navy)"}}>
              {"This is where the actual decision gets made."}
            </h2>
            {" "}
          </div>
          {" "}
          {/* ROW 1: COST ESTIMATOR */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--clay-bg)", "color": "var(--clay)", "marginBottom": "14px"}}>
                {"Build Cost Estimator"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Know what a build actually costs before you commit to it."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Pick a plot size and a design style, and get a real ballpark range in under a minute — built from actual submissions by verified architects, not a generic per-square-foot guess."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "18px", "display": "inline-block"}} to="/estimator">
                {"Start an Estimate →"}
              </A>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px"}}>
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
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "18px", "borderTop": "1px solid var(--line)"}}>
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
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 2: INSTALLMENT PLAN */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px", "order": "1"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "marginBottom": "16px"}}>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600"}}>
                  {"INSTALLMENT SCHEDULE"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"3 of 12 paid"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"height": "8px", "background": "var(--line)", "borderRadius": "99px", "overflow": "hidden", "marginBottom": "16px"}}>
                {" "}
                <div style={{"width": "25%", "height": "100%", "background": "var(--moss)"}}></div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Sep 5, 2026"}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"PKR 1,958,333"}
                </span>
                <span className="tag" style={{"background": "var(--amber-bg,#F6EADA)", "color": "#B9772E", "padding": "2px 9px"}}>
                  {"Pending"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Oct 5, 2026"}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"PKR 1,958,333"}
                </span>
                <span className="tag" style={{"background": "#F3F1E9", "color": "var(--ink-soft)", "padding": "2px 9px"}}>
                  {"Upcoming"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "order": "2"}}>
              {" "}
              <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)", "marginBottom": "14px"}}>
                {"Installment Plans"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"A payment plan that's tracked, not just promised."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Every plan is broken into a real due-date schedule you can see the status of at any time — paid, pending, or overdue — with a statement you can download whenever you need one."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "18px", "display": "inline-block"}} to="/properties">
                {"See How Plans Work →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 3: DEALER OFFERS */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0 8px", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--gold-light)", "color": "var(--clay)", "marginBottom": "14px"}}>
                {"Dealer Offers"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"One request, real offers from vetted dealers — not cold listings."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Once you're matched or estimate a build, the request routes to dealers and providers with a credibility score you can actually check — you compare structured offers, not sales pitches."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "18px", "display": "inline-block"}} to="/customer/offers">
                {"See My Offers →"}
              </A>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "16px"}}>
                {" "}
                <div style={{"fontSize": "13.5px", "fontWeight": "600"}}>
                  {"Offer from Al-Noor Builders"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"✓ 8.7/10"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"5 Marla Corner Villa, DHA 6"}
                </span>
                <span className="num" style={{"fontWeight": "600"}}>
                  {"PKR 2.85 Cr"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Down payment"}
                </span>
                <span className="num" style={{"fontWeight": "600"}}>
                  {"20%"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Plan length"}
                </span>
                <span className="num" style={{"fontWeight": "600"}}>
                  {"36 months"}
                </span>
                {" "}
              </div>
              {" "}
              <button className="btn btn-gold" style={{"width": "100%", "marginTop": "18px"}} onClick={go("/customer/offers")}>
                {"Compare & Accept →"}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* HOW IT WORKS */}
        {" "}
        <div style={{"padding": "64px", "background": "var(--navy-2)", "color": "#fff"}}>
          {" "}
          <div className="eyebrow" style={{"marginBottom": "12px", "color": "var(--gold-light)"}}>
            {"HOW FINANCING WORKS"}
          </div>
          {" "}
          <h2 style={{"fontSize": "27px", "fontWeight": "600", "marginBottom": "36px", "color": "#fff", "maxWidth": "520px"}}>
            {"Three steps from browsing to moving in"}
          </h2>
          {" "}
          <div style={{"display": "flex", "gap": "48px"}}>
            {" "}
            <div style={{"flex": "1", "borderTop": "2px solid var(--gold)", "paddingTop": "18px"}}>
              {" "}
              <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "15px", "color": "var(--gold-light)"}}>
                {"01"}
              </div>
              {" "}
              <div style={{"fontSize": "16px", "fontWeight": "600", "marginTop": "10px"}}>
                {"Get matched or run an estimate"}
              </div>
              {" "}
              <p style={{"fontSize": "13px", "color": "rgba(255,255,255,.62)", "lineHeight": "1.6", "marginTop": "8px"}}>
                {"Tell the Property Advisor your target ROI, or run a Build Cost Estimate — either way, you start from numbers, not a listing search."}
              </p>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "borderTop": "2px solid var(--gold)", "paddingTop": "18px"}}>
              {" "}
              <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "15px", "color": "var(--gold-light)"}}>
                {"02"}
              </div>
              {" "}
              <div style={{"fontSize": "16px", "fontWeight": "600", "marginTop": "10px"}}>
                {"Get a structured dealer offer"}
              </div>
              {" "}
              <p style={{"fontSize": "13px", "color": "rgba(255,255,255,.62)", "lineHeight": "1.6", "marginTop": "8px"}}>
                {"The dealer sends a real offer — price, down payment, and a proposed installment schedule — for you to compare and accept."}
              </p>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "borderTop": "2px solid var(--gold)", "paddingTop": "18px"}}>
              {" "}
              <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "15px", "color": "var(--gold-light)"}}>
                {"03"}
              </div>
              {" "}
              <div style={{"fontSize": "16px", "fontWeight": "600", "marginTop": "10px"}}>
                {"Pay on schedule, track it live"}
              </div>
              {" "}
              <p style={{"fontSize": "13px", "color": "rgba(255,255,255,.62)", "lineHeight": "1.6", "marginTop": "8px"}}>
                {"Your portal tracks every installment, due date, and pending balance — with a downloadable statement whenever you need one."}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* FOR DEALERS / BUILDERS BAND */}
        {" "}
        <div style={{"display": "flex"}}>
          {" "}
          <div style={{"flex": "1", "padding": "52px 64px", "background": "var(--gold-light)"}}>
            {" "}
            <div className="eyebrow" style={{"color": "var(--clay)", "marginBottom": "10px"}}>
              {"FOR DEALERS"}
            </div>
            {" "}
            <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "maxWidth": "360px"}}>
              {"Stop chasing leads. Start receiving qualified ones."}
            </div>
            {" "}
            <A className="btn btn-navy" style={{"marginTop": "20px", "padding": "11px 20px", "fontSize": "13.5px"}} to="/login">
              {"Register as a Dealer →"}
            </A>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "padding": "52px 64px", "background": "var(--moss-bg)"}}>
            {" "}
            <div className="eyebrow" style={{"color": "var(--moss)", "marginBottom": "10px"}}>
              {"FOR BUILDERS"}
            </div>
            {" "}
            <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "maxWidth": "360px"}}>
              {"Get build requests with a plot size and budget already attached."}
            </div>
            {" "}
            <A className="btn btn-navy" style={{"marginTop": "20px", "padding": "11px 20px", "fontSize": "13.5px"}} to="/login">
              {"Register Your Practice →"}
            </A>
            {" "}
          </div>
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
