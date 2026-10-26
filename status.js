/* SITE SWITCH: set to true to show the website, false to show the holding page. */
var MPES_SITE_ONLINE = true;

(function(){
  if (MPES_SITE_ONLINE) return;
  document.write('<style id="mpes-off">body>*{display:none!important}</style>');
  document.addEventListener("DOMContentLoaded", function(){
    document.title = "Preview unavailable";
    document.body.innerHTML =
      '<main class="hold">' +
        '<h1>This preview is currently unavailable.</h1>' +
        '<p>Please check back soon.</p>' +
      '</main>';
    var s = document.getElementById("mpes-off"); if (s) s.remove();
    var st = document.createElement("style");
    st.textContent = 'body{margin:0;background:#1A1D20;color:#fff;font-family:"Work Sans","Helvetica Neue",Arial,sans-serif}' +
      '.hold{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 24px;box-sizing:border-box}' +
      '.hold h1{font-size:clamp(26px,4vw,40px);font-weight:600;letter-spacing:-.02em;margin:0 0 14px}' +
      '.hold p{color:rgba(255,255,255,.7);font-size:17px;margin:0}';
    document.head.appendChild(st);
  });
})();
