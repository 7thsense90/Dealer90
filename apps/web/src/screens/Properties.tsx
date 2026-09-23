// AUTO-GENERATED from design/boards/Properties.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Properties.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Browse Properties";

export default function PropertiesScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-properties">
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
            <A style={{"color": "var(--navy)", "fontWeight": "700"}} to="/properties">
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
        {/* PAGE HEADER */}
        {" "}
        <div style={{"padding": "48px 64px 32px", "background": "var(--paper-2)", "borderBottom": "1px solid var(--line)"}}>
          {" "}
          <div className="eyebrow" style={{"marginBottom": "12px"}}>
            {"ALL LISTED PROPERTIES"}
          </div>
          {" "}
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-end"}}>
            {" "}
            <h1 style={{"fontSize": "36px", "fontWeight": "600", "color": "var(--navy)", "maxWidth": "640px"}}>
              {"Browse dealer-listed properties across Pakistan."}
            </h1>
            {" "}
            <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
              {"Not sure what to look for? "}
              <A style={{"color": "var(--navy)", "fontWeight": "600", "textDecoration": "underline"}} to="/advisor">
                {"Try the Property Advisor →"}
              </A>
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* FILTER BAR */}
        {" "}
        <div style={{"padding": "22px 64px", "background": "#fff", "borderBottom": "1px solid var(--line)", "display": "flex", "gap": "12px", "alignItems": "center", "flexWrap": "wrap"}}>
          {" "}
          <div className="chip chip-active">
            {"All Cities"}
          </div>
          {" "}
          <div className="chip">
            {"Lahore"}
          </div>
          {" "}
          <div className="chip">
            {"Karachi"}
          </div>
          {" "}
          <div className="chip">
            {"Islamabad"}
          </div>
          {" "}
          <div style={{"width": "1px", "height": "22px", "background": "var(--line)", "margin": "0 4px"}}></div>
          {" "}
          <div className="chip">
            {"8–10% ROI"}
          </div>
          {" "}
          <div className="chip">
            {"10–15% ROI"}
          </div>
          {" "}
          <div className="chip">
            {"15%+ ROI"}
          </div>
          {" "}
          <div style={{"width": "1px", "height": "22px", "background": "var(--line)", "margin": "0 4px"}}></div>
          {" "}
          <div className="chip">
            {"Ready to Move"}
          </div>
          {" "}
          <div className="chip">
            {"Under Construction"}
          </div>
          {" "}
          <div style={{"flex": "1"}}></div>
          {" "}
          <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
            {"Sort: "}
            <span style={{"color": "var(--ink)", "fontWeight": "600"}}>
              {"ROI (High to Low)"}
            </span>
            {" ▾"}
          </div>
          {" "}
        </div>
        {" "}
        {/* RESULTS COUNT */}
        {" "}
        <div style={{"padding": "24px 64px 0", "fontSize": "13.5px", "color": "var(--ink-soft)"}}>
          {"Showing "}
          <span style={{"color": "var(--ink)", "fontWeight": "600"}}>
            {"312"}
          </span>
          {" listings from "}
          <span style={{"color": "var(--ink)", "fontWeight": "600"}}>
            {"86"}
          </span>
          {" verified dealers"}
        </div>
        {" "}
        {/* LISTING GRID */}
        {" "}
        <div style={{"padding": "20px 64px 64px", "display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "24px"}}>
          {" "}
          {/* CARD 1 */}
          {" "}
          <div className="card" style={{"overflow": "hidden"}}>
            {" "}
            <div style={{"height": "172px", "background": "linear-gradient(135deg,#2C4463,#10213A)", "position": "relative"}}>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "left": "12px", "background": "var(--gold)", "color": "#fff"}}>
                {"12.4% ROI"}
              </span>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "right": "12px", "background": "rgba(255,255,255,.92)", "color": "var(--navy)"}}>
                {"Ready"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"padding": "18px"}}>
              {" "}
              <div style={{"fontSize": "15px", "fontWeight": "600"}}>
                {"5 Marla Corner Villa"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                {"DHA Phase 6, Lahore"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "14px", "paddingTop": "14px", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"PKR 2.85 Cr"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                  {"36 mo. plan"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "12px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"✓ Al-Noor Builders · 8.7/10"}
                </span>
                {" "}
              </div>
              {" "}
              <A className="btn btn-navy" style={{"width": "100%", "marginTop": "14px"}} to="/customer/offers">
                {"See Offer →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* CARD 2 */}
          {" "}
          <div className="card" style={{"overflow": "hidden"}}>
            {" "}
            <div style={{"height": "172px", "background": "linear-gradient(135deg,#9C5B3C,#6B3F29)", "position": "relative"}}>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "left": "12px", "background": "var(--clay)", "color": "#fff"}}>
                {"9.1% ROI"}
              </span>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "right": "12px", "background": "rgba(255,255,255,.92)", "color": "var(--navy)"}}>
                {"Under Construction"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"padding": "18px"}}>
              {" "}
              <div style={{"fontSize": "15px", "fontWeight": "600"}}>
                {"10 Marla Plot + Grey Structure"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                {"Bahria Town, Karachi"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "14px", "paddingTop": "14px", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"PKR 4.1 Cr"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                  {"48 mo. plan"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "12px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"✓ Sadaqat Estates · 9.2/10"}
                </span>
                {" "}
              </div>
              {" "}
              <A className="btn btn-navy" style={{"width": "100%", "marginTop": "14px"}} to="/customer/offers">
                {"See Offer →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* CARD 3 */}
          {" "}
          <div className="card" style={{"overflow": "hidden"}}>
            {" "}
            <div style={{"height": "172px", "background": "linear-gradient(135deg,#3F5B47,#22331F)", "position": "relative"}}>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "left": "12px", "background": "var(--moss)", "color": "#fff"}}>
                {"15.6% ROI"}
              </span>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "right": "12px", "background": "rgba(255,255,255,.92)", "color": "var(--navy)"}}>
                {"Ready"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"padding": "18px"}}>
              {" "}
              <div style={{"fontSize": "15px", "fontWeight": "600"}}>
                {"1 Kanal Residential Plot"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                {"Gulberg Greens, Islamabad"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "14px", "paddingTop": "14px", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"PKR 6.4 Cr"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                  {"24 mo. plan"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "12px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"✓ Capital Frontier · 8.1/10"}
                </span>
                {" "}
              </div>
              {" "}
              <A className="btn btn-navy" style={{"width": "100%", "marginTop": "14px"}} to="/customer/offers">
                {"See Offer →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* CARD 4 */}
          {" "}
          <div className="card" style={{"overflow": "hidden"}}>
            {" "}
            <div style={{"height": "172px", "background": "linear-gradient(135deg,#5B4A2C,#3A2E17)", "position": "relative"}}>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "left": "12px", "background": "var(--gold)", "color": "#fff"}}>
                {"10.8% ROI"}
              </span>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "right": "12px", "background": "rgba(255,255,255,.92)", "color": "var(--navy)"}}>
                {"Ready"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"padding": "18px"}}>
              {" "}
              <div style={{"fontSize": "15px", "fontWeight": "600"}}>
                {"3 Marla Row House"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                {"Johar Town, Lahore"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "14px", "paddingTop": "14px", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"PKR 1.65 Cr"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                  {"30 mo. plan"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "12px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"✓ Green Homes Co. · 8.9/10"}
                </span>
                {" "}
              </div>
              {" "}
              <A className="btn btn-navy" style={{"width": "100%", "marginTop": "14px"}} to="/customer/offers">
                {"See Offer →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* CARD 5 */}
          {" "}
          <div className="card" style={{"overflow": "hidden"}}>
            {" "}
            <div style={{"height": "172px", "background": "linear-gradient(135deg,#2C4463,#16294A)", "position": "relative"}}>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "left": "12px", "background": "var(--gold)", "color": "#fff"}}>
                {"13.2% ROI"}
              </span>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "right": "12px", "background": "rgba(255,255,255,.92)", "color": "var(--navy)"}}>
                {"Under Construction"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"padding": "18px"}}>
              {" "}
              <div style={{"fontSize": "15px", "fontWeight": "600"}}>
                {"8 Marla Duplex"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                {"DHA Phase 2, Islamabad"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "14px", "paddingTop": "14px", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"PKR 3.3 Cr"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                  {"42 mo. plan"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "12px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"✓ Al-Noor Builders · 8.7/10"}
                </span>
                {" "}
              </div>
              {" "}
              <A className="btn btn-navy" style={{"width": "100%", "marginTop": "14px"}} to="/customer/offers">
                {"See Offer →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* CARD 6 */}
          {" "}
          <div className="card" style={{"overflow": "hidden"}}>
            {" "}
            <div style={{"height": "172px", "background": "linear-gradient(135deg,#9C5B3C,#4A2C1D)", "position": "relative"}}>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "left": "12px", "background": "var(--clay)", "color": "#fff"}}>
                {"8.4% ROI"}
              </span>
              {" "}
              <span className="tag" style={{"position": "absolute", "top": "12px", "right": "12px", "background": "rgba(255,255,255,.92)", "color": "var(--navy)"}}>
                {"Ready"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"padding": "18px"}}>
              {" "}
              <div style={{"fontSize": "15px", "fontWeight": "600"}}>
                {"1 Kanal Farmhouse Plot"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                {"Raiwind Road, Lahore"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "14px", "paddingTop": "14px", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <div className="num" style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "color": "var(--navy)"}}>
                  {"PKR 5.2 Cr"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                  {"36 mo. plan"}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginTop": "12px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"✓ Sadaqat Estates · 9.2/10"}
                </span>
                {" "}
              </div>
              {" "}
              <A className="btn btn-navy" style={{"width": "100%", "marginTop": "14px"}} to="/customer/offers">
                {"See Offer →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* LOAD MORE */}
        {" "}
        <div style={{"display": "flex", "justifyContent": "center", "paddingBottom": "64px"}}>
          {" "}
          <A className="btn btn-outline" style={{"padding": "13px 32px"}}>
            {"Load More Listings"}
          </A>
          {" "}
        </div>
        {" "}
        {/* WHAT HAPPENS NEXT: ONE BY ONE */}
        {" "}
        <div style={{"padding": "16px 64px 72px", "background": "var(--paper-2)", "borderTop": "1px solid var(--line)"}}>
          {" "}
          <div style={{"maxWidth": "560px", "marginBottom": "48px"}}>
            {" "}
            <div className="eyebrow" style={{"marginBottom": "12px"}}>
              {"AFTER YOU CLICK \"SEE OFFER\""}
            </div>
            {" "}
            <h2 style={{"fontSize": "28px", "fontWeight": "600", "color": "var(--navy)"}}>
              {"What actually happens, one screen at a time."}
            </h2>
            {" "}
          </div>
          {" "}
          {/* ROW 1: DEALER SENDS A STRUCTURED OFFER */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--gold)", "color": "#fff", "marginBottom": "14px"}}>
                {"Step 1 · Dealer Sends an Offer"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"A structured offer, not a sales pitch."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Price, down payment and plan length arrive as one clear card — nothing you have to chase over a phone call."}
              </p>
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
              <button className="btn btn-gold" style={{"width": "100%", "marginTop": "16px"}} onClick={go("/customer/offers")}>
                {"Compare & Accept →"}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 2: COMPARE SIDE BY SIDE (mockup left) */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "0", "overflow": "hidden", "order": "1"}}>
              {" "}
              <div style={{"padding": "14px 18px", "borderBottom": "1px solid var(--line)", "fontSize": "12.5px", "fontWeight": "600"}}>
                {"My Offers — 5 Marla Corner Villa"}
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
                  {"Green Homes Co."}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"15% down · 42 mo."}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"8.9/10"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "order": "2"}}>
              {" "}
              <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)", "marginBottom": "14px"}}>
                {"Step 2 · Compare Side by Side"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Every offer for a property lands in one place."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"If more than one dealer offers on the same listing, you weigh them against each other — price, down payment, plan length and credibility score, side by side."}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 3: TRACK YOUR INSTALLMENT PLAN */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0 8px", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--clay-bg)", "color": "var(--clay)", "marginBottom": "14px"}}>
                {"Step 3 · Track Your Plan"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Once you accept, the schedule is tracked live."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Every installment shows as paid, pending, or overdue — with a statement you can download whenever you need one."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px"}}>
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
                <span className="tag" style={{"background": "#F6EADA", "color": "#B9772E", "padding": "2px 9px"}}>
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
          </div>
          {" "}
        </div>
        {" "}
        {/* CTA BAND */}
        {" "}
        <div style={{"padding": "52px 64px", "background": "var(--navy)", "color": "#fff", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
          {" "}
          <div>
            {" "}
            <div className="eyebrow" style={{"color": "var(--gold-light)", "marginBottom": "8px"}}>
              {"TOO MANY OPTIONS?"}
            </div>
            {" "}
            <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "24px", "fontWeight": "600", "maxWidth": "480px"}}>
              {"Skip the scrolling — tell the Property Advisor your target ROI and horizon."}
            </div>
            {" "}
          </div>
          {" "}
          <A className="btn btn-gold" style={{"padding": "14px 26px"}} to="/advisor">
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
