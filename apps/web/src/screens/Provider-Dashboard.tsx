// AUTO-GENERATED from design/boards/Provider-Dashboard.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Provider-Dashboard.css';
import { useGo } from '../lib/nav';

export const title = "Service Provider — Incoming Build Requests";

export default function ProviderDashboardScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-provider-dashboard">
      <div style={{"width": "1440px", "height": "1200px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex"}}>
        {" "}
        {/* SIDEBAR */}
        {" "}
        <div style={{"width": "250px", "flexShrink": "0", "background": "var(--navy)", "display": "flex", "flexDirection": "column", "padding": "26px 16px"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 8px 28px"}} data-nav="1" onClick={go("/provider")}>
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
            <div className="navitem active" data-nav="1" onClick={go("/provider")}>
              {"📥 Incoming Requests"}
              <span className="badge">
                {"5"}
              </span>
            </div>
            {" "}
            <div className="navitem">
              {"📄 My Quotes"}
            </div>
            {" "}
            <div className="navitem">
              {"✅ Active Projects"}
            </div>
            {" "}
            <div className="navitem">
              {"🪪 Credentials & Verification"}
            </div>
            {" "}
            <div className="navitem">
              {"👤 Profile"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"marginTop": "auto", "display": "flex", "flexDirection": "column", "gap": "10px", "padding": "14px 8px", "borderTop": "1px solid #2A3E5C"}}>
            {" "}
            <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
              {" "}
              <div style={{"width": "34px", "height": "34px", "borderRadius": "50%", "background": "var(--gold-light)"}}></div>
              {" "}
              <div>
                {" "}
                <div style={{"color": "#fff", "fontSize": "13px", "fontWeight": "600"}}>
                  {"Al-Rasheed Architects"}
                </div>
                {" "}
                <div style={{"color": "#8A97AD", "fontSize": "11px"}}>
                  {"Verified · Blueprint & Design"}
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
        {/* MAIN */}
        {" "}
        <div style={{"flex": "1", "display": "flex", "flexDirection": "column"}}>
          {" "}
          <div style={{"height": "80px", "background": "#fff", "borderBottom": "1px solid var(--line)", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 40px", "flexShrink": "0"}}>
            {" "}
            <div>
              {" "}
              <h1 style={{"fontSize": "21px"}}>
                {"Incoming Build Requests"}
              </h1>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--muted)"}}>
                {"Matched to your category, city & service area"}
              </div>
              {" "}
            </div>
            {" "}
            <div className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
              {"Credibility Score 8.7 / 10"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"flex": "1", "display": "grid", "gridTemplateColumns": "420px 1fr", "overflow": "hidden"}}>
            {" "}
            {/* LIST */}
            {" "}
            <div style={{"borderRight": "1px solid var(--line)", "padding": "24px", "display": "flex", "flexDirection": "column", "gap": "12px", "overflowY": "auto"}}>
              {" "}
              <div className="req-row active">
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between"}}>
                  <span className="tag" style={{"background": "var(--navy)", "color": "#fff"}}>
                    {"Blueprint & Design"}
                  </span>
                  <span style={{"fontSize": "11px", "color": "var(--muted)"}}>
                    {"2 days ago"}
                  </span>
                </div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "14px"}}>
                  {"10 Marla Plot — DHA Phase 6, Lahore"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--muted)"}}>
                  {"Budget PKR 50L–1.5 Cr · 2-storey residential · Start within 3 months"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="req-row">
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between"}}>
                  <span className="tag" style={{"background": "var(--navy)", "color": "#fff"}}>
                    {"Blueprint & Design"}
                  </span>
                  <span style={{"fontSize": "11px", "color": "var(--muted)"}}>
                    {"4 days ago"}
                  </span>
                </div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "14px"}}>
                  {"1 Kanal Plot — Bahria Town, Lahore"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--muted)"}}>
                  {"Budget PKR 3 Cr+ · Farmhouse · Start immediately"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="req-row">
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between"}}>
                  <span className="tag" style={{"background": "var(--navy)", "color": "#fff"}}>
                    {"Blueprint & Design"}
                  </span>
                  <span style={{"fontSize": "11px", "color": "var(--muted)"}}>
                    {"6 days ago"}
                  </span>
                </div>
                {" "}
                <div style={{"fontWeight": "700", "fontSize": "14px"}}>
                  {"5 Marla Plot — Johar Town, Lahore"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--muted)"}}>
                  {"Budget under PKR 50L · Single-storey · Just exploring"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* QUOTE BUILDER */}
            {" "}
            <div style={{"padding": "32px 40px", "overflowY": "auto"}}>
              {" "}
              <h2 style={{"fontSize": "19px", "marginBottom": "6px"}}>
                {"Build Your Quote"}
              </h2>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--muted)", "marginBottom": "22px"}}>
                {"10 Marla Plot — DHA Phase 6, Lahore · Requested by a verified Dealer90.com customer (contact shared after acceptance)"}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px", "marginBottom": "16px"}}>
                {" "}
                <div className="field">
                  <label>
                    {"Estimated Design Fee (PKR)"}
                  </label>
                  <input placeholder="e.g. 350,000" />
                </div>
                {" "}
                <div className="field">
                  <label>
                    {"Estimated Timeline"}
                  </label>
                  <select>
                    <option>
                      {"2–3 weeks"}
                    </option>
                    <option>
                      {"4–6 weeks"}
                    </option>
                    <option>
                      {"6–8 weeks"}
                    </option>
                  </select>
                </div>
                {" "}
              </div>
              {" "}
              <div className="field" style={{"marginBottom": "16px"}}>
                <label>
                  {"What's Included"}
                </label>
                <textarea rows={3} placeholder="e.g. Architectural drawings, structural design, 2 revisions, LDA submission-ready file" defaultValue="" />
              </div>
              {" "}
              <div className="field" style={{"marginBottom": "16px"}}>
                <label>
                  {"Message to Customer"}
                </label>
                <textarea rows={3} placeholder="Introduce your firm and relevant past projects..." defaultValue="" />
              </div>
              {" "}
              <div className="card" style={{"padding": "16px 20px", "background": "var(--gold-light)", "borderColor": "var(--gold)", "marginBottom": "22px"}}>
                {" "}
                <div style={{"fontSize": "12px", "color": "#5B4A2A", "lineHeight": "1.6"}}>
                  {"This quote is shown to the customer as issued by you, not by Dealer90.com. Final scope, contract terms and payment are agreed directly between you and the customer."}
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
                  {"Send Quote →"}
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
