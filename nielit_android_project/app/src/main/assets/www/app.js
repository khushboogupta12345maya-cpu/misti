const STORAGE_KEY = "nielit_gkp_student_prototype_v1";
const CREDENTIALS = {
  student: { username: "gauravnielit@1", password: "lux@123" },
  admin: { username: "adminnielit@123", password: "admin@123" }
};

const seed = {
  courses: [
    { id: "cse", name: "B.Tech Computer Science & Engineering", short: "B.Tech CSE", department: "Computer Science & Engineering", duration: "4 years", seats: 60, summary: "Computing foundations, software development, data systems, networks and intelligent technologies." },
    { id: "ece", name: "B.Tech Electronics & Communication Engineering", short: "B.Tech ECE", department: "Electronics & Communication Engineering", duration: "4 years", seats: 60, summary: "Electronics, communication systems, embedded design, signal processing and modern hardware." }
  ],
  notices: [
    { id:"nt1", title:"Mid-semester examination schedule", department:"CSE", category:"Examinations", author:"Dr. Meera Singh · Faculty", date:"2026-10-21", body:"Please review the sample mid-semester schedule. Room allocations shown in this prototype are illustrative." },
    { id:"nt2", title:"Library extended hours", department:"Campus", category:"Campus", author:"Library Desk · Staff", date:"2026-10-20", body:"The sample library schedule is extended until 8:00 PM during the preparation week." },
    { id:"nt3", title:"Project review registration", department:"CSE", category:"Department", author:"Prof. Arvind Rao · Faculty", date:"2026-10-19", body:"Year 2 project groups can submit their sample registration to the department coordinator." },
    { id:"nt4", title:"Electronics lab orientation", department:"ECE", category:"Laboratory", author:"Dr. Kavita Joshi · Faculty", date:"2026-10-18", body:"An illustrative orientation session for the electronics laboratory is listed for Friday." },
    { id:"nt5", title:"Campus clean-up morning", department:"Campus", category:"Student activity", author:"Student Activities Cell", date:"2026-10-17", body:"Join the sample campus community activity at the main courtyard." },
    { id:"nt6", title:"Digital design workshop", department:"ECE", category:"Workshop", author:"ECE Department", date:"2026-10-16", body:"A sample hands-on digital design workshop announcement for interested students." },
    { id:"nt7", title:"Assignment submission reminder", department:"CSE", category:"Academic", author:"CS201 Course Team", date:"2026-10-15", body:"Upload the data structures practice assignment before the displayed sample deadline." },
    { id:"nt8", title:"Career guidance session", department:"All students", category:"Career", author:"Training & Placement Cell", date:"2026-10-14", body:"A sample career guidance talk is planned in the seminar room." }
  ],
  gallery: [
    { id:"g1", title:"NIELIT Gorakhpur campus", date:"Campus photograph", image:"assets/campus-gorakhpur.jpg" },
    { id:"g2", title:"Cultural evening", date:"Sep 2026", icon:"♫", art:"purple" },
    { id:"g3", title:"Electronics lab workshop", date:"Sep 2026", icon:"⌁", art:"gold" },
    { id:"g4", title:"Sports day highlights", date:"Aug 2026", icon:"⚽", art:"green" },
    { id:"g5", title:"Student orientation", date:"Aug 2026", icon:"✧", art:"rose" },
    { id:"g6", title:"Campus nature walk", date:"Jul 2026", icon:"❋", art:"teal" }
  ],
  syllabus: [
    { id:"sy1", course:"B.Tech CSE", semester:"Semester 3", subject:"Data Structures", code:"CS201", units:5, summary:"Arrays, linked structures, stacks, queues, trees, graphs and algorithm analysis." },
    { id:"sy2", course:"B.Tech CSE", semester:"Semester 3", subject:"Database Systems", code:"CS202", units:5, summary:"Relational model, SQL, normalization, transactions, indexing and database design." },
    { id:"sy3", course:"B.Tech CSE", semester:"Semester 3", subject:"Computer Networks", code:"CS203", units:5, summary:"Network models, routing, transport protocols, addressing and application services." },
    { id:"sy4", course:"B.Tech ECE", semester:"Semester 3", subject:"Signals & Systems", code:"EC201", units:5, summary:"Continuous and discrete-time signals, transforms, system response and sampling." },
    { id:"sy5", course:"B.Tech ECE", semester:"Semester 3", subject:"Electronic Devices", code:"EC202", units:5, summary:"Semiconductor fundamentals, diodes, transistors and basic electronic circuits." },
    { id:"sy6", course:"B.Tech ECE", semester:"Semester 3", subject:"Digital Logic Design", code:"EC203", units:5, summary:"Boolean algebra, combinational logic, sequential circuits and digital systems." }
  ],
  timetable: [
    { id:"t1", day:"Monday", time:"09:00", course:"B.Tech CSE", subject:"Data Structures", code:"CS201", room:"Block A · 204", faculty:"Dr. Meera Singh" },
    { id:"t2", day:"Monday", time:"11:00", course:"B.Tech CSE", subject:"Database Systems", code:"CS202", room:"Block B · 112", faculty:"Prof. Arvind Rao" },
    { id:"t3", day:"Tuesday", time:"09:00", course:"B.Tech ECE", subject:"Signals & Systems", code:"EC201", room:"Block C · 104", faculty:"Dr. Kavita Joshi" },
    { id:"t4", day:"Tuesday", time:"11:00", course:"B.Tech CSE", subject:"Computer Networks", code:"CS203", room:"Block C · 305", faculty:"Prof. Neha Verma" },
    { id:"t5", day:"Wednesday", time:"10:00", course:"B.Tech ECE", subject:"Electronic Devices Lab", code:"EC202", room:"Electronics Lab", faculty:"Dr. Kavita Joshi" },
    { id:"t6", day:"Wednesday", time:"12:00", course:"B.Tech CSE", subject:"Operating Systems", code:"CS204", room:"Block B · 201", faculty:"Dr. Meera Singh" },
    { id:"t7", day:"Thursday", time:"09:00", course:"B.Tech CSE", subject:"Computer Networks", code:"CS203", room:"Block C · 305", faculty:"Prof. Neha Verma" },
    { id:"t8", day:"Thursday", time:"11:00", course:"B.Tech ECE", subject:"Digital Logic Design", code:"EC203", room:"Block C · 210", faculty:"Prof. Ritu Das" },
    { id:"t9", day:"Friday", time:"10:00", course:"B.Tech CSE", subject:"Data Structures Lab", code:"CS201", room:"Computer Lab 3", faculty:"Prof. Arvind Rao" }
  ],
  notes: [
    { id:"n1", course:"B.Tech CSE", subject:"Data Structures", title:"Trees & traversals — revision notes", body:"Review binary tree terminology, preorder/inorder/postorder traversal, binary search trees, insertion and search complexity.", author:"CS201 Course Team", date:"2026-10-19" },
    { id:"n2", course:"B.Tech CSE", subject:"Database Systems", title:"Normalization quick guide", body:"A sample revision outline for functional dependencies and 1NF, 2NF, 3NF and BCNF.", author:"CS202 Course Team", date:"2026-10-17" },
    { id:"n3", course:"B.Tech ECE", subject:"Signals & Systems", title:"Fourier transform formula sheet", body:"Sample formula sheet covering common transform pairs, linearity, shifting and convolution properties.", author:"EC201 Course Team", date:"2026-10-16" }
  ],
  students: [
    { id:"st1", name:"Ranit Pal", username:"gauravnielit@1", roll:"GKP24CSE0186", course:"B.Tech CSE", semester:"Semester 3", email:"ranit.pal@student.example", phone:"9000000001", photo:"" },
    { id:"st2", name:"Aarav Mishra", username:"aarav-demo", roll:"GKP24CSE0142", course:"B.Tech CSE", semester:"Semester 3", email:"aarav.mishra@student.example", phone:"9000000002", photo:"" },
    { id:"st3", name:"Isha Verma", username:"isha-demo", roll:"GKP24ECE0091", course:"B.Tech ECE", semester:"Semester 3", email:"isha.verma@student.example", phone:"9000000003", photo:"" },
    { id:"st4", name:"Kabir Singh", username:"kabir-demo", roll:"GKP24ECE0117", course:"B.Tech ECE", semester:"Semester 3", email:"kabir.singh@student.example", phone:"9000000004", photo:"" }
  ],
  attendance: [
    { id:"a1", roll:"GKP24CSE0186", course:"B.Tech CSE", code:"CS201", subject:"Data Structures", attended:28, total:32 },
    { id:"a2", roll:"GKP24CSE0186", course:"B.Tech CSE", code:"CS202", subject:"Database Systems", attended:25, total:30 },
    { id:"a3", roll:"GKP24CSE0186", course:"B.Tech CSE", code:"CS203", subject:"Computer Networks", attended:21, total:28 },
    { id:"a4", roll:"GKP24CSE0186", course:"B.Tech CSE", code:"CS204", subject:"Operating Systems", attended:22, total:27 },
    { id:"a5", roll:"GKP24ECE0091", course:"B.Tech ECE", code:"EC201", subject:"Signals & Systems", attended:26, total:30 },
    { id:"a6", roll:"GKP24ECE0091", course:"B.Tech ECE", code:"EC202", subject:"Electronic Devices", attended:24, total:28 }
  ],
  fees: [
    { id:"f1", roll:"GKP24CSE0186", item:"Semester tuition fee", amount:28500, due:"28 Oct 2026", status:"Due" },
    { id:"f2", roll:"GKP24CSE0186", item:"Library deposit", amount:1500, due:"15 Oct 2026", status:"Due" },
    { id:"f3", roll:"GKP24CSE0186", item:"Laboratory fee", amount:2500, due:"10 Sep 2026", status:"Paid" }
  ],
  results: [
    { id:"r1", roll:"GKP24CSE0186", course:"B.Tech CSE", term:"Semester 2", subject:"Programming Fundamentals", marks:82, max:100, grade:"A" },
    { id:"r2", roll:"GKP24CSE0186", course:"B.Tech CSE", term:"Semester 2", subject:"Engineering Mathematics II", marks:76, max:100, grade:"A" },
    { id:"r3", roll:"GKP24CSE0186", course:"B.Tech CSE", term:"Semester 2", subject:"Digital Systems", marks:71, max:100, grade:"B+" },
    { id:"r4", roll:"GKP24CSE0186", course:"B.Tech CSE", term:"Semester 2", subject:"Communication Skills", marks:88, max:100, grade:"A+" }
  ],
  assignments: [
    { id:"as1", course:"B.Tech CSE", code:"CS201", title:"Implement stack and queue operations", due:"26 Oct 2026", status:"Due soon" },
    { id:"as2", course:"B.Tech CSE", code:"CS202", title:"Database normalization worksheet", due:"29 Oct 2026", status:"Open" },
    { id:"as3", course:"B.Tech CSE", code:"CS203", title:"Subnetting practice problems", due:"02 Nov 2026", status:"Open" }
  ],
  users: [
    { id:"u1", username:"gauravnielit@1", role:"Student", status:"Active" },
    { id:"u2", username:"adminnielit@123", role:"Administrator", status:"Active" },
    { id:"u3", username:"faculty-cse", role:"Faculty", status:"Active" },
    { id:"u4", username:"faculty-ece", role:"Faculty", status:"Active" }
  ],
  session: null
};

const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let state = loadState();
let landingView = "home";
let portalPage = "overview";
let loginRole = "student";
let toastTimeout;
const PREFERENCES_KEY = "nielit_gkp_portal_preferences_v1";
let preferences = loadPreferences();

function loadPreferences() {
  try {
    const value = JSON.parse(localStorage.getItem(PREFERENCES_KEY));
    return {theme:value?.theme==="dark"?"dark":"light",accent:["blue","teal","violet"].includes(value?.accent)?value.accent:"blue"};
  } catch (error) {
    console.warn("Portal display preferences could not be loaded.",error);
    return {theme:"light",accent:"blue"};
  }
}
function savePreferences() {
  try { localStorage.setItem(PREFERENCES_KEY,JSON.stringify(preferences)); }
  catch (error) { console.warn("Portal display preferences could not be saved.",error); }
}
function applyPreferences() {
  document.body.dataset.theme=preferences.theme;
  document.body.dataset.accent=preferences.accent;
  const themeColor=preferences.theme==="dark"?"#102234":preferences.accent==="teal"?"#087f83":preferences.accent==="violet"?"#6d4cc3":"#092c54";
  $('meta[name="theme-color"]').content=themeColor;
  const button=$("#theme-toggle");
  if(button){button.textContent=preferences.theme==="dark"?"☀":"☾";button.setAttribute("aria-label",`Switch to ${preferences.theme==="dark"?"light":"dark"} mode`);}
  const picker=$("#accent-picker");
  if(picker)picker.value=preferences.accent;
  const mobilePicker=$("#mobile-accent-picker");
  if(mobilePicker)mobilePicker.value=preferences.accent;
}

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function loadState() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (value && Array.isArray(value.students) && Array.isArray(value.notices)) return { ...clone(seed), ...value };
  } catch (error) { console.warn("Local prototype data unavailable; loading sample information.", error); }
  return clone(seed);
}
function save() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (error) { console.error("Could not save local prototype data.", error); notify("Storage is full on this device; try a smaller image."); }
}
const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
function esc(value) { return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
function money(value) { return `₹${Number(value||0).toLocaleString("en-IN")}`; }
function pct(attended,total) { return total ? Math.round(attended/total*100) : 0; }
function currentStudent() {
  const session = state.session;
  return session?.role === "student"
    ? state.students.find(student => student.username.toLowerCase() === session.username.toLowerCase()) || state.students[0]
    : state.students[0];
}
function initials(name) { return String(name||"").trim().split(/\s+/).map(part => part[0] || "").join("").slice(0,2).toUpperCase(); }
function notify(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(toastTimeout); toastTimeout = setTimeout(() => toast.classList.remove("show"), 2800);
}
function animatePage() {
  const app=$("#app");
  app.classList.remove("page-enter");
  void app.offsetWidth;
  app.classList.add("page-enter");
}
function bindSearch(input,root,selector,feedback) {
  if(!input||!root)return;
  input.addEventListener("input",()=>{
    const query=input.value.trim().toLocaleLowerCase();
    const searchable=$$(selector,root);
    const items=searchable.length?searchable:$$(".portal-content > *:not(#portal-search-feedback)",root);
    let matches=0;
    for(const item of items){
      const visible=!query||item.textContent.toLocaleLowerCase().includes(query);
      item.hidden=!visible;
      if(visible)matches++;
    }
    if(feedback)feedback.textContent=query?(matches?`${matches} result${matches===1?"":"s"}`:"No matches found"):"";
  });
}
function updateConnectionStatus() {
  $$("[data-online-status]").forEach(status=>{
    const online=navigator.onLine;
    status.textContent=online?"Online":"Offline · saved app";
    status.classList.toggle("offline",!online);
  });
}
function toggleTheme() {
  preferences.theme=preferences.theme==="dark"?"light":"dark";
  savePreferences();applyPreferences();
  $$('[data-action="theme"]').forEach(button=>{button.textContent=preferences.theme==="dark"?"☀":"☾";button.setAttribute("aria-label",`Switch to ${preferences.theme==="dark"?"light":"dark"} mode`);});
}
async function showDemoNotification() {
  if(window.AndroidHost?.isAndroidApp?.()){
    window.AndroidHost.showSampleNotification();
    notify("Local sample notification requested on this phone.");
    return;
  }
  if(!("Notification" in window)){notify("Browser notifications are not supported here.");return;}
  try {
    let permission=Notification.permission;
    if(permission==="default")permission=await Notification.requestPermission();
    if(permission!=="granted"){notify(permission==="denied"?"Notifications are blocked in browser settings.":"Notification permission was not granted.");return;}
    const options={body:"Sample reminder: check the latest campus notice in your portal. This is not a live institute alert.",icon:"assets/nielit-logo192.png",tag:"nielit-sample-notification"};
    const registration="serviceWorker" in navigator?await navigator.serviceWorker.getRegistration():null;
    if(registration)await registration.showNotification("NIELIT Portal · Sample notification",options);
    else new Notification("NIELIT Portal · Sample notification",options);
    notify("Sample notification sent on this device only.");
  } catch(error) {
    console.warn("The sample browser notification could not be shown.",error);
    notify("Could not show a notification. Check browser permissions.");
  }
}
function fmtDate(value) {
  const date = new Date(`${value}T12:00:00`);
  return Number.isNaN(date.getTime()) ? esc(value) : date.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
}
function escapeAttr(value) { return esc(value).replace(/`/g,"&#96;"); }
function profilePhoto(student, cls="profile-photo") {
  return `<div class="${cls}">${student.photo ? `<img src="${escapeAttr(student.photo)}" alt="${escapeAttr(student.name)} profile">` : esc(initials(student.name))}</div>`;
}

function sampleGalleryArt(item) {
  if (item.image) return `<img class="gallery-photo" src="${escapeAttr(item.image)}" alt="${escapeAttr(item.title)}">`;
  const icon = item.icon || "✦";
  return `<div class="gallery-art art-${escapeAttr(item.art||"blue")}"><span>${esc(icon)}</span><i class="art-sun"></i><i class="art-mountain"></i><i class="art-mountain second"></i></div>`;
}
function noticeCard(notice) {
  const date = new Date(`${notice.date}T12:00:00`);
  return `<article class="notice-card"><div class="notice-date">${date.toLocaleString("en-US",{month:"short"}).toUpperCase()}<b>${date.getDate()}</b></div><div class="notice-text"><h3>${esc(notice.title)}</h3><p>${esc(notice.body)}</p></div><div class="notice-meta"><span class="dept-tag">${esc(notice.department||notice.category)}</span><div>${esc(notice.author||"Department")} · ${fmtDate(notice.date)}</div></div></article>`;
}
function courseCard(course) {
  const icon = course.id?.toLowerCase().includes("ece") || course.short?.includes("ECE") ? "⌁" : "⌘";
  return `<article class="info-card course-card"><div class="course-icon">${icon}</div><h3>${esc(course.name)}</h3><p>${esc(course.summary)}</p><div class="course-details"><span>${esc(course.duration||"4 years")}</span><span>${esc(course.department||"Engineering")}</span></div></article>`;
}

function renderLanding() {
  const root = $("#app");
  $("#header-login").hidden=false;
  root.innerHTML = `
    <section id="home" class="hero"><div class="container hero-grid">
      <div><div class="eyebrow">LEARN · BUILD · GROW</div><h1>Welcome to<br>NIELIT Gorakhpur</h1>
        <p class="hero-copy">A student-created preview for exploring campus information, academics and student services in one place. This is not an official institute portal.</p>
        <div class="hero-ctas"><a class="button button-outline" href="#courses">Explore courses</a></div>
        <div class="hero-stats"><div class="hero-stat"><strong>2</strong><span>sample B.Tech streams</span></div><div class="hero-stat"><strong>8</strong><span>sample campus notices</span></div><div class="hero-stat"><strong>1 place</strong><span>student portal concept</span></div></div>
      </div><div class="hero-art campus-hero-photo" aria-label="Photograph of the NIELIT Gorakhpur campus"><img src="assets/campus-gorakhpur.jpg" alt="NIELIT Gorakhpur institute building"><div class="photo-caption"><span class="photo-dot"></span> NIELIT Gorakhpur · Campus</div></div>
    </div><small class="hero-note">Illustrative artwork · not a campus photograph</small></section>
    <div class="container"><div class="quick-row">
      <a class="quick-link" href="#notices"><span class="quick-icon">◉</span><span><b>Latest notices</b><small>Academic & campus updates</small></span></a>
      <a class="quick-link" href="#admissions"><span class="quick-icon">↗</span><span><b>Admissions</b><small>Eligibility & process overview</small></span></a>
      <a class="quick-link" href="#courses"><span class="quick-icon">▤</span><span><b>Courses</b><small>CSE and ECE information</small></span></a>
      <a class="quick-link" href="#gallery"><span class="quick-icon">▧</span><span><b>Campus gallery</b><small>Illustrative event artwork</small></span></a>
    </div></div>
    <div class="container search-row"><label class="search-field"><span aria-hidden="true">⌕</span><input id="site-search" type="search" placeholder="Search courses, notices, campus…" autocomplete="off" aria-label="Search courses, notices and campus information"></label><span class="search-feedback" id="site-search-feedback" aria-live="polite"></span><span class="connection-status" data-online-status></span></div>
    <section id="about" class="section"><div class="container about-grid"><div class="about-art campus-about-photo" aria-label="NIELIT Gorakhpur campus photograph"><img src="assets/campus-gorakhpur.jpg" alt="Front entrance of the NIELIT Gorakhpur campus"></div><div class="about-copy"><div class="section-kicker">ABOUT THE INSTITUTE</div><h2>Learning for a digital future</h2><p>NIELIT (National Institute of Electronics &amp; Information Technology) works across electronics, information technology and digital skills. This independent student prototype brings together common campus portal ideas for a presentation.</p><p>Course descriptions, admission guidance and campus information shown here are sample copy. Please use official NIELIT sources for current, authoritative details.</p><div class="eligibility"><div><b>Explore</b>Course areas and sample syllabi</div><div><b>Prepare</b>View illustrative schedules and notices</div><div><b>Connect</b>Discuss what a student portal could offer</div></div></div></div></section>
    <section id="courses" class="section section-soft"><div class="container"><div class="section-head"><div><div class="section-kicker">ACADEMIC PROGRAMMES</div><h2>Explore courses</h2><p>Sample programme summaries for the portal prototype.</p></div><span class="dept-tag">CSE · ECE</span></div><div class="cards-3">${state.courses.map(courseCard).join("")}</div></div></section>
    <section id="notices" class="section"><div class="container"><div class="section-head"><div><div class="section-kicker">CAMPUS BULLETIN</div><h2>Latest notices</h2><p>Sample announcements by department and campus teams.</p></div><button class="button button-quiet button-small" data-action="login">Student login →</button></div><div class="notice-list">${state.notices.slice().sort((a,b)=>b.date.localeCompare(a.date)).slice(0,8).map(noticeCard).join("")}</div></div></section>
    <section id="admissions" class="section section-soft"><div class="container"><div class="section-head"><div><div class="section-kicker">ADMISSION OVERVIEW</div><h2>Eligibility &amp; process</h2><p>Illustrative guide only—not current official admission rules.</p></div></div><div class="cards-3">
      <article class="info-card"><div class="course-icon">✓</div><h3>Eligibility</h3><p>Programme eligibility, subject requirements, qualifying examinations and minimum marks are set by the current official admission notice. Verify each condition with NIELIT before applying.</p></article>
      <article class="info-card"><div class="course-icon">1</div><h3>Application process</h3><p>Review the official notice → complete the authorized application → submit required documents → follow the published selection and counselling steps.</p></article>
      <article class="info-card"><div class="course-icon">₹</div><h3>Fees &amp; important dates</h3><p>Fee schedules, deadlines and payment instructions change by programme and session. This prototype intentionally does not show an official fee amount or collect payment.</p></article>
    </div><p class="official-note">Always confirm eligibility, process, fee and dates on the official NIELIT website or with the institute admissions office.</p></div></section>
    <section id="gallery" class="section"><div class="container"><div class="section-head"><div><div class="section-kicker">CAMPUS LIFE</div><h2>Events &amp; gallery</h2><p>Campus photo supplied by you, alongside illustrative sample gallery artwork.</p></div></div><div class="gallery-grid">${state.gallery.slice(0,9).map(galleryCard).join("")}</div></div></section>
    `;
  bindLanding();
  applyPreferences();
  bindSearch($("#site-search"),$("#app"),"#courses .course-card, #notices .notice-card, #gallery .gallery-card",$("#site-search-feedback"));
  animatePage();
}

function galleryCard(item) {
  return `<article class="gallery-card">${sampleGalleryArt(item)}<div class="gallery-caption"><b>${esc(item.title)}</b><small>${esc(item.date||"Sample campus event")}</small><span class="gallery-label">${item.image?"Campus photo · provided image":"Original sample illustration · sample artwork"}</span></div></article>`;
}

function loginCard() {
  return `<form id="login-form" class="login-card"><div class="login-tabs"><button type="button" class="login-tab ${loginRole==="student"?"active":""}" data-role="student">Student</button><button type="button" class="login-tab ${loginRole==="admin"?"active":""}" data-role="admin">Administrator</button></div>
    <div class="field"><label for="login-username">${loginRole==="student"?"Student ID / username":"Administrator username"}</label><input id="login-username" name="username" autocomplete="username" placeholder="${loginRole==="student"?"Enter student ID":"Enter administrator username"}" required></div>
    <div class="field"><label for="login-password">Password</label><input id="login-password" name="password" type="password" autocomplete="current-password" placeholder="Enter password" required></div>
    <p id="login-error" class="form-error" hidden>That prototype username/password did not match.</p><button class="button" type="submit">Sign in to ${loginRole==="student"?"student":"admin"} portal&nbsp; →</button><p class="login-hint">Unofficial prototype · local browser sign-in only</p><details class="credential-note"><summary>Prototype access details</summary><p>Student: <code>gauravnielit@1</code> / <code>lux@123</code><br>Admin: <code>adminnielit@123</code> / <code>admin@123</code></p><small>Public sample credentials only—not real NIELIT accounts. Do not enter personal data.</small></details></form>`;
}

function bindLanding() {
  $$('[data-action="login"]',$("#app")).forEach(button => button.addEventListener("click", () => {
    openLogin();
  }));
  $("#mobile-toggle").addEventListener("click", () => $("#site-nav").classList.toggle("open"));
  $$("#site-nav a").forEach(link => link.addEventListener("click", () => $("#site-nav").classList.remove("open")));
}
function openLogin() {
  $("#modal-content").innerHTML=`<div class="login-modal"><div class="section-kicker">STUDENT SERVICES</div><h2 id="modal-title">Sign in to your portal</h2><p>Choose a student or administrator prototype account.</p>${loginCard()}</div>`;
  $("#modal-backdrop").hidden=false;
  bindLogin();
  $("#login-username")?.focus({preventScroll:true});
}

function bindLogin() {
  const form = $("#login-form");
  if (!form) return;
  $$(".login-tab",form).forEach(button => button.addEventListener("click", () => {
    loginRole = button.dataset.role;
    const replacement = document.createElement("div"); replacement.innerHTML = loginCard();
    form.replaceWith(replacement.firstElementChild); bindLogin();
  }));
  form.addEventListener("submit", event => {
    event.preventDefault();
    const username = $("#login-username").value.trim();
    const password = $("#login-password").value;
    const credential = CREDENTIALS[loginRole];
    if (username.toLowerCase() !== credential.username.toLowerCase() || password !== credential.password) {
      $("#login-error").hidden = false;
      return;
    }
    state.session = {role:loginRole,username};
    save();
    portalPage = loginRole === "admin" ? "overview" : "home";
    closeModal();
    renderPortal();
    window.scrollTo({top:0,behavior:"smooth"});
  });
}

const studentNav = [
  ["home","⌂","Dashboard"],["timetable","▦","Timetable"],["attendance","◷","Attendance"],
  ["syllabus","▤","Syllabus"],["results","▥","Results"],["assignments","✓","Assignments"],
  ["profile","◉","My profile"],["notices","◈","Notices"]
];
const adminNav = [
  ["overview","⌂","Overview"],["notices","◈","Notices"],["gallery","▧","Gallery"],
  ["courses","▤","Courses"],["syllabus","▥","Syllabus"],["timetable","▦","Timetable"],
  ["notes","✎","Notes"],["students","♙","Students"],["attendance","◷","Attendance"],
  ["fees","₹","Fee details"],["results","▣","Results"],["users","⚙","Manage users"]
];
const studentPageTitle = {home:"Student dashboard",timetable:"My timetable",attendance:"My attendance",syllabus:"Syllabus",results:"Results",assignments:"Assignments",profile:"Student profile",notices:"Department notices"};
const adminPageTitle = {overview:"Admin overview",notices:"Notice management",gallery:"Campus gallery",courses:"Course management",syllabus:"Syllabus management",timetable:"Timetable management",notes:"Study notes",students:"Student management",attendance:"Attendance management",fees:"Fee details",results:"Result management",users:"Manage users"};

function renderPortal() {
  if (!state.session) { renderLanding(); return; }
  const admin = state.session.role === "admin";
  const student = currentStudent();
  const nav = admin ? adminNav : studentNav;
  const title = admin ? adminPageTitle[portalPage] : studentPageTitle[portalPage];
  const view = admin ? renderAdminPage() : renderStudentPage(student);
  const bottomNav=nav.slice(0,4);
  $("#app").innerHTML = `<section class="portal">
    <aside class="portal-side"><div class="portal-brand"><img src="assets/nielit-logo192.png" alt=""><span><b>NIELIT Gorakhpur</b><small>${admin?"Administrator view":"Student portal"} · Prototype</small></span></div>
      <div class="portal-label">${admin?"ADMINISTRATION":"STUDENT SERVICES"}</div><nav class="portal-nav">${nav.map(([id,icon,label])=>`<button class="portal-link ${portalPage===id?"active":""}" data-page="${id}">${icon}&nbsp; ${label}</button>`).join("")}</nav>
      <div class="portal-side-bottom"><div class="portal-user">${profilePhoto(student,"portal-avatar")}<span>${esc(admin?"Portal administrator":student.name)}<small>${admin?"Admin prototype account":`${esc(student.roll)} · ${esc(student.course)}`}</small></span></div></div>
    </aside>
    <div class="portal-main"><header class="portal-top"><div><b>${esc(title)}</b><small>Independent student-built prototype · sample data</small></div><label class="search-field portal-search"><span aria-hidden="true">⌕</span><input id="portal-search" type="search" placeholder="Search this page…" autocomplete="off" aria-label="Search this page"></label><div class="portal-top-actions"><span class="connection-status" data-online-status></span><button class="icon-button portal-theme-toggle" data-action="theme" type="button" aria-label="Switch theme">${preferences.theme==="dark"?"☀":"☾"}</button><button class="button button-small button-quiet" data-page="public-home">Public home</button><button class="button button-small" data-action="logout">Sign out</button></div></header><div class="portal-content">${view}<span class="search-feedback" id="portal-search-feedback" aria-live="polite"></span></div></div>
    <nav class="portal-bottom-nav" aria-label="Quick navigation">${bottomNav.map(([id,icon,label])=>`<button class="${portalPage===id?"active":""}" data-page="${id}" aria-label="${label}"><span>${icon}</span><small>${label}</small></button>`).join("")}<button data-action="toggle-nav" aria-expanded="false"><span>···</span><small>More</small></button></nav>
  </section>`;
  $$(".portal-link").forEach(button => button.addEventListener("click", () => setPortalPage(button.dataset.page)));
  $$('[data-page="public-home"]').forEach(button => button.addEventListener("click", () => {state.session=null;save();renderLanding();window.scrollTo(0,0);}));
  $$('[data-action="logout"]').forEach(button => button.addEventListener("click", () => {state.session=null;save();renderLanding();window.scrollTo(0,0);notify("Signed out of the local prototype.");}));
  $$('[data-action="toggle-nav"]').forEach(button=>button.addEventListener("click",()=>{
    const nav=$(".portal-nav"),expanded=nav.classList.toggle("mobile-expanded");
    button.setAttribute("aria-expanded",String(expanded));
  }));
  bindPortalActions();
  applyPreferences();
  bindSearch($("#portal-search"),$(".portal-content"),".row-card, .attendance-row, .portal-notice, .notice-card, .gallery-card, .syllabus-card, .assignment-card, .profile-card, .profile-details > div, .admin-quick, .kpi",$("#portal-search-feedback"));
  updateConnectionStatus();
  animatePage();
  $("#header-login").hidden=true;
}
function setPortalPage(page) { portalPage=page; renderPortal(); window.scrollTo({top:0,behavior:"smooth"}); }

function kpi(label,value) { return `<article class="kpi"><small>${label}</small><b>${value}</b></article>`; }
function avgAttendance(students) {
  const rows=state.attendance.filter(row=>row.roll===students.roll);
  return rows.length ? Math.round(rows.reduce((sum,row)=>sum+pct(row.attended,row.total),0)/rows.length) : 0;
}
function studentAttendanceRows(student) {
  return state.attendance.filter(row=>row.roll===student.roll);
}
function adminOverview() {
  const due=state.fees.filter(item=>item.status.toLowerCase()==="due").length;
  return `<div class="portal-title"><div><h1>Welcome, Administrator</h1><p>Manage sample campus content in this browser.</p></div><span class="tag tag-gold">SAMPLE DATA</span></div>
    <div class="portal-kpis">${kpi("Students",state.students.length)}${kpi("Active courses",state.courses.length)}${kpi("Notices",state.notices.length)}${kpi("Fee items due",due)}</div>
    <div class="portal-grid"><section class="box"><h3>Quick administration</h3><div class="admin-quick-grid">${adminNav.slice(1).map(([id,icon,label])=>`<button class="admin-quick" data-page="${id}"><span>${icon}</span>${label}<b>›</b></button>`).join("")}</div></section><section class="box"><h3>Latest notice entries</h3><div class="stack">${state.notices.slice(0,4).map(n=>`<div class="row-card"><span><b>${esc(n.title)}</b><small>${esc(n.department)} · ${fmtDate(n.date)}</small></span><span class="tag">${esc(n.category)}</span></div>`).join("")}</div></section></div>
    <div class="notice-alert"><b>Sample content only:</b> changes are saved only in this browser and do not publish to NIELIT systems or other phones.</div>`;
}

function studentHome(student) {
  const rows=studentAttendanceRows(student);
  const average=rows.length ? Math.round(rows.reduce((s,r)=>s+pct(r.attended,r.total),0)/rows.length) : 0;
  const due=state.fees.filter(f=>f.roll===student.roll&&f.status.toLowerCase()==="due").reduce((s,f)=>s+Number(f.amount),0);
  const upcoming=state.assignments.filter(item=>item.course===student.course).slice(0,3);
  const today=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date().getDay()];
  const classes=state.timetable.filter(item=>item.day===today&&item.course===student.course);
  return `<div class="portal-title"><div><h1>Welcome back, ${esc(student.name.split(" ")[0])} 👋</h1><p>${esc(student.course)} · ${esc(student.semester)} · Roll no. ${esc(student.roll)}</p></div><span class="tag">TODAY · ${esc(today.toUpperCase())}</span></div>
    <div class="portal-kpis">${kpi("Attendance",`${average}%`)}${kpi("Classes today",classes.length)}${kpi("Pending assignments",upcoming.length)}${kpi("Sample fee due",money(due))}</div>
    <div class="portal-grid"><section class="box"><h3>Today's timetable</h3>${classes.length?`<div class="stack">${classes.map(c=>`<div class="row-card"><span><b>${esc(c.time)} · ${esc(c.subject)}</b><small>${esc(c.code)} · ${esc(c.room)} · ${esc(c.faculty)}</small></span><span class="tag">${esc(c.course)}</span></div>`).join("")}</div>`:`<p>No class is listed for today in the sample timetable.</p>`}<button class="button button-small button-quiet" data-page="timetable">Full timetable →</button></section>
      <section class="box"><h3>Latest department notices</h3><div class="stack">${state.notices.filter(n=>n.department==="All students"||n.department==="Campus"||n.department===student.course.replace("B.Tech ","")).slice(0,3).map(n=>`<div class="portal-notice"><b>${esc(n.title)}</b><small>${esc(n.department)} · ${fmtDate(n.date)}</small></div>`).join("")}</div><button class="button button-small button-quiet" data-page="notices">All notices →</button></section></div>
    <div class="portal-grid"><section class="box"><h3>Attendance overview</h3>${rows.slice(0,3).map(r=>`<div class="attendance-row"><span>${esc(r.subject)}</span><b>${pct(r.attended,r.total)}%</b><div class="mini-progress"><i style="width:${pct(r.attended,r.total)}%"></i></div></div>`).join("")}<button class="button button-small button-quiet" data-page="attendance">See attendance →</button></section>
      <section class="box"><h3>Upcoming assignments</h3><div class="stack">${upcoming.map(a=>`<div class="row-card"><span><b>${esc(a.title)}</b><small>${esc(a.code)} · Due ${esc(a.due)}</small></span><span class="tag tag-gold">${esc(a.status)}</span></div>`).join("")}</div><button class="button button-small button-quiet" data-page="assignments">View all →</button></section></div>`;
}

function timetableTable(rows) {
  return `<div class="table-wrap"><table class="data-table"><thead><tr><th>Day</th><th>Time</th><th>Course</th><th>Subject</th><th>Room</th><th>Faculty</th></tr></thead><tbody>${rows.map(row=>`<tr><td>${esc(row.day)}</td><td>${esc(row.time)}</td><td>${esc(row.course)}</td><td><b>${esc(row.subject)}</b><small class="cell-sub">${esc(row.code)}</small></td><td>${esc(row.room)}</td><td>${esc(row.faculty)}</td></tr>`).join("")}</tbody></table></div>`;
}
function studentTimetable(student) {
  const rows=state.timetable.filter(item=>item.course===student.course);
  return `<div class="portal-title"><div><h1>Class timetable</h1><p>${esc(student.course)} · ${esc(student.semester)} · Sample schedule</p></div></div><section class="box"><div class="box-toolbar"><select id="student-day-filter" class="select-compact"><option value="all">All weekdays</option>${days.map(day=>`<option>${day}</option>`).join("")}</select><span class="tag">ROOMS &amp; TIMES ARE SAMPLE DATA</span></div><div id="student-timetable-table">${timetableTable(rows)}</div></section>`;
}
function studentAttendance(student) {
  const rows=studentAttendanceRows(student);const average=rows.length?Math.round(rows.reduce((s,r)=>s+pct(r.attended,r.total),0)/rows.length):0;
  return `<div class="portal-title"><div><h1>Attendance</h1><p>Class counts for ${esc(student.roll)}. Sample data only.</p></div></div><div class="portal-kpis">${kpi("Average attendance",`${average}%`)}${kpi("Subjects",rows.length)}${kpi("Attendance register","Not official")}${kpi("Last updated","Sample")}</div><section class="box"><div class="table-wrap"><table class="data-table"><thead><tr><th>Subject</th><th>Course code</th><th>Attended</th><th>Total classes</th><th>Percentage</th><th>Indicator</th></tr></thead><tbody>${rows.map(r=>`<tr><td><b>${esc(r.subject)}</b></td><td>${esc(r.code)}</td><td>${r.attended}</td><td>${r.total}</td><td><b>${pct(r.attended,r.total)}%</b></td><td><span class="tag ${pct(r.attended,r.total)>=75?"tag-green":"tag-gold"}">${pct(r.attended,r.total)>=75?"On track":"Review"}</span></td></tr>`).join("")}</tbody></table></div></section><div class="notice-alert">These counts are illustrative and are not an authorized attendance record.</div>`;
}
function studentSyllabus(student) {
  const records=state.syllabus.filter(item=>item.course===student.course);
  return `<div class="portal-title"><div><h1>Syllabus &amp; study notes</h1><p>Subjects and unit outline for ${esc(student.course)}.</p></div></div><div class="cards-portal">${records.map(s=>`<article class="box syllabus-card"><span class="tag">${esc(s.code)} · ${esc(s.semester)}</span><h3>${esc(s.subject)}</h3><p>${esc(s.summary)}</p><b>${esc(s.units)} units</b></article>`).join("")||"<div class='box'>No syllabus records have been added.</div>"}</div><section class="box"><h3>Faculty study notes</h3><div class="stack">${state.notes.filter(n=>n.course===student.course).map(n=>`<div class="row-card"><span><b>${esc(n.title)}</b><small>${esc(n.subject)} · ${esc(n.author)} · ${fmtDate(n.date)}</small><small>${esc(n.body)}</small></span><span class="tag">Notes</span></div>`).join("")||"<p>No notes added yet.</p>"}</div></section>`;
}
function studentResults(student) {
  const rows=state.results.filter(r=>r.roll===student.roll);
  return `<div class="portal-title"><div><h1>Examination results</h1><p>Illustrative marks. Confirm results only through authorized institute channels.</p></div><span class="tag tag-gold">NOT AN OFFICIAL MARKSHEET</span></div><section class="box"><div class="table-wrap"><table class="data-table"><thead><tr><th>Term</th><th>Subject</th><th>Marks</th><th>Grade</th></tr></thead><tbody>${rows.map(r=>`<tr><td>${esc(r.term)}</td><td><b>${esc(r.subject)}</b></td><td>${r.marks} / ${r.max}</td><td><span class="tag tag-green">${esc(r.grade)}</span></td></tr>`).join("")||"<tr><td colspan='4'>No sample results available.</td></tr>"}</tbody></table></div></section>`;
}
function studentAssignments(student) {
  const rows=state.assignments.filter(a=>a.course===student.course);
  return `<div class="portal-title"><div><h1>Assignments</h1><p>Upcoming coursework and sample due dates.</p></div></div><div class="stack">${rows.map(a=>`<article class="box assignment-card"><div><span class="tag">${esc(a.code)}</span><h3>${esc(a.title)}</h3><p>Due ${esc(a.due)} · ${esc(a.status)}</p></div><button class="button button-small" data-action="assignment-submit" data-id="${esc(a.id)}">View task</button></article>`).join("")||"<div class='box'>No assignments are listed.</div>"}</div>`;
}
function studentProfile(student) {
  return `<div class="portal-title"><div><h1>Student profile</h1><p>Sample student record linked to this local login.</p></div></div><section class="box"><div class="profile-card">${profilePhoto(student)}<div><h2>${esc(student.name)}</h2><p>${esc(student.course)} · ${esc(student.semester)}<br>Roll number: <b>${esc(student.roll)}</b><br>Login ID: ${esc(student.username)}</p></div></div><form id="profile-photo-form" class="profile-photo-form"><label for="profile-photo-input">Update local profile photo (max 300 KB)</label><input id="profile-photo-input" type="file" accept="image/jpeg,image/png,image/webp"><button class="button button-small button-quiet">Save profile photo</button></form><div class="profile-details"><div><small>Department</small><b>${esc(student.course.replace("B.Tech ",""))}</b></div><div><small>Student email · fictional</small><b>${esc(student.email)}</b></div><div><small>Contact · fictional</small><b>${esc(student.phone)}</b></div><div><small>Academic session</small><b>2026–27 · sample</b></div></div><p class="notice-alert">Do not enter real student contact data in this prototype.</p></section>`;
}
function studentNotices(student) {
  const dept=student.course.replace("B.Tech ","");
  const rows=state.notices.filter(n=>n.department==="Campus"||n.department==="All students"||n.department===dept);
  return `<div class="portal-title"><div><h1>Notices for ${esc(dept)}</h1><p>Department, academic and campus announcements.</p></div></div><div class="stack">${rows.map(n=>`<article class="box"><div class="notice-line"><span class="tag">${esc(n.department)} · ${esc(n.category)}</span><small>${fmtDate(n.date)} · ${esc(n.author)}</small></div><h3>${esc(n.title)}</h3><p>${esc(n.body)}</p></article>`).join("")||"<div class='box'>No notices for this department.</div>"}</div>`;
}
function renderStudentPage(student) {
  const pages={home:()=>studentHome(student),timetable:()=>studentTimetable(student),attendance:()=>studentAttendance(student),syllabus:()=>studentSyllabus(student),results:()=>studentResults(student),assignments:()=>studentAssignments(student),profile:()=>studentProfile(student),notices:()=>studentNotices(student)};
  return (pages[portalPage]||pages.home)();
}

function adminFormField(label,id,placeholder="",type="text",required=true) {
  return `<div class="field"><label for="${id}">${label}</label><input id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" ${required?"required":""}></div>`;
}
function courseOptions() { return state.courses.map(c=>`<option>${esc(c.short||c.name)}</option>`).join(""); }
function uploadBox(title,format,accept=".csv",id="csv-file") {
  return `<div class="import-box"><b>${title}</b><small>Local sample import · CSV columns: <code>${format}</code></small><label class="file-label" for="${id}">Choose file<input id="${id}" type="file" accept="${accept.trim()}"></label><small id="${id}-status"></small></div>`;
}
function adminNotices() {
  return `<div class="portal-title"><div><h1>Notices &amp; announcements</h1><p>Add department or campus notices. Changes stay in this browser.</p></div></div><div class="portal-grid"><section class="box"><h3>Publish a notice</h3><form id="admin-notice-form" class="form-grid">${adminFormField("Notice title","new-notice-title","Examination update")}<div class="field"><label for="new-notice-dept">Audience / department</label><select id="new-notice-dept"><option>CSE</option><option>ECE</option><option>Campus</option><option>All students</option></select></div><div class="field"><label for="new-notice-category">Category</label><select id="new-notice-category"><option>Academic</option><option>Examinations</option><option>Department</option><option>Campus</option><option>Workshop</option><option>Career</option></select></div><div class="field span-2"><label for="new-notice-body">Notice details</label><textarea id="new-notice-body" maxlength="600" required></textarea></div><div class="span-2"><button class="button button-small">Publish sample notice</button></div></form></section><section class="box"><h3>Recent notice entries</h3><div class="stack">${state.notices.slice(0,8).map(n=>`<div class="row-card"><span><b>${esc(n.title)}</b><small>${esc(n.department)} · ${fmtDate(n.date)}</small></span><button class="button button-small button-quiet" data-action="delete-notice" data-id="${esc(n.id)}">Remove</button></div>`).join("")}</div></section></div>`;
}
function adminGallery() {
  return `<div class="portal-title"><div><h1>Campus gallery</h1><p>Upload small event images from this device. Public gallery items are marked as sample content.</p></div></div><section class="box"><form id="gallery-form" class="form-grid">${adminFormField("Gallery caption","gallery-title","Student event")}<div class="field"><label for="gallery-date">Event date / label</label><input id="gallery-date" placeholder="Oct 2026" value="Oct 2026" required></div><div class="field span-2"><label for="gallery-file">Choose a photo (max 350 KB)</label><input id="gallery-file" type="file" accept="image/jpeg,image/png,image/webp" required></div><div class="span-2"><button class="button button-small">Add gallery item</button><span class="inline-hint">Uploaded images remain on this browser only.</span></div></form></section><div class="portal-gallery">${state.gallery.map(item=>`<article class="gallery-card">${sampleGalleryArt(item)}<div class="gallery-caption"><b>${esc(item.title)}</b><small>${esc(item.date||"")}</small><button class="button button-small button-quiet" data-action="delete-gallery" data-id="${esc(item.id)}">Remove item</button></div></article>`).join("")}</div>`;
}
function adminCourses() {
  return `<div class="portal-title"><div><h1>Course management</h1><p>Add or update sample programmes shown on the public page.</p></div></div><section class="box"><form id="course-form" class="form-grid">${adminFormField("Course title","course-name","B.Tech Electrical Engineering")}<div class="field"><label for="course-short">Short name</label><input id="course-short" placeholder="B.Tech EE" required></div><div class="field"><label for="course-dept">Department</label><input id="course-dept" placeholder="Electrical Engineering" required></div><div class="field"><label for="course-duration">Duration</label><input id="course-duration" placeholder="4 years" value="4 years"></div><div class="field"><label for="course-seats">Sample seats</label><input id="course-seats" type="number" min="1" value="60"></div><div class="field span-2"><label for="course-summary">Course description</label><textarea id="course-summary" required></textarea></div><div class="span-2"><button class="button button-small">Add course</button></div></form></section><div class="cards-portal">${state.courses.map(c=>`<article class="box syllabus-card"><span class="tag">${esc(c.duration)} · ${esc(c.seats)} sample seats</span><h3>${esc(c.name)}</h3><p>${esc(c.summary)}</p><button class="button button-small button-quiet" data-action="delete-course" data-id="${esc(c.id)}">Remove course</button></article>`).join("")}</div>`;
}
function adminSyllabus() {
  return `<div class="portal-title"><div><h1>Syllabus</h1><p>Add subject outlines and unit details for the student portal.</p></div></div><section class="box"><form id="syllabus-form" class="form-grid"><div class="field"><label for="syllabus-course">Course</label><select id="syllabus-course">${courseOptions()}</select></div>${adminFormField("Subject name","syllabus-subject","Signals & Systems")}<div class="field"><label for="syllabus-code">Course code</label><input id="syllabus-code" placeholder="EC201" required></div><div class="field"><label for="syllabus-semester">Semester</label><input id="syllabus-semester" value="Semester 3"></div><div class="field"><label for="syllabus-units">Number of units</label><input id="syllabus-units" type="number" min="1" max="12" value="5"></div><div class="field span-2"><label for="syllabus-summary">Syllabus summary</label><textarea id="syllabus-summary" required></textarea></div><div class="span-2"><button class="button button-small">Add syllabus entry</button></div></form></section><section class="box"><h3>Existing sample subjects</h3><div class="stack">${state.syllabus.map(s=>`<div class="row-card"><span><b>${esc(s.course)} · ${esc(s.code)} · ${esc(s.subject)}</b><small>${esc(s.semester)} · ${esc(s.units)} units · ${esc(s.summary)}</small></span><button class="button button-small button-quiet" data-action="delete-syllabus" data-id="${esc(s.id)}">Remove</button></div>`).join("")}</div></section>`;
}
function adminTimetable() {
  return `<div class="portal-title"><div><h1>Timetable management</h1><p>Add a class or import rows using the sample CSV format.</p></div></div><section class="box"><form id="timetable-form" class="form-grid"><div class="field"><label for="tt-course">Course</label><select id="tt-course">${courseOptions()}</select></div><div class="field"><label for="tt-day">Day</label><select id="tt-day">${days.map(d=>`<option>${d}</option>`).join("")}</select></div>${adminFormField("Time","tt-time","09:00","time")} ${adminFormField("Subject","tt-subject","Data Structures")} ${adminFormField("Course code","tt-code","CS201")} ${adminFormField("Room","tt-room","Block A · 204")} ${adminFormField("Faculty","tt-faculty","Faculty name")}<div class="span-2"><button class="button button-small">Add class</button></div></form>${uploadBox("Import timetable","day,time,course,subject,code,room,faculty",".csv","timetable-csv")}</section><section class="box"><h3>Scheduled sample classes</h3><div class="table-wrap">${timetableTable(state.timetable)}</div></section>`;
}
function adminNotes() {
  return `<div class="portal-title"><div><h1>Study notes</h1><p>Publish notes or upload a small text file as study material.</p></div></div><section class="box"><form id="notes-form" class="form-grid"><div class="field"><label for="notes-course">Course</label><select id="notes-course">${courseOptions()}</select></div>${adminFormField("Subject","notes-subject","Data Structures")} ${adminFormField("Note title","notes-title","Trees quick revision")}<div class="field span-2"><label for="notes-body">Notes / summary</label><textarea id="notes-body" maxlength="2500" required></textarea></div><div class="field span-2"><label for="notes-file">Optional text file (.txt, max 80 KB)</label><input id="notes-file" type="file" accept=".txt,text/plain"></div><div class="span-2"><button class="button button-small">Publish notes</button></div></form></section><section class="box"><h3>Published notes</h3><div class="stack">${state.notes.map(n=>`<div class="row-card"><span><b>${esc(n.course)} · ${esc(n.title)}</b><small>${esc(n.subject)} · ${esc(n.body)}</small></span><button class="button button-small button-quiet" data-action="delete-note" data-id="${esc(n.id)}">Remove</button></div>`).join("")||"<p>No notes published yet.</p>"}</div></section>`;
}
function adminStudents() {
  return `<div class="portal-title"><div><h1>Student management</h1><p>Add fictional student profiles. Avoid real personal information in this prototype.</p></div></div><section class="box"><form id="student-form" class="form-grid">${adminFormField("Student name","student-name","Student name")} ${adminFormField("Portal username","student-username","student-demo")} ${adminFormField("Roll number","student-roll","GKP24CSE0190")}<div class="field"><label for="student-course">Course</label><select id="student-course">${courseOptions()}</select></div>${adminFormField("Semester","student-semester","Semester 3")} ${adminFormField("Sample email","student-email","student@example.invalid","email",false)} ${adminFormField("Sample phone","student-phone","9000000000","tel",false)}<div class="field span-2"><label for="student-photo">Optional profile photo (max 300 KB)</label><input id="student-photo" type="file" accept="image/jpeg,image/png,image/webp"></div><div class="span-2"><button class="button button-small">Add student</button></div></form></section>${uploadBox("Import student list","name,username,roll,course,semester,email,phone",".csv","students-csv")}<section class="box"><h3>Student directory</h3><div class="table-wrap"><table class="data-table"><thead><tr><th>Student</th><th>Roll number</th><th>Course</th><th>Semester</th><th>Username</th><th></th></tr></thead><tbody>${state.students.map(s=>`<tr><td><b>${esc(s.name)}</b></td><td>${esc(s.roll)}</td><td>${esc(s.course)}</td><td>${esc(s.semester)}</td><td>${esc(s.username)}</td><td><button class="button button-small button-quiet" data-action="delete-student" data-id="${esc(s.id)}">Remove</button></td></tr>`).join("")}</tbody></table></div></section>`;
}
function adminAttendance() {
  return `<div class="portal-title"><div><h1>Attendance management</h1><p>Record sample attendance or import CSV. Updates are local only.</p></div></div><section class="box"><form id="attendance-form" class="form-grid"><div class="field"><label for="att-roll">Student roll number</label><select id="att-roll">${state.students.map(s=>`<option value="${esc(s.roll)}">${esc(s.roll)} · ${esc(s.name)}</option>`).join("")}</select></div><div class="field"><label for="att-code">Subject</label><select id="att-code">${state.syllabus.map(s=>`<option value="${esc(s.code)}" data-course="${esc(s.course)}" data-subject="${esc(s.subject)}">${esc(s.code)} · ${esc(s.subject)}</option>`).join("")}</select></div><div class="field"><label for="att-present">Mark</label><select id="att-present"><option value="present">Present</option><option value="absent">Absent</option></select></div><div class="span-2"><button class="button button-small">Record one sample class</button></div></form>${uploadBox("Import attendance register","roll,code,present"," .csv","attendance-csv")}</section><section class="box"><h3>Attendance records</h3><div class="table-wrap"><table class="data-table"><thead><tr><th>Roll</th><th>Course</th><th>Subject</th><th>Attended</th><th>Total</th><th>Rate</th></tr></thead><tbody>${state.attendance.map(a=>`<tr><td>${esc(a.roll)}</td><td>${esc(a.course)}</td><td>${esc(a.subject)} <small class="cell-sub">${esc(a.code)}</small></td><td>${a.attended}</td><td>${a.total}</td><td>${pct(a.attended,a.total)}%</td></tr>`).join("")}</tbody></table></div></section>`;
}
function adminFees() {
  return `<div class="portal-title"><div><h1>Fee details</h1><p>Manage sample student fee entries. Payment collection is not connected.</p></div></div><section class="box"><form id="fees-form" class="form-grid"><div class="field"><label for="fee-roll">Student roll number</label><select id="fee-roll">${state.students.map(s=>`<option>${esc(s.roll)}</option>`).join("")}</select></div>${adminFormField("Fee item","fee-item","Semester fee")} ${adminFormField("Amount (₹)","fee-amount","1000","number")} ${adminFormField("Due date","fee-due","30 Nov 2026")}<div class="field"><label for="fee-status">Status</label><select id="fee-status"><option>Due</option><option>Paid</option></select></div><div class="span-2"><button class="button button-small">Add fee detail</button></div></form>${uploadBox("Import fee details","roll,item,amount,due,status",".csv","fees-csv")}</section><section class="box"><h3>Fee ledger</h3>${simpleTable(["Roll","Fee item","Amount","Due date","Status"],state.fees,f=>[f.roll,f.item,money(f.amount),f.due,f.status])}</section>`;
}
function adminResults() {
  return `<div class="portal-title"><div><h1>Results management</h1><p>Add sample marks or import a results CSV file.</p></div></div><section class="box"><form id="result-form" class="form-grid"><div class="field"><label for="result-roll">Student roll number</label><select id="result-roll">${state.students.map(s=>`<option>${esc(s.roll)}</option>`).join("")}</select></div>${adminFormField("Course","result-course","B.Tech CSE")} ${adminFormField("Term","result-term","Semester 3")} ${adminFormField("Subject","result-subject","Data Structures")} ${adminFormField("Marks","result-marks","80","number")} ${adminFormField("Maximum marks","result-max","100","number")} ${adminFormField("Grade","result-grade","A")}<div class="span-2"><button class="button button-small">Add result</button></div></form>${uploadBox("Import results","roll,course,term,subject,marks,max,grade",".csv","results-csv")}</section><section class="box"><h3>Sample result entries</h3>${simpleTable(["Roll","Course","Term","Subject","Marks","Grade"],state.results,r=>[r.roll,r.course,r.term,r.subject,`${r.marks}/${r.max}`,r.grade])}</section>`;
}
function simpleTable(headers,rows,rowValues) {
  return `<div class="table-wrap"><table class="data-table"><thead><tr>${headers.map(h=>`<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map(row=>`<tr>${rowValues(row).map(value=>`<td>${esc(value)}</td>`).join("")}</tr>`).join("")||`<tr><td colspan="${headers.length}">No entries added.</td></tr>`}</tbody></table></div>`;
}
function adminUsers() {
  return `<div class="portal-title"><div><h1>Manage users</h1><p>View local prototype roles and add sample user entries.</p></div></div><section class="box"><form id="user-form" class="form-grid">${adminFormField("Username","user-name","faculty-demo")}<div class="field"><label for="user-role">Role</label><select id="user-role"><option>Student</option><option>Faculty</option><option>Administrator</option></select></div><div class="span-2"><button class="button button-small">Add user entry</button></div></form></section><section class="box"><h3>Local user directory</h3><div class="stack">${state.users.map(user=>`<div class="row-card"><span><b>${esc(user.username)}</b><small>${esc(user.role)} · ${esc(user.status)}</small></span><div class="user-actions"><button class="button button-small button-quiet" data-action="toggle-user" data-id="${esc(user.id)}">${user.status==="Active"?"Disable":"Enable"}</button><button class="button button-small button-quiet" data-action="delete-user" data-id="${esc(user.id)}">Remove</button></div></div>`).join("")}</div><p class="admin-warning">Directory actions do not create accounts, change mock credentials, or secure the browser-only login.</p></section>`;
}
function renderAdminPage() {
  const pages={overview:adminOverview,notices:adminNotices,gallery:adminGallery,courses:adminCourses,syllabus:adminSyllabus,timetable:adminTimetable,notes:adminNotes,students:adminStudents,attendance:adminAttendance,fees:adminFees,results:adminResults,users:adminUsers};
  return (pages[portalPage]||adminOverview)();
}

function addNotice(event) {
  event.preventDefault();
  state.notices.unshift({
    id:`nt-${Date.now()}`,title:$("#new-notice-title").value.trim(),department:$("#new-notice-dept").value,
    category:$("#new-notice-category").value,body:$("#new-notice-body").value.trim(),
    author:"Administrator · prototype",date:new Date().toISOString().slice(0,10)
  });
  save();notify("Sample notice published on this device.");renderPortal();
}
function addCourse(event) {
  event.preventDefault();
  const short=$("#course-short").value.trim();
  state.courses.push({id:`course-${Date.now()}`,name:$("#course-name").value.trim(),short,department:$("#course-dept").value.trim(),duration:$("#course-duration").value.trim(),seats:Number($("#course-seats").value)||0,summary:$("#course-summary").value.trim()});
  save();notify("Sample course added.");renderPortal();
}
function addSyllabus(event) {
  event.preventDefault();
  state.syllabus.push({id:`sy-${Date.now()}`,course:$("#syllabus-course").value,semester:$("#syllabus-semester").value.trim(),subject:$("#syllabus-subject").value.trim(),code:$("#syllabus-code").value.trim().toUpperCase(),units:Number($("#syllabus-units").value)||1,summary:$("#syllabus-summary").value.trim()});
  save();notify("Syllabus entry added.");renderPortal();
}
function addTimetable(event) {
  event.preventDefault();
  state.timetable.push({id:`tt-${Date.now()}`,course:$("#tt-course").value,day:$("#tt-day").value,time:$("#tt-time").value,subject:$("#tt-subject").value.trim(),code:$("#tt-code").value.trim().toUpperCase(),room:$("#tt-room").value.trim(),faculty:$("#tt-faculty").value.trim()});
  save();notify("Sample timetable class added.");renderPortal();
}
async function addNotes(event) {
  event.preventDefault();
  const file=$("#notes-file").files[0];
  let body=$("#notes-body").value.trim();
  if (file) {
    if(file.size>80*1024){notify("Choose a text file smaller than 80 KB.");return;}
    body=`${body}${body?"\n\n":""}${await file.text()}`;
  }
  state.notes.unshift({id:`note-${Date.now()}`,course:$("#notes-course").value,subject:$("#notes-subject").value.trim(),title:$("#notes-title").value.trim(),body,author:"Faculty · prototype",date:new Date().toISOString().slice(0,10)});
  save();notify("Study notes published.");renderPortal();
}
async function fileAsDataURL(file,maxBytes) {
  if(!file) return "";
  if(file.size>maxBytes) throw new Error(`Choose an image smaller than ${Math.round(maxBytes/1024)} KB.`);
  if(!["image/jpeg","image/png","image/webp"].includes(file.type)) throw new Error("Use a JPEG, PNG, or WebP image.");
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onerror=()=>reject(new Error("The selected image could not be read."));
    reader.onload=()=>resolve(String(reader.result));
    reader.readAsDataURL(file);
  });
}
async function addGalleryImage(event) {
  event.preventDefault();
  try {
    const image=await fileAsDataURL($("#gallery-file").files[0],350*1024);
    state.gallery.unshift({id:`gallery-${Date.now()}`,title:$("#gallery-title").value.trim(),date:$("#gallery-date").value.trim(),image});
    save();notify("Sample gallery image added to this device.");renderPortal();
  } catch(error) { notify(error.message); }
}
async function addStudent(event) {
  event.preventDefault();
  try {
    const image=await fileAsDataURL($("#student-photo").files[0],300*1024);
    const roll=$("#student-roll").value.trim().toUpperCase();
    if(state.students.some(s=>s.roll.toUpperCase()===roll)){notify("That sample roll number already exists.");return;}
    const student={id:`student-${Date.now()}`,name:$("#student-name").value.trim(),username:$("#student-username").value.trim(),roll,course:$("#student-course").value,semester:$("#student-semester").value.trim(),email:$("#student-email").value.trim()||"not-provided@example.invalid",phone:$("#student-phone").value.trim()||"Not provided",photo:image};
    state.students.push(student);
    state.users.push({id:`user-${Date.now()}`,username:student.username,role:"Student",status:"Active"});
    for(const subject of state.syllabus.filter(item=>item.course===student.course)){
      state.attendance.push({id:`attendance-${Date.now()}-${subject.code}`,roll,course:student.course,code:subject.code,subject:subject.subject,attended:0,total:0});
    }
    save();notify("Sample student profile created.");renderPortal();
  } catch(error) { notify(error.message); }
}
function addOneAttendance(event) {
  event.preventDefault();
  const student=state.students.find(s=>s.roll===$("#att-roll").value);
  const option=$("#att-code").selectedOptions[0];
  if(!student||!option){notify("Choose a student and a subject.");return;}
  if(student.course!==option.dataset.course){notify("That subject does not match the selected student's course.");return;}
  let row=state.attendance.find(item=>item.roll===student.roll&&item.code===option.value);
  if(!row){row={id:`a-${Date.now()}`,roll:student.roll,course:student.course,code:option.value,subject:option.dataset.subject,attended:0,total:0};state.attendance.push(row);}
  row.total+=1;if($("#att-present").value==="present")row.attended+=1;
  save();notify("Sample attendance updated.");renderPortal();
}
function addFee(event) {
  event.preventDefault();
  const amount=Number($("#fee-amount").value);
  if(!Number.isFinite(amount)||amount<0){notify("Enter a valid sample fee amount.");return;}
  state.fees.unshift({id:`fee-${Date.now()}`,roll:$("#fee-roll").value,item:$("#fee-item").value.trim(),amount,due:$("#fee-due").value.trim(),status:$("#fee-status").value});
  save();notify("Sample fee detail added.");renderPortal();
}
function addResult(event) {
  event.preventDefault();
  const marks=Number($("#result-marks").value),max=Number($("#result-max").value);
  if(!Number.isFinite(marks)||!Number.isFinite(max)||max<=0||marks<0||marks>max){notify("Marks must be between 0 and the maximum.");return;}
  state.results.unshift({id:`result-${Date.now()}`,roll:$("#result-roll").value,course:$("#result-course").value.trim(),term:$("#result-term").value.trim(),subject:$("#result-subject").value.trim(),marks,max,grade:$("#result-grade").value.trim()});
  save();notify("Sample result added.");renderPortal();
}
function addUser(event) {
  event.preventDefault();
  const username=$("#user-name").value.trim();
  if(state.users.some(u=>u.username.toLowerCase()===username.toLowerCase())){notify("That prototype username already exists.");return;}
  state.users.push({id:`user-${Date.now()}`,username,role:$("#user-role").value,status:"Active"});
  save();notify("User directory entry added; no account was created.");renderPortal();
}
function parseCSV(text) {
  const rows=[];let row=[],value="",quoted=false;
  for(let index=0;index<text.length;index++){
    const char=text[index];
    if(char==='"'&&quoted&&text[index+1]==='"'){value+='"';index++;}
    else if(char==='"'){quoted=!quoted;}
    else if(char===","&&!quoted){row.push(value.trim());value="";}
    else if((char==="\n"||char==="\r")&&!quoted){
      if(char==="\r"&&text[index+1]==="\n")index++;
      row.push(value.trim());if(row.some(cell=>cell!==""))rows.push(row);row=[];value="";
    } else value+=char;
  }
  row.push(value.trim());if(row.some(cell=>cell!==""))rows.push(row);
  if(!rows.length)return [];
  return rows.slice(1).map(cells=>Object.fromEntries(rows[0].map((header,index)=>[header.trim().toLowerCase(),cells[index]||""])));
}
async function importCSV(inputId,handler) {
  const input=$(`#${inputId}`),status=$(`#${inputId}-status`),file=input?.files?.[0];
  if(!file)return;
  if(file.size>500*1024){status.textContent="File is over the 500 KB limit.";return;}
  try{
    const rows=parseCSV(await file.text());
    const count=handler(rows);
    save();status.textContent=`Imported ${count} valid sample row(s).`;notify(status.textContent);renderPortal();
  }catch(error){console.error("Sample CSV import failed.",error);status.textContent=error.message||"Could not import this CSV. Check the required column names.";}
}
function importStudents(rows) {
  let count=0;
  for(const row of rows){
    if(!row.name||!row.username||!row.roll||!row.course)continue;
    const roll=row.roll.toUpperCase();if(state.students.some(s=>s.roll===roll))continue;
    const student={id:`student-${Date.now()}-${count}`,name:row.name,username:row.username,roll,course:row.course,semester:row.semester||"Semester 3",email:row.email||"not-provided@example.invalid",phone:row.phone||"Not provided",photo:""};
    state.students.push(student);state.users.push({id:`user-${Date.now()}-${count}`,username:student.username,role:"Student",status:"Active"});
    for(const item of state.syllabus.filter(s=>s.course===student.course))state.attendance.push({id:`att-${Date.now()}-${count}-${item.code}`,roll,course:student.course,code:item.code,subject:item.subject,attended:0,total:0});
    count++;
  }return count;
}
function importAttendance(rows) {
  let count=0;
  for(const row of rows){
    const roll=(row.roll||"").toUpperCase(),code=(row.code||"").toUpperCase();
    const student=state.students.find(s=>s.roll===roll),subject=state.syllabus.find(s=>s.code.toUpperCase()===code);
    if(!student||!subject||student.course!==subject.course)continue;
    let entry=state.attendance.find(a=>a.roll===roll&&a.code===code);
    if(!entry){entry={id:`att-${Date.now()}-${count}`,roll,course:student.course,code,subject:subject.subject,attended:0,total:0};state.attendance.push(entry);}
    entry.total++;if(["present","p","1","yes","true"].includes((row.present||"").toLowerCase()))entry.attended++;count++;
  }return count;
}
function importFees(rows) {
  let count=0;for(const row of rows){
    const roll=(row.roll||"").toUpperCase(),amount=Number(row.amount);
    if(!state.students.some(s=>s.roll===roll)||!row.item||!Number.isFinite(amount)||amount<0)continue;
    state.fees.push({id:`fee-${Date.now()}-${count}`,roll,item:row.item,amount,due:row.due||"Not specified",status:/paid/i.test(row.status||"")?"Paid":"Due"});count++;
  }return count;
}
function importResults(rows) {
  let count=0;for(const row of rows){
    const roll=(row.roll||"").toUpperCase(),marks=Number(row.marks),max=Number(row.max);
    if(!state.students.some(s=>s.roll===roll)||!row.subject||!Number.isFinite(marks)||!Number.isFinite(max)||max<=0||marks<0||marks>max)continue;
    state.results.push({id:`result-${Date.now()}-${count}`,roll,course:row.course||"",term:row.term||"",subject:row.subject,marks,max,grade:row.grade||"—"});count++;
  }return count;
}
function importTimetable(rows) {
  let count=0;for(const row of rows){
    const day=days.find(d=>d.toLowerCase()===String(row.day).toLowerCase());
    if(!day||!row.time||!row.course||!row.subject||!row.code)continue;
    state.timetable.push({id:`tt-${Date.now()}-${count}`,day,time:row.time,course:row.course,subject:row.subject,code:row.code,room:row.room||"Not specified",faculty:row.faculty||"Faculty"});count++;
  }return count;
}

function bindPortalActions() {
  $$("[data-page]").filter(button=>button.classList.contains("portal-link")||button.closest(".portal-content")||button.closest(".portal-bottom-nav")).forEach(button=>button.addEventListener("click",()=>setPortalPage(button.dataset.page)));
  $$('[data-action="theme"]').forEach(button=>button.addEventListener("click",toggleTheme));
  const handlers={
    "admin-notice-form":addNotice,"course-form":addCourse,"syllabus-form":addSyllabus,
    "timetable-form":addTimetable,"notes-form":addNotes,"student-form":addStudent,
    "attendance-form":addOneAttendance,"fees-form":addFee,"result-form":addResult,"user-form":addUser
  };
  for(const [id,handler] of Object.entries(handlers)){$(`#${id}`)?.addEventListener("submit",handler);}
  $("#gallery-form")?.addEventListener("submit",addGalleryImage);
  $("#profile-photo-form")?.addEventListener("submit",updateProfilePhoto);
  $("#student-day-filter")?.addEventListener("change",event=>{
    const student=currentStudent(),day=event.target.value;
    const rows=state.timetable.filter(item=>item.course===student.course&&(day==="all"||item.day===day));
    $("#student-timetable-table").innerHTML=timetableTable(rows);
  });
  $("#timetable-csv")?.addEventListener("change",()=>importCSV("timetable-csv",importTimetable));
  $("#students-csv")?.addEventListener("change",()=>importCSV("students-csv",importStudents));
  $("#attendance-csv")?.addEventListener("change",()=>importCSV("attendance-csv",importAttendance));
  $("#fees-csv")?.addEventListener("change",()=>importCSV("fees-csv",importFees));
  $("#results-csv")?.addEventListener("change",()=>importCSV("results-csv",importResults));
  $$('[data-action="delete-notice"]').forEach(button=>button.addEventListener("click",()=>removeById("notices",button.dataset.id)));
  $$('[data-action="delete-gallery"]').forEach(button=>button.addEventListener("click",()=>removeById("gallery",button.dataset.id)));
  $$('[data-action="delete-course"]').forEach(button=>button.addEventListener("click",()=>removeById("courses",button.dataset.id)));
  $$('[data-action="delete-syllabus"]').forEach(button=>button.addEventListener("click",()=>removeById("syllabus",button.dataset.id)));
  $$('[data-action="delete-note"]').forEach(button=>button.addEventListener("click",()=>removeById("notes",button.dataset.id)));
  $$('[data-action="delete-student"]').forEach(button=>button.addEventListener("click",()=>removeStudent(button.dataset.id)));
  $$('[data-action="toggle-user"]').forEach(button=>button.addEventListener("click",()=>toggleUser(button.dataset.id)));
  $$('[data-action="delete-user"]').forEach(button=>button.addEventListener("click",()=>removeUser(button.dataset.id)));
  $$('[data-action="assignment-submit"]').forEach(button=>button.addEventListener("click",()=>notify("Sample assignment details: check with your course faculty for official instructions.")));
}
function removeById(collection,id) {
  state[collection]=state[collection].filter(item=>item.id!==id);
  save();notify("Sample item removed from this device.");renderPortal();
}
function removeStudent(id) {
  const student=state.students.find(s=>s.id===id);
  if(!student)return;
  if(student.username===CREDENTIALS.student.username){notify("The active prototype student account cannot be removed.");return;}
  state.students=state.students.filter(s=>s.id!==id);
  state.attendance=state.attendance.filter(row=>row.roll!==student.roll);
  state.fees=state.fees.filter(row=>row.roll!==student.roll);
  state.results=state.results.filter(row=>row.roll!==student.roll);
  state.users=state.users.filter(user=>user.username!==student.username);
  save();notify("Sample student and linked sample records removed.");renderPortal();
}
async function updateProfilePhoto(event) {
  event.preventDefault();
  const student=currentStudent();
  try {
    const image=await fileAsDataURL($("#profile-photo-input").files[0],300*1024);
    if(!image){notify("Choose a photo first.");return;}
    student.photo=image;save();notify("Profile photo updated on this device.");renderPortal();
  } catch(error){notify(error.message);}
}
function toggleUser(id) {
  const user=state.users.find(item=>item.id===id);
  if(!user)return;
  if(user.username===CREDENTIALS.admin.username||user.username===CREDENTIALS.student.username){notify("Built-in prototype logins cannot be disabled.");return;}
  user.status=user.status==="Active"?"Disabled":"Active";
  save();renderPortal();notify(`User entry ${user.status.toLowerCase()}.`);
}
function removeUser(id) {
  const user=state.users.find(item=>item.id===id);
  if(!user)return;
  if(user.username===CREDENTIALS.admin.username||user.username===CREDENTIALS.student.username){notify("Built-in prototype logins cannot be removed.");return;}
  state.users=state.users.filter(item=>item.id!==id);
  save();renderPortal();notify("User directory entry removed.");
}

function boot() {
  if(state.session?.role==="student"&&!state.students.some(s=>s.username.toLowerCase()===state.session.username.toLowerCase()))state.session=null;
  if(state.session?.role==="admin"&&state.session.username.toLowerCase()!==CREDENTIALS.admin.username.toLowerCase())state.session=null;
  if(state.session)renderPortal();else renderLanding();
  $("#modal-close").addEventListener("click",closeModal);
  $("#modal-backdrop").addEventListener("click",event=>{if(event.target===event.currentTarget)closeModal();});
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closeModal();});
  window.addEventListener("hashchange",()=>{$("#site-nav")?.classList.remove("open");});
  $("#header-login").addEventListener("click",openLogin);
  $("#theme-toggle").addEventListener("click",toggleTheme);
  $("#accent-picker").addEventListener("change",setAccent);
  $("#mobile-accent-picker").addEventListener("change",setAccent);
  $("#notification-demo").addEventListener("click",showDemoNotification);
  $$('[data-action="notification"]').forEach(button=>button.addEventListener("click",showDemoNotification));
  window.addEventListener("online",updateConnectionStatus);
  window.addEventListener("offline",updateConnectionStatus);
  applyPreferences();
  updateConnectionStatus();
  if((location.protocol==="https:"||location.hostname==="localhost"||location.hostname==="127.0.0.1")&&"serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").catch(error=>console.warn("Offline app files could not be registered.",error));
  }
  function setAccent(event) {
    preferences.accent=event.target.value;
    savePreferences();applyPreferences();
  }
}
function closeModal() { $("#modal-backdrop").hidden=true;$("#modal-content").replaceChildren(); }
boot();
