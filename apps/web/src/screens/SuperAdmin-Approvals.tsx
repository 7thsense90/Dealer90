// AUTO-GENERATED from design/boards/SuperAdmin-Approvals.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './SuperAdmin-Approvals.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Super Admin";

export default function SuperAdminApprovalsScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-superadmin-approvals">
      <div style={{"width": "1440px", "height": "1300px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
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
          <div className="navitem active" data-nav="1" onClick={go("/admin/approvals")}>
            {"Dealer Approvals"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/admin/feature-access")}>
            {"All Dealers"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/admin/credibility")}>
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
              <h1 style={{"fontSize": "22px", "color": "var(--navy)"}}>
                {"Dealer Approvals"}
              </h1>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                {"Review new registrations and manage dealer access"}
              </div>
              {" "}
            </div>
            {" "}
            <button className="btn btn-gold">
              {"+ Create Dealer Account"}
            </button>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 36px", "display": "flex", "flexDirection": "column", "gap": "28px", "overflow": "auto"}}>
            {" "}
            {/* STATS */}
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "20px"}}>
              {" "}
              <div className="card" style={{"padding": "20px"}}>
                {" "}
                <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                  {"Pending Approvals"}
                </div>
                {" "}
                <div style={{"fontSize": "30px", "fontWeight": "700", "color": "var(--amber)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"6"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "20px"}}>
                {" "}
                <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                  {"Active Dealers"}
                </div>
                {" "}
                <div style={{"fontSize": "30px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"142"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "20px"}}>
                {" "}
                <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                  {"Total Properties Listed"}
                </div>
                {" "}
                <div style={{"fontSize": "30px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"3,214"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "20px"}}>
                {" "}
                <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                  {"Registered Customers"}
                </div>
                {" "}
                <div style={{"fontSize": "30px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"1,986"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* FLAGGED PRICING REVIEW */}
            {" "}
            <div className="card">
              {" "}
              <div style={{"padding": "18px 20px", "borderBottom": "1px solid var(--line)"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "15px"}}>
                  {"Flagged Pricing Estimates"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                  {"Dealer-submitted 1-year projections that sit well above comparable listings in their area — held before going live."}
                </div>
                {" "}
              </div>
              {" "}
              <table>
                <tbody>
                  <tr>
                    <th>
                      {"Property"}
                    </th>
                    <th>
                      {"Dealer"}
                    </th>
                    <th>
                      {"Price"}
                    </th>
                    <th>
                      {"Dealer's Projection"}
                    </th>
                    <th>
                      {"Area Comparable Avg."}
                    </th>
                    <th>
                      {"Flag"}
                    </th>
                    <th>
                      {"Actions"}
                    </th>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Shop 3, Meridian Heights"}
                    </td>
                    <td>
                      {"Riverside Estates"}
                    </td>
                    <td>
                      {"PKR 1.1 Cr"}
                    </td>
                    <td style={{"color": "var(--red)", "fontWeight": "600"}}>
                      {"+38% in 1yr"}
                    </td>
                    <td>
                      {"+14% in 1yr"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--red-bg)", "color": "var(--red)"}}>
                        {"Outlier"}
                      </span>
                    </td>
                    <td>
                      <span style={{"color": "var(--green)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Approve as-is"}
                      </span>
                      <span style={{"color": "var(--red)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Request revision"}
                      </span>
                      <span style={{"color": "var(--ink-soft)", "cursor": "pointer"}}>
                        {"View"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"12 Marla Plot, Sector B"}
                    </td>
                    <td>
                      {"Green Valley Realty"}
                    </td>
                    <td>
                      {"PKR 2.2 Cr"}
                    </td>
                    <td style={{"color": "var(--red)", "fontWeight": "600"}}>
                      {"+29% in 1yr"}
                    </td>
                    <td>
                      {"+15% in 1yr"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--red-bg)", "color": "var(--red)"}}>
                        {"Outlier"}
                      </span>
                    </td>
                    <td>
                      <span style={{"color": "var(--green)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Approve as-is"}
                      </span>
                      <span style={{"color": "var(--red)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Request revision"}
                      </span>
                      <span style={{"color": "var(--ink-soft)", "cursor": "pointer"}}>
                        {"View"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              {" "}
            </div>
            {" "}
            {/* PENDING TABLE */}
            {" "}
            <div className="card">
              {" "}
              <div style={{"padding": "18px 20px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "15px"}}>
                  {"Pending Dealer Registrations"}
                </div>
                {" "}
                <input placeholder="Search dealers…" style={{"border": "1px solid var(--line)", "borderRadius": "8px", "padding": "8px 12px", "fontSize": "13px", "width": "220px"}} />
                {" "}
              </div>
              {" "}
              <table>
                <tbody>
                  <tr>
                    <th>
                      {"Business Name"}
                    </th>
                    <th>
                      {"Owner"}
                    </th>
                    <th>
                      {"Email / Phone"}
                    </th>
                    <th>
                      {"City"}
                    </th>
                    <th>
                      {"Submitted"}
                    </th>
                    <th>
                      {"Status"}
                    </th>
                    <th>
                      {"Actions"}
                    </th>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Al-Noor Builders"}
                    </td>
                    <td>
                      {"Ahmed Raza"}
                    </td>
                    <td>
                      {"ahmed@alnoor.pk"}
                    </td>
                    <td>
                      {"Lahore"}
                    </td>
                    <td>
                      {"Sep 18, 2026"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"Pending Review"}
                      </span>
                    </td>
                    <td>
                      <span style={{"color": "var(--green)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Approve & Set Access"}
                      </span>
                      <span style={{"color": "var(--red)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Reject"}
                      </span>
                      <span style={{"color": "var(--ink-soft)", "cursor": "pointer"}}>
                        {"View"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Green Valley Realty"}
                    </td>
                    <td>
                      {"Saima Iqbal"}
                    </td>
                    <td>
                      {"saima@gvr.pk"}
                    </td>
                    <td>
                      {"Faisalabad"}
                    </td>
                    <td>
                      {"Sep 17, 2026"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"Pending Review"}
                      </span>
                    </td>
                    <td>
                      <span style={{"color": "var(--green)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Approve & Set Access"}
                      </span>
                      <span style={{"color": "var(--red)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Reject"}
                      </span>
                      <span style={{"color": "var(--ink-soft)", "cursor": "pointer"}}>
                        {"View"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Riverside Estates"}
                    </td>
                    <td>
                      {"Bilal Khan"}
                    </td>
                    <td>
                      {"bilal@riverside.pk"}
                    </td>
                    <td>
                      {"Multan"}
                    </td>
                    <td>
                      {"Sep 15, 2026"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"Documents Missing"}
                      </span>
                    </td>
                    <td>
                      <span style={{"color": "var(--green)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Approve & Set Access"}
                      </span>
                      <span style={{"color": "var(--red)", "fontWeight": "600", "marginRight": "14px", "cursor": "pointer"}}>
                        {"Reject"}
                      </span>
                      <span style={{"color": "var(--ink-soft)", "cursor": "pointer"}}>
                        {"View"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Skyline Properties"}
                    </td>
                    <td>
                      {"Fatima Sheikh"}
                    </td>
                    <td>
                      {"fatima@skyline.pk"}
                    </td>
                    <td>
                      {"Karachi"}
                    </td>
                    <td>
                      {"Sep 12, 2026"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Approved"}
                      </span>
                    </td>
                    <td>
                      <span style={{"color": "var(--ink-soft)", "cursor": "pointer"}}>
                        {"View"}
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
    </div>
  );
}
