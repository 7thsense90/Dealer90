// AUTO-GENERATED from design/boards/Estimator-Results.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Estimator-Results.css';
import { useGo } from '../lib/nav';

export const title = "Build Cost Estimator — Your Estimate";

export default function EstimatorResultsScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-estimator-results">
      <div style={{"width": "1440px", "height": "1560px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex", "flexDirection": "column"}}>
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
        {/* HEADLINE ESTIMATE */}
        {" "}
        <div style={{"padding": "52px 56px 0", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "14px"}}>
          {" "}
          <span className="tag" style={{"background": "var(--gold-light)", "color": "#8A6A24"}}>
            {"5 Marla · Standard Design · Lahore"}
          </span>
          {" "}
          <div style={{"fontSize": "14px", "color": "var(--muted)"}}>
            {"Estimated total cost for the services you selected"}
          </div>
          {" "}
          <div style={{"fontFamily": "'D90 Fraunces 500-600',serif", "fontSize": "52px", "fontWeight": "600", "color": "var(--navy)"}}>
            {"PKR 42 Lac – 58 Lac"}
          </div>
          {" "}
          <div style={{"fontSize": "12.5px", "color": "var(--muted)", "maxWidth": "600px", "lineHeight": "1.6"}}>
            {"This is an AI-generated estimate based on current market material & labour rates in your area. It is "}
            <strong>
              {"not a quote"}
            </strong>
            {" and is not guaranteed by Dealer90.com or any provider — actual pricing depends on site conditions, finishes and the provider you choose."}
          </div>
          {" "}
        </div>
        {" "}
        {/* BREAKDOWN */}
        {" "}
        <div style={{"padding": "40px 56px 0"}}>
          {" "}
          <div className="card" style={{"padding": "28px 32px"}}>
            {" "}
            <div style={{"fontWeight": "700", "fontSize": "15px", "marginBottom": "6px"}}>
              {"Estimated Breakdown"}
            </div>
            {" "}
            <div className="row">
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
                <div style={{"width": "28px", "height": "28px", "borderRadius": "8px", "background": "#B9772E"}}></div>
                <span style={{"fontSize": "13.5px"}}>
                  {"Construction (grey structure + finishing)"}
                </span>
              </div>
              {" "}
              <span style={{"fontWeight": "700", "fontSize": "14px"}}>
                {"PKR 32L – 44L"}
              </span>
              {" "}
            </div>
            {" "}
            <div className="row">
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
                <div style={{"width": "28px", "height": "28px", "borderRadius": "8px", "background": "var(--navy)"}}></div>
                <span style={{"fontSize": "13.5px"}}>
                  {"Blueprint & Design"}
                </span>
              </div>
              {" "}
              <span style={{"fontWeight": "700", "fontSize": "14px"}}>
                {"PKR 2.5L – 3.5L"}
              </span>
              {" "}
            </div>
            {" "}
            <div className="row" style={{"borderBottom": "none"}}>
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
                <div style={{"width": "28px", "height": "28px", "borderRadius": "8px", "background": "#8A6D9C"}}></div>
                <span style={{"fontSize": "13.5px"}}>
                  {"LDA / Approval Facilitation"}
                </span>
              </div>
              {" "}
              <span style={{"fontWeight": "700", "fontSize": "14px"}}>
                {"PKR 1.2L – 2L"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"marginTop": "14px", "paddingTop": "14px", "borderTop": "2px solid var(--ink)", "display": "flex", "justifyContent": "space-between"}}>
              {" "}
              <span style={{"fontWeight": "700", "fontSize": "14px"}}>
                {"Estimated Total"}
              </span>
              {" "}
              <span style={{"fontWeight": "700", "fontSize": "16px", "color": "var(--navy)"}}>
                {"PKR 42L – 58L"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* SOURCE NOTE */}
        {" "}
        <div style={{"padding": "20px 56px 0"}}>
          {" "}
          <div className="card" style={{"padding": "16px 22px", "background": "var(--gold-light)", "borderColor": "var(--gold)", "display": "flex", "gap": "12px", "alignItems": "flex-start"}}>
            {" "}
            <div style={{"fontSize": "16px"}}>
              {"ⓘ"}
            </div>
            {" "}
            <div style={{"fontSize": "12px", "color": "#5B4A2A", "lineHeight": "1.6"}}>
              {"Built from current material and labour rates researched for Lahore. Ranges widen for larger plots or premium finishes, since actual pricing depends on the provider and specifics of your project."}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* CTA */}
        {" "}
        <div style={{"padding": "36px 56px 0"}}>
          {" "}
          <div className="card" style={{"background": "linear-gradient(135deg,var(--navy),var(--navy-2))", "border": "none", "padding": "32px 36px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "32px", "color": "#fff"}}>
            {" "}
            <div>
              {" "}
              <div style={{"fontSize": "11px", "fontWeight": "700", "letterSpacing": ".06em", "textTransform": "uppercase", "color": "#E7C77E", "marginBottom": "8px"}}>
                {"Next Step"}
              </div>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 500-600',serif", "fontSize": "22px", "fontWeight": "600"}}>
                {"Want a real number? Get actual quotes from verified providers."}
              </div>
              {" "}
              <div style={{"fontSize": "13px", "color": "#B9C3D6", "marginTop": "6px"}}>
                {"We'll send your selections to verified architects, consultants and contractors in your area — no commitment."}
              </div>
              {" "}
            </div>
            {" "}
            <button className="btn btn-gold" style={{"whiteSpace": "nowrap", "padding": "16px 28px"}} onClick={go("/build-advisor/services")}>
              {"Request Actual Quotes →"}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{"padding": "20px 56px 0", "display": "flex", "gap": "14px", "justifyContent": "center"}}>
          {" "}
          <button className="btn btn-line">
            {"Save This Estimate"}
          </button>
          {" "}
          <button className="btn btn-line">
            {"Download as PDF"}
          </button>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
