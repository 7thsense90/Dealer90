// AUTO-GENERATED from design/boards/Dealer-Marketing-EmailEditor.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-Marketing-EmailEditor.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer — Marketing — Edit Email With AI";

export default function DealerMarketingEmailEditorScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-marketing-emaileditor">
      <div style={{"width": "1440px", "height": "860px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex"}}>
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
          <div style={{"height": "80px", "background": "#fff", "borderBottom": "1px solid var(--line)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 40px", "flexShrink": "0"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
              {" "}
              <A style={{"color": "var(--muted)", "fontSize": "13px"}} to="/dealer/marketing/email">
                {"← Templates"}
              </A>
              {" "}
              <div style={{"width": "1px", "height": "20px", "background": "var(--line)"}}></div>
              {" "}
              <div>
                {" "}
                <h1 style={{"fontSize": "19px"}}>
                  {"New Listing Announcement"}
                </h1>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--muted)"}}>
                  {"Editing with AI · Listings template"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "10px"}}>
              {" "}
              <button className="btn btn-line">
                {"Send Test Email"}
              </button>
              {" "}
              <button className="btn btn-gold">
                {"Send to 34 Customers →"}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "display": "grid", "gridTemplateColumns": "360px 1fr", "overflow": "hidden"}}>
            {" "}
            {/* AI ASSISTANT PANEL */}
            {" "}
            <div style={{"borderRight": "1px solid var(--line)", "background": "#fff", "padding": "24px 22px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
              {" "}
              <div className="card" style={{"padding": "16px 18px", "background": "var(--violet-bg)", "borderColor": "var(--violet)"}}>
                {" "}
                <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "8px"}}>
                  <span style={{"fontSize": "15px"}}>
                    {"✨"}
                  </span>
                  <span style={{"fontWeight": "700", "fontSize": "13px", "color": "var(--violet)"}}>
                    {"AI Content Assistant"}
                  </span>
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "#4A3A6B", "lineHeight": "1.6"}}>
                  {"Tell AI what to change and it will rewrite the subject line, headline, and body — matched to your property details and tone."}
                </div>
                {" "}
              </div>
              {" "}
              <div className="field">
                {" "}
                <label>
                  {"Ask AI to update this email"}
                </label>
                {" "}
                <textarea rows={3} placeholder="e.g. Make it more urgent and mention the 10% Eid discount" defaultValue="Rewrite this to highlight the new 5 Marla plots in DHA Phase 9 and make the tone warm but confident." />
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div style={{"fontSize": "12px", "fontWeight": "700", "marginBottom": "9px"}}>
                  {"Quick prompts"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
                  {" "}
                  <div className="ai-chip">
                    {"Make it more urgent"}
                  </div>
                  {" "}
                  <div className="ai-chip">
                    {"Add Eid greeting"}
                  </div>
                  {" "}
                  <div className="ai-chip">
                    {"Shorten it"}
                  </div>
                  {" "}
                  <div className="ai-chip">
                    {"Translate to Urdu"}
                  </div>
                  {" "}
                  <div className="ai-chip">
                    {"More formal tone"}
                  </div>
                  {" "}
                  <div className="ai-chip">
                    {"Add price range"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <button className="btn btn-ai" style={{"width": "100%", "padding": "13px"}}>
                {"✨ Regenerate with AI"}
              </button>
              {" "}
              <div className="card" style={{"padding": "14px 16px"}}>
                {" "}
                <div style={{"fontSize": "11.5px", "fontWeight": "700", "color": "var(--ink)", "marginBottom": "8px"}}>
                  {"AI change log"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "8px", "fontSize": "11px", "color": "var(--muted)", "lineHeight": "1.5"}}>
                  {" "}
                  <div>
                    {"✓ Rewrote headline to lead with plot size & location"}
                  </div>
                  {" "}
                  <div>
                    {"✓ Updated CTA button text to \"View the Plots →\""}
                  </div>
                  {" "}
                  <div>
                    {"✓ Added a line about limited availability"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "10.5px", "color": "var(--muted)", "lineHeight": "1.6", "borderTop": "1px solid var(--line)", "paddingTop": "14px"}}>
                {"Every field below stays editable by hand after AI generates it — nothing sends until you review and approve it."}
              </div>
              {" "}
            </div>
            {" "}
            {/* EMAIL PREVIEW */}
            {" "}
            <div style={{"padding": "28px 40px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "alignItems": "center"}}>
              {" "}
              <div style={{"width": "640px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
                {" "}
                <div className="field" style={{"position": "relative"}}>
                  {" "}
                  <label>
                    {"Subject Line"}
                  </label>
                  {" "}
                  <div className="editable">
                    <span className="ai-mark">
                      {"✨ AI-written"}
                    </span>
                    {"New 5 Marla Plots Just Opened in DHA Phase 9"}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="card" style={{"overflow": "hidden"}}>
                  {" "}
                  <div style={{"height": "150px", "background": "linear-gradient(135deg,var(--navy),var(--navy-2))", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
                    {" "}
                    <div style={{"width": "64px", "height": "64px", "borderRadius": "14px", "background": "var(--gold-light)"}}></div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"padding": "26px 28px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
                    {" "}
                    <div className="editable" style={{"position": "relative"}}>
                      {" "}
                      <span className="ai-mark">
                        {"✨ AI-written"}
                      </span>
                      {" "}
                      <h2 style={{"fontSize": "20px", "color": "var(--navy)"}}>
                        {"A New Plot in DHA Phase 9 — Just for You, {{customer_name}}"}
                      </h2>
                      {" "}
                    </div>
                    {" "}
                    <div className="editable" style={{"fontSize": "13.5px", "color": "var(--ink)", "lineHeight": "1.7"}}>
                      {" Based on what you've been browsing, we thought you'd want a first look: a 5 Marla corner plot has just opened in DHA Phase 9, with flexible installment plans starting from PKR 285,000/month. "}
                    </div>
                    {" "}
                    <div className="card" style={{"padding": "14px 16px", "background": "var(--ivory)", "display": "flex", "gap": "12px", "alignItems": "center"}}>
                      {" "}
                      <div style={{"width": "56px", "height": "44px", "borderRadius": "8px", "background": "#DCD3BE", "flexShrink": "0"}}></div>
                      {" "}
                      <div>
                        {" "}
                        <div style={{"fontWeight": "700", "fontSize": "13px"}}>
                          {"5 Marla Corner Plot, DHA Phase 9"}
                        </div>
                        {" "}
                        <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                          {"PKR 1.1 Cr · Installments from PKR 285,000/mo"}
                        </div>
                        {" "}
                      </div>
                      {" "}
                    </div>
                    {" "}
                    <div className="editable" style={{"position": "relative", "textAlign": "center", "padding": "16px"}}>
                      {" "}
                      <span className="ai-mark">
                        {"✨ AI-written"}
                      </span>
                      {" "}
                      <button className="btn btn-gold" style={{"padding": "13px 26px"}}>
                        {"View the Plots →"}
                      </button>
                      {" "}
                    </div>
                    {" "}
                    <div style={{"fontSize": "10.5px", "color": "var(--muted)", "textAlign": "center", "borderTop": "1px solid var(--line)", "paddingTop": "14px"}}>
                      {"Al-Noor Builders · Sent via Dealer90.com · "}
                      <A style={{"textDecoration": "underline"}}>
                        {"Unsubscribe"}
                      </A>
                    </div>
                    {" "}
                  </div>
                  {" "}
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
