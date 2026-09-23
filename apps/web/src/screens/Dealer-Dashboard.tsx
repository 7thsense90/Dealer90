// AUTO-GENERATED from design/boards/Dealer-Dashboard.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Dealer-Dashboard.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — Dealer Dashboard";

export default function DealerDashboardScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-dealer-dashboard">
      <div style={{"width": "1440px", "height": "1120px", "boxSizing": "border-box", "background": "var(--paper)", "display": "flex"}}>
        {" "}
        {/* SIDEBAR */}
        {" "}
        <div style={{"width": "250px", "flexShrink": "0", "background": "var(--navy)", "padding": "28px 16px", "display": "flex", "flexDirection": "column", "gap": "4px"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "10px", "padding": "0 10px 24px"}}>
            {" "}
            <div style={{"width": "34px", "height": "34px", "borderRadius": "8px", "background": "var(--gold-light)"}}></div>
            {" "}
            <div style={{"color": "#fff", "fontFamily": "'D90 Fraunces 400-600-700',serif", "fontSize": "17px", "fontWeight": "600"}}>
              {"Al-Noor Builders"}
            </div>
            {" "}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/dealer")}>
            {"Dashboard"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/buyer-requests")}>
            {"Buyer Requests "}
            <span style={{"background": "var(--gold)", "color": "var(--navy)", "fontSize": "10px", "fontWeight": "700", "borderRadius": "999px", "padding": "2px 7px", "marginLeft": "auto"}}>
              {"4 new"}
            </span>
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/transfer-requests")}>
            {"Transfer Requests "}
            <span style={{"background": "var(--gold)", "color": "var(--navy)", "fontSize": "10px", "fontWeight": "700", "borderRadius": "999px", "padding": "2px 7px", "marginLeft": "auto"}}>
              {"1 new"}
            </span>
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/properties/new")}>
            {"Properties"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/customers")}>
            {"Customers"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/installment-plans/new")}>
            {"Installment Plans"}
          </div>
          {" "}
          <div className="navitem" data-nav="1" onClick={go("/dealer/reminders")}>
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
          <div className="navitem">
            {"Settings"}
          </div>
          {" "}
          <div style={{"marginTop": "auto", "padding": "14px 10px 0", "borderTop": "1px solid #26385A", "display": "flex", "alignItems": "center", "gap": "10px"}}>
            {" "}
            <div style={{"width": "32px", "height": "32px", "borderRadius": "50%", "background": "var(--gold-light)"}}></div>
            {" "}
            <div style={{"color": "#fff", "fontSize": "13px"}}>
              {"Ahmed Raza"}
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
                {"Welcome back, Al-Noor Builders"}
              </h1>
              {" "}
              <div style={{"fontSize": "13px", "color": "var(--ink-soft)", "display": "flex", "alignItems": "center", "gap": "8px"}}>
                {"Here's how your listings are performing "}
                <span className="tag" style={{"background": "#EFE9DA", "color": "var(--ink-soft)", "fontWeight": "600"}}>
                  {"🔒 Marketing restricted by Admin"}
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <button className="btn btn-gold" onClick={go("/dealer/properties/new")}>
              {"+ Add Property"}
            </button>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 36px", "display": "flex", "flexDirection": "column", "gap": "26px", "overflow": "auto"}}>
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline"}}>
              {" "}
              <div style={{"fontWeight": "600", "fontSize": "14px", "color": "var(--navy)"}}>
                {"Reporting Snapshot — This Month"}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "18px"}}>
              {" "}
              <div className="card kpi" style={{"borderTopColor": "var(--navy)"}}>
                {" "}
                <div className="lbl">
                  {"Total Properties Listed"}
                </div>
                {" "}
                <div className="val">
                  {"34"}
                </div>
                {" "}
                <div className="sub">
                  {"27 public · 7 internal-only"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card kpi" style={{"borderTopColor": "var(--green)"}}>
                {" "}
                <div className="lbl">
                  {"Total Sold"}
                </div>
                {" "}
                <div className="val" style={{"color": "var(--green)"}}>
                  {"11"}
                </div>
                {" "}
                <div className="sub">
                  {"4 sold this month"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card kpi" style={{"borderTopColor": "var(--green)"}}>
                {" "}
                <div className="lbl">
                  {"Cash Received This Month"}
                </div>
                {" "}
                <div className="val" style={{"color": "var(--green)"}}>
                  {"PKR 41.2L"}
                </div>
                {" "}
                <div className="sub">
                  {"19 installments collected"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card kpi" style={{"borderTopColor": "var(--amber)"}}>
                {" "}
                <div className="lbl">
                  {"Pending Cash This Month"}
                </div>
                {" "}
                <div className="val" style={{"color": "var(--amber)"}}>
                  {"PKR 9.8L"}
                </div>
                {" "}
                <div className="sub">
                  {"7 installments still due"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card kpi" style={{"borderTopColor": "var(--red)"}}>
                {" "}
                <div className="lbl">
                  {"Overdue Installment Amount"}
                </div>
                {" "}
                <div className="val" style={{"color": "var(--red)"}}>
                  {"PKR 2.43L"}
                </div>
                {" "}
                <div className="sub">
                  {"across overdue accounts"}
                </div>
                {" "}
              </div>
              {" "}
              <div className="card kpi" style={{"borderTopColor": "var(--red)"}}>
                {" "}
                <div className="lbl">
                  {"Overdue Installments"}
                </div>
                {" "}
                <div className="val" style={{"color": "var(--red)"}}>
                  {"3"}
                </div>
                {" "}
                <div className="sub">
                  {"2 customers · 1 to 3 mo. late"}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "1.5fr 1fr", "gap": "20px", "alignItems": "stretch"}}>
              {" "}
              {/* RECOVERY TREND */}
              {" "}
              <div className="card" style={{"padding": "22px 24px", "display": "flex", "flexDirection": "column", "gap": "6px"}}>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline"}}>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                    {"Cash Recovery Trend — Last 6 Months"}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"+47% vs. Apr"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginBottom": "6px"}}>
                  {"Total installment cash collected per month, PKR (Lacs)"}
                </div>
                {" "}
                <svg viewBox="0 0 640 220" width="100%" height="200" style={{"overflow": "visible"}}>
                  <line x1="24" y1="190" x2="616" y2="190" stroke="var(--line)" strokeWidth="1"></line>
                  <line x1="24" y1="123.6" x2="616" y2="123.6" stroke="var(--line)" strokeWidth="1" strokeDasharray="2,4"></line>
                  <line x1="24" y1="57.2" x2="616" y2="57.2" stroke="var(--line)" strokeWidth="1" strokeDasharray="2,4"></line>
                  <text x="0" y="193" fontSize="10" fill="var(--ink-soft)" fontFamily="'Work Sans',sans-serif">
                    {"20L"}
                  </text>
                  <text x="0" y="127" fontSize="10" fill="var(--ink-soft)" fontFamily="'Work Sans',sans-serif">
                    {"30L"}
                  </text>
                  <text x="0" y="61" fontSize="10" fill="var(--ink-soft)" fontFamily="'Work Sans',sans-serif">
                    {"40L"}
                  </text>
                  <polygon points="24.0,136.9 142.4,117.0 260.8,90.4 379.2,70.5 497.6,103.7 616.0,49.2 616.0,190 24.0,190" fill="var(--green)" opacity="0.10"></polygon>
                  <polyline points="24.0,136.9 142.4,117.0 260.8,90.4 379.2,70.5 497.6,103.7 616.0,49.2" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></polyline>
                  <circle cx="24.0" cy="136.9" r="4" fill="var(--paper-2)" stroke="var(--green)" strokeWidth="2"></circle>
                  <circle cx="142.4" cy="117.0" r="4" fill="var(--paper-2)" stroke="var(--green)" strokeWidth="2"></circle>
                  <circle cx="260.8" cy="90.4" r="4" fill="var(--paper-2)" stroke="var(--green)" strokeWidth="2"></circle>
                  <circle cx="379.2" cy="70.5" r="4" fill="var(--paper-2)" stroke="var(--green)" strokeWidth="2"></circle>
                  <circle cx="497.6" cy="103.7" r="4" fill="var(--paper-2)" stroke="var(--green)" strokeWidth="2"></circle>
                  <circle cx="616.0" cy="49.2" r="4.5" fill="var(--green)" stroke="var(--paper-2)" strokeWidth="2"></circle>
                  <text x="24" y="153" fontSize="11" fontWeight="600" fill="var(--ink)" fontFamily="'Work Sans',sans-serif">
                    {"28.0L"}
                  </text>
                  <text x="586" y="36" fontSize="11" fontWeight="700" fill="var(--green)" fontFamily="'Work Sans',sans-serif">
                    {"41.2L"}
                  </text>
                  <text x="24" y="210" fontSize="10.5" fill="var(--ink-soft)" fontFamily="'Work Sans',sans-serif">
                    {"Apr"}
                  </text>
                  <text x="132" y="210" fontSize="10.5" fill="var(--ink-soft)" fontFamily="'Work Sans',sans-serif">
                    {"May"}
                  </text>
                  <text x="252" y="210" fontSize="10.5" fill="var(--ink-soft)" fontFamily="'Work Sans',sans-serif">
                    {"Jun"}
                  </text>
                  <text x="371" y="210" fontSize="10.5" fill="var(--ink-soft)" fontFamily="'Work Sans',sans-serif">
                    {"Jul"}
                  </text>
                  <text x="489" y="210" fontSize="10.5" fill="var(--ink-soft)" fontFamily="'Work Sans',sans-serif">
                    {"Aug"}
                  </text>
                  <text x="602" y="210" fontSize="10.5" fill="var(--ink-soft)" fontFamily="'Work Sans',sans-serif">
                    {"Sep"}
                  </text>
                </svg>
                {" "}
              </div>
              {" "}
              {/* PROPERTIES BY STATUS DONUT */}
              {" "}
              <div className="card" style={{"padding": "22px 24px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "15px", "color": "var(--navy)"}}>
                  {"Properties by Status"}
                </div>
                {" "}
                <div style={{"display": "flex", "alignItems": "center", "gap": "20px"}}>
                  {" "}
                  <div style={{"position": "relative", "width": "126px", "height": "126px", "flexShrink": "0"}}>
                    {" "}
                    <div style={{"width": "126px", "height": "126px", "borderRadius": "50%", "background": "conic-gradient(var(--slate) 0% 24%, var(--amber) 24% 80%, var(--green) 80% 92%, var(--violet) 92% 100%)"}}></div>
                    {" "}
                    <div style={{"position": "absolute", "top": "19px", "left": "19px", "width": "88px", "height": "88px", "borderRadius": "50%", "background": "var(--paper-2)", "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center"}}>
                      {" "}
                      <div style={{"fontSize": "20px", "fontWeight": "700", "color": "var(--navy)", "fontFamily": "'D90 Fraunces 400-600-700',serif"}}>
                        {"34"}
                      </div>
                      {" "}
                      <div style={{"fontSize": "10px", "color": "var(--ink-soft)"}}>
                        {"Total"}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <div style={{"flex": "1"}}>
                    {" "}
                    <div className="legend-row">
                      <span className="legend-dot" style={{"background": "var(--slate)"}}></span>
                      <span style={{"flex": "1"}}>
                        {"Available"}
                      </span>
                      <span style={{"fontWeight": "600"}}>
                        {"8 · 24%"}
                      </span>
                    </div>
                    {" "}
                    <div className="legend-row">
                      <span className="legend-dot" style={{"background": "var(--amber)"}}></span>
                      <span style={{"flex": "1"}}>
                        {"On Installment"}
                      </span>
                      <span style={{"fontWeight": "600"}}>
                        {"19 · 56%"}
                      </span>
                    </div>
                    {" "}
                    <div className="legend-row">
                      <span className="legend-dot" style={{"background": "var(--green)"}}></span>
                      <span style={{"flex": "1"}}>
                        {"Sold"}
                      </span>
                      <span style={{"fontWeight": "600"}}>
                        {"4 · 12%"}
                      </span>
                    </div>
                    {" "}
                    <div className="legend-row">
                      <span className="legend-dot" style={{"background": "var(--violet)"}}></span>
                      <span style={{"flex": "1"}}>
                        {"Verified Resale"}
                      </span>
                      <span style={{"fontWeight": "600"}}>
                        {"3 · 8%"}
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
            <div style={{"display": "grid", "gridTemplateColumns": "1.6fr 1fr", "gap": "20px", "alignItems": "start"}}>
              {" "}
              <div className="card">
                {" "}
                <div style={{"padding": "18px 20px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                  {" "}
                  <div style={{"fontWeight": "600", "fontSize": "15px"}}>
                    {"My Properties"}
                  </div>
                  {" "}
                  <A style={{"color": "var(--gold)", "fontSize": "13px", "fontWeight": "600"}}>
                    {"View all →"}
                  </A>
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
                        {"Type"}
                      </th>
                      <th>
                        {"Price"}
                      </th>
                      <th>
                        {"Status"}
                      </th>
                      <th>
                        {"Customer"}
                      </th>
                    </tr>
                    <tr>
                      <td style={{"fontWeight": "600"}}>
                        {"5 Marla Corner Villa, DHA 6"}
                      </td>
                      <td>
                        {"Residential"}
                      </td>
                      <td>
                        {"PKR 2.85 Cr"}
                      </td>
                      <td>
                        <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                          {"On Installment"}
                        </span>
                      </td>
                      <td>
                        {"Usman Tariq"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{"fontWeight": "600"}}>
                        {"Shop 12, Al-Noor Arcade"}
                      </td>
                      <td>
                        {"Commercial"}
                      </td>
                      <td>
                        {"PKR 1.4 Cr"}
                      </td>
                      <td>
                        <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                          {"Sold"}
                        </span>
                      </td>
                      <td>
                        {"Hina Malik"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{"fontWeight": "600"}}>
                        {"8 Marla Plot, Block J"}
                      </td>
                      <td>
                        {"Plot"}
                      </td>
                      <td>
                        {"PKR 1.1 Cr"}
                      </td>
                      <td>
                        <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                          {"Available"}
                        </span>
                      </td>
                      <td>
                        {"—"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{"fontWeight": "600"}}>
                        {"3-Bed Apartment, Gulberg"}
                      </td>
                      <td>
                        {"Rental"}
                      </td>
                      <td>
                        {"PKR 85,000/mo"}
                      </td>
                      <td>
                        <span className="tag" style={{"background": "var(--amber-bg)", "color": "var(--amber)"}}>
                          {"On Installment"}
                        </span>
                      </td>
                      <td>
                        {"Zara Ahmed"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {" "}
              </div>
              {" "}
              <div className="card" style={{"padding": "20px", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
                {" "}
                <div style={{"fontWeight": "600", "fontSize": "15px"}}>
                  {"Recent Payments"}
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "paddingBottom": "12px", "borderBottom": "1px solid var(--line)"}}>
                  {" "}
                  <div>
                    <div style={{"fontWeight": "600"}}>
                      {"Usman Tariq"}
                    </div>
                    <div style={{"color": "var(--ink-soft)"}}>
                      {"Installment 4 of 12"}
                    </div>
                  </div>
                  {" "}
                  <div style={{"textAlign": "right"}}>
                    <div style={{"fontWeight": "700", "color": "var(--green)"}}>
                      {"PKR 218,750"}
                    </div>
                    <div style={{"color": "var(--ink-soft)"}}>
                      {"Sep 19"}
                    </div>
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px", "paddingBottom": "12px", "borderBottom": "1px solid var(--line)"}}>
                  {" "}
                  <div>
                    <div style={{"fontWeight": "600"}}>
                      {"Zara Ahmed"}
                    </div>
                    <div style={{"color": "var(--ink-soft)"}}>
                      {"Installment 2 of 6"}
                    </div>
                  </div>
                  {" "}
                  <div style={{"textAlign": "right"}}>
                    <div style={{"fontWeight": "700", "color": "var(--green)"}}>
                      {"PKR 85,000"}
                    </div>
                    <div style={{"color": "var(--ink-soft)"}}>
                      {"Sep 15"}
                    </div>
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13px"}}>
                  {" "}
                  <div>
                    <div style={{"fontWeight": "600"}}>
                      {"Bilal Sheikh"}
                    </div>
                    <div style={{"color": "var(--ink-soft)"}}>
                      {"Installment 6 of 10 — overdue"}
                    </div>
                  </div>
                  {" "}
                  <div style={{"textAlign": "right"}}>
                    <div style={{"fontWeight": "700", "color": "var(--red)"}}>
                      {"PKR 156,000"}
                    </div>
                    <div style={{"color": "var(--ink-soft)"}}>
                      {"Due Sep 10"}
                    </div>
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
        {" "}
      </div>
    </div>
  );
}
