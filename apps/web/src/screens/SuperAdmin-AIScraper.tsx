// AUTO-GENERATED from design/boards/SuperAdmin-AIScraper.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './SuperAdmin-AIScraper.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Super Admin — AI Scraper & Onboarding";

export default function SuperAdminAIScraperScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-superadmin-aiscraper">
      <div style={{"width": "1440px", "height": "990px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
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
          <div className="navitem" data-nav="1" onClick={go("/admin/customers")}>
            {"Customers"}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/admin/ai-scraper")}>
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
                {"AI Scraper & Onboarding"}
              </h1>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                {"Find dealers, builders & designers online and auto-create their draft accounts"}
              </div>
              {" "}
            </div>
            {" "}
            <span className="tag" style={{"background": "var(--violet-bg)", "color": "var(--violet)", "padding": "7px 14px"}}>
              {"✨ AI-Powered"}
            </span>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 36px", "display": "flex", "flexDirection": "column", "gap": "24px", "overflow": "auto"}}>
            {" "}
            {/* NEW SCRAPE JOB */}
            {" "}
            <div className="card" style={{"padding": "24px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                {"Start a New Scraping Job"}
              </div>
              {" "}
              <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "16px"}}>
                {" "}
                <div>
                  {" "}
                  <label>
                    {"What are you looking for?"}
                  </label>
                  {" "}
                  <input className="field" defaultValue="Real estate dealers in Lahore, Pakistan" />
                  {" "}
                </div>
                {" "}
                <div>
                  {" "}
                  <label>
                    {"Provider Type"}
                  </label>
                  {" "}
                  <div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap"}}>
                    {" "}
                    <div className="chip active">
                      {"Dealers"}
                    </div>
                    {" "}
                    <div className="chip">
                      {"Builders / Contractors"}
                    </div>
                    {" "}
                    <div className="chip">
                      {"Architects"}
                    </div>
                    {" "}
                    <div className="chip">
                      {"Interior Designers"}
                    </div>
                    {" "}
                    <div className="chip">
                      {"Approval Consultants"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <label>
                  {"Sources to Search"}
                </label>
                {" "}
                <div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap"}}>
                  {" "}
                  <div className="chip active">
                    {"Google Business Listings"}
                  </div>
                  {" "}
                  <div className="chip active">
                    {"Property Portals"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Facebook Business Pages"}
                  </div>
                  {" "}
                  <div className="chip">
                    {"Paste a URL List"}
                  </div>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "14px 16px", "background": "var(--violet-bg)", "border": "none", "display": "flex", "gap": "10px", "alignItems": "flex-start"}}>
                {" "}
                <span style={{"fontSize": "15px", "lineHeight": "1"}}>
                  {"ⓘ"}
                </span>
                {" "}
                <div style={{"fontSize": "12px", "color": "#4A3A6B", "lineHeight": "1.55"}}>
                  {"AI reads each source, extracts business name, type, location and contact details, and drafts an unverified account. Nothing goes live until the business completes registration and passes the normal Dealer Approvals review."}
                </div>
                {" "}
              </div>
              {" "}
              <button className="btn btn-ai" style={{"alignSelf": "flex-start"}}>
                {"✨ Start Scraping Job →"}
              </button>
              {" "}
            </div>
            {" "}
            {/* JOB IN PROGRESS */}
            {" "}
            <div className="card" style={{"padding": "22px 24px", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "14px"}}>
                  {"Job #SC-1042 — \"Real estate dealers in Lahore, Pakistan\""}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                  {"In Progress"}
                </span>
                {" "}
              </div>
              {" "}
              <div className="progress-track">
                <div className="progress-fill" style={{"width": "68%"}}></div>
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"340 sources scanned · 58 candidates found so far"}
              </div>
              {" "}
            </div>
            {" "}
            {/* RESULTS */}
            {" "}
            <div className="card">
              {" "}
              <div style={{"padding": "18px 20px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "15px"}}>
                    {"Candidates Found — Job #SC-1039 (Completed)"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                    {"\"Builders & contractors in Karachi\" · 4 of 46 shown"}
                  </div>
                  {" "}
                </div>
                {" "}
                <button className="btn btn-gold">
                  {"Create Accounts & Send Free Access — 3 Selected →"}
                </button>
                {" "}
              </div>
              {" "}
              <table>
                <tbody>
                  <tr>
                    <th></th>
                    <th>
                      {"Business Name"}
                    </th>
                    <th>
                      {"Type"}
                    </th>
                    <th>
                      {"Location"}
                    </th>
                    <th>
                      {"Contact"}
                    </th>
                    <th>
                      {"Confidence"}
                    </th>
                    <th>
                      {"Source"}
                    </th>
                    <th>
                      {"Status"}
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <div style={{"width": "18px", "height": "18px", "borderRadius": "5px", "background": "var(--navy)"}}></div>
                    </td>
                    <td style={{"fontWeight": "600"}}>
                      {"Crescent Builders & Co."}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Builder"}
                      </span>
                    </td>
                    <td>
                      {"Karachi"}
                    </td>
                    <td>
                      {"+92 21 3456 7890"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"High · 92%"}
                      </span>
                    </td>
                    <td>
                      <A style={{"color": "var(--gold)", "fontSize": "11.5px"}}>
                        {"Google Listing ↗"}
                      </A>
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"New"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{"width": "18px", "height": "18px", "borderRadius": "5px", "background": "var(--navy)"}}></div>
                    </td>
                    <td style={{"fontWeight": "600"}}>
                      {"Skyline Interiors Studio"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Interior Designer"}
                      </span>
                    </td>
                    <td>
                      {"Karachi"}
                    </td>
                    <td>
                      {"info@skylineinteriors.pk"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"High · 88%"}
                      </span>
                    </td>
                    <td>
                      <A style={{"color": "var(--gold)", "fontSize": "11.5px"}}>
                        {"Facebook Page ↗"}
                      </A>
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"New"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{"width": "18px", "height": "18px", "borderRadius": "5px", "background": "var(--navy)"}}></div>
                    </td>
                    <td style={{"fontWeight": "600"}}>
                      {"Al-Fateh Construction"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Builder"}
                      </span>
                    </td>
                    <td>
                      {"Karachi"}
                    </td>
                    <td>
                      {"+92 300 9988776"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                        {"Medium · 71%"}
                      </span>
                    </td>
                    <td>
                      <A style={{"color": "var(--gold)", "fontSize": "11.5px"}}>
                        {"Property Portal ↗"}
                      </A>
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"New"}
                      </span>
                    </td>
                  </tr>
                  <tr style={{"opacity": ".6"}}>
                    <td>
                      <div style={{"width": "18px", "height": "18px", "borderRadius": "5px", "border": "1.5px solid var(--line)"}}></div>
                    </td>
                    <td style={{"fontWeight": "600"}}>
                      {"Reza Structural Consultants"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                        {"Approval Consultant"}
                      </span>
                    </td>
                    <td>
                      {"Karachi"}
                    </td>
                    <td>
                      {"reza.consult@email.com"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--red-bg)", "color": "var(--red)"}}>
                        {"Low · 44%"}
                      </span>
                    </td>
                    <td>
                      <A style={{"color": "var(--gold)", "fontSize": "11.5px"}}>
                        {"Google Listing ↗"}
                      </A>
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Account Created"}
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
