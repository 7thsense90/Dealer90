// AUTO-GENERATED from design/boards/SuperAdmin-DealerCredibility.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './SuperAdmin-DealerCredibility.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Dealer Credibility Profile";

export default function SuperAdminDealerCredibilityScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-superadmin-dealercredibility">
      <div style={{"width": "1440px", "height": "1360px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
        {" "}
        {/* SIDEBAR */}
        {" "}
        <div style={{"width": "250px", "flexShrink": "0", "background": "var(--navy)", "padding": "28px 16px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 10px 24px"}} data-nav="1" onClick={go("/admin")}>
            {" "}
            <div style={{"width": "58px", "height": "34px", "borderRadius": "8px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 400-600-700',serif", "fontWeight": "700", "color": "var(--navy)", "fontSize": "14px", "letterSpacing": "-.02em"}}>
              {"D90"}
            </div>
            {" "}
            <div style={{"color": "#fff", "fontFamily": "'Work Sans',sans-serif", "fontSize": "18px", "fontWeight": "700", "letterSpacing": "-.01em"}}>
              {"Dealer90.com Admin"}
            </div>
            {" "}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/admin")}>
            {"Dashboard"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/admin/approvals")}>
            {"Dealer Approvals"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/admin/feature-access")}>
            {"All Dealers"}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/admin/credibility")}>
            {"Dealer Credibility"}
          </div>
          {" "}
          <div className="navitem">
            {"All Properties"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/admin/customers")}>
            {"Customers"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/admin/ai-scraper")}>
            {"🤖 AI Scraper & Onboarding"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/admin/ai-providers")}>
            {"⚙️ AI Provider Settings"}
          </div>
          {" "}
          <div className="navitem">
            {"Reports"}
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
              {"Super Admin"}
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
          <div style={{"height": "80px", "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 36px", "borderBottom": "1px solid var(--line)"}}>
            {" "}
            <div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Dealer Credibility / Al-Noor Builders"}
              </div>
              {" "}
              <h1 style={{"fontSize": "22px", "color": "var(--navy)"}}>
                {"Dealer Credibility Profile"}
              </h1>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "10px"}}>
              {" "}
              <button className="btn btn-outline">
                {"View Public Profile"}
              </button>
              {" "}
              <button className="btn btn-gold">
                {"Save Changes"}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 36px", "display": "grid", "gridTemplateColumns": "1.4fr 1fr", "gap": "24px", "overflow": "auto"}}>
            {" "}
            {/* LEFT: verification form */}
            {" "}
            <div className="card" style={{"padding": "26px", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
                {" "}
                <div style={{"width": "44px", "height": "44px", "borderRadius": "10px", "background": "var(--gold-light)"}}></div>
                {" "}
                <div>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "16px"}}>
                    {"Al-Noor Builders"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                    {"Lahore · Member since Mar 2024 · 34 listings"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"height": "1px", "background": "var(--line)"}}></div>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "14px", "color": "var(--navy)"}}>
                {"Legal & Accreditation"}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
                {" "}
                <div>
                  {" "}
                  <label>
                    {"Accreditation Authority"}
                  </label>
                  {" "}
                  <select className="field">
                    <option>
                      {"LDA — Lahore Development Authority"}
                    </option>
                    <option>
                      {"CDA — Capital Development Authority"}
                    </option>
                    <option>
                      {"RDA — Rawalpindi Development Authority"}
                    </option>
                    <option>
                      {"SBCA"}
                    </option>
                    <option>
                      {"Cantonment Board"}
                    </option>
                  </select>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <label>
                    {"NOC Status"}
                  </label>
                  {" "}
                  <div style={{"display": "flex", "gap": "10px"}}>
                    {" "}
                    <div className="chip active">
                      {"Approved"}
                    </div>
                    {" "}
                    <div className="chip">
                      {"Pending"}
                    </div>
                    {" "}
                    <div className="chip">
                      {"Not Applicable"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"height": "1px", "background": "var(--line)"}}></div>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "14px", "color": "var(--navy)"}}>
                {"Delivery Track Record"}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
                {" "}
                <div>
                  <label>
                    {"Projects Delivered On Time"}
                  </label>
                  <input className="field" defaultValue="11 of 13" />
                </div>
                {" "}
                <div>
                  <label>
                    {"Average Delivery Delay"}
                  </label>
                  <input className="field" defaultValue="2.5 months" />
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Admin Notes (internal, not shown to customers)"}
                </label>
                {" "}
                <textarea className="field" rows={2} defaultValue="Consistent NOC filings, responsive to customer complaints. One project (Meridian Heights) delayed 6 months due to utility approvals." />
                {" "}
              </div>
              {" "}
              <div style={{"height": "1px", "background": "var(--line)"}}></div>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "14px", "color": "var(--navy)"}}>
                {"Projection Accuracy Track Record"}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "-10px"}}>
                {"How this dealer's 1-year price projections compared to actual resale outcomes on the platform."}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "16px"}}>
                {" "}
                <div className="card" style={{"padding": "14px"}}>
                  {" "}
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                    {"Projections Resolved"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                    {"11 of 13"}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="card" style={{"padding": "14px"}}>
                  {" "}
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                    {"Average Variance"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--green)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                    {"±8.4%"}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="card" style={{"padding": "14px"}}>
                  {" "}
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                    {"Outlier Flags (Pricing Review)"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--amber)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                    {"1"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Dealers with variance consistently above 20%, or repeated outlier flags, are limited from publishing new projections until reviewed."}
              </div>
              {" "}
              <div style={{"height": "1px", "background": "var(--line)"}}></div>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "14px", "color": "var(--navy)"}}>
                {"Overall Credibility Score"}
              </div>
              {" "}
              <div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "marginBottom": "8px"}}>
                  {" "}
                  <span style={{"color": "var(--ink-soft)"}}>
                    {"Sets the trust badge shown on their public profile and listings"}
                  </span>
                  {" "}
                  <span style={{"fontWeight": "700", "color": "var(--green)"}}>
                    {"84 / 100 — Strong"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"height": "10px", "borderRadius": "999px", "background": "#EFEAE0", "overflow": "hidden"}}>
                  {" "}
                  <div style={{"width": "84%", "height": "100%", "background": "var(--green)"}}></div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* RIGHT: public preview */}
            {" "}
            <div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
              {" "}
              <div className="card" style={{"padding": "16px"}}>
                {" "}
                <div style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--ink-soft)", "marginBottom": "12px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                  {"How This Appears to Customers"}
                </div>
                {" "}
                <div style={{"border": "1px solid var(--line)", "borderRadius": "12px", "padding": "18px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                  {" "}
                  <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
                    {" "}
                    <div style={{"width": "36px", "height": "36px", "borderRadius": "8px", "background": "var(--gold-light)"}}></div>
                    {" "}
                    <div>
                      {" "}
                      <div style={{"fontWeight": "600", "fontSize": "14px"}}>
                        {"Al-Noor Builders"}
                      </div>
                      {" "}
                      <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                        {"Lahore"}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)", "alignSelf": "flex-start"}}>
                    {"✓ Verified · Strong Track Record"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)", "alignSelf": "flex-start"}}>
                    {"LDA Approved · NOC Cleared"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)", "alignSelf": "flex-start"}}>
                    {"Projections within ±8.4% historically"}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "20px"}}>
                {" "}
                <div style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--ink-soft)", "marginBottom": "10px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                  {"Tagged Growth Corridors"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
                  {" "}
                  <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                    {"DHA Phase 9–10 Expansion"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                    {"Ring Road Southern Loop"}
                  </span>
                  {" "}
                  <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                    {"Established Scheme"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "10px"}}>
                  {"Set per-property by the dealer, reviewed here before it's used in Property Advisor matches."}
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
