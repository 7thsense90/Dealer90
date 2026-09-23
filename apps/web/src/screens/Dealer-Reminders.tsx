// AUTO-GENERATED from design/boards/Dealer-Reminders.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-Reminders.css';
import { useGo } from '../lib/nav';

export const title = "Dealer — Payment Reminders";

export default function DealerRemindersScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-reminders">
      <div style={{"width": "1440px", "height": "1320px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex"}}>
        {" "}
        {/* SIDEBAR */}
        {" "}
        <div style={{"width": "250px", "flexShrink": "0", "background": "var(--navy)", "display": "flex", "flexDirection": "column", "padding": "26px 16px"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 8px 28px"}} data-nav="1" onClick={go("/dealer")}>
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
            <div className="navitem" data-nav="1" onClick={go("/dealer")}>
              {"📊 Dashboard"}
            </div>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/dealer/properties/new")}>
              {"🏠 My Properties"}
            </div>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/dealer/customers")}>
              {"👥 Customers"}
            </div>
            {" "}
            <div className="navitem active" data-nav="1" onClick={go("/dealer/reminders")}>
              {"🔔 Reminders"}
              <span className="badge-red">
                {"8"}
              </span>
            </div>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/dealer/offers")}>
              {"📣 Customer Offers"}
            </div>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/dealer/buyer-requests")}>
              {"📥 Buyer Requests"}
              <span className="badge">
                {"4"}
              </span>
            </div>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/dealer/transfer-requests")}>
              {"🔁 Transfer Requests"}
              <span className="badge">
                {"1"}
              </span>
            </div>
            {" "}
            <div className="navitem" data-nav="1" onClick={go("/dealer/marketing/email")}>
              {"📧 Marketing"}
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
                {"Al-Noor Builders"}
              </div>
              {" "}
              <div style={{"color": "#8A97AD", "fontSize": "11px"}}>
                {"Credibility 8.7/10"}
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
                {"Payment Reminders"}
              </h1>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--muted)"}}>
                {"Nudge customers with installments coming due — before they're overdue"}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
              {" "}
              <label style={{"display": "flex", "alignItems": "center", "gap": "8px", "fontSize": "12.5px", "fontWeight": "600", "cursor": "pointer"}}>
                {" "}
                <span style={{"width": "34px", "height": "18px", "borderRadius": "999px", "background": "var(--green)", "position": "relative", "display": "inline-block"}}>
                  <span style={{"width": "14px", "height": "14px", "borderRadius": "50%", "background": "#fff", "position": "absolute", "top": "2px", "right": "2px"}}></span>
                </span>
                {" Auto-send 3 days before due "}
              </label>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "24px 40px 0", "flex": "1", "overflow": "hidden", "display": "flex", "flexDirection": "column"}}>
            {" "}
            {/* STATS */}
            {" "}
            <div style={{"display": "flex", "gap": "16px", "marginBottom": "22px"}}>
              {" "}
              <div className="card" style={{"flex": "1", "padding": "16px 20px", "borderTop": "3px solid var(--red)"}}>
                <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                  {"Overdue"}
                </div>
                <div style={{"fontSize": "22px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif", "color": "var(--red)"}}>
                  {"3"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"flex": "1", "padding": "16px 20px", "borderTop": "3px solid var(--amber)"}}>
                <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                  {"Due in 3 Days"}
                </div>
                <div style={{"fontSize": "22px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif", "color": "var(--amber)"}}>
                  {"5"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"flex": "1", "padding": "16px 20px", "borderTop": "3px solid var(--green)"}}>
                <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                  {"Reminders Sent Today"}
                </div>
                <div style={{"fontSize": "22px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif", "color": "var(--green)"}}>
                  {"2"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"flex": "1", "padding": "16px 20px"}}>
                <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                  {"Avg. Days to Pay After Reminder"}
                </div>
                <div style={{"fontSize": "22px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif"}}>
                  {"1.8"}
                </div>
              </div>
              {" "}
            </div>
            {" "}
            {/* FILTERS + BULK */}
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "14px"}}>
              {" "}
              <div style={{"display": "flex", "gap": "10px"}}>
                {" "}
                <div className="filter-tab active">
                  {"All Pending (8)"}
                </div>
                {" "}
                <div className="filter-tab">
                  {"Overdue (3)"}
                </div>
                {" "}
                <div className="filter-tab">
                  {"Due Soon (5)"}
                </div>
                {" "}
              </div>
              {" "}
              <button className="btn btn-gold">
                {"Send Reminder to 3 Selected →"}
              </button>
              {" "}
            </div>
            {" "}
            {/* LIST */}
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "overflowY": "auto"}}>
              {" "}
              <div className="row" style={{"borderColor": "var(--red)"}}>
                {" "}
                <span style={{"width": "16px", "height": "16px", "borderRadius": "4px", "background": "var(--navy)", "flexShrink": "0"}}></span>
                {" "}
                <div style={{"width": "38px", "height": "38px", "borderRadius": "50%", "background": "var(--gold-light)", "flexShrink": "0"}}></div>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "700", "fontSize": "13.5px"}}>
                    {"Ayesha Malik"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                    {"5 Marla Corner Villa, DHA Phase 6 · Installment #9"}
                  </div>
                  {" "}
                </div>
                {" "}
                <span className="chip">
                  {"PKR 95,000"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--red-bg)", "color": "var(--red)"}}>
                  {"2 Days Overdue"}
                </span>
                {" "}
                <span style={{"fontSize": "11px", "color": "var(--muted)", "width": "130px"}}>
                  {"Last reminder: never"}
                </span>
                {" "}
                <button className="btn btn-gold" style={{"padding": "9px 16px", "fontSize": "12px"}}>
                  {"Send Reminder"}
                </button>
                {" "}
              </div>
              {" "}
              <div className="row" style={{"borderColor": "var(--red)"}}>
                {" "}
                <span style={{"width": "16px", "height": "16px", "borderRadius": "4px", "background": "var(--navy)", "flexShrink": "0"}}></span>
                {" "}
                <div style={{"width": "38px", "height": "38px", "borderRadius": "50%", "background": "var(--gold-light)", "flexShrink": "0"}}></div>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "700", "fontSize": "13.5px"}}>
                    {"Bilal Ahmed"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                    {"Shop 12, Al-Noor Arcade · Installment #21"}
                  </div>
                  {" "}
                </div>
                {" "}
                <span className="chip">
                  {"PKR 48,000"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--red-bg)", "color": "var(--red)"}}>
                  {"5 Days Overdue"}
                </span>
                {" "}
                <span style={{"fontSize": "11px", "color": "var(--muted)", "width": "130px"}}>
                  {"Last reminder: Sep 18"}
                </span>
                {" "}
                <button className="btn btn-gold" style={{"padding": "9px 16px", "fontSize": "12px"}}>
                  {"Remind Again"}
                </button>
                {" "}
              </div>
              {" "}
              <div className="row">
                {" "}
                <span style={{"width": "16px", "height": "16px", "borderRadius": "4px", "border": "1.5px solid var(--line)", "flexShrink": "0"}}></span>
                {" "}
                <div style={{"width": "38px", "height": "38px", "borderRadius": "50%", "background": "var(--gold-light)", "flexShrink": "0"}}></div>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "700", "fontSize": "13.5px"}}>
                    {"Usman Tariq"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                    {"10 Marla Residential Plot, Bahria Town · Installment #14"}
                  </div>
                  {" "}
                </div>
                {" "}
                <span className="chip">
                  {"PKR 95,000"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                  {"Due in 3 Days"}
                </span>
                {" "}
                <span style={{"fontSize": "11px", "color": "var(--muted)", "width": "130px"}}>
                  {"Last reminder: never"}
                </span>
                {" "}
                <button className="btn btn-line" style={{"padding": "9px 16px", "fontSize": "12px"}}>
                  {"Send Reminder"}
                </button>
                {" "}
              </div>
              {" "}
              <div className="row">
                {" "}
                <span style={{"width": "16px", "height": "16px", "borderRadius": "4px", "border": "1.5px solid var(--line)", "flexShrink": "0"}}></span>
                {" "}
                <div style={{"width": "38px", "height": "38px", "borderRadius": "50%", "background": "var(--gold-light)", "flexShrink": "0"}}></div>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "700", "fontSize": "13.5px"}}>
                    {"Fatima Sheikh"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                    {"Shop No. 4, Meridian Plaza · Installment #6"}
                  </div>
                  {" "}
                </div>
                {" "}
                <span className="chip">
                  {"PKR 62,000"}
                </span>
                {" "}
                <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                  {"Due in 5 Days"}
                </span>
                {" "}
                <span style={{"fontSize": "11px", "color": "var(--muted)", "width": "130px"}}>
                  {"Last reminder: never"}
                </span>
                {" "}
                <button className="btn btn-line" style={{"padding": "9px 16px", "fontSize": "12px"}}>
                  {"Send Reminder"}
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
        {/* REMINDER COMPOSER PANEL */}
        {" "}
        <div style={{"width": "380px", "flexShrink": "0", "background": "#fff", "borderLeft": "1px solid var(--line)", "padding": "26px 24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
          {" "}
          <div>
            {" "}
            <div style={{"fontWeight": "700", "fontSize": "15px"}}>
              {"Reminder Message"}
            </div>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "var(--muted)", "marginTop": "4px"}}>
              {"Applies to reminders sent from this screen. Customize per-send if needed."}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
            {" "}
            <label style={{"fontSize": "12px", "fontWeight": "700"}}>
              {"Send Via"}
            </label>
            {" "}
            <div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap"}}>
              {" "}
              <span className="tag" style={{"background": "var(--navy)", "color": "#fff"}}>
                {"SMS"}
              </span>
              {" "}
              <span className="tag" style={{"background": "var(--navy)", "color": "#fff"}}>
                {"In-App"}
              </span>
              {" "}
              <span className="tag" style={{"background": "#fff", "border": "1px solid var(--line)", "color": "var(--muted)"}}>
                {"WhatsApp"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
            {" "}
            <label style={{"fontSize": "12px", "fontWeight": "700"}}>
              {"Message Template"}
            </label>
            {" "}
            <div className="card" style={{"padding": "12px", "fontSize": "12.5px", "lineHeight": "1.6", "color": "var(--ink)"}}>
              {"Hi {{name}}, a friendly reminder that installment {{installment_no}} of PKR {{amount}} for {{property}} is due on {{due_date}}. Reply here if you have any questions."}
            </div>
            {" "}
          </div>
          {" "}
          <div className="card" style={{"padding": "14px", "background": "var(--gold-light)", "borderColor": "var(--gold)"}}>
            {" "}
            <div style={{"fontSize": "11.5px", "color": "#5B4A2A", "lineHeight": "1.6"}}>
              {"Reminders reference the installment schedule already on record — nothing here changes the plan or payment terms."}
            </div>
            {" "}
          </div>
          {" "}
          <button className="btn btn-gold">
            {"Save Template"}
          </button>
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
