// AUTO-GENERATED from design/boards/Dealer-CustomerOffers.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-CustomerOffers.css';
import { useGo } from '../lib/nav';

export const title = "Dealer — Send Offers to Customers";

export default function DealerCustomerOffersScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-customeroffers">
      <div style={{"width": "1440px", "height": "1260px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex"}}>
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
            <div className="navitem active" data-nav="1" onClick={go("/dealer/offers")}>
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
        <div style={{"flex": "1", "display": "flex", "flexDirection": "column", "overflow": "hidden"}}>
          {" "}
          <div style={{"height": "80px", "background": "#fff", "borderBottom": "1px solid var(--line)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 40px", "flexShrink": "0"}}>
            {" "}
            <div>
              {" "}
              <h1 style={{"fontSize": "21px"}}>
                {"Send Offers to Your Customers"}
              </h1>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--muted)"}}>
                {"Tell your existing customer base about a new listing, plan or promotion"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "display": "grid", "gridTemplateColumns": "1fr 420px", "overflow": "hidden"}}>
            {" "}
            {/* COMPOSER */}
            {" "}
            <div style={{"padding": "28px 40px", "overflowY": "auto"}}>
              {" "}
              <h2 style={{"fontSize": "16px", "marginBottom": "18px"}}>
                {"New Broadcast"}
              </h2>
              {" "}
              <div className="field" style={{"marginBottom": "16px"}}>
                <label>
                  {"Title"}
                </label>
                <input placeholder="e.g. New Plots Now Open in DHA Phase 9" />
              </div>
              {" "}
              <div className="field" style={{"marginBottom": "16px"}}>
                <label>
                  {"Message"}
                </label>
                <textarea rows={4} placeholder="Write what you'd like to tell your customers..." defaultValue="" />
              </div>
              {" "}
              <div className="field" style={{"marginBottom": "20px"}}>
                <label>
                  {"Link a Property (optional)"}
                </label>
                <select>
                  <option>
                    {"None"}
                  </option>
                  <option>
                    {"5 Marla Corner Villa — DHA Phase 6"}
                  </option>
                  <option>
                    {"Shop No. 4, Meridian Plaza"}
                  </option>
                  <option>
                    {"10 Marla Residential Plot — Bahria Town"}
                  </option>
                </select>
              </div>
              {" "}
              <div style={{"marginBottom": "20px"}}>
                {" "}
                <label style={{"fontSize": "12px", "fontWeight": "700", "display": "block", "marginBottom": "10px"}}>
                  {"Audience"}
                </label>
                {" "}
                <div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap"}}>
                  {" "}
                  <div className="chip selected">
                    {"All Customers (34)"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Buyers in DHA Phase 6 (12)"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"On-Track Payers (26)"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Fully Paid Customers (5)"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "16px 20px", "background": "var(--gold-light)", "borderColor": "var(--gold)", "marginBottom": "22px"}}>
                {" "}
                <div style={{"fontSize": "12px", "color": "#5B4A2A", "lineHeight": "1.6"}}>
                  {"Sent as an in-app notification and SMS to customers in the selected audience. Customers can opt out of promotional messages at any time from their account."}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "gap": "12px"}}>
                {" "}
                <button className="btn btn-line">
                  {"Save Draft"}
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
            {/* PREVIEW + HISTORY */}
            {" "}
            <div style={{"borderLeft": "1px solid var(--line)", "background": "#fff", "padding": "26px 24px", "overflowY": "auto", "display": "flex", "flexDirection": "column", "gap": "22px"}}>
              {" "}
              <div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px", "marginBottom": "10px"}}>
                  {"Preview"}
                </div>
                {" "}
                <div className="card" style={{"padding": "16px"}}>
                  {" "}
                  <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "marginBottom": "8px"}}>
                    <div style={{"width": "24px", "height": "24px", "borderRadius": "7px", "background": "var(--gold-light)"}}></div>
                    <span style={{"fontSize": "11.5px", "fontWeight": "700"}}>
                      {"Al-Noor Builders"}
                    </span>
                  </div>
                  {" "}
                  <div style={{"fontWeight": "700", "fontSize": "13px", "marginBottom": "4px"}}>
                    {"New Plots Now Open in DHA Phase 9"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "12px", "color": "var(--muted)", "lineHeight": "1.5"}}>
                    {"Write what you'd like to tell your customers..."}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "13px", "marginBottom": "10px"}}>
                  {"Past Broadcasts"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
                  {" "}
                  <div className="card" style={{"padding": "14px"}}>
                    {" "}
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                      <span style={{"fontWeight": "600", "fontSize": "12.5px"}}>
                        {"Eid Discount on Down Payment"}
                      </span>
                      <span style={{"fontSize": "10.5px", "color": "var(--muted)"}}>
                        {"Sep 12"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11px", "color": "var(--muted)", "marginTop": "4px"}}>
                      {"Sent to 34 customers"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="card" style={{"padding": "14px"}}>
                    {" "}
                    <div style={{"display": "flex", "justifyContent": "space-between"}}>
                      <span style={{"fontWeight": "600", "fontSize": "12.5px"}}>
                        {"New Commercial Units — Gulshan"}
                      </span>
                      <span style={{"fontSize": "10.5px", "color": "var(--muted)"}}>
                        {"Aug 28"}
                      </span>
                    </div>
                    {" "}
                    <div style={{"fontSize": "11px", "color": "var(--muted)", "marginTop": "4px"}}>
                      {"Sent to 12 customers"}
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
