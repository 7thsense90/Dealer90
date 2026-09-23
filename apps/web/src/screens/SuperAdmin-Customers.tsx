// AUTO-GENERATED from design/boards/SuperAdmin-Customers.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './SuperAdmin-Customers.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Super Admin — Customer Data";

export default function SuperAdminCustomersScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-superadmin-customers">
      <div style={{"width": "1440px", "height": "570px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
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
          <div className="navitem" data-nav="1" onClick={go("/admin/credibility")}>
            {"Dealer Credibility"}
          </div>
          {" "}
          <div className="navitem">
            {"All Properties"}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/admin/customers")}>
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
        <div style={{"flex": "1", "display": "flex", "overflow": "hidden"}}>
          {" "}
          {/* DEALER LIST */}
          {" "}
          <div style={{"width": "320px", "flexShrink": "0", "borderRight": "1px solid var(--line)", "background": "#fff", "display": "flex", "flexDirection": "column"}}>
            {" "}
            <div style={{"padding": "18px 18px 12px"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                {"Customer Data by Dealer"}
              </div>
              {" "}
              <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                {"Every customer record a dealer has entered or imported"}
              </div>
              {" "}
              <input placeholder="Search dealers…" style={{"width": "100%", "boxSizing": "border-box", "border": "1px solid var(--line)", "borderRadius": "8px", "padding": "9px 11px", "fontSize": "12.5px", "marginTop": "10px"}} />
              {" "}
            </div>
            {" "}
            <div className="dealerrow active">
              {" "}
              <div style={{"width": "34px", "height": "34px", "borderRadius": "50%", "background": "var(--gold-light)", "flexShrink": "0"}}></div>
              {" "}
              <div style={{"flex": "1"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                  {"Al-Noor Builders"}
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                  {"Lahore"}
                </div>
                {" "}
              </div>
              {" "}
              <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                {"28 customers"}
              </span>
              {" "}
            </div>
            {" "}
            <div className="dealerrow">
              {" "}
              <div style={{"width": "34px", "height": "34px", "borderRadius": "50%", "background": "#8FA6C7", "flexShrink": "0"}}></div>
              {" "}
              <div style={{"flex": "1"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                  {"Green Valley Realty"}
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                  {"Faisalabad"}
                </div>
                {" "}
              </div>
              {" "}
              <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                {"41 customers"}
              </span>
              {" "}
            </div>
            {" "}
            <div className="dealerrow">
              {" "}
              <div style={{"width": "34px", "height": "34px", "borderRadius": "50%", "background": "#C79A6B", "flexShrink": "0"}}></div>
              {" "}
              <div style={{"flex": "1"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                  {"Riverside Estates"}
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                  {"Multan"}
                </div>
                {" "}
              </div>
              {" "}
              <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                {"15 customers"}
              </span>
              {" "}
            </div>
            {" "}
            <div className="dealerrow">
              {" "}
              <div style={{"width": "34px", "height": "34px", "borderRadius": "50%", "background": "#9CC7A6", "flexShrink": "0"}}></div>
              {" "}
              <div style={{"flex": "1"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                  {"Skyline Properties"}
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                  {"Karachi"}
                </div>
                {" "}
              </div>
              {" "}
              <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                {"63 customers"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* DETAIL */}
          {" "}
          <div style={{"flex": "1", "padding": "26px 32px", "overflow": "auto", "display": "flex", "flexDirection": "column", "gap": "20px"}}>
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
              {" "}
              <div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Dealer / Customer Data"}
                </div>
                {" "}
                <h1 style={{"fontSize": "20px", "color": "var(--navy)"}}>
                  {"Al-Noor Builders — 28 Customers"}
                </h1>
                {" "}
              </div>
              {" "}
              <button className="btn btn-gold">
                {"Export CSV"}
              </button>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "16px"}}>
              {" "}
              <div className="card" style={{"padding": "16px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Added Manually"}
                </div>
                <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"19"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"padding": "16px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Imported via CSV/Excel"}
                </div>
                <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"9"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"padding": "16px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"With Active Plans"}
                </div>
                <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--green)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"19"}
                </div>
              </div>
              {" "}
            </div>
            {" "}
            <div className="card">
              {" "}
              <table>
                <tbody>
                  <tr>
                    <th>
                      {"Name"}
                    </th>
                    <th>
                      {"Phone"}
                    </th>
                    <th>
                      {"Email"}
                    </th>
                    <th>
                      {"CNIC"}
                    </th>
                    <th>
                      {"Source"}
                    </th>
                    <th>
                      {"Active Plan"}
                    </th>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Usman Tariq"}
                    </td>
                    <td>
                      {"+92 300 1234567"}
                    </td>
                    <td>
                      {"usman.tariq@email.com"}
                    </td>
                    <td>
                      {"35202-1234567-1"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Manual"}
                      </span>
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Yes"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Zara Ahmed"}
                    </td>
                    <td>
                      {"+92 301 7788990"}
                    </td>
                    <td>
                      {"zara.ahmed@email.com"}
                    </td>
                    <td>
                      {"35202-7654321-2"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Manual"}
                      </span>
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Yes"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Bilal Sheikh"}
                    </td>
                    <td>
                      {"+92 333 4455667"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"CSV Import"}
                      </span>
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Yes"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Hina Malik"}
                    </td>
                    <td>
                      {"+92 302 1122334"}
                    </td>
                    <td>
                      {"hina.malik@email.com"}
                    </td>
                    <td>
                      {"35202-9988776-3"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Manual"}
                      </span>
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Completed"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Naveed Iqbal"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td>
                      {"naveed.iqbal@email.com"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"CSV Import"}
                      </span>
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#F3F1EA", "color": "var(--ink-soft)"}}>
                        {"No"}
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
