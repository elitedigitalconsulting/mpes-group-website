/* SITE SWITCH: set to true to show the website, false to show the holding page. */
var MPES_SITE_ONLINE = true;

(function(){
  if (MPES_SITE_ONLINE) return;
  document.write('<style id="mpes-off">body>*{display:none!important}</style>');
  document.addEventListener("DOMContentLoaded", function(){
    var logo = (window.__P && window.__P.logo) ? "data:image/webp;base64," + String(window.__P.logo).replace(/\s+/g,"") : "";
    document.title = "MPES Group Aust";
    document.body.innerHTML =
      '<main class="hold">' +
        (logo ? '<img src="' + logo + '" alt="MPES" width="66" height="88">' : '') +
        '<p class="brand">GROUP AUST</p>' +
        '<h1>This preview is currently unavailable.</h1>' +
        '<p>Please check back soon, or call us on <a href="tel:0291192244">02 9119 2244</a>.</p>' +
      '</main>';
    var s = document.getElementById("mpes-off"); if (s) s.remove();
    var st = document.createElement("style");
    st.textContent = 'body{margin:0;background:#1A1D20;color:#fff;font-family:"Work Sans","Helvetica Neue",Arial,sans-serif}' +
      '.hold{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 24px;box-sizing:border-box}' +
      '.hold img{width:66px;height:auto;margin-bottom:10px}' +
      '.brand{letter-spacing:.32em;font-size:13px;font-weight:600;color:rgba(255,255,255,.55);margin:0 0 36px}' +
      '.hold h1{font-size:clamp(26px,4vw,40px);font-weight:600;letter-spacing:-.02em;margin:0 0 14px}' +
      '.hold p{color:rgba(255,255,255,.7);font-size:17px;margin:0}' +
      '.hold a{color:#A0C755;font-weight:600;text-decoration:none}';
    document.head.appendChild(st);
  });
})();
