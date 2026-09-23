// AUTO-GENERATED from design/boards/Estimator-Signup.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Estimator-Signup.css';
import { useGo, A } from '../lib/nav';

export const title = "Build Cost Estimator — Step 3: Sign Up to See Your Estimate";

export default function EstimatorSignupScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-estimator-signup">
      <div style={{"width": "1440px", "height": "1040px", "boxSizing": "border-box", "background": "rgba(16,33,58,.5)", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
        {" "}
        <div className="card" style={{"width": "560px", "padding": "0", "overflow": "hidden"}}>
          {" "}
          <div style={{"padding": "28px 36px 0"}}>
            {" "}
            <div style={{"display": "flex", "gap": "8px", "marginBottom": "16px"}}>
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
            <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "marginBottom": "10px"}} data-nav="1" onClick={go("/")}>
              {" "}
              <div style={{"width": "54px", "height": "32px", "borderRadius": "9px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 500-600',serif", "fontWeight": "600", "color": "#10213A", "fontSize": "13px", "letterSpacing": "-.02em"}}>
                {"D90"}
              </div>
              {" "}
              <div style={{"color": "var(--navy)", "fontFamily": "'Work Sans',sans-serif", "fontSize": "18px", "fontWeight": "700", "letterSpacing": "-.01em"}}>
                {"Dealer90.com"}
              </div>
              {" "}
            </div>
            {" "}
            <h1 style={{"fontSize": "24px"}}>
              {"Your estimate is ready. Sign up to see it."}
            </h1>
            {" "}
            <div style={{"fontSize": "13.5px", "color": "var(--muted)", "marginTop": "8px", "lineHeight": "1.55"}}>
              {"Creating your free account saves this estimate to your Dealer90.com profile so you can revisit it, adjust it later, and request real quotes from verified providers whenever you're ready."}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "26px 36px 0", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
            {" "}
            <div className="field">
              <label>
                {"Full Name"}
              </label>
              <input placeholder="Your name" />
            </div>
            {" "}
            <div className="field">
              <label>
                {"Phone Number"}
              </label>
              <input placeholder="03XX-XXXXXXX" />
            </div>
            {" "}
            <div className="field">
              <label>
                {"Email (optional)"}
              </label>
              <input placeholder="you@example.com" />
            </div>
            {" "}
            <label style={{"display": "flex", "alignItems": "flex-start", "gap": "10px", "fontSize": "12.5px", "color": "var(--muted)", "lineHeight": "1.5", "cursor": "pointer"}}>
              {" "}
              <span style={{"width": "16px", "height": "16px", "borderRadius": "4px", "border": "1.5px solid var(--line)", "flexShrink": "0", "marginTop": "1px"}}></span>
              {" I agree to be contacted by Dealer90.com about this estimate. I'm not agreeing to receive calls from service providers directly. "}
            </label>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "26px 36px 30px"}}>
            {" "}
            <button className="btn btn-gold" style={{"width": "100%"}} onClick={go("/estimator/results")}>
              {"Show My Estimate →"}
            </button>
            {" "}
            <div style={{"textAlign": "center", "fontSize": "12px", "color": "var(--muted)", "marginTop": "12px"}}>
              {"Already have an account? "}
              <A style={{"color": "var(--gold)", "fontWeight": "700"}} to="/login">
                {"Log in"}
              </A>
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
