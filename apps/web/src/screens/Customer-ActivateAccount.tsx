// AUTO-GENERATED from design/boards/Customer-ActivateAccount.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Customer-ActivateAccount.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Activate Your Account";

export default function CustomerActivateAccountScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-customer-activateaccount">
      <div style={{"width": "1200px", "height": "1080px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex", "flexDirection": "column"}}>
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
          <div className="card" style={{"width": "460px", "padding": "40px", "display": "flex", "flexDirection": "column", "gap": "22px", "boxShadow": "0 20px 50px rgba(16,33,58,.10)"}}>
            {" "}
            <div style={{"textAlign": "center"}}>
              {" "}
              <div style={{"width": "52px", "height": "52px", "borderRadius": "50%", "background": "var(--green-bg)", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 14px"}}>
                {" "}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12.5l4.5 4.5L19 7" stroke="var(--green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                {" "}
              </div>
              {" "}
              <h1 style={{"fontSize": "22px", "color": "var(--navy)"}}>
                {"We found your account, Usman"}
              </h1>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--ink-soft)", "marginTop": "8px", "lineHeight": "1.5"}}>
                {"This is your first time logging in since submitting Request #EST-4521. Verify it's you, then set a password."}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Enter the code sent to +92 300 1234567"}
              </label>
              {" "}
              <div style={{"display": "flex", "gap": "8px", "justifyContent": "center", "marginTop": "4px"}}>
                {" "}
                <input className="otpbox" maxLength={1} defaultValue="4" />
                {" "}
                <input className="otpbox" maxLength={1} defaultValue="8" />
                {" "}
                <input className="otpbox" maxLength={1} defaultValue="2" />
                {" "}
                <input className="otpbox" maxLength={1} defaultValue="" />
                {" "}
                <input className="otpbox" maxLength={1} defaultValue="" />
                {" "}
                <input className="otpbox" maxLength={1} defaultValue="" />
                {" "}
              </div>
              {" "}
              <div style={{"textAlign": "center", "fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "10px"}}>
                {"Didn't get it? "}
                <A style={{"color": "var(--gold)", "fontWeight": "600"}}>
                  {"Resend code"}
                </A>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"height": "1px", "background": "var(--line)"}}></div>
            {" "}
            <div>
              {" "}
              <label>
                {"Create a Password"}
              </label>
              {" "}
              <input className="field" type="password" placeholder="At least 8 characters" />
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Confirm Password"}
              </label>
              {" "}
              <input className="field" type="password" placeholder="Re-enter password" />
              {" "}
            </div>
            {" "}
            <button className="btn btn-gold" style={{"width": "100%", "padding": "15px"}} onClick={go("/customer")}>
              {"Verify & Activate Account"}
            </button>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "textAlign": "center", "lineHeight": "1.5"}}>
              {"Verifying your phone keeps your account — and your installment records, once you have any — secure to only you."}
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
