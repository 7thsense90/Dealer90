// AUTO-GENERATED from design/boards/Dealer-Marketing-ImportContacts.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-Marketing-ImportContacts.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer — Marketing — Import Contacts";

export default function DealerMarketingImportContactsScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-marketing-importcontacts">
      <div style={{"width": "1440px", "height": "1200px", "boxSizing": "border-box", "background": "var(--ivory)", "display": "flex"}}>
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
                {"← Marketing"}
              </A>
              {" "}
              <div style={{"width": "1px", "height": "20px", "background": "var(--line)"}}></div>
              {" "}
              <div>
                {" "}
                <h1 style={{"fontSize": "19px"}}>
                  {"Import Customer Contacts"}
                </h1>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--muted)"}}>
                  {"Upload a CSV or Excel file to build your email & SMS audience"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <button className="btn btn-gold">
              {"Add 462 Eligible Contacts →"}
            </button>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 40px", "display": "flex", "flexDirection": "column", "gap": "22px", "overflowY": "auto"}}>
            {" "}
            {/* STEP 1: UPLOAD */}
            {" "}
            <div className="card" style={{"padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
              {" "}
              <div className="sectionhead">
                <span className="stepnum">
                  {"1"}
                </span>
                {"Upload File"}
              </div>
              {" "}
              <div style={{"border": "1.5px dashed var(--line)", "borderRadius": "12px", "padding": "28px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "8px", "background": "var(--ivory)"}}>
                {" "}
                <div style={{"fontSize": "26px"}}>
                  {"📄"}
                </div>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                  {"customer_list_sep2026.xlsx"}
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                  {"500 rows detected · .csv, .xlsx and .xls accepted"}
                </div>
                {" "}
                <button className="btn btn-line" style={{"marginTop": "6px"}}>
                  {"Replace File"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* STEP 2: COLUMN MAPPING */}
            {" "}
            <div className="card" style={{"padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
              {" "}
              <div className="sectionhead">
                <span className="stepnum">
                  {"2"}
                </span>
                {"Auto-Detected Columns "}
                <span style={{"fontWeight": "500", "fontSize": "12px", "color": "var(--muted)"}}>
                  {"— adjust if anything was matched wrong"}
                </span>
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "14px"}}>
                {" "}
                <div>
                  {" "}
                  <div style={{"fontSize": "11px", "fontWeight": "700", "color": "var(--muted)", "marginBottom": "6px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                    {"First Name"}
                  </div>
                  {" "}
                  <select style={{"width": "100%", "boxSizing": "border-box", "border": "1px solid var(--green)", "borderRadius": "8px", "padding": "9px 10px", "fontSize": "12.5px", "background": "var(--green-bg)"}}>
                    <option>
                      {"Column A — \"First Name\" ✓"}
                    </option>
                  </select>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div style={{"fontSize": "11px", "fontWeight": "700", "color": "var(--muted)", "marginBottom": "6px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                    {"Last Name"}
                  </div>
                  {" "}
                  <select style={{"width": "100%", "boxSizing": "border-box", "border": "1px solid var(--green)", "borderRadius": "8px", "padding": "9px 10px", "fontSize": "12.5px", "background": "var(--green-bg)"}}>
                    <option>
                      {"Column B — \"Last Name\" ✓"}
                    </option>
                  </select>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div style={{"fontSize": "11px", "fontWeight": "700", "color": "var(--muted)", "marginBottom": "6px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                    {"Email"}
                  </div>
                  {" "}
                  <select style={{"width": "100%", "boxSizing": "border-box", "border": "1px solid var(--green)", "borderRadius": "8px", "padding": "9px 10px", "fontSize": "12.5px", "background": "var(--green-bg)"}}>
                    <option>
                      {"Column D — \"Email Address\" ✓"}
                    </option>
                  </select>
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <div style={{"fontSize": "11px", "fontWeight": "700", "color": "var(--muted)", "marginBottom": "6px", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                    {"Phone Number"}
                  </div>
                  {" "}
                  <select style={{"width": "100%", "boxSizing": "border-box", "border": "1px solid var(--green)", "borderRadius": "8px", "padding": "9px 10px", "fontSize": "12.5px", "background": "var(--green-bg)"}}>
                    <option>
                      {"Column C — \"Mobile\" ✓"}
                    </option>
                  </select>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "11.5px", "color": "var(--muted)"}}>
                {"A record needs a name and at least one of email/phone to be usable — nothing else is required. Fields we can't find in a row are simply left blank; the row is only skipped if it fails that minimum."}
              </div>
              {" "}
            </div>
            {" "}
            {/* STEP 3: RESULTS */}
            {" "}
            <div className="card" style={{"padding": "24px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
              {" "}
              <div className="sectionhead">
                <span className="stepnum">
                  {"3"}
                </span>
                {"Import Summary"}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "16px"}}>
                {" "}
                <div className="card" style={{"padding": "16px"}}>
                  <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                    {"Rows in File"}
                  </div>
                  <div style={{"fontSize": "24px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif"}}>
                    {"500"}
                  </div>
                </div>
                {" "}
                <div className="card" style={{"padding": "16px", "borderTop": "3px solid var(--green)"}}>
                  <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                    {"Eligible & Imported"}
                  </div>
                  <div style={{"fontSize": "24px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif", "color": "var(--green)"}}>
                    {"462"}
                  </div>
                </div>
                {" "}
                <div className="card" style={{"padding": "16px", "borderTop": "3px solid var(--red)"}}>
                  <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                    {"Skipped"}
                  </div>
                  <div style={{"fontSize": "24px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif", "color": "var(--red)"}}>
                    {"38"}
                  </div>
                </div>
                {" "}
                <div className="card" style={{"padding": "16px"}}>
                  <div style={{"fontSize": "11px", "color": "var(--muted)", "fontWeight": "600"}}>
                    {"Ready For"}
                  </div>
                  <div style={{"fontSize": "15px", "fontWeight": "700", "fontFamily": "'D90 Fraunces 500-600',serif", "paddingTop": "4px"}}>
                    {"Email + SMS"}
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "13px", "marginBottom": "10px"}}>
                  {"Why rows were skipped"}
                </div>
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <th>
                        {"Reason"}
                      </th>
                      <th>
                        {"Rows"}
                      </th>
                    </tr>
                    <tr>
                      <td>
                        {"Missing both email and phone"}
                      </td>
                      <td>
                        {"22"}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"Missing name"}
                      </td>
                      <td>
                        {"16"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "13px", "marginBottom": "10px"}}>
                  {"Preview — first 4 rows"}
                </div>
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <th>
                        {"Name"}
                      </th>
                      <th>
                        {"Email"}
                      </th>
                      <th>
                        {"Phone"}
                      </th>
                      <th>
                        {"Status"}
                      </th>
                    </tr>
                    <tr>
                      <td>
                        {"Usman Tariq"}
                      </td>
                      <td>
                        {"usman.tariq@email.com"}
                      </td>
                      <td>
                        {"+92 300 1234567"}
                      </td>
                      <td>
                        <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                          {"Imported"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"Zara Ahmed"}
                      </td>
                      <td>
                        {"zara.ahmed@email.com"}
                      </td>
                      <td>
                        {"—"}
                      </td>
                      <td>
                        <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                          {"Imported"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {"Bilal Sheikh"}
                      </td>
                      <td>
                        {"—"}
                      </td>
                      <td>
                        {"+92 333 4455667"}
                      </td>
                      <td>
                        <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                          {"Imported"}
                        </span>
                      </td>
                    </tr>
                    <tr className="skip-row">
                      <td>
                        {"—"}
                      </td>
                      <td>
                        {"—"}
                      </td>
                      <td>
                        {"+92 301 9988776"}
                      </td>
                      <td>
                        <span className="tag" style={{"background": "var(--red)", "color": "#fff"}}>
                          {"Skipped — no name"}
                        </span>
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
        {" "}
      </div>
    </div>
  );
}
