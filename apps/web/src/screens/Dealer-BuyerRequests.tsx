// AUTO-GENERATED from design/boards/Dealer-BuyerRequests.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-BuyerRequests.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Buyer Requests";

export default function DealerBuyerRequestsScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-buyerrequests">
      <div style={{"width": "1440px", "height": "1080px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
        {" "}
        {/* SIDEBAR */}
        {" "}
        <div style={{"width": "250px", "flexShrink": "0", "background": "var(--navy)", "padding": "28px 16px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 10px 24px"}}>
            {" "}
            <div style={{"width": "34px", "height": "34px", "borderRadius": "8px", "background": "var(--gold-light)"}}></div>
            {" "}
            <div style={{"color": "#fff", "fontFamily": "'D90 Fraunces 400-600-700',serif", "fontSize": "17px", "fontWeight": "600"}}>
              {"Al-Noor Builders"}
            </div>
            {" "}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer")}>
            {"Dashboard"}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/dealer/buyer-requests")}>
            {"Buyer Requests"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/transfer-requests")}>
            {"Transfer Requests "}
            <span style={{"background": "var(--gold)", "color": "var(--navy)", "fontSize": "10px", "fontWeight": "700", "borderRadius": "999px", "padding": "2px 7px", "marginLeft": "auto"}}>
              {"1 new"}
            </span>
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/properties/new")}>
            {"Properties"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/customers")}>
            {"Customers"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/installment-plans/new")}>
            {"Installment Plans"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/reminders")}>
            {"Payments"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/marketing/email")}>
            {"Marketing"}
          </div>
          {" "}
          <div className="navitem">
            {"Branding"}
          </div>
          {" "}
          <div className="navitem">
            {"Settings"}
          </div>
          {" "}
          <div style={{"marginTop": "auto", "padding": "14px 10px 0", "borderTop": "1px solid #26385A", "display": "flex", "alignItems": "center", "gap": "10px"}}>
            {" "}
            <div style={{"width": "32px", "height": "32px", "borderRadius": "50%", "background": "var(--gold-light)"}}></div>
            {" "}
            <div style={{"color": "#fff", "fontSize": "13px"}}>
              {"Ahmed Raza"}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* MAIN */}
        {" "}
        <div style={{"flex": "1", "display": "flex", "overflow": "hidden"}}>
          {" "}
          {/* REQUEST LIST */}
          {" "}
          <div style={{"width": "340px", "flexShrink": "0", "borderRight": "1px solid var(--line)", "background": "#fff", "display": "flex", "flexDirection": "column"}}>
            {" "}
            <div style={{"padding": "20px 18px 12px"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                {"Buyer Requests"}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                {"Matched to your corridor & property tags"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reqrow active">
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between"}}>
                {" "}
                <span style={{"fontWeight": "600", "fontSize": "13px"}}>
                  {"Usman T. · #EST-4521"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                  {"New"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Lahore · Medium-Term · Conservative"}
              </div>
              {" "}
              <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                {"PKR 1.5M down · PKR 75,000/mo · Received 3hrs ago"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reqrow">
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between"}}>
                {" "}
                <span style={{"fontWeight": "600", "fontSize": "13px"}}>
                  {"Zainab R. · #EST-4519"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                  {"New"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Lahore · Short-Term · Balanced"}
              </div>
              {" "}
              <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                {"PKR 3M down · PKR 120,000/mo · Received 5hrs ago"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reqrow">
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between"}}>
                {" "}
                <span style={{"fontWeight": "600", "fontSize": "13px"}}>
                  {"Hamza K. · #EST-4510"}
                </span>
                {" "}
                <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                  {"Responded"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Lahore · Long-Term · Conservative"}
              </div>
              {" "}
              <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                {"Offer sent yesterday"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reqrow">
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between"}}>
                {" "}
                <span style={{"fontWeight": "600", "fontSize": "13px"}}>
                  {"Ayesha M. · #EST-4498"}
                </span>
                {" "}
                <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                  {"Declined by buyer"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Lahore · Medium-Term · Aggressive"}
              </div>
              {" "}
              <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                {"Closed 3 days ago"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* DETAIL + OFFER BUILDER */}
          {" "}
          <div style={{"flex": "1", "padding": "26px 32px", "overflow": "auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
            {" "}
            <div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Request #EST-4521 · Received 3 hours ago"}
              </div>
              {" "}
              <h1 style={{"fontSize": "20px", "color": "var(--navy)"}}>
                {"Usman T. is looking for an investment property"}
              </h1>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "18px 22px"}}>
              {" "}
              <div style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--ink-soft)", "marginBottom": "10px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                {"Buyer's Criteria"}
              </div>
              {" "}
              <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
                {" "}
                <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                  {"Lahore"}
                </span>
                {" "}
                <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                  {"Medium-Term (2–3 yrs)"}
                </span>
                {" "}
                <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                  {"Conservative Risk"}
                </span>
                {" "}
                <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                  {"Capital Growth Focus"}
                </span>
                {" "}
                <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                  {"PKR 1.5M available now"}
                </span>
                {" "}
                <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                  {"PKR 75,000/mo capacity"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "12px"}}>
                {"Buyer's contact details are shared only if they accept your offer."}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "22px 26px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                {"Build Your Offer"}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Property"}
                </label>
                {" "}
                <select className="field">
                  <option>
                    {"5 Marla Corner Villa — DHA Phase 6 (existing listing)"}
                  </option>
                  <option>
                    {"8 Marla Plot, Block J (existing listing)"}
                  </option>
                  <option>
                    {"+ Add a new property for this offer"}
                  </option>
                </select>
                {" "}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
                {" "}
                <div>
                  <label>
                    {"Offer Price (PKR)"}
                  </label>
                  <input className="field" defaultValue="28,500,000" />
                </div>
                {" "}
                <div>
                  <label>
                    {"Down Payment (PKR)"}
                  </label>
                  <input className="field" defaultValue="5,000,000" />
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
                {" "}
                <div>
                  <label>
                    {"Plan Duration (months)"}
                  </label>
                  <input className="field" defaultValue="24" />
                </div>
                {" "}
                <div>
                  <label>
                    {"Monthly Installment (auto)"}
                  </label>
                  <input className="field" defaultValue="979,167" disabled style={{"background": "#F3F1EA", "color": "var(--ink-soft)"}} />
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Message to Buyer"}
                </label>
                {" "}
                <textarea className="field" rows={2} defaultValue="Fits your budget on a 24-month plan, and it's in the DHA 9-10 growth corridor you asked about. Happy to walk you through it." />
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "flex-end", "gap": "10px"}}>
                {" "}
                <button className="btn btn-outline">
                  {"Save Draft"}
                </button>
                {" "}
                <button className="btn btn-gold">
                  {"Send Offer to Buyer"}
                </button>
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
