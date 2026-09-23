// AUTO-GENERATED from design/boards/Advisor-LeadCapture.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Advisor-LeadCapture.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Where Should We Send Your Offers?";

export default function AdvisorLeadCaptureScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-advisor-leadcapture">
      <div style={{"width": "1440px", "height": "1080px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex", "flexDirection": "column"}}>
        {" "}
        {/* NAV */}
        {" "}
        <div style={{"height": "84px", "background": "var(--navy)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 56px", "flexShrink": "0"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}} data-nav="1" onClick={go("/")}>
            {" "}
            <div style={{"width": "65px", "height": "38px", "borderRadius": "9px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 400-600-700',serif", "fontWeight": "700", "color": "var(--navy)", "fontSize": "15px", "letterSpacing": "-.02em"}}>
              {"D90"}
            </div>
            {" "}
            <div style={{"color": "#fff", "fontFamily": "'Work Sans',sans-serif", "fontSize": "22px", "fontWeight": "700", "letterSpacing": "-.01em"}}>
              {"Dealer90.com"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"color": "#B9C3D6", "fontSize": "13px"}}>
            {"Property Advisor · Almost done"}
          </div>
          {" "}
        </div>
        {" "}
        {/* DIMMED WIZARD BACKDROP */}
        {" "}
        <div style={{"position": "relative", "flex": "1"}}>
          {" "}
          <div style={{"position": "absolute", "inset": "0", "background": "rgba(16,33,58,.06)"}}></div>
          {" "}
          <div style={{"position": "relative", "maxWidth": "520px", "margin": "64px auto 0", "padding": "0 24px"}}>
            {" "}
            {/* STEPPER */}
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "0", "marginBottom": "32px"}}>
              {" "}
              <div style={{"width": "26px", "height": "26px", "borderRadius": "50%", "background": "var(--green)", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px", "fontWeight": "700"}}>
                {"✓"}
              </div>
              {" "}
              <div style={{"width": "44px", "height": "2px", "background": "var(--green)"}}></div>
              {" "}
              <div style={{"width": "26px", "height": "26px", "borderRadius": "50%", "background": "var(--green)", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px", "fontWeight": "700"}}>
                {"✓"}
              </div>
              {" "}
              <div style={{"width": "44px", "height": "2px", "background": "var(--gold)"}}></div>
              {" "}
              <div style={{"width": "26px", "height": "26px", "borderRadius": "50%", "background": "var(--navy)", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "12px", "fontWeight": "700"}}>
                {"3"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "36px", "display": "flex", "flexDirection": "column", "gap": "22px", "boxShadow": "0 20px 50px rgba(16,33,58,.14)"}}>
              {" "}
              <div style={{"textAlign": "center"}}>
                {" "}
                <h1 style={{"fontSize": "24px", "color": "var(--navy)"}}>
                  {"Where should we send your offers?"}
                </h1>
                {" "}
                <div style={{"fontSize": "13px", "color": "var(--ink-soft)", "marginTop": "8px"}}>
                  {"Dealers respond directly to you. We just need a way to reach you."}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Full Name"}
                </label>
                {" "}
                <input className="field" placeholder="Usman Tariq" />
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Phone Number"}
                </label>
                {" "}
                <input className="field" placeholder="03XX XXXXXXX" style={{"borderColor": "var(--navy)"}} />
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "6px"}}>
                  {"This creates your Dealer90.com account — you'll use it to log in and track offers. No password needed right now."}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Email "}
                  <span style={{"fontWeight": "400", "color": "var(--ink-soft)"}}>
                    {"(optional)"}
                  </span>
                </label>
                {" "}
                <input className="field" placeholder="you@email.com" />
                {" "}
              </div>
              {" "}
              <label style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "12.5px", "color": "var(--ink-soft)", "lineHeight": "1.5", "cursor": "pointer"}}>
                {" "}
                <span style={{"width": "18px", "height": "18px", "borderRadius": "5px", "background": "var(--navy)", "flexShrink": "0", "marginTop": "1px", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "color": "#fff", "fontSize": "11px"}}>
                  {"✓"}
                </span>
                {" Send me offer updates by WhatsApp, SMS and email. I'm not agreeing to receive calls from dealers directly. "}
              </label>
              {" "}
              <button className="btn btn-gold" style={{"width": "100%", "padding": "15px"}} onClick={go("/advisor/submitted")}>
                {"Send My Request →"}
              </button>
              {" "}
              <A style={{"textAlign": "center", "fontSize": "13px", "color": "var(--ink-soft)"}} to="/advisor">
                {"← Back"}
              </A>
              {" "}
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
