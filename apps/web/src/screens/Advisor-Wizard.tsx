// AUTO-GENERATED from design/boards/Advisor-Wizard.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Advisor-Wizard.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Property Advisor";

export default function AdvisorWizardScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-advisor-wizard">
      <div style={{"width": "1440px", "height": "1200px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex", "flexDirection": "column"}}>
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
            {"Property Advisor"}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{"maxWidth": "920px", "margin": "0 auto", "width": "100%", "padding": "52px 24px 0", "display": "flex", "flexDirection": "column", "gap": "34px"}}>
          {" "}
          <div style={{"textAlign": "center"}}>
            {" "}
            <div style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "var(--gold)", "marginBottom": "10px"}}>
              {"Property Advisor"}
            </div>
            {" "}
            <h1 style={{"fontSize": "32px", "color": "var(--navy)"}}>
              {"A few questions to match you with the right opportunities"}
            </h1>
            {" "}
            <div style={{"fontSize": "14px", "color": "var(--ink-soft)", "marginTop": "8px"}}>
              {"Takes about a minute. Your answers are only used to filter and rank listings — never shared without your consent."}
            </div>
            {" "}
          </div>
          {" "}
          {/* STEPPER */}
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "justifyContent": "center", "gap": "0"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
              {" "}
              <div style={{"width": "30px", "height": "30px", "borderRadius": "50%", "background": "var(--green)", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "700"}}>
                {"✓"}
              </div>
              {" "}
              <div style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--ink)"}}>
                {"Capital Profile"}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"width": "80px", "height": "2px", "background": "var(--green)", "margin": "0 14px"}}></div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
              {" "}
              <div style={{"width": "30px", "height": "30px", "borderRadius": "50%", "background": "var(--navy)", "color": "#fff", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "700"}}>
                {"2"}
              </div>
              {" "}
              <div style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)"}}>
                {"Horizon & Risk"}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"width": "80px", "height": "2px", "background": "var(--line)", "margin": "0 14px"}}></div>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
              {" "}
              <div style={{"width": "30px", "height": "30px", "borderRadius": "50%", "background": "#fff", "border": "1.5px solid var(--line)", "color": "var(--ink-soft)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "700"}}>
                {"3"}
              </div>
              {" "}
              <div style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--ink-soft)"}}>
                {"Dealer Offers"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* STEP 2 FORM */}
          {" "}
          <div className="card" style={{"padding": "36px", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
            {" "}
            <div>
              {" "}
              <label>
                {"Investment Horizon"}
              </label>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "12px"}}>
                {" "}
                <div className="optcard">
                  <div className="t">
                    {"Short-Term"}
                  </div>
                  <div className="d">
                    {"Flip within 12–18 months"}
                  </div>
                </div>
                {" "}
                <div className="optcard active">
                  <div className="t">
                    {"Medium-Term"}
                  </div>
                  <div className="d">
                    {"Capital appreciation, 2–3 years"}
                  </div>
                </div>
                {" "}
                <div className="optcard">
                  <div className="t">
                    {"Long-Term"}
                  </div>
                  <div className="d">
                    {"Wealth building or construction, 5+ years"}
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "20px"}}>
              {" "}
              <div>
                {" "}
                <label>
                  {"City Preference"}
                </label>
                {" "}
                <select style={{"width": "100%", "boxSizing": "border-box", "border": "1px solid var(--line)", "borderRadius": "8px", "padding": "12px 14px", "fontSize": "14px", "background": "#fff"}}>
                  <option>
                    {"Lahore"}
                  </option>
                  <option>
                    {"Islamabad / Rawalpindi"}
                  </option>
                  <option>
                    {"Karachi"}
                  </option>
                  <option>
                    {"Recommend highest-growth corridor for me"}
                  </option>
                </select>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Primary Motivation"}
                </label>
                {" "}
                <select style={{"width": "100%", "boxSizing": "border-box", "border": "1px solid var(--line)", "borderRadius": "8px", "padding": "12px 14px", "fontSize": "14px", "background": "#fff"}}>
                  <option>
                    {"Maximum capital growth"}
                  </option>
                  <option>
                    {"Rental yield / income"}
                  </option>
                  <option>
                    {"Safe haven / inflation hedge"}
                  </option>
                </select>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Risk Appetite"}
              </label>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "12px"}}>
                {" "}
                <div className="optcard active">
                  <div className="t">
                    {"Conservative"}
                  </div>
                  <div className="d">
                    {"Approved schemes with near-possession, established areas"}
                  </div>
                </div>
                {" "}
                <div className="optcard">
                  <div className="t">
                    {"Balanced"}
                  </div>
                  <div className="d">
                    {"Emerging corridors backed by established dealers"}
                  </div>
                </div>
                {" "}
                <div className="optcard">
                  <div className="t">
                    {"Aggressive"}
                  </div>
                  <div className="d">
                    {"Early-stage or developmental files, higher upside & risk"}
                  </div>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "justifyContent": "space-between", "paddingBottom": "56px"}}>
            {" "}
            <button className="btn btn-outline" onClick={go("/")}>
              {"← Back"}
            </button>
            {" "}
            <button className="btn btn-gold" onClick={go("/advisor/send-offers")}>
              {"Submit My Request to Dealers →"}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
