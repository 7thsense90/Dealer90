// AUTO-GENERATED from design/boards/SuperAdmin-Dashboard.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './SuperAdmin-Dashboard.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Super Admin Dashboard";

export default function SuperAdminDashboardScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-superadmin-dashboard">
      <div style={{"width": "1440px", "height": "720px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
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
          <div className="navitem active" data-nav="1" onClick={go("/admin")}>
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
                {"Platform Dashboard"}
              </h1>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                {"Everything happening across Dealer90.com, at a glance"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 36px", "display": "flex", "flexDirection": "column", "gap": "28px", "overflow": "auto"}}>
            {" "}
            {/* PLATFORM TOTALS */}
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(5,1fr)", "gap": "16px"}}>
              {" "}
              <div className="card" style={{"padding": "18px"}}>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)"}}>
                  {"Total Dealers"}
                </div>
                {" "}
                <div style={{"fontSize": "26px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"142"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                  {"6 pending approval"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "18px"}}>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)"}}>
                  {"Total Customers"}
                </div>
                {" "}
                <div style={{"fontSize": "26px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"1,986"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "18px"}}>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)"}}>
                  {"Total Properties"}
                </div>
                {" "}
                <div style={{"fontSize": "26px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"3,214"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                  {"2,890 public · 324 internal-only"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "18px"}}>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)"}}>
                  {"Service Providers"}
                </div>
                {" "}
                <div style={{"fontSize": "26px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"67"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                  {"architects, consultants, contractors"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "18px"}}>
                {" "}
                <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)"}}>
                  {"Total Requests Made"}
                </div>
                {" "}
                <div style={{"fontSize": "26px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                  {"812"}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                  {"Buyer + Build requests, all time"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "20px", "alignItems": "start"}}>
              {" "}
              {/* REQUEST ROUTING SETTINGS */}
              {" "}
              <div className="card" style={{"padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
                {" "}
                <div>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                    {"Request Routing"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "4px"}}>
                    {"How a customer's Buyer Request or Build Request reaches dealers & service providers."}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="radio-card selected">
                  {" "}
                  <div className="radio-dot"></div>
                  {" "}
                  <div>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                      {"Broadcast to All Matching Dealers/Providers"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                      {"Every dealer or provider whose tags/services match the request sees it in their inbox. Fastest responses, more competition per lead."}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="radio-card">
                  {" "}
                  <div className="radio-dot"></div>
                  {" "}
                  <div>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                      {"Route to Selected Dealers/Providers Only"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "3px"}}>
                      {"An admin (or the customer) picks specific recipients per request — more control, slower turnaround."}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)", "borderTop": "1px solid var(--line)", "paddingTop": "12px"}}>
                  {"Applies platform-wide. 812 of 812 requests to date used Broadcast."}
                </div>
                {" "}
              </div>
              {" "}
              {/* REQUESTS BREAKDOWN */}
              {" "}
              <div className="card">
                {" "}
                <div style={{"padding": "18px 20px", "borderBottom": "1px solid var(--line)", "fontWeight": "600", "fontSize": "15px"}}>
                  {"Requests by Type"}
                </div>
                {" "}
                <table>
                  <tbody>
                    <tr>
                      <th>
                        {"Type"}
                      </th>
                      <th>
                        {"Total"}
                      </th>
                      <th>
                        {"Fulfilled"}
                      </th>
                      <th>
                        {"Pending"}
                      </th>
                      <th>
                        {"Avg. Response"}
                      </th>
                    </tr>
                    <tr>
                      <td style={{"fontWeight": "600"}}>
                        {"Buyer Requests (Property Advisor)"}
                      </td>
                      <td>
                        {"568"}
                      </td>
                      <td style={{"color": "var(--green)", "fontWeight": "600"}}>
                        {"489"}
                      </td>
                      <td style={{"color": "var(--amber)", "fontWeight": "600"}}>
                        {"79"}
                      </td>
                      <td>
                        {"4.2 hrs"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{"fontWeight": "600"}}>
                        {"Build Requests (Build Advisor)"}
                      </td>
                      <td>
                        {"244"}
                      </td>
                      <td style={{"color": "var(--green)", "fontWeight": "600"}}>
                        {"201"}
                      </td>
                      <td style={{"color": "var(--amber)", "fontWeight": "600"}}>
                        {"43"}
                      </td>
                      <td>
                        {"7.8 hrs"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* QUICK LINKS */}
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "20px"}}>
              {" "}
              <div className="linktile">
                {" "}
                <div style={{"width": "40px", "height": "40px", "borderRadius": "10px", "background": "var(--gold-light)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "18px"}}>
                  {"👥"}
                </div>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "14px"}}>
                    {"Dealer-Uploaded Customer Data"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                    {"Browse every customer record each dealer has entered or imported"}
                  </div>
                  {" "}
                </div>
                {" "}
                <span style={{"color": "var(--gold)", "fontSize": "13px", "fontWeight": "600"}}>
                  {"View →"}
                </span>
                {" "}
              </div>
              {" "}
              <div className="linktile">
                {" "}
                <div style={{"width": "40px", "height": "40px", "borderRadius": "10px", "background": "var(--violet-bg)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "18px"}}>
                  {"🤖"}
                </div>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "14px"}}>
                    {"AI Scraper & Onboarding"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                    {"Discover dealers, builders & designers online and auto-create draft accounts"}
                  </div>
                  {" "}
                </div>
                {" "}
                <span style={{"color": "var(--gold)", "fontSize": "13px", "fontWeight": "600"}}>
                  {"Open →"}
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
