// AUTO-GENERATED from design/boards/SuperAdmin-DealerFeatureAccess.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './SuperAdmin-DealerFeatureAccess.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Super Admin — Dealer Feature & Tab Access";

export default function SuperAdminDealerFeatureAccessScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-superadmin-dealerfeatureaccess">
      <div style={{"width": "1440px", "height": "960px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
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
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Dealer Approvals / Al-Noor Builders"}
              </div>
              {" "}
              <h1 style={{"fontSize": "22px", "color": "var(--navy)"}}>
                {"Feature & Tab Access"}
              </h1>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "10px"}}>
              {" "}
              <button className="btn btn-outline" onClick={go("/admin/approvals")}>
                {"Cancel"}
              </button>
              {" "}
              <button className="btn btn-gold" onClick={go("/admin/approvals")}>
                {"Save & Approve Dealer →"}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 36px", "display": "flex", "flexDirection": "column", "gap": "22px", "overflow": "auto"}}>
            {" "}
            <div className="card" style={{"padding": "16px 20px", "background": "var(--violet-bg)", "border": "none", "display": "flex", "gap": "12px", "alignItems": "flex-start"}}>
              {" "}
              <span style={{"fontSize": "16px", "lineHeight": "1"}}>
                {"ⓘ"}
              </span>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "#4A3A6B", "lineHeight": "1.6"}}>
                {"Choose which tabs this dealer can use. Set here at approval time, or changed anytime from "}
                <strong>
                  {"All Dealers"}
                </strong>
                {". A tab you turn off stays visible in the dealer's sidebar but appears "}
                <strong>
                  {"locked"}
                </strong>
                {" — hovering it shows \"Please contact Admin to enable this feature.\" Two dealers can have entirely different access: e.g. Dealer A gets Buyer Requests + Marketing, Dealer B gets Buyer Requests only."}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr 1.1fr", "gap": "22px", "alignItems": "start"}}>
              {" "}
              {/* MODULE TOGGLES */}
              {" "}
              <div className="card" style={{"gridColumn": "span 2"}}>
                {" "}
                <div style={{"padding": "18px 20px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                  {" "}
                  <div>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "15px"}}>
                      {"Module & Tab Access"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                      {"Dashboard is always available to every dealer and can't be turned off."}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"display": "flex", "gap": "8px"}}>
                    {" "}
                    <button className="btn btn-outline" style={{"padding": "7px 12px", "fontSize": "12px"}}>
                      {"Enable All"}
                    </button>
                    {" "}
                    <button className="btn btn-outline" style={{"padding": "7px 12px", "fontSize": "12px"}}>
                      {"Standard Preset"}
                    </button>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div className="modrow">
                  {" "}
                  <div className="toggle on"></div>
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                      {"Buyer Requests"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                      {"Inbox of Property Advisor leads routed to this dealer"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"Enabled"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="modrow">
                  {" "}
                  <div className="toggle on"></div>
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                      {"Transfer Requests"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                      {"Resale / ownership-transfer approvals from customers"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"Enabled"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="modrow">
                  {" "}
                  <div className="toggle on"></div>
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                      {"Properties"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                      {"Add, edit and publish property listings"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"Enabled"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="modrow">
                  {" "}
                  <div className="toggle on"></div>
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                      {"Customers & Installment Plans"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                      {"Create & manage customer records and installment plans"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"Enabled"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="modrow">
                  {" "}
                  <div className="toggle on"></div>
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                      {"Payments & Reminders"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                      {"Record payments, send overdue reminders"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"Enabled"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="modrow" style={{"background": "var(--red-bg)"}}>
                  {" "}
                  <div className="toggle"></div>
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                      {"Marketing (Email & SMS)"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                      {"Bulk email/SMS campaigns, template editor, contact import"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--red-bg)", "color": "var(--red)", "border": "1px solid #E8B9B1"}}>
                    {"🔒 Locked for this dealer"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div className="modrow">
                  {" "}
                  <div className="toggle on"></div>
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                      {"Branding"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                      {"Custom logo & colors on the dealer's public listings"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"Enabled"}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {/* SIDEBAR PREVIEW */}
              {" "}
              <div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
                {" "}
                <div style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--ink-soft)", "textTransform": "uppercase", "letterSpacing": ".03em"}}>
                  {"Live Preview — Dealer's Sidebar"}
                </div>
                {" "}
                <div style={{"background": "var(--navy)", "borderRadius": "14px", "padding": "22px 14px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
                  {" "}
                  <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 8px 18px"}}>
                    {" "}
                    <div style={{"width": "28px", "height": "28px", "borderRadius": "7px", "background": "var(--gold-light)"}}></div>
                    {" "}
                    <div style={{"color": "#fff", "fontSize": "14px", "fontWeight": "600"}}>
                      {"Al-Noor Builders"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="navitem active">
                    {"Dashboard"}
                  </div>
                  {" "}
                  <div className="navitem">
                    {"Buyer Requests"}
                  </div>
                  {" "}
                  <div className="navitem">
                    {"Transfer Requests"}
                  </div>
                  {" "}
                  <div className="navitem">
                    {"Properties"}
                  </div>
                  {" "}
                  <div className="navitem">
                    {"Customers"}
                  </div>
                  {" "}
                  <div className="navitem">
                    {"Payments"}
                  </div>
                  {" "}
                  <div className="navitem locked">
                    {"Marketing "}
                    <span className="lock-ic">
                      {"🔒"}
                    </span>
                    {" "}
                    <div className="tooltip">
                      {"This feature isn't enabled for your account. Please contact Admin to enable this feature."}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div className="navitem">
                    {"Branding"}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                  {"↑ Hover the locked tab to see exactly what the dealer sees."}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* COMPARE OTHER DEALERS */}
            {" "}
            <div className="card" style={{"padding": "20px 22px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "14px", "color": "var(--navy)"}}>
                {"Access Is Set Per Dealer"}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Every dealer gets its own configuration — enabling Marketing here has no effect on any other dealer's account."}
              </div>
              {" "}
              <div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap"}}>
                {" "}
                <div className="dealer-pill active">
                  {"Al-Noor Builders "}
                  <span className="tag" style={{"background": "var(--red-bg)", "color": "var(--red)"}}>
                    {"Marketing locked"}
                  </span>
                </div>
                {" "}
                <div className="dealer-pill">
                  {"Green Valley Realty "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"All tabs enabled"}
                  </span>
                </div>
                {" "}
                <div className="dealer-pill">
                  {"Riverside Estates "}
                  <span className="tag" style={{"background": "var(--red-bg)", "color": "var(--red)"}}>
                    {"Marketing, Branding locked"}
                  </span>
                </div>
                {" "}
                <div className="dealer-pill">
                  {"Skyline Properties "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"All tabs enabled"}
                  </span>
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
