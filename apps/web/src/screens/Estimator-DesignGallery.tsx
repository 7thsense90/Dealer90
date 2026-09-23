// AUTO-GENERATED from design/boards/Estimator-DesignGallery.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Estimator-DesignGallery.css';
import { useGo } from '../lib/nav';

export const title = "Build Cost Estimator — Step 1: Plot Size & Design";

export default function EstimatorDesignGalleryScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-estimator-designgallery">
      <div style={{"width": "1440px", "height": "1680px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex", "flexDirection": "column"}}>
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
            <div className="step-dot active"></div>
            {" "}
            <div className="step-dot"></div>
            {" "}
            <div className="step-dot"></div>
            {" "}
            <div className="step-dot"></div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "36px", "fontSize": "13px"}}>
            {" "}
            <span style={{"color": "var(--navy)", "fontWeight": "700"}}>
              {"Plot & Design"}
            </span>
            {" "}
            <span style={{"color": "var(--muted)"}}>
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
        {/* HEADER */}
        {" "}
        <div style={{"padding": "32px 56px 0", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
          {" "}
          <h1 style={{"fontSize": "30px"}}>
            {"Let's estimate what your build could cost."}
          </h1>
          {" "}
          <div style={{"fontSize": "14.5px", "color": "var(--muted)", "maxWidth": "680px"}}>
            {"Tell us your plot size and pick a design that's close to what you have in mind. Takes about a minute — you'll get a free ballpark estimate at the end."}
          </div>
          {" "}
        </div>
        {" "}
        {/* PLOT SIZE */}
        {" "}
        <div style={{"padding": "26px 56px 0", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
          {" "}
          <div style={{"fontWeight": "700", "fontSize": "14px"}}>
            {"Plot Size"}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap"}}>
            {" "}
            <div className="chip">
              {"3 Marla"}
            </div>
            {" "}
            <div className="chip selected">
              {"5 Marla"}
            </div>
            {" "}
            <div className="chip">
              {"7 Marla"}
            </div>
            {" "}
            <div className="chip">
              {"10 Marla"}
            </div>
            {" "}
            <div className="chip">
              {"1 Kanal"}
            </div>
            {" "}
            <div className="chip">
              {"2 Kanal"}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* DESIGN GALLERY */}
        {" "}
        <div style={{"padding": "28px 56px 0"}}>
          {" "}
          <div style={{"fontWeight": "700", "fontSize": "14px", "marginBottom": "14px"}}>
            {"Pick a Design Style"}
          </div>
          {" "}
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(5,1fr)", "gap": "14px"}}>
            {" "}
            <div className="design-card">
              {" "}
              <div style={{"height": "110px", "background": "linear-gradient(135deg,#D9CFB8,#B9A87E)"}}></div>
              {" "}
              <div style={{"padding": "14px", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--ivory)", "color": "var(--ink)", "alignSelf": "flex-start"}}>
                  {"Basic"}
                </span>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px"}}>
                  {"Single-Storey, Functional"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--muted)"}}>
                  {"2 Bed · 1 Bath"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="design-card selected">
              {" "}
              <div style={{"height": "110px", "background": "linear-gradient(135deg,#CBD6D2,#8FA69C)"}}></div>
              {" "}
              <div style={{"padding": "14px", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--gold-light)", "color": "#8A6A24", "alignSelf": "flex-start"}}>
                  {"Standard"}
                </span>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px"}}>
                  {"Single-Storey, Modern Finish"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--muted)"}}>
                  {"3 Bed · 2 Bath"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="design-card">
              {" "}
              <div style={{"height": "110px", "background": "linear-gradient(135deg,#C7D2FE,#818CF8)"}}></div>
              {" "}
              <div style={{"padding": "14px", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--ivory)", "color": "var(--ink)", "alignSelf": "flex-start"}}>
                  {"Modern"}
                </span>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px"}}>
                  {"Double-Storey, Open Plan"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--muted)"}}>
                  {"4 Bed · 3 Bath"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="design-card">
              {" "}
              <div style={{"height": "110px", "background": "linear-gradient(135deg,#E3CFC2,#CBAE9B)"}}></div>
              {" "}
              <div style={{"padding": "14px", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
                {" "}
                <span className="tag" style={{"background": "var(--ivory)", "color": "var(--ink)", "alignSelf": "flex-start"}}>
                  {"Premium"}
                </span>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px"}}>
                  {"Double-Storey, Designer Finish"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--muted)"}}>
                  {"4 Bed · 4 Bath"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="design-card">
              {" "}
              <div style={{"height": "110px", "background": "linear-gradient(135deg,#0F172A,#334155)"}}></div>
              {" "}
              <div style={{"padding": "14px", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
                {" "}
                <span className="tag" style={{"background": "#EDE9FE", "color": "#5B21B6", "alignSelf": "flex-start"}}>
                  {"Ultra-Modern"}
                </span>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px"}}>
                  {"Double-Storey, Smart Home"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--muted)"}}>
                  {"5 Bed · 6 Bath"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"marginTop": "14px", "fontSize": "12px", "color": "var(--muted)"}}>
            {"Designs shown are real submissions from verified architects on Dealer90.com — select one you like, and you can request that exact design later."}
          </div>
          {" "}
        </div>
        {" "}
        {/* ACTIONS */}
        {" "}
        <div style={{"padding": "34px 56px 0", "display": "flex", "justifyContent": "flex-end"}}>
          {" "}
          <button className="btn btn-gold" onClick={go("/estimator/services")}>
            {"Continue →"}
          </button>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
