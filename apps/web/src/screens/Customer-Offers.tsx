// AUTO-GENERATED from design/boards/Customer-Offers.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './Customer-Offers.css';
import { useGo } from '../lib/nav';

export const title = "Dealer90.com — My Offers";

export default function CustomerOffersScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-customer-offers">
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
          <div className="navitem" data-nav="1" onClick={go("/customer")}>
            {"My Properties"}
          </div>
          {" "}
          <div className="navitem active" data-nav="1" onClick={go("/customer/offers")}>
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
                {"Request #EST-4521 · Lahore"}
              </div>
              {" "}
              <h1 style={{"fontSize": "22px", "color": "var(--navy)"}}>
                {"Offers for your request"}
              </h1>
              {" "}
            </div>
            {" "}
            <div style={{"textAlign": "right"}}>
              {" "}
              <div style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)"}}>
                {"2 of 3 dealers have responded"}
              </div>
              {" "}
              <div style={{"fontSize": "12px", "color": "var(--ink-soft)"}}>
                {"Waiting on Bahria Homes Est. · usually responds within 48hrs"}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"padding": "28px 36px", "display": "flex", "flexDirection": "column", "gap": "24px", "overflow": "auto"}}>
            {" "}
            <div style={{"display": "flex", "flexWrap": "wrap", "gap": "8px"}}>
              {" "}
              <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                {"Medium-Term"}
              </span>
              {" "}
              <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                {"Conservative Risk"}
              </span>
              {" "}
              <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                {"Capital Growth"}
              </span>
              {" "}
              <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                {"PKR 75,000/mo capacity"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "grid", "gridTemplateColumns": "repeat(2,1fr)", "gap": "22px"}}>
              {" "}
              {/* OFFER 1 */}
              {" "}
              <div className="card" style={{"display": "flex", "flexDirection": "column", "overflow": "hidden"}}>
                {" "}
                <div style={{"padding": "20px 22px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
                  {" "}
                  <div style={{"display": "flex", "gap": "12px", "alignItems": "center"}}>
                    {" "}
                    <div style={{"width": "40px", "height": "40px", "borderRadius": "9px", "background": "var(--gold-light)", "flexShrink": "0"}}></div>
                    {" "}
                    <div>
                      {" "}
                      <div style={{"fontSize": "14px", "fontWeight": "600"}}>
                        {"Al-Noor Builders"}
                      </div>
                      {" "}
                      <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                        {"Verified · Projections within ±8.4% historically"}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "var(--green-bg)", "color": "var(--green)"}}>
                    {"New Offer"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"padding": "18px 22px", "display": "flex", "gap": "14px", "borderBottom": "1px solid var(--line)"}}>
                  {" "}
                  <div style={{"width": "80px", "height": "64px", "borderRadius": "8px", "background": "linear-gradient(135deg,#D9CFB8,#C7BC9E)", "flexShrink": "0"}}></div>
                  {" "}
                  <div>
                    {" "}
                    <div style={{"fontSize": "14px", "fontWeight": "600"}}>
                      {"5 Marla Corner Villa, DHA Phase 6"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                      {"Residential · Ready for possession"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "6px", "fontStyle": "italic"}}>
                      {"\"Fits your budget on a 24-month plan, and it's in the DHA 9–10 growth corridor you asked about.\" — Ahmed Raza"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"padding": "16px 22px", "display": "flex", "flexDirection": "column", "gap": "8px", "borderBottom": "1px solid var(--line)"}}>
                  {" "}
                  <div style={{"display": "flex", "justifyContent": "space-between"}}>
                    <span className="rowlabel">
                      {"Total Price"}
                    </span>
                    <span className="rowval">
                      {"PKR 2.85 Cr"}
                    </span>
                  </div>
                  {" "}
                  <div style={{"display": "flex", "justifyContent": "space-between"}}>
                    <span className="rowlabel">
                      {"Down Payment"}
                    </span>
                    <span className="rowval">
                      {"PKR 50,00,000"}
                    </span>
                  </div>
                  {" "}
                  <div style={{"display": "flex", "justifyContent": "space-between"}}>
                    <span className="rowlabel">
                      {"Plan"}
                    </span>
                    <span className="rowval">
                      {"24 months · PKR 979,167/mo"}
                    </span>
                  </div>
                  {" "}
                  <div style={{"display": "flex", "justifyContent": "space-between"}}>
                    <span className="rowlabel">
                      {"Projected Value, 3yr"}
                    </span>
                    <span className="rowval" style={{"color": "var(--green)"}}>
                      {"PKR 3.82 Cr"}
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"padding": "16px 22px", "display": "flex", "gap": "10px"}}>
                  {" "}
                  <button className="btn btn-outline" style={{"flex": "1"}}>
                    {"View Full Details"}
                  </button>
                  {" "}
                  <button className="btn btn-gold" style={{"flex": "1"}} onClick={go("/customer")}>
                    {"Accept Offer"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              {/* OFFER 2 */}
              {" "}
              <div className="card" style={{"display": "flex", "flexDirection": "column", "overflow": "hidden"}}>
                {" "}
                <div style={{"padding": "20px 22px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "flex-start"}}>
                  {" "}
                  <div style={{"display": "flex", "gap": "12px", "alignItems": "center"}}>
                    {" "}
                    <div style={{"width": "40px", "height": "40px", "borderRadius": "9px", "background": "#8FA6C7", "flexShrink": "0"}}></div>
                    {" "}
                    <div>
                      {" "}
                      <div style={{"fontSize": "14px", "fontWeight": "600"}}>
                        {"Skyline Properties"}
                      </div>
                      {" "}
                      <div style={{"fontSize": "11px", "color": "var(--ink-soft)"}}>
                        {"Verified · New to Advisor track record"}
                      </div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                  {" "}
                  <span className="tag" style={{"background": "#EFE9DA", "color": "var(--navy)"}}>
                    {"Responded 6hrs ago"}
                  </span>
                  {" "}
                </div>
                {" "}
                <div style={{"padding": "18px 22px", "display": "flex", "gap": "14px", "borderBottom": "1px solid var(--line)"}}>
                  {" "}
                  <div style={{"width": "80px", "height": "64px", "borderRadius": "8px", "background": "linear-gradient(135deg,#CBD6D2,#AEC0BA)", "flexShrink": "0"}}></div>
                  {" "}
                  <div>
                    {" "}
                    <div style={{"fontSize": "14px", "fontWeight": "600"}}>
                      {"8 Marla Plot, Gulshan-e-Iqbal Ext."}
                    </div>
                    {" "}
                    <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                      {"Plot · LDA Approved"}
                    </div>
                    {" "}
                    <div style={{"fontSize": "12px", "color": "var(--ink-soft)", "marginTop": "6px", "fontStyle": "italic"}}>
                      {"\"A quieter, lower-entry alternative in the same growth corridor with a longer plan to ease your monthly load.\" — Fatima Sheikh"}
                    </div>
                    {" "}
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"padding": "16px 22px", "display": "flex", "flexDirection": "column", "gap": "8px", "borderBottom": "1px solid var(--line)"}}>
                  {" "}
                  <div style={{"display": "flex", "justifyContent": "space-between"}}>
                    <span className="rowlabel">
                      {"Total Price"}
                    </span>
                    <span className="rowval">
                      {"PKR 2.10 Cr"}
                    </span>
                  </div>
                  {" "}
                  <div style={{"display": "flex", "justifyContent": "space-between"}}>
                    <span className="rowlabel">
                      {"Down Payment"}
                    </span>
                    <span className="rowval">
                      {"PKR 40,00,000"}
                    </span>
                  </div>
                  {" "}
                  <div style={{"display": "flex", "justifyContent": "space-between"}}>
                    <span className="rowlabel">
                      {"Plan"}
                    </span>
                    <span className="rowval">
                      {"30 months · PKR 566,667/mo"}
                    </span>
                  </div>
                  {" "}
                  <div style={{"display": "flex", "justifyContent": "space-between"}}>
                    <span className="rowlabel">
                      {"Projected Value, 3yr"}
                    </span>
                    <span className="rowval" style={{"color": "var(--green)"}}>
                      {"PKR 2.68 Cr"}
                    </span>
                  </div>
                  {" "}
                </div>
                {" "}
                <div style={{"padding": "16px 22px", "display": "flex", "gap": "10px"}}>
                  {" "}
                  <button className="btn btn-outline" style={{"flex": "1"}}>
                    {"View Full Details"}
                  </button>
                  {" "}
                  <button className="btn btn-gold" style={{"flex": "1"}} onClick={go("/customer")}>
                    {"Accept Offer"}
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"padding": "16px 22px", "background": "var(--amber-bg)", "border": "none", "display": "flex", "gap": "10px", "alignItems": "flex-start"}}>
              {" "}
              <span style={{"fontSize": "15px", "lineHeight": "1"}}>
                {"ⓘ"}
              </span>
              {" "}
              <div style={{"fontSize": "12px", "color": "#6B4E1E", "lineHeight": "1.5"}}>
                {"Projected values are each dealer's own estimate, not verified by Dealer90.com. Accepting an offer shares your contact details with that dealer only — the others won't be notified unless you choose to decline them."}
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
