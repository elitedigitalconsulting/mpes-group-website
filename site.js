/* ---------- DATA (from mpesgroup.com.au) ---------- */
const GROUPS=[
  {id:"design",name:"Design & engineering",icon:"i-pencil",intro:"Buildable designs that are coordinated with every other trade before anyone is on site.",items:[
    ["Electrical services design","Full design packages to client specification and budget, ready for construction."],
    ["Maximum demand load calculations","Accurate demand assessment to size supply, mains and switchboards correctly the first time."],
    ["NBN designs","Pit, pipe and in-building pathway design to NBN Co requirements."],
    ["Services integration & coordination, including ASP","Coordination with mechanical, hydraulic and fire services, plus Accredited Service Provider works."]]},
  {id:"power",name:"Power & infrastructure",icon:"i-plug",intro:"The backbone of the building, from the street connection to the final circuit.",items:[
    ["Supply authority applications & connections","Managing the application, design approval and connection process with the network operator."],
    ["Consumer mains & submains","Design and installation of mains and submains sized for the building’s demand."],
    ["HV & LV switchgear","Installation and integration of high and low voltage switchgear and main switchboards."],
    ["Temporary power","Safe, compliant construction power that keeps every trade on programme."],
    ["Lighting & power","General light and power across apartments, offices, retail and common areas."]]},
  {id:"systems",name:"Systems & safety",icon:"i-signal",intro:"The systems that keep a building connected, lit and protected.",items:[
    ["Comms design & installation","Structured cabling, communications rooms and building-wide data infrastructure."],
    ["Security & CCTV","Camera, access control and intercom systems for residential and commercial buildings."],
    ["Emergency lighting","Emergency and exit lighting designed, installed and tested to Australian Standards."],
    ["External lighting","Landscape, carpark, façade and public domain lighting."],
    ["Lightning protection","Lightning protection and earthing systems for tall and exposed structures."]]},
  {id:"life",name:"Testing & lifecycle",icon:"i-gauge",intro:"Proof that everything works, and a team that stays responsible after handover.",items:[
    ["Testing & commissioning","Verification, testing and commissioning with the records your certifier and client need."],
    ["Pre-planned maintenance","Scheduled maintenance programmes that protect the installation long after practical completion."]]}
];
const ALL_SERVICES=GROUPS.flatMap(g=>g.items.map(i=>i[0]));
/* Projects from mpesgroup.com.au/projects */
const PHOTOS={atlantis:"assets/projects/atlantis.jpg",monaco:"assets/projects/monaco.jpg",grandh:"assets/projects/grandh.jpg",tnt:"assets/projects/tnt.jpg",banks:"assets/projects/banks.jpg",orchards:"assets/projects/orchards.jpg",monterey:"assets/projects/monterey.jpg",serviceapts:"assets/projects/serviceapts.jpg",highline:"assets/projects/highline.jpg",sanctuary:"assets/projects/sanctuary.jpg",youthfoyer:"assets/projects/youthfoyer.jpg",pemulwuy:"assets/projects/pemulwuy.jpg",bluestone:"assets/projects/bluestone.jpg"};
const PROJECTS=[
 {t:"The Monterey",ph:"monterey",b:"EQ Projects",l:"Neutral Bay",c:"Residential",st:"cur",f:["22 units","5 storeys","2 basements"],d:"A mixed-use residential and commercial development in the heart of Neutral Bay.",art:1},
 {t:"Service Apartments",ph:"serviceapts",b:"Hudson Commercial",l:"Mons Road, Westmead",c:"Residential",st:"cur",f:["22 units","4 storeys","1 basement"],d:"Serviced apartments beside the Westmead Health and Medical Research Precinct, Parramatta Park and Parramatta Golf Course.",art:2},
 {t:"Highline Westmead",ph:"highline",b:"Deicorp",l:"Hawkesbury Road, Westmead",c:"Residential",st:"cur",f:["556 apartments","5 buildings","24 storeys","Stages 1 & 2"],d:"A master-planned residential community inspired by New York’s High Line.",art:3},
 {t:"Sanctuary",ph:"sanctuary",b:"Parkview",l:"Hill Road, Wentworth Point",c:"Residential",st:"cur",f:["352 apartments","12 penthouses","4 buildings","28 storeys","3 basements"],d:"A fully planned estate on the water at Wentworth Point, one of Sekisui House’s largest Australian residential developments.",art:2},
 {t:"Youth Foyer",ph:"youthfoyer",b:"Hutchinson Builders",l:"City Road, Chippendale",c:"Residential",st:"cur",f:["77 units","5 storeys"],d:"Safe, affordable housing for young people aged 18 to 22 leaving out-of-home care, with support to build independent lives.",art:1},
 {t:"Pemulwuy",ph:"pemulwuy",b:"Deicorp",l:"Caroline Street, Redfern",c:"Commercial",st:"cur",f:["26 apartments and 36 townhouses","596 student beds, 24 storeys","Child care centre","739 m² commercial and 4 retail suites","Aboriginal Housing Company head office"],d:"Redevelopment of the Block in Redfern for the Aboriginal Housing Company into a mixed-use precinct across three stages.",art:2},
 {t:"Blue Stone",ph:"bluestone",b:"EQ Projects",l:"Picrite Close, Pemulwuy",c:"Commercial",st:"cur",f:["73 industrial units","Precincts 1 & 2"],d:"Bluestone Industrial Estate, with direct access to the Great Western Highway and the M4 and M7 motorways.",art:3},
 {t:"The Atlantis",ph:"atlantis",b:"Deicorp",l:"The Esplanade, Ettalong Beach",c:"Residential",st:"done",f:["57 apartments","2 penthouses","6 retail shops","6 storeys"],d:"A fluid, wave-inspired mixed residential and commercial building on the Ettalong Beach foreshore.",art:1},
 {t:"Monaco Apartments",ph:"monaco",b:"Hudson Commercial",l:"Great Western Highway, Westmead",c:"Residential",st:"done",f:["50 units","4 shops"],d:"Mixed residential and commercial apartments close to the Westmead Health and Medical Research Precinct.",art:2},
 {t:"Grand H Apartments",ph:"grandh",b:"Deicorp",l:"",c:"Residential",st:"done",f:[],d:"",art:3},
 {t:"TNT Apartments",ph:"tnt",b:"Deicorp",l:"",c:"Residential",st:"done",f:[],d:"",art:1},
 {t:"The Banks",ph:"banks",b:"Deicorp",l:"Bay Street, Rockdale",c:"Residential",st:"done",f:["116 units","3 buildings"],d:"Three apartment buildings connected by laneways in Rockdale’s new dining hub.",art:2},
 {t:"Orchards Imperial",ph:"orchards",b:"Parkview",l:"Spurway Drive, Baulkham Hills",c:"Residential",st:"done",f:["121 apartments","2 basements, 198 spaces","Stage 1"],d:"Residences overlooking the fairways of Castle Hill Country Club.",art:3},
 {t:"Endeavour Apartments",b:"Deicorp",l:"Princes Highway, Arncliffe",c:"Residential",st:"done",f:["234 apartments","6 commercial suites","3 buildings"],d:"Three residential buildings with commercial suites, 11 km south of the Sydney CBD.",art:1},
 {t:"Brands on Sale",b:"Deicorp",l:"Campbelltown",c:"Commercial",st:"done",f:[],d:"",art:2},
 {t:"Club Redfern",b:"Deicorp",l:"Redfern Street, Redfern",c:"Commercial",st:"done",f:["1,500 m² RSL club","670 m² of retail","Outdoor terraces"],d:"A modern RSL club and retail in the Deicota Towers building, five minutes from the Sydney CBD.",art:3},
 {t:"Little Saigon Plaza",b:"Deicorp",l:"",c:"Commercial",st:"done",f:[],d:"",art:1},
 {t:"SPAR Supermarket",b:"Deicorp",l:"",c:"Commercial",st:"done",f:[],d:"",art:2},
 {t:"Oatley Village Square",b:"Deicorp",l:"Mulga Road, Oatley",c:"Commercial",st:"done",f:["Coles supermarket","Specialty retail","11 townhouses"],d:"A suburban shopping centre with boutique apartments in Oatley.",art:3},
 {t:"The Grange",b:"Deicorp",l:"",c:"Commercial",st:"done",f:[],d:"",art:1}
];
const DOCS=[
  ["Electrical contractor licence","Current licence details"],
  ["Insurance certificates","Public liability and professional indemnity"],
  ["WHS management documentation","Policies, inductions and SWMS samples"],
  ["Quality procedures","Inspection and test plans"],
  ["Capability statement","Team, resources and services"],
  ["Project references","Recent comparable projects and contacts"]
];
const CONTEXT=`You are the website assistant for MPES Group Aust Pty Ltd, a licensed electrical contracting company based in Guildford, NSW, Australia. Phone: 02 9119 2244. Facts you may use: 20+ years' industry experience; fully insured with public liability and professional indemnity cover; all work to AS/NZS 3000; works on large city and inner-city developments, residential subdivisions, warehousing, industrial, commercial and high-end residential projects in public and private sectors; projects are won through tender or word of mouth; in-house team of project managers, cost planners and estimators, design manager, site managers and foremen, electrical engineers, electricians and support staff. Services: ${ALL_SERVICES.join("; ")}. Values: customer satisfaction, quality, professionalism, safety & environment, teamwork, respect. To tender, visitors use the "Invite us to tender" form on this page; for anything else they can request a callback or call 02 9119 2244. The site also has Careers and Sponsorships enquiries.
Tools: you can call open_tender_form to open and pre-fill the tender form when the visitor wants to tender, get a price, or send project details (ask for the project basics first if you have none), and show_section to take them to a part of the page. After using a tool, say briefly what you did.
Rules: Answer in Australian English, warm and professional, 2-4 short sentences unless a list genuinely helps. Never invent facts not listed above (no client names, project names, prices, timeframes, licence numbers, email addresses, opening hours or accreditation levels). If you do not know, say so and suggest calling 02 9119 2244. You may use **bold** and simple "- " bullet lists. Stay on topic: MPES, electrical contracting and the visitor's project.`;

const TYPES=["Commercial office","Mixed-use development","Residential high-rise","Residential subdivision","Industrial or warehouse","Government or public works","Health or education","Retail or hospitality","Other"];
/* ---------- helpers ---------- */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ico=(id,cls="i")=>`<svg class="${cls}"><use href="#${id}"/></svg>`;
function md(t){
  const lines=esc(t).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").split(/\n/);
  let out="",inList=false,para=[];
  const flush=()=>{if(para.length){out+=`<p>${para.join("<br>")}</p>`;para=[]}};
  for(const l of lines){
    const m=l.match(/^\s*[-•*]\s+(.*)/);
    if(m){flush();if(!inList){out+="<ul>";inList=true}out+=`<li>${m[1]}</li>`}
    else{if(inList){out+="</ul>";inList=false}
      if(l.trim()==="")flush();else para.push(l)}
  }
  flush();if(inList)out+="</ul>";return out;
}
const ERR={not_granted:"The assistant needs your permission to answer. You can still call us on 02 9119 2244.",rate_limited:"Lots of questions at once. Give it a moment and try again.",cancelled:"Stopped.",refused:"I can’t help with that one, but our team can on 02 9119 2244."};
const errMsg=e=>ERR[e&&e.code]||"Something went wrong on our side. Please try again, or call 02 9119 2244.";

/* ---------- AI availability ---------- */
let sample=null;
const sampleReady=(async()=>{try{if(window.claude&&claude.use){sample=await claude.use("sample")}}catch(e){sample=null}
  if(!sample){ $("#scopeNote").textContent="Demo mode: scope outlines are generated locally until the AI service is connected. Our estimators confirm every scope against your drawings."; }
  return sample;})();

/* ---------- NAV ---------- */
const nav=$("#nav");
addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>10),{passive:true});
const drawer=$("#drawer"),burger=$("#burger");
burger.onclick=()=>{const o=drawer.classList.toggle("open");burger.setAttribute("aria-expanded",o);burger.innerHTML=ico(o?"i-x":"i-menu").replace('class="i"','class="i" style="width:26px;height:26px"');document.body.style.overflow=o?"hidden":""};
drawer.addEventListener("click",e=>{if(e.target.closest("a")){drawer.classList.remove("open");burger.setAttribute("aria-expanded","false");burger.innerHTML=ico("i-menu").replace('class="i"','class="i" style="width:26px;height:26px"');document.body.style.overflow=""}});

/* ---------- SERVICES ---------- */
let svcQ="";
function renderSvc(){
  const q=svcQ.toLowerCase();
  const hits=GROUPS.flatMap(g=>g.items.filter(s=>!q||(s[0]+" "+s[1]).toLowerCase().includes(q)).map(s=>[g,s]));
  $("#svcList").innerHTML=hits.map(([g,s])=>`<div class="svc"><span class="g">${esc(g.name)}</span><h4>${esc(s[0])}</h4></div>`).join("")||`<div class="empty">No service matches “${esc(svcQ)}”. Try “lighting”, “comms” or “mains”.</div>`;
}
$("#svcSearch").oninput=e=>{svcQ=e.target.value.trim();renderSvc()};
renderSvc();

/* ---------- PROJECTS ---------- */
const ART={
 1:`<svg class="art" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#2E3338"/><g fill="#3A4047"><rect x="30" y="70" width="60" height="130"/><rect x="100" y="30" width="70" height="170"/><rect x="180" y="90" width="50" height="110"/><rect x="240" y="55" width="55" height="145"/></g><g fill="#A0C755" opacity=".85">${Array.from({length:40},(_,i)=>`<rect x="${108+(i%4)*15}" y="${40+Math.floor(i/4)*15}" width="8" height="6" opacity="${(i*37%10)/10+.1}"/>`).join("")}</g><path d="M0 200h320" stroke="#23272B" stroke-width="3"/></svg>`,
 2:`<svg class="art" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#2A2E33"/><path d="M20 200V110l70-40 70 40 70-40 70 40v90z" fill="#3A4047"/><g stroke="#23272B" stroke-width="2" opacity=".8">${Array.from({length:9},(_,i)=>`<line x1="${40+i*30}" y1="130" x2="${40+i*30}" y2="150"/>`).join("")}</g><rect x="140" y="160" width="40" height="40" fill="#23272B"/><circle cx="270" cy="40" r="14" fill="#23272B" opacity=".9"/></svg>`,
 3:`<svg class="art" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><rect width="320" height="200" fill="#2A2E33"/><path d="M0 150 C80 130 160 170 320 140 V200 H0z" fill="#3A4047"/>${Array.from({length:6},(_,i)=>`<g transform="translate(${20+i*50} ${110+(i%2)*14})"><path d="M0 30V12L16 0l16 12v18z" fill="#4A5159"/><rect x="11" y="18" width="10" height="12" fill="#A0C755" opacity=".7"/></g>`).join("")}<g stroke="#23272B" stroke-width="2">${Array.from({length:5},(_,i)=>`<line x1="${45+i*60}" y1="70" x2="${45+i*60}" y2="110"/><circle cx="${45+i*60}" cy="68" r="4" fill="#23272B"/>`).join("")}</g></svg>`
};
const HERO_SRC=getComputedStyle(document.querySelector(".hero-img")).backgroundImage.slice(5,-2);
let pf="All",showAll=false;
function projList(){return PROJECTS.filter(p=>pf==="All"||(pf==="Current"&&p.st==="cur")||(pf==="Completed"&&p.st==="done")||p.c===pf)}
function renderProj(){
  $("#projFilter").innerHTML=["All","Current","Completed","Residential","Commercial"].map(c=>`<button class="pf" aria-pressed="${pf===c}">${c}</button>`).join("");
  const all=projList(),list=showAll?all:all.slice(0,6);
  $("#projGrid").innerHTML=list.map(p=>`<article class="proj" tabindex="0"><div class="proj-vis">${p.ph?`<img src="${PHOTOS[p.ph]}" alt="${esc(p.t)}" loading="lazy">`:p.img?`<img src="${HERO_SRC}" alt="">`:ART[p.art]}<span class="proj-status ${p.st==="cur"?"cur":""}">${p.st==="cur"?"Current":"Completed"}</span></div>
   <div class="proj-body"><span class="sec-t">${esc(p.c)}${p.l?" · "+esc(p.l.split(", ").pop()):""}</span><h3>${esc(p.t)}</h3><p>${p.f.length?esc(p.f.slice(0,3).join(" · ")):"Built with "+esc(p.b)}</p><div class="scope-tags"><span>${esc(p.b)}</span></div></div></article>`).join("");
  $("#projMore").style.display=all.length>6?"":"none";
  $("#projMore").textContent=showAll?"Show fewer":`Show all ${all.length} projects`;
}
$("#projFilter").onclick=e=>{const b=e.target.closest(".pf");if(b){pf=b.textContent;showAll=false;renderProj()}};
$("#projMore").onclick=()=>{showAll=!showAll;renderProj();if(!showAll)$("#projects").scrollIntoView()};
renderProj();
const dr=$("#dr"),scrim=$("#scrim");
function openProj(p){
  $("#drIn").innerHTML=`<div class="vis">${p.ph?`<img src="${PHOTOS[p.ph]}" alt="${esc(p.t)}" loading="lazy">`:p.img?`<img src="${HERO_SRC}" alt="">`:ART[p.art]}</div><div class="dr-body"><span class="sec-t">${esc(p.c)} · ${p.st==="cur"?"Current project":"Completed"}</span><h3>${esc(p.t)}</h3>${p.d?`<p>${esc(p.d)}</p>`:""}
   <div class="kv"><div><b>Builder</b><span>${esc(p.b)}</span></div><div><b>Location</b><span>${esc(p.l||"NSW")}</span></div></div>
   ${p.f.length?`<h4>Project features</h4><ul class="feat">${p.f.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>`:""}
   <a class="btn btn-lime" href="#tender" id="drTender">Tender a similar project ${ico("i-arrow")}</a></div>`;
  dr.classList.add("open");scrim.classList.add("open");document.body.style.overflow="hidden";
  $("#drTender").onclick=closeProj;
}
function closeProj(){dr.classList.remove("open");scrim.classList.remove("open");document.body.style.overflow=""}
$("#projGrid").onclick=e=>{const a=e.target.closest(".proj");if(a){const all=projList(),list=showAll?all:all.slice(0,6);openProj(list[[...a.parentNode.children].indexOf(a)])}};
$("#projGrid").onkeydown=e=>{if(e.key==="Enter"){const a=e.target.closest(".proj");if(a)a.click()}};
$("#drX").onclick=closeProj;scrim.onclick=closeProj;
addEventListener("keydown",e=>{if(e.key==="Escape")closeProj()});

/* ---------- TENDER FORM ---------- */
$("#docs").innerHTML=DOCS.map((d,i)=>`<label class="doc"><input type="checkbox" value="${esc(d[0])}" ${i<2?"checked":""}><div><b>${esc(d[0])}</b><span>${esc(d[1])}</span></div></label>`).join("");
const docCount=()=>{const n=$$("#docs input:checked").length;$("#docCount").textContent=n?`${n} document${n>1?"s":""} will be included`:"No documents selected"};
$("#docs").onchange=docCount;docCount();
const picked=new Set();
$("#tPick").innerHTML=ALL_SERVICES.map(s=>`<button type="button" aria-pressed="false">${esc(s)}</button>`).join("");
$("#tPick").onclick=e=>{const b=e.target.closest("button");if(!b)return;const on=b.getAttribute("aria-pressed")!=="true";b.setAttribute("aria-pressed",on);on?picked.add(b.textContent):picked.delete(b.textContent)};
let fp=0;
function setErr(id,msg){const f=$(id).closest(".fld").querySelector(".err");if(f)f.textContent=msg||""}
function validate(p){
  let ok=true;
  const need=(id,m)=>{const v=$(id).value.trim();setErr(id,v?"":m);if(!v)ok=false};
  if(p===0){need("#tName","Add a project name");need("#tType","Choose a project type")}
  if(p===2){need("#cName","Add your name");need("#cCo","Add your company");const em=$("#cEmail").value.trim();const good=/^\S+@\S+\.\S+$/.test(em);setErr("#cEmail",good?"":"Enter a valid email");if(!good)ok=false}
  return ok;
}
function showPage(p){
  fp=p;$$(".f-page").forEach(el=>el.classList.toggle("on",+el.dataset.p===p));
  $$("#fSteps>div").forEach((d,i)=>d.classList.toggle("on",i<=Math.min(p,2)));
  $("#fBack").style.visibility=p>0&&p<3?"visible":"hidden";
  $("#fActions").style.display=p===3?"none":"flex";
  $("#fNext").innerHTML=p===2?`Send tender enquiry ${ico("i-send")}`:`Continue ${ico("i-arrow")}`;
  if(p===2){const docs=$$("#docs input:checked").map(i=>i.value);
    $("#review").innerHTML=`<div><b>${esc($("#tName").value||"Project")}</b> · ${esc($("#tType").value)}${$("#tLoc").value?" · "+esc($("#tLoc").value):""}</div><div>${picked.size?esc([...picked].join(", ")):"Packages to be confirmed"}</div><div>${docs.length?"Pack: "+esc(docs.join(", ")):"No prequalification documents requested"}</div>`}
}
$("#fNext").onclick=()=>{if(!validate(fp))return;if(fp<2)showPage(fp+1);else{$("#refNo").textContent="MPES-T-"+Date.now().toString().slice(-6);showPage(3);$("#tender").scrollIntoView({})}};
$("#fBack").onclick=()=>showPage(Math.max(0,fp-1));
$("#tForm").onsubmit=e=>e.preventDefault();

/* ---------- CALLBACK ---------- */
$("#cbForm").onsubmit=e=>{e.preventDefault();let ok=true;
  ["#cbName","#cbPh"].forEach(id=>{const v=$(id).value.trim();setErr(id,v?"":"Required");if(!v)ok=false});
  if(!ok)return;$("#cbForm").innerHTML=`<div class="done-box"><div class="tick">${ico("i-check")}</div><h3>Thanks, ${esc($("#cbName").value.split(" ")[0])}</h3><p>We’ll call you back on ${esc($("#cbPh").value)}.</p></div>`};


/* ---------- DEMO ENGINE (used when no AI service is connected) ---------- */
const DEMO_RULES=[
 {k:/warehouse|industrial|logistic|distribution|factory|estate/i,type:"Industrial or warehouse",pk:["Maximum demand load calculations","Consumer mains & submains","HV & LV switchgear","Lighting & power","External lighting","Lightning protection"],why:{"Lighting & power":"High-bay lighting and three-phase power across a large floor plate.","Lightning protection":"Large roof areas and exposed structures need a protection and earthing system."}},
 {k:/school|campus|education|university|tafe|hospital|clinic|medical|health|aged care/i,type:"Health or education",pk:["Electrical services design","Emergency lighting","Comms design & installation","Security & CCTV","Testing & commissioning","Pre-planned maintenance"],why:{"Emergency lighting":"Occupied facilities need emergency and exit lighting tested and documented to Australian Standards."}},
 {k:/subdivision|estate|lots?\b|townhouse/i,type:"Residential subdivision",pk:["Supply authority applications & connections","Services integration & coordination, including ASP","NBN designs","External lighting","Consumer mains & submains"]},
 {k:/apartment|unit|storey|tower|mixed-?use|residential|basement|penthouse/i,type:"Mixed-use development",pk:["Supply authority applications & connections","Maximum demand load calculations","HV & LV switchgear","Consumer mains & submains","Lighting & power","Comms design & installation","Emergency lighting","Security & CCTV"]},
 {k:/office|fit-?out|fitout|commercial|retail|shop|cafe|restaurant|club|hotel/i,type:"Commercial office",pk:["Electrical services design","Lighting & power","Comms design & installation","Security & CCTV","Emergency lighting","Testing & commissioning"]},
 {k:/government|council|public|infrastructure|station|library/i,type:"Government or public works",pk:["Electrical services design","Testing & commissioning","Emergency lighting","Security & CCTV","External lighting"]}
];
const DEMO_WHY={"Supply authority applications & connections":"A new or upgraded network connection will need an application and design approval with the supply authority.","Maximum demand load calculations":"Sizes the supply, mains and switchboards correctly for the building’s real load.","HV & LV switchgear":"Main switchboard and switchgear to distribute power through the building.","Consumer mains & submains":"Mains from the point of supply and submains to each distribution board.","Lighting & power":"General light and power to every tenancy and common area.","Comms design & installation":"Structured cabling and comms rooms for data, NBN and building systems.","Emergency lighting":"Emergency and exit lighting designed, installed and tested to AS/NZS 2293.","Security & CCTV":"Cameras, access control and intercom for entries, lifts and car parking.","External lighting":"Carpark, landscape and façade lighting around the site.","Electrical services design":"A coordinated electrical design ready for construction and certification.","Testing & commissioning":"Verification and commissioning records for handover.","Pre-planned maintenance":"Scheduled maintenance to keep the installation compliant after handover.","NBN designs":"Pit, pipe and in-building pathway design to NBN Co requirements.","Services integration & coordination, including ASP":"Coordination with other services plus Accredited Service Provider works for the network connection.","Lightning protection":"Protection and earthing for tall or exposed structures.","Temporary power":"Safe construction power while the site is being built."};
function demoScope(desc){
  const d=desc.toLowerCase();
  const hits=DEMO_RULES.filter(r=>r.k.test(d));
  const rule=hits[0]||DEMO_RULES.find(r=>r.type==="Mixed-use development");
  let pk=[...new Set(hits.flatMap(r=>r.pk))].slice(0,8); if(!pk.length)pk=rule.pk;
  if(/basement|car ?park/i.test(d)&&!pk.includes("External lighting"))pk.push("External lighting");
  if(/nbn|data|comms/i.test(d)&&!pk.includes("NBN designs"))pk.push("NBN designs");
  const storeys=(d.match(/(\d+)\s*(storey|story|level|floor)/)||[])[1];
  const units=(d.match(/(\d+)\s*(apartment|unit|dwelling|bed|room)/)||[])[1];
  const loc=(desc.match(/\bin\s+([A-Z][A-Za-z]+(?:\s[A-Z][A-Za-z]+)?)/)||[])[1];
  const title=[units?units+" "+(d.match(/apartment|unit|dwelling|bed|room/)||["units"])[0]+"s":"",storeys?storeys+"-storey":"",rule.type.split(" or ")[0].toLowerCase(),loc?"in "+loc:""].filter(Boolean).join(" ").replace(/^\w/,c=>c.toUpperCase())||"Your project";
  const considerations=[];
  if(storeys&&+storeys>=8)considerations.push("A building of this height usually needs a substation or kiosk and an early supply authority application.");
  else considerations.push("Confirm the available network supply early so the connection does not hold up the programme.");
  if(/basement/i.test(d))considerations.push("Basement services, carpark lighting and ventilation power should be coordinated with the hydraulic and mechanical trades.");
  considerations.push("Maximum demand should be assessed before switchgear and mains are sized.");
  if(/retail|commercial|shop/i.test(d))considerations.push("Separate metering for retail tenancies and common areas.");
  considerations.push("Allow for testing, commissioning and as-built documentation in the handover period.");
  return {title:title.slice(0,60),summary:"Based on your description, these are the electrical packages MPES would typically scope for this type of project.",projectType:rule.type,packages:pk.map(n=>({name:n,why:(rule.why||{})[n]||DEMO_WHY[n]||""})),considerations:considerations.slice(0,4),questions:["Do you have architectural drawings or a specification we can price from?","What is the target construction start and the tender close date?","Is a supply authority connection or upgrade already approved?"]};
}
const DEMO_FAQ=[
 {k:/service|what do you do|offer|capabilit/i,a:"We cover the full electrical package in-house: design and maximum demand calculations, supply authority applications and ASP works, mains and submains, HV and LV switchgear, lighting and power, comms and NBN, security and CCTV, emergency lighting, lightning protection, testing and commissioning, and pre-planned maintenance. The Services section lists all sixteen."},
 {k:/tender|quote|price|pricing|estimate|cost/i,a:"The quickest way is the **Invite us to tender** form on this page. Add the project basics, tick the prequalification documents you need, and our estimating team will respond. You can also call **02 9119 2244**."},
 {k:/licen|insur|qualif|standard|as\/?nzs|neca|compliance/i,a:"MPES Group Aust is a licensed electrical contractor, fully insured with public liability and professional indemnity cover, and a member of NECA. All work is carried out to AS/NZS 3000."},
 {k:/where|location|based|address|guildford|sydney|area/i,a:"We are based in Guildford, NSW, and work with builders and developers across Greater Sydney."},
 {k:/phone|call|contact|email|speak|talk/i,a:"You can call us on **02 9119 2244**, or use the callback form at the bottom of the page and we will phone you back."},
 {k:/project|work|built|experience|deicorp|hudson|parkview|highline|sanctuary|monterey/i,a:"Recent work includes Highline Westmead and Pemulwuy for Deicorp, Sanctuary at Wentworth Point for Parkview, The Monterey for EQ Projects and the Youth Foyer in Chippendale for Hutchinson Builders. The Projects section has the full list of current and completed jobs."},
 {k:/career|job|apprentic|hiring|vacanc|work for/i,a:"We are always interested in hearing from electricians, apprentices, engineers and project staff. Use the callback form, choose **Careers**, and we will be in touch."},
 {k:/builder|client|who have you worked/i,a:"We have worked with Deicorp, Richard Crookes Constructions, Hutchinson Builders, Parkview, Ceerose, Hudson Commercial, EQ Projects, Construction Control and Dasco."},
 {k:/sponsor/i,a:"MPES supports local sponsorships. Use the callback form and choose **Sponsorship** so the right person can get back to you."},
 {k:/hello|hi\b|hey|g'day|gday/i,a:"G’day. Ask me about our services, how to invite us to tender, or the projects we have delivered."}
];
function demoReply(text){
  const hit=DEMO_FAQ.find(f=>f.k.test(text));
  return hit?hit.a:"I can help with our electrical services, tendering, licensing, projects and careers. For anything else, our team is on **02 9119 2244**.";
}

/* ---------- AI SCOPE ---------- */
function renderScope(desc,data,demo){
  const RI=$("#resultIn");
  scopeData=data;
  const pk=(data.packages||[]).filter(p=>ALL_SERVICES.includes(p.name));
  RI.innerHTML=`<div class="result-top"><div><h2>${esc(data.title||"Your project")}</h2><p>${esc(data.summary||"")}</p></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn-lime" id="toTender">Send to our estimators ${ico("i-arrow")}</button><button class="btn btn-line" id="rescope">Refine description</button></div></div>
    <div class="result-grid"><div class="pk-list">${pk.map(p=>`<div class="pk"><span class="pk-dot"></span><div><h4>${esc(p.name)}</h4><p>${esc(p.why)}</p></div></div>`).join("")||`<div class="pk"><span class="pk-dot"></span><div><h4>Tell us a bit more</h4><p>Add what is being built, where, and roughly how big it is.</p></div></div>`}</div>
    <div>${data.considerations?.length?`<div class="side-box"><h3>Things to plan for</h3><ul>${data.considerations.map(c=>`<li>${esc(c)}</li>`).join("")}</ul></div>`:""}
    ${data.questions?.length?`<div class="side-box"><h3>What our estimators will ask</h3><ul>${data.questions.map(c=>`<li>${esc(c)}</li>`).join("")}</ul></div>`:""}
    <p class="disclaimer">${demo?"Demo mode: generated from your description by the page itself, as a preview of the AI estimator. ":"Generated by AI as a starting point. "}It is not a quote or a design. MPES estimators review every scope against your drawings and specification.</p></div></div>`;
  $("#toTender").onclick=()=>prefillTender(desc,data);
  $("#rescope").onclick=()=>{$("#scope").scrollIntoView({block:"center"});setTimeout(()=>$("#scopeIn").focus(),400)};
}

let scopeData=null,scopeCtl=null;
function prefillTender(desc,data){
  $("#tName").value=data?.title||"";
  if(data?.projectType&&TYPES.includes(data.projectType))$("#tType").value=data.projectType;
  $("#tBrief").value=desc+(data?.questions?.length?"\n\nPoints to confirm:\n- "+data.questions.join("\n- "):"");
  picked.clear();$$("#tPick button").forEach(b=>{const on=!!data?.packages?.some(p=>p.name===b.textContent);b.setAttribute("aria-pressed",on);if(on)picked.add(b.textContent)});
  showPage(0);$("#tender").scrollIntoView({});
}
$("#scopeBtn").onclick=async()=>{
  const desc=$("#scopeIn").value.trim();
  if(!desc){$("#scopeIn").focus();$("#scopeIn").placeholder="Tell us a little about the project first…";return}
  await sampleReady;
  if(!sample){
    const R=$("#result"),RI=$("#resultIn");R.classList.add("show");
    RI.innerHTML=`<div class="thinking"><div><b style="color:var(--ink)">Mapping the electrical scope…</b></div></div>`;
    R.scrollIntoView({block:"start"});
    setTimeout(()=>{renderScope(desc,demoScope(desc),true)},900);
    return;
  }
  if(scopeCtl){scopeCtl.abort();return}
  const R=$("#result"),RI=$("#resultIn");R.classList.add("show");
  RI.innerHTML=`<div class="thinking"><div><b style="color:var(--ink)">Mapping the electrical scope…</b><br><span style="font-size:14px">Usually 10–30 seconds.</span></div></div>`;
  R.scrollIntoView({block:"start"});
  const btn=$("#scopeBtn");btn.innerHTML=ico("i-stop")+"Stop";
  scopeCtl=new AbortController();
  const prompt=`You are a senior electrical estimator at MPES Group Aust, a licensed electrical contractor in Sydney. A builder or developer described a project. Outline the electrical packages it is likely to need.
Project description: """${desc.slice(0,1500)}"""
Choose packages ONLY from this exact list (use the names verbatim): ${JSON.stringify(ALL_SERVICES)}.
Return JSON only, no prose, in this shape:
{"title":"short project title, max 6 words","summary":"one sentence restating the project in plain terms","projectType":"one of ${JSON.stringify(TYPES)}","packages":[{"name":"exact service name","why":"one specific sentence tying it to this project"}],"considerations":["3-4 short points about authority connection, max demand, staging, coordination or compliance"],"questions":["2-3 questions our estimators would ask to price it"]}
Pick 5-9 packages. Australian English. Never give prices, durations, client names or guarantees. If the description is not a construction project, return {"title":"Tell us more","summary":"We could not identify a construction project in that description.","projectType":"Other","packages":[],"considerations":[],"questions":["What is being built, where, and roughly how big is it?"]}`;
  try{
    const data=await sample.json(prompt,{modelTier:"default",signal:scopeCtl.signal});
    renderScope(desc,data,false);
  }catch(e){
    if(e&&e.code==="cancelled"){R.classList.remove("show")}
    else RI.innerHTML=`<div class="thinking"><div><b style="color:var(--ink)">We couldn’t map that one.</b><br><span style="font-size:14px">${esc(errMsg(e))}</span></div><button class="btn btn-navy" style="margin-left:auto" id="toTender2">Go to tender form</button></div>`;
    const t2=$("#toTender2");if(t2)t2.onclick=()=>prefillTender(desc,null);
  }finally{scopeCtl=null;btn.innerHTML=ico("i-bolt")+"Map my scope"}
};


/* ---------- THEME, NAV ACTIVE, PROGRESS ---------- */
const root=document.documentElement;
try{const t=localStorage.getItem("mpes-theme");if(t)root.dataset.theme=t}catch(e){}
$("#theme").onclick=()=>{const dark=root.dataset.theme==="dark"||(!root.dataset.theme&&matchMedia("(prefers-color-scheme:dark)").matches);root.dataset.theme=dark?"light":"dark";try{localStorage.setItem("mpes-theme",root.dataset.theme)}catch(e){}};
const navLinks=$$(".nav-links a");
const secObs=new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting){navLinks.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+en.target.id))}})},{rootMargin:"-40% 0px -55% 0px"});
$$("main section[id]").forEach(s=>secObs.observe(s));

/* ---------- CHAT ---------- */
const chat=$("#chat"),msgs=$("#msgs"),fab=$("#fab");
const turns=[];let chatCtl=null,toolsOK=null;
const TOOLS=[
 {name:"open_tender_form",description:"Opens the tender enquiry form on the page and pre-fills it. Returns a confirmation. Use when the visitor wants to tender, get pricing, or send project details.",
  inputSchema:{type:"object",properties:{projectName:{type:"string"},projectType:{type:"string",description:"one of: "+TYPES.join(", ")},location:{type:"string"},brief:{type:"string",description:"short summary of what the visitor said about the project"},packages:{type:"array",items:{type:"string"},description:"service names from the MPES list"}}},
  execute(i){closeChat();prefillTender(String(i.brief||""),{title:String(i.projectName||""),projectType:String(i.projectType||""),packages:(Array.isArray(i.packages)?i.packages:[]).map(n=>({name:String(n)}))});if(i.location)$("#tLoc").value=String(i.location);return "Tender form opened and pre-filled. The visitor now completes contact details and sends it."}},
 {name:"show_section",description:"Scrolls the page to a section. Returns ok. Sections: projects, tender, services, contact.",
  inputSchema:{type:"object",properties:{section:{type:"string"}},required:["section"]},
  execute(i){const el=document.getElementById(String(i.section||""));if(!el)throw new Error("unknown section");el.scrollIntoView({});return "ok"}}
];
function addMsg(who,html){const d=document.createElement("div");d.className="m "+who;d.innerHTML=html;msgs.appendChild(d);msgs.scrollTop=msgs.scrollHeight;return d}
addMsg("bot",md("G’day. I can explain our services, how to invite us to tender, or help you work out what electrical scope your project needs. What are you working on?"));
function openChat(){chat.classList.add("open");fab.style.display="none";setTimeout(()=>$("#chatIn").focus(),250)}
function closeChat(){chat.classList.remove("open");fab.style.display="";if(chatCtl)chatCtl.abort()}
fab.onclick=openChat;$("#chatX").onclick=closeChat;
addEventListener("keydown",e=>{if(e.key==="Escape"&&chat.classList.contains("open"))closeChat()});
$("#sugg").onclick=e=>{const b=e.target.closest("button");if(b)send(b.textContent)};
$("#chatForm").onsubmit=e=>{e.preventDefault();if(chatCtl){chatCtl.abort();return}const v=$("#chatIn").value.trim();if(v)send(v)};
function setSend(busy){const b=$("#chatSend");b.classList.toggle("stop",busy);b.innerHTML=ico(busy?"i-stop":"i-send");b.setAttribute("aria-label",busy?"Stop":"Send")}
async function send(text){
  $("#chatIn").value="";$("#sugg").style.display="none";
  addMsg("me",esc(text));
  await sampleReady;
  const bub=addMsg("bot",`<span style="color:var(--ink-3)">Thinking…</span>`);
  if(!sample){
    turns.push({role:"user",content:text});
    setTimeout(()=>{const rep=demoReply(text);bub.innerHTML=md(rep);turns.push({role:"assistant",content:rep});
      if(/tender|quote|price|estimate/i.test(text)){bub.insertAdjacentHTML("beforeend",`<a class="btn btn-lime act" href="#tender">Open tender form</a>`);bub.querySelector(".act").onclick=closeChat}
      msgs.scrollTop=msgs.scrollHeight},600+Math.min(1200,text.length*20));
    return;
  }
  turns.push({role:"user",content:text});
  const input=turns.slice(-12).map((t,i,arr)=>i===0?{role:t.role,content:CONTEXT+"\n\nVisitor: "+t.content}:t);
  if(input[0].role!=="user")input.shift();
  chatCtl=new AbortController();setSend(true);
  let opts={modelTier:"quick",cache:false,signal:chatCtl.signal,onText:({text})=>{bub.innerHTML=md(text);msgs.scrollTop=msgs.scrollHeight}};
  try{ if(toolsOK===null){const lim=await sample.limits();toolsOK=!!lim.tools} }catch(e){toolsOK=false}
  if(toolsOK){delete opts.cache;opts.tools=TOOLS}
  try{
    const {text:full}=await sample(input,opts);
    bub.innerHTML=md(full);turns.push({role:"assistant",content:full});
    if(/tender/i.test(text+full)){bub.insertAdjacentHTML("beforeend",`<a class="btn btn-lime act" href="#tender">Open tender form</a>`);bub.querySelector(".act").onclick=closeChat}
  }catch(e){
    if(e&&e.text){bub.innerHTML=md(e.text);turns.push({role:"assistant",content:e.text})}
    else{bub.innerHTML=md(errMsg(e));turns.pop()}
  }finally{chatCtl=null;setSend(false);msgs.scrollTop=msgs.scrollHeight}
}
