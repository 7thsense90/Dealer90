// AUTO-GENERATED from design/boards/Dealer-Marketing-SMS.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-Marketing-SMS.css';
import { useGo } from '../lib/nav';

export const title = "Dealer — Marketing — SMS Templates";

export default function DealerMarketingSMSScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-marketing-sms">
      <div style={{"width": "1440px", "height": "1040px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex"}}>
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
              <div className="mtab" data-nav="1" onClick={go("/dealer/marketing/email")}>
                {"Email Marketing"}
              </div>
              {" "}
              <div className="mtab active" data-nav="1" onClick={go("/dealer/marketing/sms")}>
                {"SMS Marketing"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "display": "grid", "gridTemplateColumns": "1fr 380px", "overflow": "hidden"}}>
            {" "}
            {/* SMS TEMPLATE LIST */}
            {" "}
            <div style={{"padding": "28px 40px", "overflowY": "auto"}}>
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "marginBottom": "18px"}}>
                {" "}
                <h2 style={{"fontSize": "16px"}}>
                  {"Pre-Built SMS Templates"}
                </h2>
                {" "}
                <div style={{"display": "flex", "gap": "8px"}}>
                  {" "}
                  <div className="chip selected">
                    {"All"}
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
                  <div className="chip">
                    {"Onboarding"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
                {" "}
                <div className="sms-row">
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "8px"}}>
                      <span style={{"fontWeight": "700", "fontSize": "13px"}}>
                        {"Installment Due Reminder"}
                      </span>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"Payments"}
                      </span>
                      <span className="ai-pill">
                        {"✨ Edit with AI"}
                      </span>
                    </div>
                    {" "}
                    <div className="sms-bubble">
                      {"Dear {{customer_name}}, your installment of PKR {{amount}} for {{property}} is due on {{due_date}}. Pay via the Dealer90 app. — Al-Noor Builders"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "10.5px", "color": "var(--muted)", "marginTop": "6px"}}>
                      {"128 / 160 characters"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                    <button className="btn btn-line" style={{"padding": "8px 16px", "fontSize": "12px"}}>
                      {"Preview"}
                    </button>
                    <button className="btn btn-gold" style={{"padding": "8px 16px", "fontSize": "12px"}}>
                      {"Use Template →"}
                    </button>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="sms-row">
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "8px"}}>
                      <span style={{"fontWeight": "700", "fontSize": "13px"}}>
                        {"New Listing Alert"}
                      </span>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Offers"}
                      </span>
                      <span className="ai-pill">
                        {"✨ Edit with AI"}
                      </span>
                    </div>
                    {" "}
                    <div className="sms-bubble">
                      {"New listing alert! A {{plot_size}} plot just opened in {{location}} — starting PKR {{price}}. Reply YES for details. — Al-Noor Builders"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "10.5px", "color": "var(--muted)", "marginTop": "6px"}}>
                      {"121 / 160 characters"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                    <button className="btn btn-line" style={{"padding": "8px 16px", "fontSize": "12px"}}>
                      {"Preview"}
                    </button>
                    <button className="btn btn-gold" style={{"padding": "8px 16px", "fontSize": "12px"}}>
                      {"Use Template →"}
                    </button>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="sms-row">
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "8px"}}>
                      <span style={{"fontWeight": "700", "fontSize": "13px"}}>
                        {"Overdue Payment Notice"}
                      </span>
                      <span className="tag" style={{"background": "#F8E4DF", "color": "#B3432E"}}>
                        {"Payments"}
                      </span>
                      <span className="ai-pill">
                        {"✨ Edit with AI"}
                      </span>
                    </div>
                    {" "}
                    <div className="sms-bubble">
                      {"Hi {{customer_name}}, your installment of PKR {{amount}} was due {{due_date}} and is now overdue. Please pay to avoid a late fee. — Al-Noor Builders"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "10.5px", "color": "var(--muted)", "marginTop": "6px"}}>
                      {"145 / 160 characters"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                    <button className="btn btn-line" style={{"padding": "8px 16px", "fontSize": "12px"}}>
                      {"Preview"}
                    </button>
                    <button className="btn btn-gold" style={{"padding": "8px 16px", "fontSize": "12px"}}>
                      {"Use Template →"}
                    </button>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="sms-row">
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "8px"}}>
                      <span style={{"fontWeight": "700", "fontSize": "13px"}}>
                        {"Festive / Seasonal Offer"}
                      </span>
                      <span className="tag" style={{"background": "var(--violet-bg)", "color": "var(--violet)"}}>
                        {"Offers"}
                      </span>
                      <span className="ai-pill">
                        {"✨ Edit with AI"}
                      </span>
                    </div>
                    {" "}
                    <div className="sms-bubble">
                      {"Eid Mubarak {{customer_name}}! Enjoy 10% off your down payment this week only. Reply INFO to claim. — Al-Noor Builders"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "10.5px", "color": "var(--muted)", "marginTop": "6px"}}>
                      {"116 / 160 characters"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                    <button className="btn btn-line" style={{"padding": "8px 16px", "fontSize": "12px"}}>
                      {"Preview"}
                    </button>
                    <button className="btn btn-gold" style={{"padding": "8px 16px", "fontSize": "12px"}}>
                      {"Use Template →"}
                    </button>
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="sms-row">
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "8px"}}>
                      <span style={{"fontWeight": "700", "fontSize": "13px"}}>
                        {"Welcome New Customer"}
                      </span>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Onboarding"}
                      </span>
                      <span className="ai-pill">
                        {"✨ Edit with AI"}
                      </span>
                    </div>
                    {" "}
                    <div className="sms-bubble">
                      {"Welcome to Dealer90, {{customer_name}}! Your plan for {{property}} is now active. Track it anytime in the app. — Al-Noor Builders"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "10.5px", "color": "var(--muted)", "marginTop": "6px"}}>
                      {"123 / 160 characters"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                    <button className="btn btn-line" style={{"padding": "8px 16px", "fontSize": "12px"}}>
                      {"Preview"}
                    </button>
                    <button className="btn btn-gold" style={{"padding": "8px 16px", "fontSize": "12px"}}>
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
            {/* PHONE PREVIEW + SEND PANEL */}
            {" "}
            <div style={{"borderLeft": "1px solid var(--line)", "background": "#fff", "padding": "26px 24px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "gap": "22px", "alignItems": "center"}}>
              {" "}
              <div className="card" style={{"padding": "16px 18px", "background": "var(--violet-bg)", "borderColor": "var(--violet)", "width": "100%", "boxSizing": "border-box"}}>
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
                  {"Ask AI to shorten a message to fit 160 characters, adjust tone, or translate to Urdu — right from the template."}
                </div>
                {" "}
              </div>
              {" "}
              <div className="phone">
                {" "}
                <div style={{"background": "#0C1424", "borderRadius": "22px", "padding": "16px 10px", "display": "flex", "flexDirection": "column", "gap": "8px", "minHeight": "220px"}}>
                  {" "}
                  <div style={{"color": "#8A97AD", "fontSize": "10px", "textAlign": "center", "marginBottom": "4px"}}>
                    {"Al-Noor Builders"}
                  </div>
                  {" "}
                  <div style={{"background": "#1E2E4A", "color": "#fff", "borderRadius": "14px 14px 14px 3px", "padding": "10px 12px", "fontSize": "11.5px", "lineHeight": "1.5"}}>
                    {"Dear Usman, your installment of PKR 218,750 for 5 Marla Corner Villa is due on Oct 5. Pay via the Dealer90 app. — Al-Noor Builders"}
                  </div>
                  {" "}
                  <div style={{"color": "#6B7690", "fontSize": "9px", "textAlign": "right"}}>
                    {"Delivered"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"width": "100%"}}>
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
                </div>
                {" "}
              </div>
              {" "}
              <button className="btn btn-gold" style={{"width": "100%"}}>
                {"Send to 34 Customers →"}
              </button>
              {" "}
              <div style={{"width": "100%"}}>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px", "marginBottom": "10px"}}>
                  {"Recent SMS Campaigns"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
                  {" "}
                  <div className="card" style={{"padding": "14px"}}>
                    {" "}
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                      <span style={{"fontWeight": "600", "fontSize": "12.5px"}}>
                        {"Installment Reminder Batch"}
                      </span>
                      <span style={{"fontSize": "10.5px", "color": "var(--muted)"}}>
                        {"Sep 18"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11px", "color": "var(--muted)", "marginTop": "4px"}}>
                      {"Sent to 26 · Delivered 100%"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="card" style={{"padding": "14px"}}>
                    {" "}
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                      <span style={{"fontWeight": "600", "fontSize": "12.5px"}}>
                        {"Eid Offer Blast"}
                      </span>
                      <span style={{"fontSize": "10.5px", "color": "var(--muted)"}}>
                        {"Sep 12"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11px", "color": "var(--muted)", "marginTop": "4px"}}>
                      {"Sent to 34 · Delivered 97%"}
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
