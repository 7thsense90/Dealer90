// AUTO-GENERATED from design/boards/Customer-Login.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Customer-Login.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Customer Login";

export default function CustomerLoginScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-customer-login">
      <div style={{"width": "1200px", "height": "900px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex", "flexDirection": "column"}}>
        {" "}
        <div style={{"height": "84px", "background": "var(--navy)", "display": "flex", "alignItems": "center", "padding": "0 56px", "flexShrink": "0"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}} data-nav="1" onClick={go("/customer")}>
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
        </div>
        {" "}
        <div style={{"flex": "1", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
          {" "}
          <div className="card" style={{"width": "440px", "padding": "40px", "display": "flex", "flexDirection": "column", "gap": "22px", "boxShadow": "0 20px 50px rgba(16,33,58,.10)"}}>
            {" "}
            <div style={{"textAlign": "center"}}>
              {" "}
              <h1 style={{"fontSize": "24px", "color": "var(--navy)"}}>
                {"Welcome back"}
              </h1>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--ink-soft)", "marginTop": "6px"}}>
                {"Log in to track your requests, offers and installments."}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Phone Number or Email"}
              </label>
              {" "}
              <input className="field" placeholder="03XX XXXXXXX or you@email.com" />
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Password"}
              </label>
              {" "}
              <input className="field" type="password" placeholder="••••••••" />
              {" "}
            </div>
            {" "}
            <button className="btn btn-gold" style={{"width": "100%", "padding": "15px"}} onClick={go("/customer")}>
              {"Log In"}
            </button>
            {" "}
            <div className="card" style={{"background": "var(--amber-bg)", "border": "none", "padding": "12px 14px", "fontSize": "12px", "color": "#6B4E1E", "lineHeight": "1.5"}}>
              {" First time logging in after submitting a request? We'll recognize your phone number and ask you to set a password — no separate sign-up needed. "}
            </div>
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px"}}>
              {" "}
              <A style={{"color": "var(--ink-soft)"}}>
                {"Forgot password?"}
              </A>
              {" "}
              <A style={{"color": "var(--gold)", "fontWeight": "600"}} to="/advisor">
                {"New here? Try the Property Advisor →"}
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
