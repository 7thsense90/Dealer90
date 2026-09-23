// AUTO-GENERATED from design/boards/ForBuilders.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './ForBuilders.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — For Builders";

export default function ForBuildersScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-forbuilders">
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
            <A to="/build">
              {"Build a Home"}
            </A>
            {" "}
            <A to="/for-dealers">
              {"For Dealers"}
            </A>
            {" "}
            <A style={{"color": "var(--navy)", "fontWeight": "700"}} to="/for-builders">
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
            <A className="btn btn-gold" style={{"padding": "10px 20px", "fontSize": "13.5px"}} to="/login">
              {"Register Your Practice"}
            </A>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* HERO */}
        {" "}
        <div style={{"padding": "88px 64px 64px", "background": "var(--navy)", "color": "#fff"}}>
          {" "}
          <div className="eyebrow" style={{"color": "#8FBF9B", "marginBottom": "18px"}}>
            {"FOR ARCHITECTS, CONTRACTORS & DESIGNERS"}
          </div>
          {" "}
          <h1 style={{"fontSize": "48px", "fontWeight": "600", "lineHeight": "1.1", "maxWidth": "720px"}}>
            {"Get build requests with a plot size and budget already attached."}
          </h1>
          {" "}
          <p style={{"fontSize": "17px", "lineHeight": "1.6", "color": "rgba(255,255,255,.68)", "margin": "22px 0 0", "maxWidth": "560px"}}>
            {"Every request routed to you comes from someone who's already run a cost estimate — plot size, design style and target budget included. You're quoting a real project, not guessing at scope."}
          </p>
          {" "}
          <div style={{"display": "flex", "gap": "12px", "marginTop": "32px"}}>
            {" "}
            <A className="btn btn-gold" style={{"padding": "14px 26px"}} to="/login">
              {"Register Your Practice →"}
            </A>
            {" "}
            <A className="btn btn-outline-light" style={{"padding": "14px 26px"}} to="/provider">
              {"See Provider Dashboard"}
            </A>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* PROOF STRIP */}
        {" "}
        <div style={{"display": "flex", "padding": "26px 64px", "background": "var(--navy-2)", "color": "#fff", "borderTop": "1px solid var(--line-dark)"}}>
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
              {"3,200+"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "rgba(255,255,255,.6)", "marginTop": "3px"}}>
              {"Build requests routed this year"}
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
        {/* WHAT YOU GET: ONE BY ONE */}
        {" "}
        <div style={{"padding": "72px 64px", "background": "var(--paper)"}}>
          {" "}
          <div style={{"maxWidth": "560px", "marginBottom": "44px"}}>
            {" "}
            <div className="eyebrow" style={{"marginBottom": "12px"}}>
              {"WHAT YOU GET"}
            </div>
            {" "}
            <h2 style={{"fontSize": "30px", "fontWeight": "600", "color": "var(--navy)"}}>
              {"Scoped requests, not cold inbound."}
            </h2>
            {" "}
          </div>
          {" "}
          {/* ROW 1: SCOPED BUILD REQUESTS */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)", "marginBottom": "14px"}}>
                {"Scoped Build Requests"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"This is what lands in your dashboard."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Plot size, design style, service list and target budget arrive with every request — you're deciding whether to quote, not decoding what the client wants."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "16px"}}>
                {" "}
                <div style={{"fontSize": "13.5px", "fontWeight": "600"}}>
                  {"10 Marla · Modern Design"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"New Request"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Location"}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"Bahria Town, Karachi"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Services needed"}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"Architecture, Structural, LDA"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Target budget"}
                </span>
                <span className="num" style={{"fontWeight": "600"}}>
                  {"PKR 40–55 Lac"}
                </span>
                {" "}
              </div>
              {" "}
              <button className="btn btn-gold" style={{"width": "100%", "marginTop": "16px"}} onClick={go("/provider")}>
                {"Build a Quote →"}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 2: QUOTE BUILDER (mockup left) */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "0", "overflow": "hidden", "order": "1"}}>
              {" "}
              <div style={{"padding": "14px 18px", "borderBottom": "1px solid var(--line)", "fontSize": "12.5px", "fontWeight": "600"}}>
                {"Quote — 10 Marla · Modern Design"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "12px 18px", "borderBottom": "1px solid var(--line)"}}>
                {" "}
                <div style={{"fontSize": "13px"}}>
                  {"Architectural drawings & approval"}
                </div>
                {" "}
                <span className="num" style={{"fontSize": "12.5px", "fontWeight": "600"}}>
                  {"PKR 4.2L"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "12px 18px", "borderBottom": "1px solid var(--line)"}}>
                {" "}
                <div style={{"fontSize": "13px"}}>
                  {"Structural design"}
                </div>
                {" "}
                <span className="num" style={{"fontSize": "12.5px", "fontWeight": "600"}}>
                  {"PKR 3.6L"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "12px 18px"}}>
                {" "}
                <div style={{"fontSize": "13.5px", "fontWeight": "600"}}>
                  {"Total quote"}
                </div>
                {" "}
                <span className="num" style={{"fontSize": "13.5px", "fontWeight": "700"}}>
                  {"PKR 7.8L"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "order": "2"}}>
              {" "}
              <span className="tag" style={{"background": "var(--gold)", "color": "#fff", "marginBottom": "14px"}}>
                {"Quote Builder"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Line-item quotes, sent from the dashboard."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Build the quote against the request's own scope and send it directly — no separate document to draft, attach or chase down."}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 3: CREDIBILITY THAT COMPOUNDS */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0 8px", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--clay-bg)", "color": "var(--clay)", "marginBottom": "14px"}}>
                {"Credibility That Compounds"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"A visible track record, not a blank profile."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"On-time delivery and estimate accuracy build your score — completed projects raise your ranking for future requests."}
              </p>
              {" "}
              <A className="btn btn-navy" style={{"marginTop": "20px", "padding": "12px 22px"}} to="/login">
                {"Register Your Practice →"}
              </A>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "16px"}}>
                {" "}
                <div style={{"fontSize": "13.5px", "fontWeight": "600"}}>
                  {"Al-Fateh Architects"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"✓ 9.1 / 10"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Estimate accuracy"}
                </span>
                <span className="num" style={{"fontWeight": "600"}}>
                  {"±6%"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"On-time delivery"}
                </span>
                <span className="num" style={{"fontWeight": "600"}}>
                  {"94%"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Completed projects"}
                </span>
                <span className="num" style={{"fontWeight": "600"}}>
                  {"61"}
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
        {/* CTA BAND */}
        {" "}
        <div style={{"padding": "56px 64px", "background": "var(--navy-2)", "color": "#fff", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
          {" "}
          <div>
            {" "}
            <div className="eyebrow" style={{"color": "#8FBF9B", "marginBottom": "8px"}}>
              {"GET STARTED"}
            </div>
            {" "}
            <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "26px", "fontWeight": "600", "maxWidth": "480px"}}>
              {"Verification usually takes under 48 hours."}
            </div>
            {" "}
          </div>
          {" "}
          <A className="btn btn-gold" style={{"padding": "14px 28px"}} to="/login">
            {"Register Your Practice →"}
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
