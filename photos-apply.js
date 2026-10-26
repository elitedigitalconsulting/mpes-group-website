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
/* Visit alert: links with ?ref=NAME send a push notification once per browser session. */
(function(){
  try{
    var ref=new URLSearchParams(location.search).get("ref");
    if(!ref)return;
    ref=ref.replace(/[^\w\- ]/g,"").slice(0,40);
    var key="mpes-ref-"+ref;
    if(sessionStorage.getItem(key))return;
    sessionStorage.setItem(key,"1");
    var when=new Date().toLocaleString("en-AU",{timeZone:"Australia/Sydney",weekday:"short",hour:"numeric",minute:"2-digit"});
    var dev=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)?"phone":"computer";
    fetch("https://ntfy.sh/mpes-proto-f9f1cbf6d7",{method:"POST",
      headers:{"Title":ref+" opened the MPES prototype","Tags":"eyes"},
      body:ref+" opened the prototype on a "+dev+" ("+when+" Sydney time)."}).catch(function(){});
  }catch(e){}
})();
