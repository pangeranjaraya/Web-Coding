const $=s=>document.querySelector(s);
const app=$("#app");
const STORE="codemaster-v2";
const saved=JSON.parse(localStorage.getItem(STORE)||"{}");
const state={page:"home",course:"HTML",lesson:0,progress:saved.progress||{},quiz:saved.quiz||{},location:null,prayer:null};

function save(){localStorage.setItem(STORE,JSON.stringify({progress:state.progress,quiz:state.quiz}));}
function toast(t){const x=$("#toast");x.textContent=t;x.classList.add("show");setTimeout(()=>x.classList.remove("show"),2600);}
function key(){return `${state.course}:${state.lesson}`;}
function go(p){state.page=p;render();closeMenu();scrollTo({top:0,behavior:"smooth"});}
function course(n){state.course=n;state.lesson=0;state.page="course";render();scrollTo({top:0,behavior:"smooth"});}
function lesson(i){state.lesson=i;state.page="course";render();scrollTo({top:0,behavior:"smooth"});}
function done(){state.progress[key()]=true;save();render();toast("Bab selesai ✓");}
function esc(s){return String(s).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");}

function render(){
  const titles={
    home:["CodeMaster Academy","Belajar sampai paham ke akar."],
    features:["Feature","Sistem belajar interaktif."],
    courses:["Pembelajaran","Pilih jalur dan mulai dari bab pertama."],
    security:["Cyber Security","Belajar security secara etis dan defensif."],
    playground:["Playground","Eksperimen dengan HTML, CSS, dan JavaScript."],
    progress:["Progress","Pantau perjalanan belajar kamu."],
    contact:["Contact","Hubungi pengelola platform."],
    course:[`Belajar ${state.course}`,COURSES[state.course].level]
  };
  const t=titles[state.page]||titles.home;
  $("#pageTitle").textContent=t[0];$("#pageSubtitle").textContent=t[1];
  document.querySelectorAll(".nav-item[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===state.page));
  ({home:home,features:features,courses:coursesPage,security:security,playground:playground,progress:progress,contact:contact,course:coursePage}[state.page]||home)();
  updateReading();
}
function home(){
  const total=totalLessons(),complete=Object.keys(state.progress).length;
  app.innerHTML=`<section class="hero">
    <div class="hero-copy"><span class="kicker">PROGRAMMING × CYBER SECURITY</span><h1>Bangun skill.<br><span>Pahami akarnya.</span></h1>
    <p>CodeMaster V2 adalah buku coding interaktif. Baca konsep, lihat contoh, ubah kode, jawab quiz, kerjakan latihan, lalu lanjut ke bab berikutnya.</p>
    <div class="actions"><button class="btn primary" id="start">Mulai dari HTML →</button><button class="btn" id="all">Jelajahi semua track</button></div></div>
    <div class="hero-art"><img src="./assets/images/codemaster-dashboard.png" alt="Ilustrasi dashboard CodeMaster"><div class="floating">⚡ LIVE LEARNING</div></div>
  </section>
  <section class="section stats"><div class="card stat"><strong>${Object.keys(COURSES).length}</strong><span>Learning Tracks</span></div><div class="card stat"><strong>${total}</strong><span>Bab terstruktur</span></div><div class="card stat"><strong>${complete}</strong><span>Bab selesai</span></div><div class="card stat"><strong>${Math.round(complete/Math.max(total,1)*100)}%</strong><span>Progress total</span></div></section>
  ${prayerCard()}
  <section class="section"><div class="section-head"><div><span class="kicker">Library</span><h2>Pilih teknologi</h2></div><button class="btn" id="all2">Lihat semua</button></div><div class="grid">${Object.keys(COURSES).map(card).join("")}</div></section>
  <section class="section roadmap card"><div><span class="kicker">Roadmap</span><h2>Urutan belajar yang disarankan</h2><p class="muted">Mulai dengan HTML → CSS → JavaScript → Git → Backend/Database → Linux → Cyber Security. Setelah dasar kuat, pilih spesialisasi.</p></div><div class="roadmap-line">${["HTML","CSS","JavaScript","Python","SQL","Cyber Security"].map((x,i)=>`<button data-course="${x}"><b>${i+1}</b>${x}</button>`).join("")}</div></section>`;
  $("#start").onclick=()=>course("HTML");$("#all").onclick=()=>go("courses");$("#all2").onclick=()=>go("courses");
  bindCourse();
  bindPrayer();
}
function card(n){const c=COURSES[n],d=c.lessons.filter((_,i)=>state.progress[`${n}:${i}`]).length;return `<button class="card tech-card" data-course="${esc(n)}"><div class="tech-icon">${c.icon}</div><h3>${esc(n)}</h3><p>${esc(c.description)}</p><div class="mini-progress"><i style="width:${d/c.lessons.length*100}%"></i></div><small>${d}/${c.lessons.length} bab • ${c.level}</small></button>`}
function bindCourse(){document.querySelectorAll("[data-course]").forEach(x=>x.onclick=()=>course(x.dataset.course));}
function features(){
  const data=[["📖","Buku interaktif","Setiap track dibagi menjadi bab, tujuan, penjelasan, kode, latihan, quiz dan project."],["🧪","Praktik langsung","Kode contoh dapat diedit. HTML/CSS/JS dapat dijalankan langsung di browser."],["🧠","Belajar konsep","Materi menekankan alasan dan cara kerja, bukan sekadar menghafal syntax."],["🏆","Quiz & progress","Quiz dan status bab tersimpan di browser."],["🕌","Waktu shalat","Jadwal dihitung berdasarkan koordinat dan tanggal."],["📱","Responsive","Nyaman dibaca di HP, tablet, laptop dan desktop."],["🛡️","Security track","Fundamental, web security, hardening, logging dan ethical lab."],["🚀","Siap dikembangkan","Struktur data bisa dipindahkan ke API/Markdown saat materi makin besar."]];
  app.innerHTML=`<section class="section"><span class="kicker">Features</span><h2>Belajar seperti buku, berlatih seperti developer</h2><div class="feature-grid">${data.map(x=>`<article class="card feature-card"><div class="tech-icon">${x[0]}</div><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("")}</div></section>`;
}
function coursesPage(){app.innerHTML=`<section class="section"><span class="kicker">Learning Library</span><h2>Semua learning track</h2><p class="muted">Pilih satu. Selesaikan bab secara berurutan. Setelah paham, ulangi dari project.</p><div class="grid">${Object.keys(COURSES).map(card).join("")}</div></section>`;bindCourse();}
function security(){course("Cyber Security");}
function playground(){
  app.innerHTML=`<section class="section"><span class="kicker">BROWSER IDE</span><h2>Playground</h2><p class="muted">Sandbox ini fokus pada eksperimen frontend. Jangan memasukkan password, API key, atau data rahasia.</p>
  <div class="play-grid"><div class="card"><div class="code-toolbar"><strong>index.html</strong><button class="btn" id="run">▶ Run</button></div><textarea id="editor" class="editor">${esc(`<!doctype html>
<html>
<head>
<style>
body{font-family:Arial;padding:30px;background:#0b1020;color:white}
button{padding:10px 14px;border:0;border-radius:8px}
</style>
</head>
<body>
<h1 id="title">Hello CodeMaster!</h1>
<button onclick="document.querySelector('#title').textContent='Berhasil 🎉'">Klik saya</button>
</body>
</html>`)}</textarea></div><div class="card"><h3>Output</h3><div id="output" class="output"></div></div></div></section>`;
  $("#run").onclick=runPlay;runPlay();
}
function runPlay(){
  const iframe=document.createElement("iframe");iframe.className="preview";iframe.sandbox="allow-scripts";iframe.srcdoc=$("#editor").value;$("#output").innerHTML="";$("#output").appendChild(iframe);
}
function progress(){
  const total=totalLessons(),done=Object.keys(state.progress).length;
  app.innerHTML=`<section class="section"><span class="kicker">Your Journey</span><h2>Progress belajar</h2><div class="card big-progress"><div class="progress"><i style="width:${done/Math.max(total,1)*100}%"></i></div><strong>${done}/${total} bab</strong><span>${Math.round(done/Math.max(total,1)*100)}% selesai</span></div></section><section class="section"><div class="grid">${Object.keys(COURSES).map(n=>{const c=COURSES[n],d=c.lessons.filter((_,i)=>state.progress[`${n}:${i}`]).length;return `<div class="card"><h3>${c.icon} ${n}</h3><div class="progress"><i style="width:${d/c.lessons.length*100}%"></i></div><p class="muted">${d}/${c.lessons.length} bab selesai</p></div>`}).join("")}</div></section>`;
}
function contact(){
  app.innerHTML=`<section class="section"><span class="kicker">CONTACT</span><h2>Hubungi CodeMaster</h2><div class="card form"><input id="name" placeholder="Nama"><input id="email" type="email" placeholder="Email"><textarea id="message" placeholder="Pesan"></textarea><button class="btn primary" id="send">Kirim pesan</button><p class="muted">Form demo. Hubungkan ke provider email/backend milikmu untuk produksi.</p></div></section>`;
  $("#send").onclick=()=>toast("Form demo aktif. Backend contact belum dihubungkan.");
}
function coursePage(){
  const c=COURSES[state.course],l=c.lessons[state.lesson],done=!!state.progress[key()];
  const completed=c.lessons.filter((_,i)=>state.progress[`${state.course}:${i}`]).length;
  app.innerHTML=`<section class="course-head section"><div><span class="kicker">${c.icon} ${esc(state.course)}</span><h1 class="course-title">${esc(l.title)}</h1><p class="muted">Bab ${state.lesson+1} dari ${c.lessons.length} • ${Math.round(completed/c.lessons.length*100)}% selesai</p></div><button class="btn" id="back">← Semua track</button></section>
  <div class="progress global-progress"><i style="width:${(state.lesson+1)/c.lessons.length*100}%"></i></div>
  <section class="section course-layout">
    <aside class="card lesson-sidebar"><div class="sidebar-title">Daftar Bab</div>${c.lessons.map((x,i)=>`<button class="lesson-btn ${i===state.lesson?"active":""}" data-lesson="${i}"><span>${state.progress[`${state.course}:${i}`]?"✓":"•"}</span>${i+1}. ${esc(x.title)}</button>`).join("")}</aside>
    <article class="card lesson-body">
      <div class="lesson-meta"><span class="badge">BAB ${state.lesson+1}</span><span class="badge">${c.level}</span></div>
      <h2>${esc(l.title)}</h2>
      <p class="lead">${esc(l.concept)}</p>
      <h3>Kenapa ini penting?</h3><p>${esc(l.why)}</p>
      <div class="callout"><strong>🧠 Cara berpikir</strong><p>Jangan hanya bertanya “syntax-nya apa?”. Tanya juga: <b>masalah apa yang diselesaikan, data apa yang masuk, proses apa yang terjadi, dan hasil apa yang keluar?</b></p></div>
      <h3>Contoh kode</h3><div class="codebox"><div class="code-head">example</div><pre>${esc(l.code)}</pre></div>
      <h3>Langkah memahami</h3><ol>${l.steps.map(s=>`<li>${esc(s)}</li>`).join("")}</ol>
      <h3>💡 Tips</h3><p>${esc(l.tip)}</p>
      <h3>🧪 Latihan</h3><div class="exercise"><p>${esc(l.exercise)}</p><button class="btn" id="openPlay">Buka Playground →</button></div>
      <h3>📝 Quiz</h3><div class="quiz"><p><b>${esc(l.quiz.q)}</b></p>${l.quiz.opts.map((o,i)=>`<button class="quiz-option" data-answer="${i}">${String.fromCharCode(65+i)}. ${esc(o)}</button>`).join("")}<div id="quizResult"></div></div>
      <div class="lesson-actions"><button class="btn primary" id="complete">${done?"✓ Sudah selesai":"Tandai bab selesai"}</button>${state.lesson<c.lessons.length-1?`<button class="btn" id="next">Bab berikutnya →</button>`:"<button class=\"btn\" id=\"finish\">🏆 Selesaikan track</button>"}</div>
    </article>
    <aside class="card runner"><div class="runner-head"><h3>⚡ Live Run</h3><span class="badge">Browser</span></div><textarea id="lessonEditor" class="editor">${esc(l.code)}</textarea><button class="btn primary" id="lessonRun">▶ Run</button><div id="lessonOutput" class="output"></div></aside>
  </section>`;
  document.querySelectorAll("[data-lesson]").forEach(x=>x.onclick=()=>lesson(Number(x.dataset.lesson)));
  $("#back").onclick=()=>go("courses");$("#complete").onclick=done;
  if($("#next"))$("#next").onclick=()=>{state.lesson++;render();};
  if($("#finish"))$("#finish").onclick=()=>{toast("Track selesai! 🏆");go("progress");};
  $("#openPlay").onclick=()=>go("playground");
  document.querySelectorAll(".quiz-option").forEach(x=>x.onclick=()=>answerQuiz(Number(x.dataset.answer),l.quiz.answer));
  $("#lessonRun").onclick=runLesson;
}
function answerQuiz(selected,correct){
  const ok=selected===correct;
  state.quiz[key()]=ok;save();
  $("#quizResult").innerHTML=ok?`<div class="quiz-good">✓ Benar! Kamu memahami konsep bab ini.</div>`:`<div class="quiz-bad">✕ Belum tepat. Baca ulang bagian konsep lalu coba lagi.</div>`;
}
function runLesson(){
  const code=$("#lessonEditor").value,out=$("#lessonOutput");
  if(["HTML","CSS","JavaScript"].includes(state.course)){
    const iframe=document.createElement("iframe");iframe.className="preview";iframe.sandbox="allow-scripts";iframe.srcdoc=code;out.innerHTML="";out.appendChild(iframe);
  }else out.innerHTML=`<div class="runtime-note"><b>Runtime ${esc(state.course)}</b><p>Browser playground saat ini menjalankan HTML/CSS/JavaScript. Untuk ${esc(state.course)}, gunakan runtime bahasa terkait. Kode contoh tetap dapat kamu salin dan pelajari.</p></div>`;
}
function totalLessons(){return Object.values(COURSES).reduce((a,c)=>a+c.lessons.length,0);}
function prayerCard(){
  const t=state.prayer?.times||{};
  return `<section class="section card prayer-card"><div><span class="kicker">WAKTU IBADAH</span><h2>🕌 Jadwal Shalat</h2><p class="muted">${state.prayer?.date||"Mengambil jadwal..."}</p><p class="muted">📍 ${state.location?.name||"Lokasi belum diberikan"}</p></div><div class="prayer-times">${[["Fajr","Subuh"],["Dhuhr","Dzuhur"],["Asr","Ashar"],["Maghrib","Maghrib"],["Isha","Isya"]].map(x=>`<div class="prayer-time"><small>${x[1]}</small><strong>${t[x[0]]||"--:--"}</strong></div>`).join("")}</div><div><strong id="nextPrayer">Mendeteksi...</strong><p class="muted">Notifikasi dan audio membutuhkan izin browser.</p><button class="btn" id="notify">🔔 Aktifkan notifikasi</button><button class="btn" id="testAudio">🔊 Tes audio</button></div></section>`;
}
function bindPrayer(){$("#notify")?.addEventListener("click",enableNotification);$("#testAudio")?.addEventListener("click",playAdhan);updateNextPrayer();}
function updateNextPrayer(){
  if(!state.prayer?.times||!$("#nextPrayer"))return;
  const now=new Date(),mins=now.getHours()*60+now.getMinutes();
  const names=[["Fajr","Subuh"],["Dhuhr","Dzuhur"],["Asr","Ashar"],["Maghrib","Maghrib"],["Isha","Isya"]];
  let next=null;
  for(const [k,n] of names){const [h,m]=(state.prayer.times[k]||"00:00").split(":").map(Number);if(h*60+m>mins){next={n,t:state.prayer.times[k]};break;}}
  $("#nextPrayer").textContent=next?`Shalat berikutnya: ${next.n} ${next.t}`:"Jadwal berikutnya besok.";
}
async function enableNotification(){
  if(!("Notification" in window))return toast("Browser tidak mendukung Notification API.");
  const p=await Notification.requestPermission();toast(p==="granted"?"Notifikasi aktif ✓":"Izin notifikasi belum diberikan.");
}
function playAdhan(){const a=new Audio("./assets/audio/adhan.mp3");a.volume=.9;a.play().catch(()=>toast("Browser memblokir audio otomatis. Tekan tombol Tes Audio terlebih dahulu."));}
async function initLocation(){
  if(!navigator.geolocation){$("#locationName").textContent="Geolocation tidak tersedia";return loadPrayer();}
  navigator.geolocation.getCurrentPosition(async pos=>{
    state.location={lat:pos.coords.latitude,lon:pos.coords.longitude,name:`${pos.coords.latitude.toFixed(3)}, ${pos.coords.longitude.toFixed(3)}`};
    $("#locationName").textContent="Lokasi terdeteksi";$("#coordinates").textContent=state.location.name;$("#locationDot").style.background="var(--success)";
    await loadPrayer();
  },()=>{toast("Lokasi tidak diberikan. Memakai jadwal Jakarta sebagai fallback.");loadPrayer();},{enableHighAccuracy:true,timeout:10000,maximumAge:300000});
}
async function loadPrayer(){
  try{
    const d=new Date(), url=state.location?`./api/prayer?latitude=${state.location.lat}&longitude=${state.location.lon}`:`./api/prayer?city=Jakarta&country=Indonesia`;
    const r=await fetch(url);const j=await r.json();state.prayer={date:j.data.date.readable,times:j.data.timings};if(state.page==="home")render();else updateNextPrayer();schedulePrayer();
  }catch(e){console.warn(e);}
}
function schedulePrayer(){
  if(window._prayerTimer)return;
  window._prayerTimer=setInterval(()=>{
    if(!state.prayer?.times)return;
    const hm=new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit",hour12:false});
    const names={Fajr:"Subuh",Dhuhr:"Dzuhur",Asr:"Ashar",Maghrib:"Maghrib",Isha:"Isya"};
    for(const k in names)if(state.prayer.times[k]===hm){
      const marker=`${new Date().toDateString()}-${k}`;
      if(localStorage.getItem("adhan-"+marker)!=="1"){localStorage.setItem("adhan-"+marker,"1");notifyPrayer(names[k]);playAdhan();}
    }
  },30000);
}
function notifyPrayer(name){toast(`🕌 Waktu ${name} telah tiba`);if("Notification" in window&&Notification.permission==="granted")new Notification(`Waktu ${name}`,{body:`Waktu shalat ${name} telah tiba.`});}
function updateClock(){const d=new Date();$("#clock").textContent=d.toLocaleTimeString("id-ID",{hour12:false,timeZone:"Asia/Jakarta"})+" WIB";$("#dateText").textContent=d.toLocaleDateString("id-ID",{weekday:"long",day:"2-digit",month:"long",year:"numeric",timeZone:"Asia/Jakarta"});}
function updateReading(){window.requestAnimationFrame(()=>{const h=document.documentElement.scrollHeight-innerHeight,p= h>0?scrollY/h*100:0;$("#readingProgress").style.width=p+"%";});}
function closeMenu(){$("#sidebar").classList.remove("open");$("#mobileOverlay").classList.remove("show");}
document.querySelectorAll(".nav-item[data-page]").forEach(b=>b.onclick=()=>go(b.dataset.page));
$("#menuBtn").onclick=()=>{$("#sidebar").classList.toggle("open");$("#mobileOverlay").classList.toggle("show")};
$("#mobileOverlay").onclick=closeMenu;
$("#whatsappBtn").onclick=()=>window.open("https://wa.me/6280000000000","_blank");
$("#themeBtn").onclick=()=>document.body.classList.toggle("light");
addEventListener("scroll",updateReading,{passive:true});addEventListener("resize",updateReading);
setInterval(updateClock,1000);updateClock();initLocation();render();
