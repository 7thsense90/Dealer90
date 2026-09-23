// AUTO-GENERATED from design/boards/ForDealers.dc.html by tools/convert_boards.py.
// Do not hand-edit visuals: change the board on the canvas, re-export, re-run the converter.
import './ForDealers.css';
import { useGo, A } from '../lib/nav';

export const title = "Dealer90.com — For Dealers";

export default function ForDealersScreen() {
  const go = useGo();
  void go;
  return (
    <div className="d90-screen pg-fordealers">
      <div style={{"width": "1440px", "background": "var(--paper)", "position": "relative", "fontFamily": "'Work Sans',sans-serif"}}>
        {" "}
        {/* UTILITY BAR */}
        {" "}
        <div style={{"background": "var(--navy)", "color": "rgba(255,255,255,.68)", "fontSize": "11.5px", "padding": "8px 64px", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
          {" "}
          <div>
            {"Regulated & verified against  "}
            <span style={{"color": "#fff", "fontWeight": "600"}}>
              {"PCATP · PEC · LDA · CDA · DHA"}
            </span>
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "18px"}}>
            {" "}
            <span>
              {"PKR ▾"}
            </span>
            {" "}
            <span>
              {"English ▾"}
            </span>
            {" "}
            <span>
              {"Dealer Login"}
            </span>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* NAV */}
        {" "}
        <div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "20px 64px", "borderBottom": "1px solid var(--line)", "background": "var(--paper-2)"}}>
          {" "}
          <div style={{"display": "flex", "alignItems": "center", "gap": "12px"}} data-nav="1" onClick={go("/")}>
            {" "}
            <div style={{"width": "38px", "height": "38px", "borderRadius": "7px", "background": "var(--navy)", "color": "var(--gold-light)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontWeight": "700", "fontSize": "15px"}}>
              {"D90"}
            </div>
            {" "}
            <div style={{"fontFamily": "'Work Sans',sans-serif", "fontWeight": "700", "fontSize": "17px", "letterSpacing": "-.01em"}}>
              {"Dealer90.com"}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "34px", "fontSize": "14px", "fontWeight": "500", "color": "var(--ink-soft)"}}>
            {" "}
            <A to="/properties">
              {"Properties"}
            </A>
            {" "}
            <A to="/invest">
              {"Invest by ROI"}
            </A>
            {" "}
            <A to="/build">
              {"Build a Home"}
            </A>
            {" "}
            <A style={{"color": "var(--navy)", "fontWeight": "700"}} to="/for-dealers">
              {"For Dealers"}
            </A>
            {" "}
            <A to="/for-builders">
              {"For Builders"}
            </A>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "10px", "alignItems": "center"}}>
            {" "}
            <A className="btn btn-outline" style={{"padding": "10px 18px", "fontSize": "13.5px"}} to="/login">
              {"Log In"}
            </A>
            {" "}
            <A className="btn btn-gold" style={{"padding": "10px 20px", "fontSize": "13.5px"}} to="/login">
              {"Register as a Dealer"}
            </A>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* HERO */}
        {" "}
        <div style={{"padding": "88px 64px 64px", "background": "var(--navy)", "color": "#fff"}}>
          {" "}
          <div className="eyebrow" style={{"color": "var(--gold-light)", "marginBottom": "18px"}}>
            {"FOR DEALERS"}
          </div>
          {" "}
          <h1 style={{"fontSize": "48px", "fontWeight": "600", "lineHeight": "1.1", "maxWidth": "720px"}}>
            {"Stop chasing leads. Start receiving qualified ones — with the ROI math already attached."}
          </h1>
          {" "}
          <p style={{"fontSize": "17px", "lineHeight": "1.6", "color": "rgba(255,255,255,.68)", "margin": "22px 0 0", "maxWidth": "560px"}}>
            {"Every buyer request that reaches you has already told the Property Advisor their target ROI, horizon and budget. You're not cold-calling — you're responding to someone who already wants what you're selling."}
          </p>
          {" "}
          <div style={{"display": "flex", "gap": "12px", "marginTop": "32px"}}>
            {" "}
            <A className="btn btn-gold" style={{"padding": "14px 26px"}} to="/login">
              {"Register as a Dealer →"}
            </A>
            {" "}
            <A className="btn btn-outline-light" style={{"padding": "14px 26px"}} to="/dealer">
              {"See Dealer Dashboard"}
            </A>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* WHAT YOU GET */}
        {" "}
        <div style={{"padding": "72px 64px", "background": "var(--paper)"}}>
          {" "}
          <div style={{"maxWidth": "560px", "marginBottom": "44px"}}>
            {" "}
            <div className="eyebrow" style={{"marginBottom": "12px"}}>
              {"WHAT YOU GET"}
            </div>
            {" "}
            <h2 style={{"fontSize": "30px", "fontWeight": "600", "color": "var(--navy)"}}>
              {"A full toolkit, not just a listing slot."}
            </h2>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "gap": "28px"}}>
            {" "}
            <div style={{"flex": "1", "padding": "28px 26px", "background": "var(--paper-2)", "border": "1px solid var(--line)", "borderRadius": "4px"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "8px", "background": "var(--gold-light)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px"}}>
                {"📥"}
              </div>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "marginTop": "16px"}}>
                {"Qualified Buyer Requests"}
              </div>
              {" "}
              <p style={{"fontSize": "13.5px", "color": "var(--ink-soft)", "lineHeight": "1.6", "margin": "10px 0 0"}}>
                {"Requests arrive with target ROI, budget and horizon already attached — build your offer, don't fish for the fit."}
              </p>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "padding": "28px 26px", "background": "var(--paper-2)", "border": "1px solid var(--line)", "borderRadius": "4px"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "8px", "background": "var(--moss-bg)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px"}}>
                {"📋"}
              </div>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "marginTop": "16px"}}>
                {"Installment Plan Builder"}
              </div>
              {" "}
              <p style={{"fontSize": "13.5px", "color": "var(--ink-soft)", "lineHeight": "1.6", "margin": "10px 0 0"}}>
                {"Structure a down payment and schedule in minutes — customers see it tracked live, so you spend less time chasing payments."}
              </p>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "padding": "28px 26px", "background": "var(--paper-2)", "border": "1px solid var(--line)", "borderRadius": "4px"}}>
              {" "}
              <div style={{"width": "38px", "height": "38px", "borderRadius": "8px", "background": "var(--clay-bg)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "17px"}}>
                {"✉️"}
              </div>
              {" "}
              <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "19px", "fontWeight": "600", "marginTop": "16px"}}>
                {"Built-In Marketing"}
              </div>
              {" "}
              <p style={{"fontSize": "13.5px", "color": "var(--ink-soft)", "lineHeight": "1.6", "margin": "10px 0 0"}}>
                {"Email and SMS templates, an AI editor, and CSV contact import — reach your existing customer list without another tool."}
              </p>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* TOOL SNAPSHOTS: ONE BY ONE */}
        {" "}
        <div style={{"padding": "16px 64px 72px", "background": "var(--paper)"}}>
          {" "}
          <div style={{"maxWidth": "560px", "marginBottom": "48px"}}>
            {" "}
            <div className="eyebrow" style={{"marginBottom": "12px"}}>
              {"YOUR DASHBOARD, ONE TOOL AT A TIME"}
            </div>
            {" "}
            <h2 style={{"fontSize": "28px", "fontWeight": "600", "color": "var(--navy)"}}>
              {"Every service, exactly as it looks once you're in."}
            </h2>
            {" "}
          </div>
          {" "}
          {/* ROW 1: EMAIL MARKETING */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--clay-bg)", "color": "var(--clay)", "marginBottom": "14px"}}>
                {"Email Marketing"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Pick a template, personalize it with AI, hit send."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Start from a ready-made template — new listing, price drop, monthly newsletter — then rewrite any line with the built-in AI editor before it goes out."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "18px", "display": "inline-block"}} to="/dealer/marketing/email">
                {"Open Email Templates →"}
              </A>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "0", "overflow": "hidden"}}>
              {" "}
              <div style={{"padding": "16px 20px", "borderBottom": "1px solid var(--line)", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
                {" "}
                <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                  {"Email Templates"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--paper)", "color": "var(--ink-soft)", "border": "1px solid var(--line)"}}>
                  {"12 templates"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "13px 20px", "borderBottom": "1px solid var(--line)"}}>
                {" "}
                <div>
                  <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                    {"New Listing Announcement"}
                  </div>
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                    {"Last used 3 days ago"}
                  </div>
                </div>
                {" "}
                <A style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--navy)"}} to="/dealer/marketing/email/editor">
                  {"Edit with AI →"}
                </A>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "13px 20px", "borderBottom": "1px solid var(--line)"}}>
                {" "}
                <div>
                  <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                    {"Price Drop Alert"}
                  </div>
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                    {"Last used 1 week ago"}
                  </div>
                </div>
                {" "}
                <A style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--navy)"}} to="/dealer/marketing/email/editor">
                  {"Edit with AI →"}
                </A>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "padding": "13px 20px"}}>
                {" "}
                <div>
                  <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                    {"Monthly Newsletter"}
                  </div>
                  <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "marginTop": "2px"}}>
                    {"Sends on the 1st"}
                  </div>
                </div>
                {" "}
                <A style={{"fontSize": "12px", "fontWeight": "600", "color": "var(--navy)"}} to="/dealer/marketing/email/editor">
                  {"Edit with AI →"}
                </A>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 2: SMS CAMPAIGNS (mockup left) */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px", "order": "1"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "marginBottom": "14px"}}>
                {" "}
                <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600"}}>
                  {"SMS PREVIEW"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"412 recipients"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"background": "var(--paper)", "borderRadius": "12px", "padding": "14px 16px", "fontSize": "12.5px", "lineHeight": "1.55", "color": "var(--ink)", "maxWidth": "320px"}}>
                {"Your next installment of PKR 1,958,333 is due Oct 5. Reply PAY for the link, or call us on 0311-XXXXXXX. — Dealer90.com"}
              </div>
              {" "}
              <button className="btn btn-gold" style={{"width": "100%", "marginTop": "18px"}} onClick={go("/dealer/marketing/email")}>
                {"Send Campaign →"}
              </button>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "order": "2"}}>
              {" "}
              <span className="tag" style={{"background": "var(--gold)", "color": "#fff", "marginBottom": "14px"}}>
                {"SMS Campaigns"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Reach customers who don't check email."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Same templates, sent as text — for payment nudges and offer alerts that need to actually be seen the same day."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "18px", "display": "inline-block"}} to="/dealer/marketing/sms">
                {"Open SMS Templates →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 3: PAYMENT REMINDERS */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)", "marginBottom": "14px"}}>
                {"Payment Reminders"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Reminders go out automatically — before a payment is even late."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Set the schedule once; every upcoming, due-today and overdue installment gets nudged without you touching it."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "18px", "display": "inline-block"}} to="/dealer/reminders">
                {"Open Payment Reminders →"}
              </A>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px"}}>
              {" "}
              <div style={{"fontSize": "11.5px", "color": "var(--ink-soft)", "fontWeight": "600", "marginBottom": "12px"}}>
                {"UPCOMING REMINDERS"}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span>
                  {"Bilal Ahmed · PKR 1.95L"}
                </span>
                <span className="tag" style={{"background": "var(--amber-bg,#F6EADA)", "color": "#B9772E", "padding": "2px 9px"}}>
                  {"Due in 2 days"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span>
                  {"Sana Tariq · PKR 3.1L"}
                </span>
                <span className="tag" style={{"background": "#FBE4E1", "color": "#B03A2E", "padding": "2px 9px"}}>
                  {"Overdue 1 day"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span>
                  {"Usman Raza · PKR 2.4L"}
                </span>
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)", "padding": "2px 9px"}}>
                  {"Sent — on track"}
                </span>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 4: SEND NEW OFFERS (mockup left) */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px", "order": "1"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "16px"}}>
                {" "}
                <div style={{"fontSize": "13.5px", "fontWeight": "600"}}>
                  {"5 Marla Corner Villa — DHA 6"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--gold)", "color": "#fff"}}>
                  {"New Listing"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"fontSize": "12.5px", "color": "var(--ink-soft)", "lineHeight": "1.55", "marginBottom": "16px"}}>
                {"\"Just listed — matches your target ROI band. Down payment 20%, 36-month plan available.\""}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Matched buyers"}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"86"}
                </span>
                {" "}
              </div>
              {" "}
              <button className="btn btn-navy" style={{"width": "100%", "marginTop": "16px"}} onClick={go("/dealer/offers")}>
                {"Send to 86 Matched Buyers →"}
              </button>
              {" "}
            </div>
            {" "}
            <div style={{"flex": "1", "order": "2"}}>
              {" "}
              <span className="tag" style={{"background": "var(--clay-bg)", "color": "var(--clay)", "marginBottom": "14px"}}>
                {"Send New Offers"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Broadcast a new listing or price drop in one click."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"The system pre-selects everyone whose saved ROI, city and budget already fit — you review the list, then send."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "18px", "display": "inline-block"}} to="/dealer/offers">
                {"Open Send Offers →"}
              </A>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          {/* ROW 5: IMPORT CONTACTS */}
          {" "}
          <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "40px 0 8px", "borderTop": "1px solid var(--line)"}}>
            {" "}
            <div style={{"flex": "1"}}>
              {" "}
              <span className="tag" style={{"background": "var(--gold-light)", "color": "var(--clay)", "marginBottom": "14px"}}>
                {"Import Contacts"}
              </span>
              {" "}
              <h3 style={{"fontSize": "22px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
                {"Bring your existing customer list in one upload."}
              </h3>
              {" "}
              <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "400px"}}>
                {"Drop in a CSV or Excel file from wherever you keep contacts today — columns map automatically, so your list is ready for its first campaign in minutes."}
              </p>
              {" "}
              <A style={{"fontSize": "13px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "18px", "display": "inline-block"}} to="/dealer/marketing/import">
                {"Open Import Contacts →"}
              </A>
              {" "}
            </div>
            {" "}
            <div className="card" style={{"flex": "1", "padding": "22px"}}>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "14px"}}>
                {" "}
                <div style={{"fontSize": "13px", "fontWeight": "600"}}>
                  {"customers_sept.csv"}
                </div>
                {" "}
                <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                  {"412 rows detected"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Column \"Name\""}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"→ Customer Name"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Column \"Phone\""}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"→ Mobile Number"}
                </span>
                {" "}
              </div>
              {" "}
              <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
                {" "}
                <span style={{"color": "var(--ink-soft)"}}>
                  {"Column \"Email\""}
                </span>
                <span style={{"fontWeight": "600"}}>
                  {"→ Email Address"}
                </span>
                {" "}
              </div>
              {" "}
              <button className="btn btn-gold" style={{"width": "100%", "marginTop": "16px"}} onClick={go("/dealer/marketing/import")}>
                {"Confirm & Import →"}
              </button>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* CREDIBILITY EXPLAINER */}
        {" "}
        <div style={{"display": "flex", "gap": "52px", "alignItems": "center", "padding": "16px 64px 72px", "background": "var(--paper)"}}>
          {" "}
          <div style={{"flex": "1"}}>
            {" "}
            <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)", "marginBottom": "14px"}}>
              {"Dealer Credibility Score"}
            </span>
            {" "}
            <h3 style={{"fontSize": "24px", "fontWeight": "600", "color": "var(--navy)", "marginTop": "2px"}}>
              {"A track record buyers can actually see."}
            </h3>
            {" "}
            <p style={{"fontSize": "14px", "color": "var(--ink-soft)", "lineHeight": "1.65", "marginTop": "12px", "maxWidth": "420px"}}>
              {"Your score is built from on-time delivery, projection accuracy against actual resale outcomes, and buyer-reported experience — it's shown next to every listing you post, so it works for you instead of a stranger's word-of-mouth."}
            </p>
            {" "}
            <A className="btn btn-navy" style={{"marginTop": "20px", "padding": "12px 22px"}} to="/login">
              {"Register as a Dealer →"}
            </A>
            {" "}
          </div>
          {" "}
          <div className="card" style={{"flex": "1", "padding": "22px"}}>
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "marginBottom": "16px"}}>
              {" "}
              <div style={{"fontSize": "13.5px", "fontWeight": "600"}}>
                {"Al-Noor Builders"}
              </div>
              {" "}
              <span className="tag" style={{"background": "var(--moss-bg)", "color": "var(--moss)"}}>
                {"✓ 8.7 / 10"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
              {" "}
              <span style={{"color": "var(--ink-soft)"}}>
                {"On-time delivery"}
              </span>
              <span className="num" style={{"fontWeight": "600"}}>
                {"94%"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
              {" "}
              <span style={{"color": "var(--ink-soft)"}}>
                {"Projection accuracy"}
              </span>
              <span className="num" style={{"fontWeight": "600"}}>
                {"±6%"}
              </span>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "padding": "9px 0", "borderTop": "1px solid var(--line)"}}>
              {" "}
              <span style={{"color": "var(--ink-soft)"}}>
                {"Active listings"}
              </span>
              <span className="num" style={{"fontWeight": "600"}}>
                {"23"}
              </span>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        {/* CTA BAND */}
        {" "}
        <div style={{"padding": "56px 64px", "background": "var(--navy-2)", "color": "#fff", "display": "flex", "justifyContent": "space-between", "alignItems": "center"}}>
          {" "}
          <div>
            {" "}
            <div className="eyebrow" style={{"color": "var(--gold-light)", "marginBottom": "8px"}}>
              {"GET STARTED"}
            </div>
            {" "}
            <div style={{"fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontSize": "26px", "fontWeight": "600", "maxWidth": "480px"}}>
              {"Approval usually takes under 48 hours."}
            </div>
            {" "}
          </div>
          {" "}
          <A className="btn btn-gold" style={{"padding": "14px 28px"}} to="/login">
            {"Register as a Dealer →"}
          </A>
          {" "}
        </div>
        {" "}
        {/* FOOTER */}
        {" "}
        <div style={{"padding": "44px 64px", "background": "var(--navy)", "color": "rgba(255,255,255,.6)"}}>
          {" "}
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-start", "paddingBottom": "28px", "borderBottom": "1px solid var(--line-dark)"}}>
            {" "}
            <div>
              {" "}
              <div style={{"display": "flex", "alignItems": "center", "gap": "10px"}} data-nav="1" onClick={go("/")}>
                {" "}
                <div style={{"width": "30px", "height": "30px", "borderRadius": "6px", "background": "rgba(255,255,255,.08)", "color": "var(--gold-light)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'D90 Fraunces 400-500-600-700',serif", "fontWeight": "700", "fontSize": "12px"}}>
                  {"D90"}
                </div>
                {" "}
                <div style={{"color": "#fff", "fontWeight": "700", "fontSize": "15px"}}>
                  {"Dealer90.com"}
                </div>
                {" "}
              </div>
              {" "}
              <p style={{"fontSize": "12.5px", "maxWidth": "320px", "lineHeight": "1.6", "marginTop": "12px"}}>
                {"Pakistan's installment property and build-services marketplace. Every figure shown is dealer- or provider-supplied — never guaranteed by Dealer90.com."}
              </p>
              {" "}
            </div>
            {" "}
            <div style={{"display": "flex", "gap": "56px", "fontSize": "13px"}}>
              {" "}
              <div>
                {" "}
                <div style={{"color": "#fff", "fontWeight": "600", "marginBottom": "10px"}}>
                  {"Tools"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                  {" "}
                  <A to="/invest">
                    {"Invest by ROI"}
                  </A>
                  <A to="/build">
                    {"Build a Home"}
                  </A>
                  <A to="/properties">
                    {"Installment Plans"}
                  </A>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div>
                {" "}
                <div style={{"color": "#fff", "fontWeight": "600", "marginBottom": "10px"}}>
                  {"Partners"}
                </div>
                {" "}
                <div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
                  {" "}
                  <A to="/for-dealers">
                    {"For Dealers"}
                  </A>
                  <A to="/for-builders">
                    {"For Builders"}
                  </A>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "paddingTop": "20px", "fontSize": "11.5px"}}>
            {" "}
            <div>
              {"© 2026 Dealer90.com"}
            </div>
            {" "}
            <div>
              {"Regulated & verified against PCATP · PEC · LDA · CDA · DHA"}
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
