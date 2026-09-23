// AUTO-GENERATED from design/boards/Dealer-TransferRequests.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-TransferRequests.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Transfer Requests";

export default function DealerTransferRequestsScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-transferrequests">
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
          <div className="navitem" data-nav="1" onClick={go("/dealer/buyer-requests")}>
            {"Buyer Requests"}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/dealer/transfer-requests")}>
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
          {/* LIST */}
          {" "}
          <div style={{"width": "340px", "flexShrink": "0", "borderRight": "1px solid var(--line)", "background": "#fff", "display": "flex", "flexDirection": "column"}}>
            {" "}
            <div style={{"padding": "20px 18px 12px"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                {"Transfer Requests"}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                {"Customers asking to sell their paid-up position"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reqrow active">
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between"}}>
                {" "}
                <span style={{"fontWeight": "600", "fontSize": "13px"}}>
                  {"Usman Tariq"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                  {"Pending Review"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"5 Marla Corner Villa, DHA Phase 6"}
              </div>
              {" "}
              <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                {"10 of 30 paid · Submitted today"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="reqrow">
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between"}}>
                {" "}
                <span style={{"fontWeight": "600", "fontSize": "13px"}}>
                  {"Hina Malik"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                  {"Approved"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Shop 12, Al-Noor Arcade"}
              </div>
              {" "}
              <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                {"Live on public portal since Sep 12"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* DETAIL */}
          {" "}
          <div style={{"flex": "1", "padding": "26px 32px", "overflow": "auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
            {" "}
            <div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Transfer Request · Submitted today"}
              </div>
              {" "}
              <h1 style={{"fontSize": "20px", "color": "var(--navy)"}}>
                {"Usman Tariq wants to sell 5 Marla Corner Villa, DHA Phase 6"}
              </h1>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "20px 24px"}}>
              {" "}
              <div style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--ink-soft)", "marginBottom": "12px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                {"Current Standing on Record"}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "16px"}}>
                {" "}
                <div>
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                    {"Installments Paid"}
                  </div>
                  <div style={{"fontSize": "17px", "fontWeight": "700", "color": "var(--navy)"}}>
                    {"10 of 30"}
                  </div>
                </div>
                {" "}
                <div>
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                    {"Amount Paid"}
                  </div>
                  <div style={{"fontSize": "17px", "fontWeight": "700", "color": "var(--green)"}}>
                    {"PKR 9.5M"}
                  </div>
                </div>
                {" "}
                <div>
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                    {"Remaining Balance"}
                  </div>
                  <div style={{"fontSize": "17px", "fontWeight": "700", "color": "var(--amber)"}}>
                    {"PKR 19.0M"}
                  </div>
                </div>
                {" "}
                <div>
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                    {"Customer's Asking Price"}
                  </div>
                  <div style={{"fontSize": "17px", "fontWeight": "700", "color": "var(--navy)"}}>
                    {"PKR 11.2M"}
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "14px", "fontStyle": "italic"}}>
                {"Reason given: \"Relocating for work, no longer able to keep up the plan.\""}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "22px 26px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                {"Review & Respond"}
              </div>
              {" "}
              <label style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "13px", "fontWeight": "600", "color": "var(--ink)", "cursor": "pointer"}}>
                {" "}
                <span style={{"width": "18px", "height": "18px", "borderRadius": "5px", "background": "var(--navy)", "display": "inline-flex", "alignItems": "center", "justifyContent": "center", "color": "#fff", "fontSize": "11px"}}>
                  {"✓"}
                </span>
                {" Transfer is permitted under this customer's contract terms "}
              </label>
              {" "}
              <div>
                {" "}
                <label>
                  {"Transfer Fee, if any (PKR)"}
                </label>
                {" "}
                <input className="field" defaultValue="150,000" />
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Note to Customer"}
                </label>
                {" "}
                <textarea className="field" rows={2} defaultValue="Approved — your listing will go live on the public portal tagged as a verified resale. New buyer takes over the remaining 20 installments directly with us." />
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "flex-end", "gap": "10px"}}>
                {" "}
                <button className="btn btn-outline" style={{"borderColor": "var(--red)", "color": "var(--red)"}}>
                  {"Decline Transfer"}
                </button>
                {" "}
                <button className="btn btn-gold">
                  {"Approve & List for Resale"}
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
