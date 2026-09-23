// AUTO-GENERATED from design/boards/Customer-BuildProject.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Customer-BuildProject.css';
import { useGo } from '../lib/nav';

export const title = "Customer — My Build Project";

export default function CustomerBuildProjectScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-customer-buildproject">
      <div style={{"width": "1440px", "height": "1280px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex"}}>
        {" "}
        {/* SIDEBAR */}
        {" "}
        <div style={{"width": "250px", "flexShrink": "0", "background": "var(--navy)", "display": "flex", "flexDirection": "column", "padding": "26px 16px"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 8px 28px"}} data-nav="1" onClick={go("/customer")}>
            {" "}
            <div style={{"width": "54px", "height": "32px", "borderRadius": "9px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 500-600',serif", "fontWeight": "600", "color": "#10213A", "fontSize": "13px", "letterSpacing": "-.02em"}}>
              {"D90"}
            </div>
            {" "}
            <div style={{"color": "#fff", "fontFamily": "'Work Sans',sans-serif", "fontSize": "18px", "fontWeight": "700", "letterSpacing": "-.01em"}}>
              {"Dealer90.com"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/customer")}>
              {"🏠 My Properties"}
            </div>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/customer/offers")}>
              {"📨 My Offers"}
            </div>
            {" "}
            <div className="navitem active" data-nav="1" onClick={go("/customer/build-project")}>
              {"🏗️ My Build Project"}
              <span className="badge">
                {"3"}
              </span>
            </div>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/customer/resell")}>
              {"🔁 Resale Requests"}
            </div>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/customer")}>
              {"💳 Payments"}
            </div>
            {" "}
            <div className="navitem">
              {"👤 Profile"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"marginTop": "auto", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "14px 8px", "borderTop": "1px solid #2A3E5C"}}>
            {" "}
            <div style={{"width": "34px", "height": "34px", "borderRadius": "50%", "background": "var(--gold-light)"}}></div>
            {" "}
            <div>
              {" "}
              <div style={{"color": "#fff", "fontSize": "13px", "fontWeight": "600"}}>
                {"Usman Tariq"}
              </div>
              {" "}
              <div style={{"color": "#8A97AD", "fontSize": "11px"}}>
                {"0300-1234567"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* MAIN */}
        {" "}
        <div style={{"flex": "1", "display": "flex", "flexDirection": "column"}}>
          {" "}
          <div style={{"height": "80px", "background": "#fff", "borderBottom": "1px solid var(--line)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 40px", "flexShrink": "0"}}>
            {" "}
            <div>
              {" "}
              <h1 style={{"fontSize": "21px"}}>
                {"My Build Project"}
              </h1>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--muted)"}}>
                {"10 Marla Plot · DHA Phase 6, Lahore"}
              </div>
              {" "}
            </div>
            {" "}
            <button className="btn btn-line">
              {"Request a New Service"}
            </button>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "32px 40px 0", "flex": "1", "overflow": "hidden"}}>
            {" "}
            {/* SUMMARY */}
            {" "}
            <div style={{"display": "flex", "gap": "16px", "marginBottom": "28px"}}>
              {" "}
              <div className="card" style={{"flex": "1", "padding": "18px 20px"}}>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                  {"Services Requested"}
                </div>
                {" "}
                <div style={{"fontSize": "22px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif"}}>
                  {"3 of 4"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"flex": "1", "padding": "18px 20px"}}>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                  {"Quotes Received"}
                </div>
                {" "}
                <div style={{"fontSize": "22px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif"}}>
                  {"6"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"flex": "1", "padding": "18px 20px"}}>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                  {"Providers Selected"}
                </div>
                {" "}
                <div style={{"fontSize": "22px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif", "color": "var(--green)"}}>
                  {"1"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* STAGE CARDS */}
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "18px"}}>
              {" "}
              <div className="card" style={{"padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderTop": "3px solid var(--green)"}}>
                {" "}
                <div style={{"width": "36px", "height": "36px", "borderRadius": "10px", "background": "var(--navy)"}}></div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "14.5px"}}>
                  {"Blueprint & Design"}
                </div>
                {" "}
                <span className="stage-status" style={{"background": "var(--green-bg)", "color": "var(--green)", "width": "fit-content"}}>
                  {"Provider Selected"}
                </span>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--muted)"}}>
                  {"Al-Rasheed Architects — accepted Sep 18"}
                </div>
                {" "}
                <button className="btn btn-line" style={{"marginTop": "auto"}}>
                  {"View Details"}
                </button>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderTop": "3px solid var(--amber)"}}>
                {" "}
                <div style={{"width": "36px", "height": "36px", "borderRadius": "10px", "background": "#8A6D9C"}}></div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "14.5px"}}>
                  {"LDA / Approval"}
                </div>
                {" "}
                <span className="stage-status" style={{"background": "var(--amber-bg)", "color": "var(--amber)", "width": "fit-content"}}>
                  {"2 Quotes Received"}
                </span>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--muted)"}}>
                  {"Compare consultants before choosing"}
                </div>
                {" "}
                <button className="btn btn-gold" style={{"marginTop": "auto"}}>
                  {"Compare Quotes"}
                </button>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderTop": "3px solid var(--amber)"}}>
                {" "}
                <div style={{"width": "36px", "height": "36px", "borderRadius": "10px", "background": "#B9772E"}}></div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "14.5px"}}>
                  {"Construction"}
                </div>
                {" "}
                <span className="stage-status" style={{"background": "var(--amber-bg)", "color": "var(--amber)", "width": "fit-content"}}>
                  {"4 Quotes Received"}
                </span>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--muted)"}}>
                  {"Compare contractors before choosing"}
                </div>
                {" "}
                <button className="btn btn-gold" style={{"marginTop": "auto"}}>
                  {"Compare Quotes"}
                </button>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "22px", "display": "flex", "flexDirection": "column", "gap": "12px", "borderTop": "3px solid var(--line)"}}>
                {" "}
                <div style={{"width": "36px", "height": "36px", "borderRadius": "10px", "background": "#3F6B4F", "opacity": ".5"}}></div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "14.5px", "color": "var(--muted)"}}>
                  {"Interior Design"}
                </div>
                {" "}
                <span className="stage-status" style={{"background": "var(--ivory)", "color": "var(--muted)", "width": "fit-content"}}>
                  {"Not Requested"}
                </span>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--muted)"}}>
                  {"Usually requested once construction begins"}
                </div>
                {" "}
                <button className="btn btn-line" style={{"marginTop": "auto"}}>
                  {"Request This Service"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* COORDINATION NOTE */}
            {" "}
            <div style={{"marginTop": "28px"}}>
              {" "}
              <div className="card" style={{"padding": "18px 22px", "background": "var(--gold-light)", "borderColor": "var(--gold)", "display": "flex", "gap": "12px", "alignItems": "flex-start"}}>
                {" "}
                <div style={{"fontSize": "16px"}}>
                  {"ⓘ"}
                </div>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "#5B4A2A", "lineHeight": "1.6"}}>
                  {"These four services are independent engagements between you and each provider. Dealer90.com shows them together here so you have one place to track your project, but does not manage handoffs between stages — please confirm your approved blueprint before your contractor begins work."}
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
    </div>
  );
}
