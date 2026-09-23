// AUTO-GENERATED from design/boards/Customer-Portal.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Customer-Portal.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — My Properties";

export default function CustomerPortalScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-customer-portal">
      <div style={{"width": "1440px", "height": "1220px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
        {" "}
        {/* SIDEBAR */}
        {" "}
        <div style={{"width": "250px", "flexShrink": "0", "background": "var(--navy)", "padding": "28px 16px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 10px 24px"}} data-nav="1" onClick={go("/customer")}>
            {" "}
            <div style={{"width": "58px", "height": "34px", "borderRadius": "8px", "background": "var(--gold)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 400-600-700',serif", "fontWeight": "700", "color": "var(--navy)", "fontSize": "14px", "letterSpacing": "-.02em"}}>
              {"D90"}
            </div>
            {" "}
            <div style={{"color": "#fff", "fontFamily": "'Work Sans',sans-serif", "fontSize": "18px", "fontWeight": "700", "letterSpacing": "-.01em"}}>
              {"Dealer90.com"}
            </div>
            {" "}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/customer")}>
            {"My Properties"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/customer/offers")}>
            {"My Offers"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/customer/resell")}>
            {"Resale Requests"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/customer")}>
            {"Payments"}
          </div>
          {" "}
          <div className="navitem">
            {"Profile"}
          </div>
          {" "}
          <div style={{"marginTop": "auto", "padding": "14px 10px 0", "borderTop": "1px solid #26385A", "display": "flex", "alignItems": "center", "gap": "10px"}}>
            {" "}
            <div style={{"width": "32px", "height": "32px", "borderRadius": "50%", "background": "var(--gold-light)"}}></div>
            {" "}
            <div style={{"color": "#fff", "fontSize": "13px"}}>
              {"Usman Tariq"}
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
          <div style={{"height": "80px", "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 36px", "borderBottom": "1px solid var(--line)", "background": "#fff"}}>
            {" "}
            <div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Welcome back"}
              </div>
              {" "}
              <h1 style={{"fontSize": "22px", "color": "var(--navy)"}}>
                {"Usman Tariq's Properties"}
              </h1>
              {" "}
            </div>
            {" "}
            <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
              {"1 property purchased on installments"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 36px", "display": "flex", "flexDirection": "column", "gap": "24px", "overflow": "auto"}}>
            {" "}
            {/* MY PROPERTY */}
            {" "}
            <div className="card" style={{"display": "flex", "overflow": "hidden"}}>
              {" "}
              <div style={{"width": "260px", "flexShrink": "0", "background": "linear-gradient(135deg,#D9CFB8,#C7BC9E)"}}></div>
              {" "}
              <div style={{"flex": "1", "padding": "22px 26px", "display": "flex", "flexDirection": "column", "gap": "10px"}}>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
                  {" "}
                  <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                    {"Residential"}
                  </span>
                  {" "}
                  <div style={{"display": "flex", "alignItems": "center", "gap": "8px"}}>
                    {" "}
                    <div style={{"width": "20px", "height": "20px", "borderRadius": "5px", "background": "var(--gold-light)"}}></div>
                    {" "}
                    <span style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                      {"Al-Noor Builders"}
                    </span>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "19px", "fontWeight": "600"}}>
                  {"5 Marla Corner Villa, DHA Phase 6"}
                </div>
                {" "}
                <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                  {"Lahore · Purchased on installment plan, Jun 2026"}
                </div>
                {" "}
                <div style={{"display": "flex", "gap": "32px", "marginTop": "6px"}}>
                  {" "}
                  <div>
                    <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                      {"Purchase Price"}
                    </div>
                    <div style={{"fontSize": "17px", "fontWeight": "700", "color": "var(--navy)"}}>
                      {"PKR 28.5M"}
                    </div>
                  </div>
                  {" "}
                  <div>
                    <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                      {"Projected, 1 Year"}
                    </div>
                    <div style={{"fontSize": "17px", "fontWeight": "700", "color": "var(--green)"}}>
                      {"PKR 31.5M"}
                    </div>
                  </div>
                  {" "}
                  <div>
                    <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                      {"Projected, 3 Years"}
                    </div>
                    <div style={{"fontSize": "17px", "fontWeight": "700", "color": "var(--green)"}}>
                      {"PKR 38.2M"}
                    </div>
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                  {"Projected by Al-Noor Builders, based on comparable sales · not verified by Dealer90.com"}
                </div>
                {" "}
                <div style={{"marginTop": "auto", "paddingTop": "12px"}}>
                  {" "}
                  <button className="btn btn-outline" onClick={go("/customer/resell")}>
                    {"Sell This Property →"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* INSTALLMENT SUMMARY */}
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "16px"}}>
              {" "}
              <div className="card" style={{"padding": "18px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Total Plan Value"}
                </div>
                <div style={{"fontSize": "21px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"PKR 28.5M"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"padding": "18px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Total Paid"}
                </div>
                <div style={{"fontSize": "21px", "fontWeight": "700", "color": "var(--green)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"PKR 12.75M"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"padding": "18px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Pending Balance"}
                </div>
                <div style={{"fontSize": "21px", "fontWeight": "700", "color": "var(--amber)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"PKR 15.75M"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"padding": "18px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Next Due"}
                </div>
                <div style={{"fontSize": "21px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"Oct 5, 2026"}
                </div>
              </div>
              {" "}
            </div>
            {" "}
            {/* PROGRESS */}
            {" "}
            <div className="card" style={{"padding": "22px 26px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "marginBottom": "10px"}}>
                {" "}
                <span style={{"fontWeight": "600"}}>
                  {"Payment Progress"}
                </span>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"3 of 12 installments paid — 44.7%"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"height": "10px", "borderRadius": "999px", "background": "#EFEAE0", "overflow": "hidden"}}>
                {" "}
                <div style={{"width": "44.7%", "height": "100%", "background": "var(--gold)"}}></div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* SCHEDULE */}
            {" "}
            <div className="card">
              {" "}
              <div style={{"padding": "16px 22px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "15px"}}>
                  {"Installment Schedule"}
                </div>
                {" "}
                <button className="btn btn-outline">
                  {"Download Statement"}
                </button>
                {" "}
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
                    <th>
                      {"Paid On"}
                    </th>
                    <th>
                      {"Status"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      {"1"}
                    </td>
                    <td>
                      {"Jun 5, 2026"}
                    </td>
                    <td>
                      {"PKR 1,958,333"}
                    </td>
                    <td>
                      {"Jun 4, 2026"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Paid"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"2"}
                    </td>
                    <td>
                      {"Jul 5, 2026"}
                    </td>
                    <td>
                      {"PKR 1,958,333"}
                    </td>
                    <td>
                      {"Jul 6, 2026"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Paid"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"3"}
                    </td>
                    <td>
                      {"Aug 5, 2026"}
                    </td>
                    <td>
                      {"PKR 1,958,333"}
                    </td>
                    <td>
                      {"Aug 5, 2026"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Paid"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"4"}
                    </td>
                    <td>
                      {"Sep 5, 2026"}
                    </td>
                    <td>
                      {"PKR 1,958,333"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"Pending"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {"5"}
                    </td>
                    <td>
                      {"Oct 5, 2026"}
                    </td>
                    <td>
                      {"PKR 1,958,333"}
                    </td>
                    <td>
                      {"—"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Upcoming"}
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
