// AUTO-GENERATED from design/boards/BuildAdvisor-Confirmation.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './BuildAdvisor-Confirmation.css';
import { useGo } from '../lib/nav';

export const title = "Build Advisor — Request Sent to Service Providers";

export default function BuildAdvisorConfirmationScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-buildadvisor-confirmation">
      <div style={{"width": "1440px", "height": "1380px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex", "flexDirection": "column"}}>
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
        {/* CONFIRMATION */}
        {" "}
        <div style={{"padding": "64px 56px 0", "display": "flex", "flexDirection": "column", "alignItems": "center", "textAlign": "center", "gap": "18px"}}>
          {" "}
          <div style={{"width": "64px", "height": "64px", "borderRadius": "50%", "background": "var(--green-bg)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "30px", "color": "var(--green)"}}>
            {"✓"}
          </div>
          {" "}
          <h1 style={{"fontSize": "32px"}}>
            {"Your request has been sent."}
          </h1>
          {" "}
          <div style={{"fontSize": "15px", "color": "var(--muted)", "maxWidth": "560px"}}>
            {"We've notified verified providers in your selected categories. Each will respond independently with their own quote — you're not committed to anyone until you accept an offer."}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap", "justifyContent": "center", "paddingTop": "6px"}}>
            {" "}
            <span className="tag" style={{"background": "var(--gold-light)", "color": "#8A6A24"}}>
              {"10 Marla Plot · DHA Phase 6, Lahore"}
            </span>
            {" "}
            <span className="tag" style={{"background": "var(--gold-light)", "color": "#8A6A24"}}>
              {"Budget: PKR 50L – 1.5 Cr"}
            </span>
            {" "}
            <span className="tag" style={{"background": "var(--gold-light)", "color": "#8A6A24"}}>
              {"Start: Within 3 Months"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* PROVIDER CATEGORIES NOTIFIED */}
        {" "}
        <div style={{"padding": "44px 56px 0"}}>
          {" "}
          <h2 style={{"fontSize": "20px", "marginBottom": "18px"}}>
            {"Providers Notified, By Category"}
          </h2>
          {" "}
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "18px"}}>
            {" "}
            <div className="card" style={{"padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"width": "32px", "height": "32px", "borderRadius": "9px", "background": "var(--navy)"}}></div>
                {" "}
                <span className="status-pill">
                  {"Awaiting Quotes"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontWeight": "700", "fontSize": "15px"}}>
                {"Blueprint & Design"}
              </div>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--muted)"}}>
                {"4 verified architects notified in Lahore"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"width": "32px", "height": "32px", "borderRadius": "9px", "background": "#8A6D9C"}}></div>
                {" "}
                <span className="status-pill">
                  {"Awaiting Quotes"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontWeight": "700", "fontSize": "15px"}}>
                {"LDA / Approval Facilitation"}
              </div>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--muted)"}}>
                {"2 licensed consultants notified"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "22px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"width": "32px", "height": "32px", "borderRadius": "9px", "background": "#B9772E"}}></div>
                {" "}
                <span className="status-pill">
                  {"Awaiting Quotes"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontWeight": "700", "fontSize": "15px"}}>
                {"Construction"}
              </div>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--muted)"}}>
                {"5 verified contractors notified"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* WHAT HAPPENS NEXT */}
        {" "}
        <div style={{"padding": "44px 56px 0"}}>
          {" "}
          <h2 style={{"fontSize": "20px", "marginBottom": "18px"}}>
            {"What Happens Next"}
          </h2>
          {" "}
          <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "24px"}}>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 500-600',serif", "fontSize": "22px", "color": "var(--gold)"}}>
                {"1"}
              </div>
              {" "}
              <div style={{"fontWeight": "700", "fontSize": "14px"}}>
                {"Providers respond"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--muted)", "lineHeight": "1.6"}}>
                {"Each verified provider reviews your request and sends a quote directly to your Dealer90.com account."}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 500-600',serif", "fontSize": "22px", "color": "var(--gold)"}}>
                {"2"}
              </div>
              {" "}
              <div style={{"fontWeight": "700", "fontSize": "14px"}}>
                {"Compare & choose"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--muted)", "lineHeight": "1.6"}}>
                {"Review quotes, credentials and track record side by side in your Build Project dashboard."}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 500-600',serif", "fontSize": "22px", "color": "var(--gold)"}}>
                {"3"}
              </div>
              {" "}
              <div style={{"fontWeight": "700", "fontSize": "14px"}}>
                {"Agree off-platform"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--muted)", "lineHeight": "1.6"}}>
                {"Final pricing, contracts and payments happen directly between you and the provider you choose."}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* CTA */}
        {" "}
        <div style={{"padding": "44px 56px 0", "display": "flex", "gap": "14px", "justifyContent": "center"}}>
          {" "}
          <button className="btn btn-line" onClick={go("/for-builders")}>
            {"Browse Verified Providers"}
          </button>
          {" "}
          <button className="btn btn-gold" onClick={go("/customer/build-project")}>
            {"Go to My Build Project →"}
          </button>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
