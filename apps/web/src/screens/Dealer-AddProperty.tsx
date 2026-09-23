// AUTO-GENERATED from design/boards/Dealer-AddProperty.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-AddProperty.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Add Property";

export default function DealerAddPropertyScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-addproperty">
      <div style={{"width": "1440px", "height": "1900px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex", "flexDirection": "column"}}>
        {" "}
        <div style={{"height": "76px", "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 40px", "borderBottom": "1px solid var(--line)", "background": "#fff"}}>
          {" "}
          <div>
            {" "}
            <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
              {"Properties / Add New"}
            </div>
            {" "}
            <h1 style={{"fontSize": "20px", "color": "var(--navy)"}}>
              {"Add Property"}
            </h1>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "10px"}}>
            {" "}
            <button className="btn btn-outline">
              {"Save as Draft"}
            </button>
            {" "}
            <button className="btn btn-gold" onClick={go("/dealer")}>
              {"Publish Property"}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{"padding": "32px 40px", "display": "grid", "gridTemplateColumns": "1.5fr 1fr", "gap": "28px"}}>
          {" "}
          {/* FORM */}
          {" "}
          <div className="card" style={{"padding": "28px", "display": "flex", "flexDirection": "column", "gap": "22px"}}>
            {" "}
            <div>
              {" "}
              <label>
                {"Property Title"}
              </label>
              {" "}
              <input className="field" defaultValue="5 Marla Corner Villa — DHA Phase 6" />
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Property Type"}
              </label>
              {" "}
              <div style={{"display": "flex", "gap": "10px"}}>
                {" "}
                <div className="chip active">
                  {"Residential"}
                </div>
                {" "}
                <div className="chip">
                  {"Commercial"}
                </div>
                {" "}
                <div className="chip">
                  {"Plot"}
                </div>
                {" "}
                <div className="chip">
                  {"Rental"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "18px 20px", "background": "#fff", "border": "1.5px solid var(--line)", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "14px", "color": "var(--navy)"}}>
                {"Listing Visibility & Compliance"}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Who can see this property?"}
                </label>
                {" "}
                <div style={{"display": "flex", "gap": "10px"}}>
                  {" "}
                  <div className="chip">
                    {"Internal Use Only "}
                    <span style={{"fontWeight": "400"}}>
                      {"— for creating installment plans, not shown on the public portal"}
                    </span>
                  </div>
                  {" "}
                  <div className="chip active">
                    {"Publish Publicly"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Show NOC / Regulatory Approval Status on Public Listing?"}
                </label>
                {" "}
                <div style={{"display": "flex", "gap": "10px"}}>
                  {" "}
                  <div className="chip active">
                    {"Yes, display it"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"No, keep private"}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "8px"}}>
                  {"Either way, your NOC/approval status stays visible to Dealer90.com admin and inside your own dashboard. This only controls whether customers see it on the listing."}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
              {" "}
              <div>
                <label>
                  {"City / Area"}
                </label>
                <input className="field" defaultValue="DHA Phase 6, Lahore" />
              </div>
              {" "}
              <div>
                <label>
                  {"Size"}
                </label>
                <input className="field" defaultValue="5 Marla" />
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Description"}
              </label>
              {" "}
              <textarea className="field" rows={3} defaultValue="Corner villa with 4 bed, modern finishes, near community park. Ready for possession." />
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Photos"}
              </label>
              {" "}
              <div style={{"display": "flex", "gap": "12px"}}>
                {" "}
                <div style={{"width": "110px", "height": "88px", "border": "1.5px dashed var(--line)", "borderRadius": "10px", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "11px", "color": "var(--ink-soft)", "textAlign": "center"}}>
                  {"+ Upload"}
                </div>
                {" "}
                <div style={{"width": "110px", "height": "88px", "borderRadius": "10px", "background": "linear-gradient(135deg,#D9CFB8,#C7BC9E)"}}></div>
                {" "}
                <div style={{"width": "110px", "height": "88px", "borderRadius": "10px", "background": "#EDE7D7"}}></div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"height": "1px", "background": "var(--line)"}}></div>
            {" "}
            <div>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                {"Advisor Matching Tags"}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "4px"}}>
                {"Used to match this property against buyer profiles in the Property Advisor. Growth corridor and delivery status are verified by Dealer90.com admin before they appear publicly."}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Growth Corridor / Zone"}
              </label>
              {" "}
              <select className="field">
                <option>
                  {"DHA Phase 9–10 Expansion (Lahore)"}
                </option>
                <option>
                  {"Ring Road Southern Loop Corridor"}
                </option>
                <option>
                  {"Raiwind Road Corridor"}
                </option>
                <option>
                  {"Established / Near-Possession Scheme"}
                </option>
                <option>
                  {"Not yet tagged — pending admin review"}
                </option>
              </select>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
              {" "}
              <div>
                {" "}
                <label>
                  {"Risk Tier"}
                </label>
                {" "}
                <div style={{"display": "flex", "gap": "10px"}}>
                  {" "}
                  <div className="chip active">
                    {"Conservative"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Balanced"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Aggressive"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Rental Yield Potential"}
                </label>
                {" "}
                <div style={{"display": "flex", "gap": "10px"}}>
                  {" "}
                  <div className="chip">
                    {"Low"}
                  </div>
                  {" "}
                  <div className="chip active">
                    {"Medium"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"High"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "14px 16px", "background": "var(--amber-bg)", "border": "none", "display": "flex", "gap": "10px", "alignItems": "flex-start"}}>
              {" "}
              <span style={{"fontSize": "16px", "lineHeight": "1"}}>
                {"ⓘ"}
              </span>
              {" "}
              <div style={{"fontSize": "12px", "color": "#6B4E1E", "lineHeight": "1.5"}}>
                {"Credibility score and NOC status come from your dealer profile, set by Dealer90.com admin — not editable here. "}
                <A style={{"color": "var(--navy)", "fontWeight": "600"}}>
                  {"View your dealer profile →"}
                </A>
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"height": "1px", "background": "var(--line)"}}></div>
            {" "}
            <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
              {"Pricing & Valuation"}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
              {" "}
              <div>
                <label>
                  {"Total Price (PKR)"}
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
                {" "}
                <label>
                  {"Projected Value After 1 Year (PKR)"}
                </label>
                {" "}
                <input className="field" defaultValue="31,500,000" style={{"borderColor": "var(--green)"}} />
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Projected Value After 3 Years (PKR)"}
                </label>
                {" "}
                <input className="field" defaultValue="38,200,000" style={{"borderColor": "var(--green)"}} />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "-10px"}}>
              {"Shown to customers as your estimate, not Dealer90.com's — used to match this listing to a buyer's investment horizon. 3-year figure is optional but strongly recommended for Medium/Long-Term matching."}
            </div>
            {" "}
            <div>
              {" "}
              <label>
                {"Basis for These Estimates"}
              </label>
              {" "}
              <div style={{"display": "flex", "gap": "10px"}}>
                {" "}
                <div className="chip active">
                  {"Comparable Sales"}
                </div>
                {" "}
                <div className="chip">
                  {"Area Market Trend"}
                </div>
                {" "}
                <div className="chip">
                  {"Personal Estimate"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "16px 18px", "background": "#fff", "border": "1.5px solid var(--line)", "display": "flex", "gap": "12px", "alignItems": "flex-start"}}>
              {" "}
              <div style={{"width": "20px", "height": "20px", "borderRadius": "5px", "border": "1.5px solid var(--navy)", "background": "var(--navy)", "flexShrink": "0", "marginTop": "1px", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#fff", "fontSize": "12px", "fontWeight": "700"}}>
                {"✓"}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--ink)", "lineHeight": "1.55"}}>
                {"I confirm these are good-faith estimates based on the selected basis. I understand they will be published as "}
                <strong>
                  {"my projections"}
                </strong>
                {", shown to customers with my dealer name attached, and that Dealer90.com has not independently verified them. Outlier estimates may be held for admin pricing review before the listing goes live."}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"height": "1px", "background": "var(--line)"}}></div>
            {" "}
            <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
              {"Installment Plan"}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr 1fr", "gap": "16px"}}>
              {" "}
              <div>
                <label>
                  {"Duration (months)"}
                </label>
                <input className="field" defaultValue="12" />
              </div>
              {" "}
              <div>
                <label>
                  {"Frequency"}
                </label>
                {" "}
                <select className="field">
                  <option>
                    {"Monthly"}
                  </option>
                  <option>
                    {"Quarterly"}
                  </option>
                </select>
                {" "}
              </div>
              {" "}
              <div>
                <label>
                  {"Monthly Installment (auto)"}
                </label>
                <input className="field" defaultValue="1,958,333" disabled style={{"background": "#F3F1EA", "color": "var(--ink-soft)"}} />
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* LIVE PREVIEW */}
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
            {" "}
            <div className="card" style={{"padding": "16px"}}>
              {" "}
              <div style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--ink-soft)", "marginBottom": "12px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                {"Public Portal Preview"}
              </div>
              {" "}
              <div style={{"border": "1px solid var(--line)", "borderRadius": "12px", "overflow": "hidden"}}>
                {" "}
                <div style={{"height": "150px", "background": "linear-gradient(135deg,#D9CFB8,#C7BC9E)"}}></div>
                {" "}
                <div style={{"padding": "16px", "display": "flex", "flexDirection": "column", "gap": "8px"}}>
                  {" "}
                  <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)", "alignSelf": "flex-start"}}>
                    {"Residential"}
                  </span>
                  {" "}
                  <div style={{"fontSize": "16px", "fontWeight": "600"}}>
                    {"5 Marla Corner Villa"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "18px", "fontWeight": "700", "color": "var(--navy)"}}>
                    {"PKR 2.85 Cr"}
                  </div>
                  {" "}
                  <div style={{"display": "flex", "gap": "6px", "flexWrap": "wrap"}}>
                    {" "}
                    <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                      {"1yr: PKR 3.15 Cr"}
                    </span>
                    {" "}
                    <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                      {"3yr: PKR 3.82 Cr"}
                    </span>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                    {"Projected by Al-Noor Builders · not verified by Dealer90.com"}
                  </div>
                  {" "}
                  <div style={{"display": "flex", "alignItems": "center", "gap": "8px", "paddingTop": "10px", "borderTop": "1px solid var(--line)", "marginTop": "4px"}}>
                    {" "}
                    <div style={{"width": "22px", "height": "22px", "borderRadius": "6px", "background": "var(--gold-light)"}}></div>
                    {" "}
                    <span style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                      {"Al-Noor Builders"}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "20px"}}>
              {" "}
              <div style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--ink-soft)", "marginBottom": "12px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                {"Generated Installment Schedule"}
              </div>
              {" "}
              <table>
                <tbody>
                  <tr>
                    <th>
                      {"#"}
                    </th>
                    <th>
                      {"Due Date"}
                    </th>
                    <th>
                      {"Amount"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {"1"}
                    </td>
                    <td>
                      {"Oct 5, 2026"}
                    </td>
                    <td>
                      {"PKR 1,958,333"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      {"Nov 5, 2026"}
                    </td>
                    <td>
                      {"PKR 1,958,333"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      {"Dec 5, 2026"}
                    </td>
                    <td>
                      {"PKR 1,958,333"}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{"textAlign": "center", "color": "var(--ink-soft)", "borderBottom": "none"}}>
                      {"⋯ 9 more installments"}
                    </td>
                  </tr>
                </tbody>
              </table>
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
