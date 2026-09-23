// AUTO-GENERATED from design/boards/Dealer-CreateInstallmentPlan.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-CreateInstallmentPlan.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Create Installment Plan";

export default function DealerCreateInstallmentPlanScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-createinstallmentplan">
      <div style={{"width": "1440px", "height": "1460px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex", "flexDirection": "column"}}>
        {" "}
        <div style={{"height": "76px", "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 40px", "borderBottom": "1px solid var(--line)", "background": "#fff"}}>
          {" "}
          <div>
            {" "}
            <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
              {"Customers & Installments / New Plan"}
            </div>
            {" "}
            <h1 style={{"fontSize": "20px", "color": "var(--navy)"}}>
              {"Create Installment Plan"}
            </h1>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "10px"}}>
            {" "}
            <button className="btn btn-outline" onClick={go("/dealer/customers")}>
              {"Cancel"}
            </button>
            {" "}
            <button className="btn btn-gold" onClick={go("/dealer/customers")}>
              {"Activate Plan →"}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{"padding": "32px 40px", "display": "grid", "gridTemplateColumns": "1.45fr 1fr", "gap": "28px"}}>
          {" "}
          {/* FORM */}
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "22px"}}>
            {" "}
            {/* STEP 1: CUSTOMER */}
            {" "}
            <div className="card" style={{"padding": "26px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
              {" "}
              <div className="sectionhead">
                <span className="stepnum">
                  {"1"}
                </span>
                {"Customer"}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Select Existing Customer"}
                </label>
                {" "}
                <select className="field">
                  <option>
                    {"Usman Tariq — +92 300 1234567"}
                  </option>
                  <option>
                    {"Zara Ahmed — +92 301 7788990"}
                  </option>
                  <option>
                    {"Bilal Sheikh — +92 333 4455667"}
                  </option>
                  <option>
                    {"+ New Customer"}
                  </option>
                </select>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "-8px"}}>
                {"Editing the fields below updates this customer's record on Dealer90.com."}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
                {" "}
                <div>
                  <label>
                    {"Full Name"}
                  </label>
                  <input className="field" defaultValue="Usman Tariq" />
                </div>
                {" "}
                <div>
                  <label>
                    {"Phone Number"}
                  </label>
                  <input className="field" defaultValue="+92 300 1234567" />
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
                {" "}
                <div>
                  <label>
                    {"CNIC"}
                  </label>
                  <input className="field" defaultValue="35202-1234567-1" />
                </div>
                {" "}
                <div>
                  <label>
                    {"Email"}
                  </label>
                  <input className="field" defaultValue="usman.tariq@email.com" />
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* STEP 2: PROPERTY, PRICE & ROI */}
            {" "}
            <div className="card" style={{"padding": "26px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
              {" "}
              <div className="sectionhead">
                <span className="stepnum">
                  {"2"}
                </span>
                {"Property, Selling Price & ROI"}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Select Property"}
                </label>
                {" "}
                <select className="field">
                  <option>
                    {"5 Marla Corner Villa — DHA Phase 6"}
                  </option>
                  <option>
                    {"8 Marla Plot, Block J"}
                  </option>
                  <option>
                    {"Shop 9, Al-Noor Arcade"}
                  </option>
                </select>
                {" "}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
                {" "}
                <div>
                  <label>
                    {"Selling Price (PKR)"}
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
                    {"Projected ROI %"}
                  </label>
                  {" "}
                  <input className="field" defaultValue="10.5" style={{"borderColor": "var(--green)"}} />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <label>
                    {"ROI Basis"}
                  </label>
                  {" "}
                  <div style={{"display": "flex", "gap": "10px"}}>
                    {" "}
                    <div className="chip active">
                      {"Comparable Sales"}
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
              </div>
              {" "}
              <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "-8px"}}>
                {"Selling price and ROI% are editable here for this specific plan — shown to the customer as your figure, never guaranteed by Dealer90.com."}
              </div>
              {" "}
            </div>
            {" "}
            {/* STEP 3: INSTALLMENT STRUCTURE */}
            {" "}
            <div className="card" style={{"padding": "26px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
              {" "}
              <div className="sectionhead">
                <span className="stepnum">
                  {"3"}
                </span>
                {"Installment Structure"}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr 1fr", "gap": "16px"}}>
                {" "}
                <div>
                  <label>
                    {"Number of Installments"}
                  </label>
                  <input className="field" defaultValue="18" />
                </div>
                {" "}
                <div>
                  <label>
                    {"Frequency"}
                  </label>
                  <select className="field">
                    <option>
                      {"Monthly"}
                    </option>
                    <option>
                      {"Quarterly"}
                    </option>
                  </select>
                </div>
                {" "}
                <div>
                  <label>
                    {"First Due Date"}
                  </label>
                  <input className="field" defaultValue="Oct 5, 2026" />
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* STEP 4: BULK PAYMENTS */}
            {" "}
            <div className="card" style={{"padding": "26px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
              {" "}
              <div className="sectionhead">
                <span className="stepnum">
                  {"4"}
                </span>
                {"Bulk Payments "}
                <span style={{"fontWeight": "500", "fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"(optional — larger lump-sum amounts due on specific installments, on top of the regular amount)"}
                </span>
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr 32px", "gap": "10px"}}>
                {" "}
                <label style={{"marginBottom": "0"}}>
                  {"Installment #"}
                </label>
                {" "}
                <label style={{"marginBottom": "0"}}>
                  {"Bulk Amount (PKR)"}
                </label>
                {" "}
                <div></div>
                {" "}
              </div>
              {" "}
              <div className="bulkfield-row">
                {" "}
                <input className="field" defaultValue="5" />
                {" "}
                <input className="field" defaultValue="1,500,000" />
                {" "}
                <div className="remove-x">
                  {"×"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="bulkfield-row">
                {" "}
                <input className="field" defaultValue="12" />
                {" "}
                <input className="field" defaultValue="2,000,000" />
                {" "}
                <div className="remove-x">
                  {"×"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="bulkfield-row">
                {" "}
                <input className="field" defaultValue="18" />
                {" "}
                <input className="field" defaultValue="2,500,000" />
                {" "}
                <div className="remove-x">
                  {"×"}
                </div>
                {" "}
              </div>
              {" "}
              <button className="btn btn-outline" style={{"alignSelf": "flex-start"}}>
                {"+ Add Bulk Payment"}
              </button>
              {" "}
              <div className="card" style={{"padding": "14px 16px", "background": "var(--amber-bg)", "border": "none", "display": "flex", "gap": "10px", "alignItems": "flex-start"}}>
                {" "}
                <span style={{"fontSize": "15px", "lineHeight": "1"}}>
                  {"ⓘ"}
                </span>
                {" "}
                <div style={{"fontSize": "12px", "color": "#6B4E1E", "lineHeight": "1.5"}}>
                  {"On installments #5, #12 and #18, the customer will owe the regular monthly amount "}
                  <strong>
                    {"plus"}
                  </strong>
                  {" the bulk amount you set — the schedule on the right recalculates automatically as you edit any field."}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* LIVE SUMMARY + SCHEDULE */}
          {" "}
          <div style={{"display": "flex", "flexDirection": "column", "gap": "20px"}}>
            {" "}
            <div className="card" style={{"padding": "22px"}}>
              {" "}
              <div style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--ink-soft)", "marginBottom": "14px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                {"Plan Summary — Auto-Calculated"}
              </div>
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "11px"}}>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px"}}>
                  <span style={{"color": "var(--ink-soft)"}}>
                    {"Selling Price"}
                  </span>
                  <span style={{"fontWeight": "700"}}>
                    {"PKR 28,500,000"}
                  </span>
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px"}}>
                  <span style={{"color": "var(--ink-soft)"}}>
                    {"Down Payment"}
                  </span>
                  <span style={{"fontWeight": "700"}}>
                    {"PKR 5,000,000"}
                  </span>
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "paddingBottom": "11px", "borderBottom": "1px solid var(--line)"}}>
                  <span style={{"color": "var(--ink-soft)"}}>
                    {"Amount to Finance"}
                  </span>
                  <span style={{"fontWeight": "700", "color": "var(--navy)"}}>
                    {"PKR 23,500,000"}
                  </span>
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px"}}>
                  <span style={{"color": "var(--ink-soft)"}}>
                    {"Installments"}
                  </span>
                  <span style={{"fontWeight": "700"}}>
                    {"18 monthly"}
                  </span>
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px"}}>
                  <span style={{"color": "var(--ink-soft)"}}>
                    {"Bulk Payments"}
                  </span>
                  <span style={{"fontWeight": "700"}}>
                    {"3 (#5, #12, #18)"}
                  </span>
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "paddingBottom": "11px", "borderBottom": "1px solid var(--line)"}}>
                  <span style={{"color": "var(--ink-soft)"}}>
                    {"Total Bulk Amount"}
                  </span>
                  <span style={{"fontWeight": "700", "color": "var(--amber)"}}>
                    {"PKR 6,000,000"}
                  </span>
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "14px"}}>
                  <span style={{"color": "var(--ink-soft)"}}>
                    {"Regular Installment"}
                  </span>
                  <span style={{"fontWeight": "700", "color": "var(--green)"}}>
                    {"PKR 972,222 / mo"}
                  </span>
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "14px"}}>
                  <span style={{"color": "var(--ink-soft)"}}>
                    {"Projected ROI"}
                  </span>
                  <span style={{"fontWeight": "700", "color": "var(--green)"}}>
                    {"10.5%"}
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "10.5px", "color": "var(--ink-soft)", "marginTop": "12px", "paddingTop": "12px", "borderTop": "1px solid var(--line)"}}>
                {"Regular Installment = (Amount to Finance − Total Bulk Amount) ÷ Number of Installments."}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card">
              {" "}
              <div style={{"padding": "16px 20px", "borderBottom": "1px solid var(--line)", "fontWeight": "600", "fontSize": "14px"}}>
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
                      {"Regular"}
                    </th>
                    <th>
                      {"Bulk"}
                    </th>
                    <th>
                      {"Total Due"}
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
                      {"PKR 972,222"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td style={{"fontWeight": "600"}}>
                      {"PKR 972,222"}
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
                      {"PKR 972,222"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td style={{"fontWeight": "600"}}>
                      {"PKR 972,222"}
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
                      {"PKR 972,222"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td style={{"fontWeight": "600"}}>
                      {"PKR 972,222"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      {"Jan 5, 2027"}
                    </td>
                    <td>
                      {"PKR 972,222"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td style={{"fontWeight": "600"}}>
                      {"PKR 972,222"}
                    </td>
                  </tr>
                  <tr className="bulk-row">
                    <td>
                      {"5"}
                    </td>
                    <td>
                      {"Feb 5, 2027"}
                    </td>
                    <td>
                      {"PKR 972,222"}
                    </td>
                    <td style={{"fontWeight": "700", "color": "var(--amber)"}}>
                      {"PKR 1,500,000"}
                    </td>
                    <td style={{"fontWeight": "700"}}>
                      {"PKR 2,472,222 "}
                      <span className="tag" style={{"background": "var(--gold)", "color": "#fff", "marginLeft": "4px"}}>
                        {"Bulk"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={5} style={{"textAlign": "center", "color": "var(--ink-soft)", "borderBottom": "1px solid var(--line)"}}>
                      {"⋯ installments 6–11, regular PKR 972,222 each ⋯"}
                    </td>
                  </tr>
                  <tr className="bulk-row">
                    <td>
                      {"12"}
                    </td>
                    <td>
                      {"Sep 5, 2027"}
                    </td>
                    <td>
                      {"PKR 972,222"}
                    </td>
                    <td style={{"fontWeight": "700", "color": "var(--amber)"}}>
                      {"PKR 2,000,000"}
                    </td>
                    <td style={{"fontWeight": "700"}}>
                      {"PKR 2,972,222 "}
                      <span className="tag" style={{"background": "var(--gold)", "color": "#fff", "marginLeft": "4px"}}>
                        {"Bulk"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={5} style={{"textAlign": "center", "color": "var(--ink-soft)", "borderBottom": "1px solid var(--line)"}}>
                      {"⋯ installments 13–17, regular PKR 972,222 each ⋯"}
                    </td>
                  </tr>
                  <tr className="bulk-row">
                    <td>
                      {"18"}
                    </td>
                    <td>
                      {"Mar 5, 2028"}
                    </td>
                    <td>
                      {"PKR 972,222"}
                    </td>
                    <td style={{"fontWeight": "700", "color": "var(--amber)"}}>
                      {"PKR 2,500,000"}
                    </td>
                    <td style={{"fontWeight": "700"}}>
                      {"PKR 3,472,222 "}
                      <span className="tag" style={{"background": "var(--gold)", "color": "#fff", "marginLeft": "4px"}}>
                        {"Bulk · Final"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              {" "}
              <div style={{"padding": "14px 20px", "display": "flex", "justifyContent": "space-between", "background": "var(--navy)", "borderRadius": "0 0 13px 13px"}}>
                {" "}
                <span style={{"color": "#B7C0D1", "fontSize": "12.5px", "fontWeight": "600"}}>
                  {"Total Plan Value (Down Payment + 18 Installments)"}
                </span>
                {" "}
                <span style={{"color": "#fff", "fontSize": "14px", "fontWeight": "700"}}>
                  {"PKR 28,500,000"}
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
      </div>
    </div>
  );
}
