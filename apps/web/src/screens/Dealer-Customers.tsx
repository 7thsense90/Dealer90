// AUTO-GENERATED from design/boards/Dealer-Customers.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-Customers.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Customers & Installments";

export default function DealerCustomersScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-customers">
      <div style={{"width": "1440px", "height": "1020px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex", "flexDirection": "column"}}>
        {" "}
        <div style={{"height": "76px", "flexShrink": "0", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "0 40px", "borderBottom": "1px solid var(--line)", "background": "#fff"}}>
          {" "}
          <div>
            {" "}
            <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
              {"Al-Noor Builders"}
            </div>
            {" "}
            <h1 style={{"fontSize": "20px", "color": "var(--navy)"}}>
              {"Customers & Installment Plans"}
            </h1>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "10px"}}>
            {" "}
            <button className="btn btn-outline" onClick={go("/dealer/installment-plans/new")}>
              {"+ Create Installment Plan"}
            </button>
            {" "}
            <button className="btn btn-gold">
              {"+ Add Customer"}
            </button>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <div style={{"flex": "1", "display": "flex", "overflow": "hidden"}}>
          {" "}
          {/* CUSTOMER LIST */}
          {" "}
          <div style={{"width": "340px", "flexShrink": "0", "borderRight": "1px solid var(--line)", "background": "#fff", "display": "flex", "flexDirection": "column"}}>
            {" "}
            <div style={{"padding": "16px 18px"}}>
              {" "}
              <input placeholder="Search customers…" style={{"width": "100%", "boxSizing": "border-box", "border": "1px solid var(--line)", "borderRadius": "8px", "padding": "10px 12px", "fontSize": "13px"}} />
              {" "}
            </div>
            {" "}
            <div className="custrow active">
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "50%", "background": "var(--gold-light)", "flexShrink": "0"}}></div>
              {" "}
              <div style={{"flex": "1"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "14px"}}>
                  {"Usman Tariq"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"5 Marla Corner Villa"}
                </div>
                {" "}
              </div>
              {" "}
              <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                {"On track"}
              </span>
              {" "}
            </div>
            {" "}
            <div className="custrow">
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "50%", "background": "#8FA6C7", "flexShrink": "0"}}></div>
              {" "}
              <div style={{"flex": "1"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "14px"}}>
                  {"Zara Ahmed"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"3-Bed Apartment, Gulberg"}
                </div>
                {" "}
              </div>
              {" "}
              <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                {"On track"}
              </span>
              {" "}
            </div>
            {" "}
            <div className="custrow">
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "50%", "background": "#C79A6B", "flexShrink": "0"}}></div>
              {" "}
              <div style={{"flex": "1"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "14px"}}>
                  {"Bilal Sheikh"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Shop 9, Al-Noor Arcade"}
                </div>
                {" "}
              </div>
              {" "}
              <span className="tag" style={{"background": "var(--red-bg)", "color": "var(--red)"}}>
                {"Overdue"}
              </span>
              {" "}
            </div>
            {" "}
            <div className="custrow">
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "50%", "background": "#9CC7A6", "flexShrink": "0"}}></div>
              {" "}
              <div style={{"flex": "1"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "14px"}}>
                  {"Hina Malik"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Shop 12, Al-Noor Arcade"}
                </div>
                {" "}
              </div>
              {" "}
              <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                {"Completed"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* DETAIL */}
          {" "}
          <div style={{"flex": "1", "padding": "28px 36px", "overflow": "auto", "display": "flex", "flexDirection": "column", "gap": "22px"}}>
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
              {" "}
              <div style={{"display": "flex", "gap": "16px", "alignItems": "center"}}>
                {" "}
                <div style={{"width": "56px", "height": "56px", "borderRadius": "50%", "background": "var(--gold-light)"}}></div>
                {" "}
                <div>
                  {" "}
                  <div style={{"fontSize": "19px", "fontWeight": "600"}}>
                    {"Usman Tariq"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                    {"+92 300 1234567 · usman.tariq@email.com"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                    {"Property: 5 Marla Corner Villa, DHA Phase 6"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "gap": "10px"}}>
                {" "}
                <button className="btn btn-outline">
                  {"Edit Plan"}
                </button>
                {" "}
                <button className="btn btn-outline">
                  {"Print Statement"}
                </button>
                {" "}
                <button className="btn btn-gold">
                  {"+ Record Payment"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(4,1fr)", "gap": "16px"}}>
              {" "}
              <div className="card" style={{"padding": "16px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Total Plan Value"}
                </div>
                <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"PKR 28.5M"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"padding": "16px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Paid to Date"}
                </div>
                <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--green)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"PKR 12.75M"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"padding": "16px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Remaining Balance"}
                </div>
                <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--amber)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"PKR 15.75M"}
                </div>
              </div>
              {" "}
              <div className="card" style={{"padding": "16px"}}>
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Next Installment"}
                </div>
                <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"Oct 5"}
                </div>
              </div>
              {" "}
            </div>
            {" "}
            <div className="card">
              {" "}
              <div style={{"padding": "16px 20px", "borderBottom": "1px solid var(--line)", "fontWeight": "600", "fontSize": "14px"}}>
                {"Installment Schedule"}
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
                      {"Paid Date"}
                    </th>
                    <th>
                      {"Status"}
                    </th>
                    <th></th>
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
                    <td>
                      <span style={{"color": "var(--ink-soft)", "cursor": "pointer"}}>
                        {"Edit"}
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
                    <td>
                      <span style={{"color": "var(--ink-soft)", "cursor": "pointer"}}>
                        {"Edit"}
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
                    <td>
                      <span style={{"color": "var(--ink-soft)", "cursor": "pointer"}}>
                        {"Edit"}
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
                    <td>
                      <span style={{"color": "var(--gold)", "fontWeight": "600", "cursor": "pointer"}}>
                        {"Record"}
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
                    <td>
                      <span style={{"color": "var(--gold)", "fontWeight": "600", "cursor": "pointer"}}>
                        {"Record"}
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
