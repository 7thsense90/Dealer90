// AUTO-GENERATED from design/boards/BuildAdvisor-Services.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './BuildAdvisor-Services.css';
import { useGo } from '../lib/nav';

export const title = "Build Advisor — Step 3: Services You Need";

export default function BuildAdvisorServicesScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-buildadvisor-services">
      <div style={{"width": "1440px", "height": "1480px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex", "flexDirection": "column"}}>
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
            {"Build a Home — Guided Request"}
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
            <div className="step-dot" style={{"background": "var(--gold)"}}></div>
            {" "}
            <div className="step-dot active"></div>
            {" "}
            <div className="step-dot"></div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "36px", "fontSize": "13px"}}>
            {" "}
            <span style={{"color": "var(--muted)"}}>
              {"✓ Plot & Location"}
            </span>
            {" "}
            <span style={{"color": "var(--muted)"}}>
              {"✓ What You're Building"}
            </span>
            {" "}
            <span style={{"color": "var(--navy)", "fontWeight": "700"}}>
              {"Services & Budget"}
            </span>
            {" "}
            <span style={{"color": "var(--muted)"}}>
              {"Send Request"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* HEADER */}
        {" "}
        <div style={{"padding": "36px 56px 0", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
          {" "}
          <h1 style={{"fontSize": "32px"}}>
            {"Which services do you need right now?"}
          </h1>
          {" "}
          <div style={{"fontSize": "15px", "color": "var(--muted)", "maxWidth": "680px"}}>
            {"Select any that apply — you don't need all four. If you already have an approved blueprint, for example, just request a contractor. Each selected category is sent to verified providers in your area, and you'll receive independent quotes from each."}
          </div>
          {" "}
        </div>
        {" "}
        {/* SERVICE CARDS */}
        {" "}
        <div style={{"padding": "28px 56px 0", "display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "18px"}}>
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
              {"Licensed architects & structural engineers prepare your house plan."}
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
              {"LDA / Approval Facilitation"}
            </div>
            {" "}
            <div style={{"fontSize": "12.5px", "color": "var(--muted)", "lineHeight": "1.5"}}>
              {"Licensed consultants file & track your development-authority approval. Dealer90.com does not guarantee approval outcomes or timelines."}
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
              {"Verified contractors quote against your plan and deliver the build."}
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
              {"Finishing, fixtures & interior fit-out once construction is underway."}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* BUDGET */}
        {" "}
        <div style={{"padding": "40px 56px 0", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
          {" "}
          <div style={{"fontWeight": "700", "fontSize": "15px"}}>
            {"Total Budget Range (across selected services)"}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "12px", "flexWrap": "wrap"}}>
            {" "}
            <div className="chip">
              {"Under PKR 50 Lakh"}
            </div>
            {" "}
            <div className="chip selected">
              {"PKR 50 Lakh – 1.5 Cr"}
            </div>
            {" "}
            <div className="chip">
              {"PKR 1.5 Cr – 3 Cr"}
            </div>
            {" "}
            <div className="chip">
              {"PKR 3 Cr+"}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* TIMELINE */}
        {" "}
        <div style={{"padding": "26px 56px 0", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
          {" "}
          <div style={{"fontWeight": "700", "fontSize": "15px"}}>
            {"When do you want to start?"}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "12px", "flexWrap": "wrap"}}>
            {" "}
            <div className="chip">
              {"Immediately"}
            </div>
            {" "}
            <div className="chip selected">
              {"Within 3 Months"}
            </div>
            {" "}
            <div className="chip">
              {"3–6 Months"}
            </div>
            {" "}
            <div className="chip">
              {"Just Exploring"}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* DISCLAIMER */}
        {" "}
        <div style={{"padding": "30px 56px 0"}}>
          {" "}
          <div className="card" style={{"padding": "18px 22px", "background": "var(--gold-light)", "borderColor": "var(--gold)", "display": "flex", "gap": "12px", "alignItems": "flex-start"}}>
            {" "}
            <div style={{"fontSize": "16px"}}>
              {"ⓘ"}
            </div>
            {" "}
            <div style={{"fontSize": "12.5px", "color": "#5B4A2A", "lineHeight": "1.6"}}>
              {"Dealer90.com connects you with independently verified service providers and does not itself prepare estimates, guarantee project outcomes, or facilitate government approvals. Every quote you receive is attributed to the provider who issued it."}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* ACTIONS */}
        {" "}
        <div style={{"padding": "32px 56px 0", "display": "flex", "justifyContent": "space-between"}}>
          {" "}
          <button className="btn btn-line" onClick={go("/estimator/results")}>
            {"← Back"}
          </button>
          {" "}
          <button className="btn btn-gold" onClick={go("/build-advisor/confirmation")}>
            {"Continue to Send Request →"}
          </button>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
