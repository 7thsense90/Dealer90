// AUTO-GENERATED from design/boards/Dealer-Marketing-Email.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-Marketing-Email.css';
import { useGo } from '../lib/nav';

export const title = "Dealer — Marketing — Email Templates";

export default function DealerMarketingEmailScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-marketing-email">
      <div style={{"width": "1440px", "height": "1060px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex"}}>
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
            <div className="navitem" data-nav="1" onClick={go("/dealer/reminders")}>
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
            <div className="navitem active" data-nav="1" onClick={go("/dealer/marketing/email")}>
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
        <div style={{"flex": "1", "display": "flex", "flexDirection": "column", "overflow": "hidden"}}>
          {" "}
          <div style={{"background": "#fff", "borderBottom": "1px solid var(--line)", "flexShrink": "0"}}>
            {" "}
            <div style={{"height": "80px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 40px"}}>
              {" "}
              <div>
                {" "}
                <h1 style={{"fontSize": "21px"}}>
                  {"Marketing"}
                </h1>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "var(--muted)"}}>
                  {"Send bulk email and SMS campaigns to your customers using ready-made templates"}
                </div>
                {" "}
              </div>
              {" "}
              <span className="ai-pill" style={{"fontSize": "11.5px", "padding": "6px 12px"}}>
                {"✨ AI-Assisted Templates"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "28px", "padding": "0 40px"}}>
              {" "}
              <div className="mtab active" data-nav="1" onClick={go("/dealer/marketing/email")}>
                {"Email Marketing"}
              </div>
              {" "}
              <div className="mtab" data-nav="1" onClick={go("/dealer/marketing/sms")}>
                {"SMS Marketing"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "display": "grid", "gridTemplateColumns": "1fr 380px", "overflow": "hidden"}}>
            {" "}
            {/* TEMPLATE GALLERY */}
            {" "}
            <div style={{"padding": "28px 40px", "overflowY": "auto"}}>
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "marginBottom": "18px"}}>
                {" "}
                <h2 style={{"fontSize": "16px"}}>
                  {"Pre-Built Email Templates"}
                </h2>
                {" "}
                <div style={{"display": "flex", "gap": "8px"}}>
                  {" "}
                  <div className="chip selected">
                    {"All"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Listings"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Payments"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Offers"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(2,1fr)", "gap": "18px"}}>
                {" "}
                <div className="tpl-card">
                  {" "}
                  <div className="tpl-preview" style={{"background": "linear-gradient(135deg,var(--navy),var(--navy-2))"}}>
                    {" "}
                    <div style={{"width": "26px", "height": "26px", "borderRadius": "7px", "background": "var(--gold-light)"}}></div>
                    {" "}
                    <div style={{"color": "#fff", "fontWeight": "700", "fontSize": "13px"}}>
                      {"New Listing Announcement"}
                    </div>
                    {" "}
                    <div style={{"color": "#B7C0D1", "fontSize": "10.5px"}}>
                      {"\"A new property just went live near you...\""}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"padding": "14px 16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                    {" "}
                    <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Listings"}
                      </span>
                      <span className="ai-pill">
                        {"✨ AI-Editable"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                      {"Announce a new property to matched customers."}
                    </div>
                    {" "}
                    <div style={{"display": "flex", "gap": "8px", "marginTop": "2px"}}>
                      <button className="btn btn-line" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}}>
                        {"Preview"}
                      </button>
                      <button className="btn btn-gold" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}} onClick={go("/dealer/marketing/email/editor")}>
                        {"Use Template →"}
                      </button>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tpl-card">
                  {" "}
                  <div className="tpl-preview" style={{"background": "linear-gradient(135deg,#8A6220,var(--amber))"}}>
                    {" "}
                    <div style={{"width": "26px", "height": "26px", "borderRadius": "7px", "background": "#fff3"}}></div>
                    {" "}
                    <div style={{"color": "#fff", "fontWeight": "700", "fontSize": "13px"}}>
                      {"Installment Due Reminder"}
                    </div>
                    {" "}
                    <div style={{"color": "#F5E4C8", "fontSize": "10.5px"}}>
                      {"\"Your next installment is due on...\""}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"padding": "14px 16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                    {" "}
                    <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"Payments"}
                      </span>
                      <span className="ai-pill">
                        {"✨ AI-Editable"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                      {"Friendly nudge before an installment is due."}
                    </div>
                    {" "}
                    <div style={{"display": "flex", "gap": "8px", "marginTop": "2px"}}>
                      <button className="btn btn-line" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}}>
                        {"Preview"}
                      </button>
                      <button className="btn btn-gold" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}} onClick={go("/dealer/marketing/email/editor")}>
                        {"Use Template →"}
                      </button>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tpl-card">
                  {" "}
                  <div className="tpl-preview" style={{"background": "linear-gradient(135deg,#3F6B4F,#5C8E6E)"}}>
                    {" "}
                    <div style={{"width": "26px", "height": "26px", "borderRadius": "7px", "background": "#fff3"}}></div>
                    {" "}
                    <div style={{"color": "#fff", "fontWeight": "700", "fontSize": "13px"}}>
                      {"Seasonal / Festive Offer"}
                    </div>
                    {" "}
                    <div style={{"color": "#E6EEE7", "fontSize": "10.5px"}}>
                      {"\"This Eid, get a special down payment plan...\""}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"padding": "14px 16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                    {" "}
                    <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                      <span className="tag" style={{"background": "var(--violet-bg)", "color": "var(--violet)"}}>
                        {"Offers"}
                      </span>
                      <span className="ai-pill">
                        {"✨ AI-Editable"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                      {"Time-boxed promotions tied to a holiday or event."}
                    </div>
                    {" "}
                    <div style={{"display": "flex", "gap": "8px", "marginTop": "2px"}}>
                      <button className="btn btn-line" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}}>
                        {"Preview"}
                      </button>
                      <button className="btn btn-gold" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}} onClick={go("/dealer/marketing/email/editor")}>
                        {"Use Template →"}
                      </button>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tpl-card">
                  {" "}
                  <div className="tpl-preview" style={{"background": "linear-gradient(135deg,#6C4E9C,#8A6BC0)"}}>
                    {" "}
                    <div style={{"width": "26px", "height": "26px", "borderRadius": "7px", "background": "#fff3"}}></div>
                    {" "}
                    <div style={{"color": "#fff", "fontWeight": "700", "fontSize": "13px"}}>
                      {"Resale Opportunity Alert"}
                    </div>
                    {" "}
                    <div style={{"color": "#E9E0F5", "fontSize": "10.5px"}}>
                      {"\"A resale property matching your budget...\""}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"padding": "14px 16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                    {" "}
                    <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Listings"}
                      </span>
                      <span className="ai-pill">
                        {"✨ AI-Editable"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                      {"Surface a verified resale to interested buyers."}
                    </div>
                    {" "}
                    <div style={{"display": "flex", "gap": "8px", "marginTop": "2px"}}>
                      <button className="btn btn-line" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}}>
                        {"Preview"}
                      </button>
                      <button className="btn btn-gold" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}} onClick={go("/dealer/marketing/email/editor")}>
                        {"Use Template →"}
                      </button>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tpl-card">
                  {" "}
                  <div className="tpl-preview" style={{"background": "linear-gradient(135deg,#1A3155,#2A4670)"}}>
                    {" "}
                    <div style={{"width": "26px", "height": "26px", "borderRadius": "7px", "background": "var(--gold-light)"}}></div>
                    {" "}
                    <div style={{"color": "#fff", "fontWeight": "700", "fontSize": "13px"}}>
                      {"Welcome New Customer"}
                    </div>
                    {" "}
                    <div style={{"color": "#B7C0D1", "fontSize": "10.5px"}}>
                      {"\"Welcome aboard — here's what happens next...\""}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"padding": "14px 16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                    {" "}
                    <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Onboarding"}
                      </span>
                      <span className="ai-pill">
                        {"✨ AI-Editable"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                      {"Sent automatically once a plan is signed."}
                    </div>
                    {" "}
                    <div style={{"display": "flex", "gap": "8px", "marginTop": "2px"}}>
                      <button className="btn btn-line" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}}>
                        {"Preview"}
                      </button>
                      <button className="btn btn-gold" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}} onClick={go("/dealer/marketing/email/editor")}>
                        {"Use Template →"}
                      </button>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="tpl-card">
                  {" "}
                  <div className="tpl-preview" style={{"background": "linear-gradient(135deg,#B3432E,#C96B4C)"}}>
                    {" "}
                    <div style={{"width": "26px", "height": "26px", "borderRadius": "7px", "background": "#fff3"}}></div>
                    {" "}
                    <div style={{"color": "#fff", "fontWeight": "700", "fontSize": "13px"}}>
                      {"Overdue Payment Notice"}
                    </div>
                    {" "}
                    <div style={{"color": "#F8E4DF", "fontSize": "10.5px"}}>
                      {"\"We noticed your last installment is overdue...\""}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"padding": "14px 16px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                    {" "}
                    <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"Payments"}
                      </span>
                      <span className="ai-pill">
                        {"✨ AI-Editable"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                      {"Polite but firm — tone can be adjusted with AI."}
                    </div>
                    {" "}
                    <div style={{"display": "flex", "gap": "8px", "marginTop": "2px"}}>
                      <button className="btn btn-line" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}}>
                        {"Preview"}
                      </button>
                      <button className="btn btn-gold" style={{"padding": "8px 14px", "fontSize": "12px", "flex": "1"}} onClick={go("/dealer/marketing/email/editor")}>
                        {"Use Template →"}
                      </button>
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* CAMPAIGN SIDE PANEL */}
            {" "}
            <div style={{"borderLeft": "1px solid var(--line)", "background": "#fff", "padding": "26px 24px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "gap": "22px"}}>
              {" "}
              <div className="card" style={{"padding": "16px 18px", "background": "var(--violet-bg)", "borderColor": "var(--violet)"}}>
                {" "}
                <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "6px"}}>
                  <span style={{"fontSize": "15px"}}>
                    {"✨"}
                  </span>
                  <span style={{"fontWeight": "700", "fontSize": "13px", "color": "var(--violet)"}}>
                    {"AI Content Assistant"}
                  </span>
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "#4A3A6B", "lineHeight": "1.6"}}>
                  {"Pick any template, then ask AI to rewrite the subject, tone, or offer details — no design work required."}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px", "marginBottom": "10px"}}>
                  {"Send To"}
                </div>
                {" "}
                <div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap"}}>
                  {" "}
                  <div className="chip selected">
                    {"All Customers (34)"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Active Installment Holders (26)"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Fully Paid (5)"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Past Inquiries (18)"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px", "marginBottom": "10px"}}>
                  {"Recent Campaigns"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
                  {" "}
                  <div className="card" style={{"padding": "14px"}}>
                    {" "}
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                      <span style={{"fontWeight": "600", "fontSize": "12.5px"}}>
                        {"Eid Down Payment Offer"}
                      </span>
                      <span style={{"fontSize": "10.5px", "color": "var(--muted)"}}>
                        {"Sep 12"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11px", "color": "var(--muted)", "marginTop": "4px"}}>
                      {"Sent to 34 · Opened 61% · Clicked 19%"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="card" style={{"padding": "14px"}}>
                    {" "}
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                      <span style={{"fontWeight": "600", "fontSize": "12.5px"}}>
                        {"New Listing — DHA Phase 9"}
                      </span>
                      <span style={{"fontSize": "10.5px", "color": "var(--muted)"}}>
                        {"Aug 28"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11px", "color": "var(--muted)", "marginTop": "4px"}}>
                      {"Sent to 12 · Opened 74% · Clicked 33%"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="card" style={{"padding": "14px"}}>
                    {" "}
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                      <span style={{"fontWeight": "600", "fontSize": "12.5px"}}>
                        {"Installment Reminder Batch"}
                      </span>
                      <span style={{"fontSize": "10.5px", "color": "var(--muted)"}}>
                        {"Aug 14"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11px", "color": "var(--muted)", "marginTop": "4px"}}>
                      {"Sent to 26 · Opened 88% · Clicked —"}
                    </div>
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
          {" "}
        </div>
        {" "}
      </div>
    </div>
  );
}
