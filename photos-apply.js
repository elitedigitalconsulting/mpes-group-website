(function(){
  var P=window.__P||{};var D=function(v){return "data:image/webp;base64,"+String(v).replace(/\s+/g,"")};
  if(P.hero){var h=document.querySelector(".hero-img");if(h)h.style.backgroundImage='url("'+D(P.hero)+'")'}
  document.querySelectorAll('img[src^="assets/"]').forEach(function(im){
    var k=im.getAttribute("src").split("/").pop().split(".")[0];
    if(im.getAttribute("src").indexOf("assets/logos/")===0&&P["l_"+k])im.src=D(P["l_"+k]);
    else if(k==="logo"&&P.logo)im.src=D(P.logo);
  });
  if(typeof PHOTOS==="object"){Object.keys(PHOTOS).forEach(function(k){if(P[k])PHOTOS[k]=D(P[k])});if(typeof renderProj==="function")renderProj()}
})();
/* Visit alert: one push notification per browser session, with device, browser and IP.
   ?owner=1 mutes alerts from this browser (?owner=0 unmutes). Visits from OWNER_IPS never alert. */
var OWNER_IPS=[];
(function(){
  try{
    var q=new URLSearchParams(location.search);
    if(q.get("owner")==="1"){localStorage.setItem("mpes-owner","1")}
    if(q.get("owner")==="0"){localStorage.removeItem("mpes-owner")}
    if(localStorage.getItem("mpes-owner"))return;
    var ref=(q.get("ref")||"Someone").replace(/[^\w\- ]/g,"").slice(0,40)||"Someone";
    var key="mpes-ref-"+ref;
    if(sessionStorage.getItem(key))return;
    sessionStorage.setItem(key,"1");
    var ua=navigator.userAgent, touch=navigator.maxTouchPoints>1;
    var os=/iPhone/.test(ua)?"iPhone":/iPad/.test(ua)||(/Macintosh/.test(ua)&&touch)?"iPad":/Android/.test(ua)?(/Mobile/.test(ua)?"Android phone":"Android tablet"):
      /Windows/.test(ua)?"Windows PC":/Macintosh/.test(ua)?"Mac":/CrOS/.test(ua)?"Chromebook":/Linux/.test(ua)?"Linux":"Unknown device";
    var br=/Outlook/i.test(ua)?"Outlook app":/GSA\//.test(ua)?"Google app":/FBAN|FBAV/.test(ua)?"Facebook app":/Instagram/.test(ua)?"Instagram app":/LinkedInApp/.test(ua)?"LinkedIn app":
      /Edg(e|A|iOS)?\//.test(ua)?"Edge":/SamsungBrowser/.test(ua)?"Samsung Internet":/FxiOS|Firefox\//.test(ua)?"Firefox":/OPR\/|Opera/.test(ua)?"Opera":
      /CriOS|Chrome\//.test(ua)?"Chrome":/Safari\//.test(ua)?"Safari":"Unknown browser";
    var when=new Date().toLocaleString("en-AU",{timeZone:"Australia/Sydney",weekday:"short",hour:"numeric",minute:"2-digit"});
    function send(ip){
      if(ip&&OWNER_IPS.indexOf(ip)>-1)return;
      fetch("https://ntfy.sh/mpes-proto-f9f1cbf6d7",{method:"POST",
        headers:{"Title":ref+" opened the MPES prototype","Tags":"eyes"},
        body:os+" \u00b7 "+br+"\nIP "+(ip||"unknown")+"\n"+when+" Sydney time"}).catch(function(){});
    }
    var done=false, t=setTimeout(function(){if(!done){done=true;send("")}},3000);
    fetch("https://api.ipify.org?format=json").then(function(r){return r.json()}).then(function(j){if(!done){done=true;clearTimeout(t);send(j.ip||"")}})
      .catch(function(){if(!done){done=true;clearTimeout(t);send("")}});
  }catch(e){}
})();
