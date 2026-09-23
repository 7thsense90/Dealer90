// AUTO-GENERATED from design/boards/Estimator-Services.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Estimator-Services.css';
import { useGo, A } from '../lib/nav';

export const title = "Build Cost Estimator — Step 2: Other Services";

export default function EstimatorServicesScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-estimator-services">
      <div style={{"width": "1440px", "height": "1260px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex", "flexDirection": "column"}}>
        {" "}
        {/* NAV */}
        {" "}
        <div style={{"height": "84px", "background": "var(--navy)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 56px", "flexShrink": "0"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}} data-nav="1" onClick={go("/")}>
            {" "}
            <div style={{"width": "61px", "height": "36px", "borderRadius": "10px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 500-600',serif", "fontWeight": "600", "color": "#10213A", "fontSize": "14px", "letterSpacing": "-.02em"}}>
              {"D90"}
            </div>
            {" "}
            <div style={{"color": "#fff", "fontFamily": "'Work Sans',sans-serif", "fontSize": "21px", "fontWeight": "700", "letterSpacing": "-.01em"}}>
              {"Dealer90.com"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"color": "#C9D2E0", "fontSize": "13px"}}>
            {"Build Cost Estimator"}
          </div>
          {" "}
        </div>
        {" "}
        {/* STEPPER */}
        {" "}
        <div style={{"padding": "32px 56px 0", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
          {" "}
          <div style={{"display": "flex", "gap": "8px"}}>
            {" "}
            <div className="step-dot" style={{"background": "var(--gold)"}}></div>
            {" "}
            <div className="step-dot active"></div>
            {" "}
            <div className="step-dot"></div>
            {" "}
            <div className="step-dot"></div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "36px", "fontSize": "13px"}}>
            {" "}
            <span style={{"color": "var(--muted)"}}>
              {"✓ Plot & Design"}
            </span>
            {" "}
            <span style={{"color": "var(--navy)", "fontWeight": "700"}}>
              {"Other Services"}
            </span>
            {" "}
            <span style={{"color": "var(--muted)"}}>
              {"Sign Up"}
            </span>
            {" "}
            <span style={{"color": "var(--muted)"}}>
              {"Your Estimate"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* SELECTION SUMMARY */}
        {" "}
        <div style={{"padding": "26px 56px 0"}}>
          {" "}
          <div className="card" style={{"padding": "14px 20px", "display": "flex", "gap": "10px", "alignItems": "center", "background": "#fff"}}>
            {" "}
            <span className="tag" style={{"background": "var(--ivory)", "color": "var(--ink)"}}>
              {"5 Marla"}
            </span>
            {" "}
            <span className="tag" style={{"background": "var(--gold-light)", "color": "#8A6A24"}}>
              {"Standard · Single-Storey Modern"}
            </span>
            {" "}
            <A style={{"marginLeft": "auto", "fontSize": "12px", "color": "var(--gold)", "fontWeight": "700"}} to="/estimator">
              {"Change →"}
            </A>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* HEADER */}
        {" "}
        <div style={{"padding": "30px 56px 0", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
          {" "}
          <h1 style={{"fontSize": "28px"}}>
            {"Anything else you need for this build?"}
          </h1>
          {" "}
          <div style={{"fontSize": "14px", "color": "var(--muted)", "maxWidth": "680px"}}>
            {"Select any that apply. Construction is included by default since you're estimating a build — deselect it if you only need the others."}
          </div>
          {" "}
        </div>
        {" "}
        {/* SERVICE CARDS */}
        {" "}
        <div style={{"padding": "24px 56px 0", "display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "18px"}}>
          {" "}
          <div className="svc-card selected">
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "10px", "background": "var(--navy)"}}></div>
              {" "}
              <div style={{"width": "22px", "height": "22px", "borderRadius": "6px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#fff", "fontSize": "13px"}}>
                {"✓"}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"fontWeight": "700", "fontSize": "15px"}}>
              {"Blueprint & Design"}
            </div>
            {" "}
            <div style={{"fontSize": "12.5px", "color": "var(--muted)", "lineHeight": "1.5"}}>
              {"Architect fee for this design."}
            </div>
            {" "}
          </div>
          {" "}
          <div className="svc-card selected">
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "10px", "background": "#8A6D9C"}}></div>
              {" "}
              <div style={{"width": "22px", "height": "22px", "borderRadius": "6px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#fff", "fontSize": "13px"}}>
                {"✓"}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"fontWeight": "700", "fontSize": "15px"}}>
              {"LDA / Approval"}
            </div>
            {" "}
            <div style={{"fontSize": "12.5px", "color": "var(--muted)", "lineHeight": "1.5"}}>
              {"Facilitation fee estimate. Outcome not guaranteed."}
            </div>
            {" "}
          </div>
          {" "}
          <div className="svc-card selected">
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "10px", "background": "#B9772E"}}></div>
              {" "}
              <div style={{"width": "22px", "height": "22px", "borderRadius": "6px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#fff", "fontSize": "13px"}}>
                {"✓"}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"fontWeight": "700", "fontSize": "15px"}}>
              {"Construction"}
            </div>
            {" "}
            <div style={{"fontSize": "12.5px", "color": "var(--muted)", "lineHeight": "1.5"}}>
              {"Material + labour for grey structure and finishing."}
            </div>
            {" "}
          </div>
          {" "}
          <div className="svc-card">
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "10px", "background": "#3F6B4F"}}></div>
              {" "}
              <div style={{"width": "22px", "height": "22px", "borderRadius": "6px", "border": "1.5px solid var(--line)"}}></div>
              {" "}
            </div>
            {" "}
            <div style={{"fontWeight": "700", "fontSize": "15px"}}>
              {"Interior Design"}
            </div>
            {" "}
            <div style={{"fontSize": "12.5px", "color": "var(--muted)", "lineHeight": "1.5"}}>
              {"Fixtures, fittings & fit-out."}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* ACTIONS */}
        {" "}
        <div style={{"padding": "34px 56px 0", "display": "flex", "justifyContent": "space-between"}}>
          {" "}
          <button className="btn btn-line" onClick={go("/estimator")}>
            {"← Back"}
          </button>
          {" "}
          <button className="btn btn-gold" onClick={go("/estimator/signup")}>
            {"See My Estimate →"}
          </button>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
