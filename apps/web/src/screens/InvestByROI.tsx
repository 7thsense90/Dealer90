// AUTO-GENERATED from design/boards/InvestByROI.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './InvestByROI.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Invest by Target ROI";

export default function InvestByROIScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-investbyroi">
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
            <A style={{"color": "var(--navy)", "fontWeight": "700"}} to="/invest">
              {"Invest by ROI"}
            </A>
            {" "}
            <A to="/build">
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
              {"PROPERTY ADVISOR"}
            </div>
            {" "}
            <h1 style={{"fontSize": "46px", "fontWeight": "600", "lineHeight": "1.1", "color": "var(--navy)", "letterSpacing": "-.01em"}}>
              {"Tell us your target return. We'll find the Offers, not the other way around."}
            </h1>
            {" "}
            <p style={{"fontSize": "17px", "lineHeight": "1.6", "color": "var(--ink-soft)", "margin": "22px 0 0", "maxWidth": "480px"}}>
              {"Instead of scrolling listings hoping something pencils out, set the ROI band and time horizon you actually want — the Property Advisor matches you to dealer-listed properties that fit, with the return math already worked out."}
            </p>
            {" "}
            <div style={{"display": "flex", "gap": "10px", "alignItems": "flex-start", "marginTop": "22px", "maxWidth": "480px", "padding": "14px 16px", "background": "var(--moss-bg)", "borderRadius": "8px"}}>
              {" "}
              <div style={{"fontSize": "16px"}}>
                {"💬"}
              </div>
              {" "}
              <div style={{"fontSize": "13px", "lineHeight": "1.55", "color": "var(--moss)"}}>
                <span style={{"fontWeight": "600"}}>
                  {"You set the terms, not the other way around."}
                </span>
                {" Share your goal — target ROI, city, horizon and down payment — and dealers come to you with offers built to it."}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "12px", "marginTop": "26px"}}>
              {" "}
              <A className="btn btn-navy" style={{"padding": "14px 26px"}} to="/advisor">
                {"Start Matching →"}
              </A>
              {" "}
              <A className="btn btn-outline" style={{"padding": "14px 26px"}} to="/properties">
                {"See Sample Matches"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROI SELECTOR PREVIEW */}
          {" "}
          <div style={{"flex": "0.95", "position": "relative", "paddingTop": "6px"}}>
            {" "}
            <div className="card" style={{"overflow": "hidden", "boxShadow": "0 24px 48px -20px rgba(16,33,58,.22)"}}>
              {" "}
              <div style={{"padding": "20px 22px 16px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"fontSize": "13.5px", "fontWeight": "600"}}>
                  {"Set Your Target"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"Step 1 of 3"}
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
                  {"CITY"}
                </div>
                {" "}
                <div style={{"display": "flex", "gap": "8px", "marginBottom": "20px"}}>
                  {" "}
                  <span className="tag" style={{"background": "var(--navy)", "color": "#fff"}}>
                    {"Lahore"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"Karachi"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"Islamabad"}
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
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "11px", "color": "var(--ink-soft)", "marginBottom": "20px"}}>
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
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600", "marginBottom": "10px"}}>
                  {"DOWN PAYMENT YOU CAN OFFER"}
                </div>
                {" "}
                <div style={{"display": "flex", "gap": "8px", "marginBottom": "20px"}}>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"10%"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--gold)", "color": "#fff"}}>
                    {"20%"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                    {"30%+"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "lineHeight": "1.55", "paddingTop": "14px", "borderTop": "1px solid var(--line)", "marginBottom": "16px"}}>
                  {"Share this once — dealers who fit your target ROI, horizon and down payment will bid with their own offer for you to compare, not the reverse."}
                </div>
                {" "}
                <button className="btn btn-navy" style={{"width": "100%"}} onClick={go("/advisor")}>
                  {"Submit to Dealers to Bid Their Offers →"}
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
              {"1,860"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"ROI matches made this year"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "textAlign": "center", "borderRight": "1px solid var(--line-dark)"}}>
            {" "}
            <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "22px", "fontWeight": "600"}}>
              {"11.4%"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"Median matched ROI band"}
            </div>
            {" "}
          </div>
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
        {/* HOW MATCHING WORKS: ONE BY ONE */}
        {" "}
        <div style={{"padding": "72px 64px 8px", "background": "var(--paper)"}}>
          {" "}
          <div style={{"maxWidth": "560px", "marginBottom": "44px"}}>
            {" "}
            <div className="eyebrow" style={{"marginBottom": "12px"}}>
              {"HOW MATCHING WORKS"}
            </div>
            {" "}
            <h2 style={{"fontSize": "30px", "fontWeight": "600", "color": "var(--navy)"}}>
              {"Three steps, exactly as they look once you're in."}
            </h2>
            {" "}
          </div>
          {" "}
          {/* ROW 1: SET YOUR TARGET */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--gold)", "color": "#fff", "marginBottom": "14px"}}>
                {"Step 1 · Set Your Target"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Pick a return band, a city, a horizon, a down payment."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Four inputs, no scrolling required — the same panel shown in the hero above. It takes about 20 seconds to fill in."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "20px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "marginBottom": "14px"}}>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600"}}>
                  {"TARGET ROI"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "gap": "8px", "marginBottom": "16px"}}>
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
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"City"}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"Lahore"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Horizon"}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"3 years"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Down payment"}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"20%"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 2: REVIEW YOUR MATCHES (mockup left) */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "0", "overflow": "hidden", "order": "1"}}>
              {" "}
              <div style={{"padding": "14px 18px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"fontSize": "12.5px", "fontWeight": "600"}}>
                  {"14 Matches"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"10–15% ROI · Lahore"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "12px 18px", "borderBottom": "1px solid var(--line)"}}>
                {" "}
                <div>
                  <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                    {"5 Marla Corner Villa, DHA 6"}
                  </div>
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                    {"Based on 6 comparable resales"}
                  </div>
                </div>
                {" "}
                <div className="num" style={{"fontWeight": "600", "color": "var(--navy)"}}>
                  {"12.4%"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "12px 18px", "borderBottom": "1px solid var(--line)"}}>
                {" "}
                <div>
                  <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                    {"8 Marla Duplex, Johar Town"}
                  </div>
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                    {"Based on 4 comparable resales"}
                  </div>
                </div>
                {" "}
                <div className="num" style={{"fontWeight": "600", "color": "var(--navy)"}}>
                  {"11.1%"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "12px 18px"}}>
                {" "}
                <div>
                  <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                    {"10 Marla Plot, Bahria Town"}
                  </div>
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                    {"Based on 9 comparable resales"}
                  </div>
                </div>
                {" "}
                <div className="num" style={{"fontWeight": "600", "color": "var(--navy)"}}>
                  {"13.8%"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "order": "2"}}>
              {" "}
              <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)", "marginBottom": "14px"}}>
                {"Step 2 · Review Your Matches"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Every match shows its basis, not just a number."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Each projected ROI links back to the comparable resales it's built from — so you can judge how solid the number actually is."}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 3: SEND YOUR REQUEST */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0 8px", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--clay-bg)", "color": "var(--clay)", "marginBottom": "14px"}}>
                {"Step 3 · Send Your Request"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Dealers bid with their own offer — you compare, not the reverse."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Shortlist the matches you like once, and every dealer who fits comes back with price, down payment and plan length for you to weigh side by side."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "0", "overflow": "hidden"}}>
              {" "}
              <div style={{"padding": "14px 18px", "borderBottom": "1px solid var(--line)", "fontSize": "12.5px", "fontWeight": "600"}}>
                {"Offers Received — 5 Marla Corner Villa, DHA 6"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "12px 18px", "borderBottom": "1px solid var(--line)"}}>
                {" "}
                <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                  {"Al-Noor Builders"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"20% down · 36 mo."}
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
                  {"Sadaqat Estates"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"25% down · 30 mo."}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"9.2/10"}
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
        {/* DISCLAIMER BAND */}
        {" "}
        <div style={{"padding": "32px 64px", "background": "var(--clay-bg)", "borderTop": "1px solid var(--line)", "borderBottom": "1px solid var(--line)"}}>
          {" "}
          <div style={{"display": "flex", "gap": "16px", "alignItems": "flex-start", "maxWidth": "900px"}}>
            {" "}
            <div style={{"fontSize": "18px"}}>
              {"ⓘ"}
            </div>
            {" "}
            <p style={{"fontSize": "13.5px", "color": "var(--ink)", "lineHeight": "1.6", "margin": "0"}}>
              {"Estimated annual ROI is based on dealer-reported resale projections for comparable properties in the area — it is not guaranteed by Dealer90.com and can vary with market conditions. Always review a dealer's full basis for a projection before accepting an offer."}
            </p>
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
              {"READY WHEN YOU ARE"}
            </div>
            {" "}
            <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "26px", "fontWeight": "600", "maxWidth": "480px"}}>
              {"Set your target ROI and see what matches today."}
            </div>
            {" "}
          </div>
          {" "}
          <A className="btn btn-gold" style={{"padding": "14px 28px"}} to="/advisor">
            {"Get Matched →"}
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
