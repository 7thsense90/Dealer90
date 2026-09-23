// AUTO-GENERATED from design/boards/Customer-Resell.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Customer-Resell.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Sell This Property";

export default function CustomerResellScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-customer-resell">
      <div style={{"width": "1440px", "height": "1280px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
        {" "}
        {/* SIDEBAR */}
        {" "}
        <div style={{"width": "250px", "flexShrink": "0", "background": "var(--navy)", "padding": "28px 16px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 10px 24px"}} data-nav="1" onClick={go("/customer")}>
            {" "}
            <div style={{"width": "58px", "height": "34px", "borderRadius": "8px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 400-600-700',serif", "fontWeight": "700", "color": "var(--navy)", "fontSize": "14px", "letterSpacing": "-.02em"}}>
              {"D90"}
            </div>
            {" "}
            <div style={{"color": "#fff", "fontFamily": "'Work Sans',sans-serif", "fontSize": "18px", "fontWeight": "700", "letterSpacing": "-.01em"}}>
              {"Dealer90.com"}
            </div>
            {" "}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/customer")}>
            {"My Properties"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/customer/offers")}>
            {"My Offers"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/customer/resell")}>
            {"Resale Requests"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/customer")}>
            {"Payments"}
          </div>
          {" "}
          <div className="navitem">
            {"Profile"}
          </div>
          {" "}
          <div style={{"marginTop": "auto", "padding": "14px 10px 0", "borderTop": "1px solid #26385A", "display": "flex", "alignItems": "center", "gap": "10px"}}>
            {" "}
            <div style={{"width": "32px", "height": "32px", "borderRadius": "50%", "background": "var(--gold-light)"}}></div>
            {" "}
            <div style={{"color": "#fff", "fontSize": "13px"}}>
              {"Usman Tariq"}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* MAIN */}
        {" "}
        <div style={{"flex": "1", "display": "flex", "flexDirection": "column", "overflow": "hidden"}}>
          {" "}
          <div style={{"height": "80px", "flexShrink": "0", "display": "flex", "alignItems": "center", "padding": "0 36px", "borderBottom": "1px solid var(--line)", "background": "#fff"}}>
            {" "}
            <div>
              {" "}
              <A style={{"fontSize": "12px", "color": "var(--ink-soft)"}} to="/customer">
                {"← Back to My Properties"}
              </A>
              {" "}
              <h1 style={{"fontSize": "20px", "color": "var(--navy)", "marginTop": "4px"}}>
                {"Sell 5 Marla Corner Villa, DHA Phase 6"}
              </h1>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"maxWidth": "760px", "padding": "28px 36px", "display": "flex", "flexDirection": "column", "gap": "22px", "overflow": "auto"}}>
            {" "}
            <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
              {"List your paid-up position for transfer — reviewed by Al-Noor Builders before it goes anywhere."}
            </div>
            {" "}
            {/* CURRENT STANDING */}
            {" "}
            <div className="card" style={{"padding": "22px 26px"}}>
              {" "}
              <div style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--ink-soft)", "marginBottom": "14px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                {"Your Current Standing"}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "16px"}}>
                {" "}
                <div>
                  <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                    {"Installments Paid"}
                  </div>
                  <div style={{"fontSize": "19px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                    {"10 of 30"}
                  </div>
                </div>
                {" "}
                <div>
                  <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                    {"Amount Paid"}
                  </div>
                  <div style={{"fontSize": "19px", "fontWeight": "700", "color": "var(--green)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                    {"PKR 9.5M"}
                  </div>
                </div>
                {" "}
                <div>
                  <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                    {"Remaining Balance"}
                  </div>
                  <div style={{"fontSize": "19px", "fontWeight": "700", "color": "var(--amber)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                    {"PKR 19.0M"}
                  </div>
                </div>
                {" "}
                <div>
                  <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                    {"Est. Value Today"}
                  </div>
                  <div style={{"fontSize": "19px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                    {"PKR 33.4M"}
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"height": "10px", "borderRadius": "999px", "background": "#EFEAE0", "overflow": "hidden", "marginTop": "16px"}}>
                {" "}
                <div style={{"width": "33.3%", "height": "100%", "background": "var(--gold)"}}></div>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "11px", "color": "var(--ink-soft)", "marginTop": "8px"}}>
                {"A new buyer takes over your remaining 20 installments directly with Al-Noor Builders — you're not personally on the hook for them after transfer."}
              </div>
              {" "}
            </div>
            {" "}
            {/* ASKING PRICE */}
            {" "}
            <div className="card" style={{"padding": "24px 26px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                {"Set Your Asking Price"}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Asking Price for Your Position (PKR)"}
                </label>
                {" "}
                <input className="field" defaultValue="11,200,000" style={{"borderColor": "var(--navy)"}} />
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "6px"}}>
                  {"This is what a new buyer pays you to take over your paid-up equity — separate from the PKR 19.0M remaining balance they'll owe the dealer."}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Reason for Selling "}
                  <span style={{"fontWeight": "400", "color": "var(--ink-soft)"}}>
                    {"(optional, shown only to the dealer)"}
                  </span>
                </label>
                {" "}
                <textarea className="field" rows={2} defaultValue="Relocating for work, no longer able to keep up the plan." />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "16px 18px", "background": "var(--amber-bg)", "border": "none", "display": "flex", "gap": "10px", "alignItems": "flex-start"}}>
              {" "}
              <span style={{"fontSize": "16px", "lineHeight": "1"}}>
                {"ⓘ"}
              </span>
              {" "}
              <div style={{"fontSize": "12px", "color": "#6B4E1E", "lineHeight": "1.5"}}>
                {"Al-Noor Builders must approve this transfer — they'll confirm it's permitted under your contract and set any transfer fee. You'll be notified once it's approved and live, or if it's declined."}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "justifyContent": "flex-end", "gap": "12px", "paddingBottom": "56px"}}>
              {" "}
              <button className="btn btn-outline" onClick={go("/customer")}>
                {"Cancel"}
              </button>
              {" "}
              <button className="btn btn-gold" onClick={go("/customer")}>
                {"Submit for Dealer Approval →"}
              </button>
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
