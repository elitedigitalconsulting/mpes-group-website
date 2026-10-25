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
