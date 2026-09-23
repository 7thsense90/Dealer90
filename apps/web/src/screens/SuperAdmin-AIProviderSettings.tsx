// AUTO-GENERATED from design/boards/SuperAdmin-AIProviderSettings.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './SuperAdmin-AIProviderSettings.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — Super Admin — AI Provider Settings";

export default function SuperAdminAIProviderSettingsScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-superadmin-aiprovidersettings">
      <div style={{"width": "1440px", "height": "1050px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
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
          <div className="navitem" data-nav="1" onClick={go("/admin/ai-scraper")}>
            {"🤖 AI Scraper & Onboarding"}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/admin/ai-providers")}>
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
                {"AI Provider Settings"}
              </h1>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--ink-soft)"}}>
                {"One gateway behind every AI feature — swap providers without touching the app"}
              </div>
              {" "}
            </div>
            {" "}
            <button className="btn btn-gold">
              {"Save Changes"}
            </button>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 36px", "display": "flex", "flexDirection": "column", "gap": "24px", "overflow": "auto"}}>
            {" "}
            <div className="card" style={{"padding": "16px 20px", "background": "var(--violet-bg)", "border": "none", "display": "flex", "gap": "12px", "alignItems": "flex-start"}}>
              {" "}
              <span style={{"fontSize": "16px", "lineHeight": "1"}}>
                {"ⓘ"}
              </span>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "#4A3A6B", "lineHeight": "1.6"}}>
                {"Every generative AI feature calls through this same AI Gateway — the app never talks to a provider directly. Default policy is the cheapest capable model per feature. This is a fixed pick you review manually as pricing changes, not an automatic live-switching router."}
              </div>
              {" "}
            </div>
            {" "}
            {/* FEATURE ROUTING */}
            {" "}
            <div className="card">
              {" "}
              <div style={{"padding": "18px 20px", "borderBottom": "1px solid var(--line)", "fontWeight": "600", "fontSize": "15px"}}>
                {"Model Routing per Feature"}
              </div>
              {" "}
              <table>
                <tbody>
                  <tr>
                    <th>
                      {"Feature"}
                    </th>
                    <th>
                      {"Provider / Model"}
                    </th>
                    <th>
                      {"Typical Call"}
                    </th>
                    <th>
                      {"Est. Cost / Call"}
                    </th>
                    <th>
                      {"Policy"}
                    </th>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Marketing — Email & SMS Copy"}
                    </td>
                    <td>
                      <select className="field" style={{"width": "auto", "padding": "8px 10px"}}>
                        <option>
                          {"Google · Gemini 2.5 Flash"}
                        </option>
                        <option>
                          {"Anthropic · Claude Haiku 4.5"}
                        </option>
                        <option>
                          {"OpenAI · GPT-5.6 Luna"}
                        </option>
                        <option>
                          {"Anthropic · Claude Sonnet 5"}
                        </option>
                      </select>
                    </td>
                    <td>
                      {"~1,000 in / 400 out"}
                    </td>
                    <td>
                      {"$0.0001"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Cheapest available"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"AI Scraper — Extraction"}
                    </td>
                    <td>
                      <select className="field" style={{"width": "auto", "padding": "8px 10px"}}>
                        <option>
                          {"Google · Gemini 2.5 Flash"}
                        </option>
                        <option>
                          {"OpenAI · GPT-5.6 Luna"}
                        </option>
                        <option>
                          {"Anthropic · Claude Haiku 4.5"}
                        </option>
                      </select>
                    </td>
                    <td>
                      {"~1,500 in / 120 out"}
                    </td>
                    <td>
                      {"$0.00015"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Cheapest capable"}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{"fontWeight": "600"}}>
                      {"Build Cost Estimator"}
                    </td>
                    <td>
                      <select className="field" style={{"width": "auto", "padding": "8px 10px"}}>
                        <option>
                          {"Google · Gemini 2.5 Flash"}
                        </option>
                        <option>
                          {"Anthropic · Claude Haiku 4.5"}
                        </option>
                        <option>
                          {"OpenAI · GPT-5.6 Terra"}
                        </option>
                      </select>
                    </td>
                    <td>
                      {"~700 in / 450 out"}
                    </td>
                    <td>
                      {"$0.0002"}
                    </td>
                    <td>
                      <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                        {"Cheapest capable"}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              {" "}
              <div style={{"padding": "14px 20px", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "background": "#F4F1EA", "borderRadius": "0 0 13px 13px"}}>
                {" "}
                <span style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                  {"Estimated monthly AI spend at current volume (150 dealers, ~7,000 combined AI calls/mo)"}
                </span>
                {" "}
                <span style={{"fontWeight": "700", "color": "var(--navy)", "fontSize": "14px"}}>
                  {"~ $2 – $10 / month"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            {/* PROVIDER API KEYS */}
            {" "}
            <div className="card">
              {" "}
              <div style={{"padding": "18px 20px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "15px"}}>
                  {"Provider API Keys"}
                </div>
                {" "}
                <span style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                  {"Bring your own key for any provider — nothing is locked to Dealer90.com's account"}
                </span>
                {" "}
              </div>
              {" "}
              <div className="keyrow">
                {" "}
                <span className="dot" style={{"background": "var(--green)"}}></span>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                    {"Google AI (Gemini)"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                    {"Default provider · key connected"}
                  </div>
                  {" "}
                </div>
                {" "}
                <input className="field" defaultValue="••••••••••••gk91" style={{"width": "220px"}} disabled />
                {" "}
                <button className="btn btn-outline" style={{"padding": "8px 14px", "fontSize": "12.5px"}}>
                  {"Rotate Key"}
                </button>
                {" "}
              </div>
              {" "}
              <div className="keyrow">
                {" "}
                <span className="dot" style={{"background": "var(--green)"}}></span>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                    {"Anthropic (Claude)"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                    {"Connected · available as override for any feature"}
                  </div>
                  {" "}
                </div>
                {" "}
                <input className="field" defaultValue="••••••••••••ck44" style={{"width": "220px"}} disabled />
                {" "}
                <button className="btn btn-outline" style={{"padding": "8px 14px", "fontSize": "12.5px"}}>
                  {"Rotate Key"}
                </button>
                {" "}
              </div>
              {" "}
              <div className="keyrow">
                {" "}
                <span className="dot" style={{"background": "var(--line)"}}></span>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                    {"OpenAI (GPT)"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                    {"Not connected"}
                  </div>
                  {" "}
                </div>
                {" "}
                <input className="field" placeholder="Paste API key to connect" style={{"width": "220px"}} />
                {" "}
                <button className="btn btn-gold" style={{"padding": "8px 14px", "fontSize": "12.5px"}}>
                  {"Connect"}
                </button>
                {" "}
              </div>
              {" "}
              <div className="keyrow">
                {" "}
                <span className="dot" style={{"background": "var(--line)"}}></span>
                {" "}
                <div style={{"flex": "1"}}>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "13.5px"}}>
                    {"Other / Custom Endpoint"}
                  </div>
                  {" "}
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)"}}>
                    {"Any OpenAI-compatible API — self-hosted or another vendor"}
                  </div>
                  {" "}
                </div>
                {" "}
                <input className="field" placeholder="Base URL + API key" style={{"width": "220px"}} />
                {" "}
                <button className="btn btn-outline" style={{"padding": "8px 14px", "fontSize": "12.5px"}}>
                  {"Connect"}
                </button>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "20px"}}>
              {" "}
              <div className="card" style={{"padding": "20px"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "14px", "color": "var(--navy)", "marginBottom": "8px"}}>
                  {"Why one gateway, not one vendor"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "lineHeight": "1.6"}}>
                  {"Every feature calls an internal interface, never a provider SDK directly. Changing a model here is a config change, not a code change or a redeploy."}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "20px"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "14px", "color": "var(--navy)", "marginBottom": "8px"}}>
                  {"Review cadence"}
                </div>
                {" "}
                <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "lineHeight": "1.6"}}>
                  {"Provider pricing changes often, including time-limited promotions. This page's defaults are a fixed, documented pick — revisit every few months, not automated."}
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
