// ---------- DATA: add a project by adding one object here ----------
const CATS = ["Agentic AI", "Generative AI", "Machine Learning", "Deep Learning & Computer Vision"];
const PROJECTS = [
 {title:"Clinical Documentation & Follow-up Agent",cat:CATS[0],date:"Sep 2026",
  desc:"Converts doctor-patient consultation audio into transcripts, extracts structured clinical notes, reviews them, generates follow-up suggestions, and updates a mock EHR only after clinician approval.",
  bullets:["Human-in-the-loop approval, checkpointing and audit logging.","Runs locally with Qwen ASR and Ollama (Qwen2.5-3B)."],
  tech:["Python","Streamlit","LangGraph","LangChain","Ollama","FastAPI","SQLite","Pydantic"],gh:"https://github.com/chetansharma06/Clinical-Agent-"},
 {title:"TripMate AI",cat:CATS[0],date:"Sep 2026",
  desc:"A multi-agent travel planner built with LangGraph that turns natural-language requests into complete, budget-aware itineraries.",
  bullets:["Separate agents for flights (AviationStack), hotels (Tavily) and itinerary generation (Llama 3.3 70B on Groq).","FastAPI backend with PostgreSQL state persistence, deployed with Docker on Render."],
  tech:["Python","FastAPI","LangGraph","LangChain","Groq","PostgreSQL","Jinja2","Docker","Render"],gh:"https://github.com/chetansharma06/TripMateAI"},
 {title:"ResearchMind - Multi-Agent AI Research System",cat:CATS[0],date:"2026",
  desc:"An autonomous research assistant using four agents: Search, Reader, Writer and Critic, for web research and report generation.",
  bullets:["Tavily and BeautifulSoup for web search and source extraction.","LangChain/LCEL pipelines for LLM reasoning, report writing and automated research critique."],
  tech:["Python","LangChain","LCEL","LLMs","Tavily","BeautifulSoup","AgentExecutor"],gh:"https://github.com/chetansharma06/Research_Mind"},
 {title:"AI Video Assistant - RAG-Based Video Intelligence",cat:CATS[1],date:"2026",
  desc:"A multilingual video/audio intelligence system for transcription, content analysis and context-aware Q&A.",
  bullets:["Whisper and Sarvam AI for transcription.","RAG pipeline with LangChain, embeddings and ChromaDB; Mistral AI generates summaries, decisions and action items."],
  tech:["Python","Whisper","Sarvam AI","Mistral AI","LangChain","RAG","Hugging Face","Sentence Transformers","ChromaDB","Streamlit"],gh:"https://github.com/chetansharma06/Ai-video-assistant"},
 {title:"AI Bug & Debugging Advisor",cat:CATS[1],date:"Sep 2026",
  desc:"A Python debugging assistant that detects bugs, explains them, and gives a five-level hint ladder that guides the developer to the fix without revealing it too early.",
  bullets:["AST-based static analysis, offline LLM stub and leak-detection guardrails.","Available as a CLI and a Streamlit web app."],
  tech:["Python","ast","Ruff","Pyflakes","Radon","Streamlit","Typer","pytest","GitHub Actions"],gh:"https://github.com/chetansharma06/ai-debug-advisor"},
 {title:"Network Security - Malicious URL Detection",cat:CATS[2],date:"2025 - Present",
  desc:"An end-to-end ML pipeline for phishing and malicious URL detection covering data ingestion, validation, transformation, feature engineering, training and prediction.",
  bullets:["FastAPI/Flask APIs with MLflow experiment tracking.","Containerized with Docker, deployed on AWS EC2, artifacts in S3, CI/CD with GitHub Actions."],
  tech:["Python","Scikit-learn","Pandas","NumPy","FastAPI","Flask","MongoDB Atlas","MLflow","Docker","AWS EC2","AWS S3","GitHub Actions"],gh:"https://github.com/chetansharma06/networksecurity"},
 {title:"Computer Vision-Powered Image Search Application",cat:CATS[3],date:"",
  desc:"An image search application powered by computer vision and deep learning.",
  bullets:["Uses YOLO for object detection."],
  tech:["Python","Deep Learning","YOLO","Computer Vision"],gh:"https://github.com/chetansharma06/Computer-Vision-Powered-Image-Search-Application"}
];
const SKILLS = {"Languages":["Python","SQL","HTML/CSS"],
 "ML/AI":["Machine Learning","Deep Learning","NLP","Computer Vision","Generative AI","RAG","LLMs","Prompt Engineering","Multi-Agent Systems"],
 "Frameworks":["Scikit-learn","TensorFlow","Keras","PyTorch","YOLO","OpenCV","Pandas","NumPy","LangChain","Flask","Streamlit"],
 "Data and Deployment":["MySQL","MongoDB","FastAPI","Docker","MLflow","AWS"]};

// ---------- helpers ----------
const $ = s => document.querySelector(s);
const esc = s => s.replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const toast = t => { const e = $("#toast"); e.textContent = t; e.classList.add("on"); setTimeout(() => e.classList.remove("on"), 1800); };
let cat = "All";

// ---------- skills ----------
$("#skillgrid").innerHTML = Object.entries(SKILLS).map(([g, a]) =>
 `<div class="card"><h3>${g}</h3><ul class="chips">${a.map((s, i) => `<li><button class="chip" style="animation-delay:${i * 40}ms" data-skill="${esc(s)}">${esc(s)}</button></li>`).join("")}</ul></div>`).join("");
$("#skillgrid").addEventListener("click", e => {
 const b = e.target.closest("[data-skill]"); if (!b) return;
 cat = "All"; $("#q").value = b.dataset.skill; render();
 $("#projects").scrollIntoView({behavior: reduce ? "auto" : "smooth"});
});

// ---------- projects: tabs, search, cards ----------
const cats = ["All", ...CATS];
function tabs() {
 const q = $("#q").value.trim().toLowerCase();
 $("#tabs").innerHTML = cats.map(c => {
  const n = PROJECTS.filter(p => (c === "All" || p.cat === c) && match(p, q)).length;
  return `<button class="tab" role="tab" aria-selected="${c === cat}" data-c="${esc(c)}">${esc(c)}<small>${n}</small></button>`;
 }).join("");
}
const match = (p, q) => !q || [p.title, p.cat, p.desc, ...p.tech].join(" ").toLowerCase().includes(q);
function render() {
 const q = $("#q").value.trim().toLowerCase();
 const list = PROJECTS.filter(p => (cat === "All" || p.cat === cat) && match(p, q));
 tabs();
 $("#empty").hidden = list.length > 0;
 $("#cards").innerHTML = list.map(p => `<article class="card proj" tabindex="0" role="button" data-i="${PROJECTS.indexOf(p)}" aria-label="Open details: ${esc(p.title)}">
  <span class="m">${esc(p.cat)}${p.date ? " · " + esc(p.date) : ""}</span><h3>${esc(p.title)}</h3><p>${esc(p.desc)}</p>
  <ul class="chips">${p.tech.slice(0, 5).map(t => `<li class="chip">${esc(t)}</li>`).join("")}${p.tech.length > 5 ? `<li class="chip">+${p.tech.length - 5}</li>` : ""}</ul></article>`).join("");
}
$("#tabs").addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) { cat = b.dataset.c; render(); } });
$("#q").addEventListener("input", render);

// 3D tilt on mouse only
$("#cards").addEventListener("pointermove", e => {
 const c = e.target.closest(".proj"); if (!c || e.pointerType !== "mouse" || reduce) return;
 const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
 c.style.setProperty("--mx", (e.clientX - r.left) + "px");
 c.style.setProperty("--my", (e.clientY - r.top) + "px");
 c.style.transform = `perspective(700px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
});
$("#cards").addEventListener("pointerout", e => { const c = e.target.closest(".proj"); if (c) c.style.transform = ""; });

// modal (native <dialog>: traps focus, closes on Escape, restores focus)
const modal = $("#modal");
function open(i) {
 const p = PROJECTS[i];
 $("#mbody").innerHTML = `<p class="m" style="color:#4f46e5;margin:0 0 6px">${esc(p.cat)}${p.date ? " · " + esc(p.date) : ""}</p><h2 id="mt" style="font-size:1.5rem">${esc(p.title)}</h2>
 <p>${esc(p.desc)}</p><ul>${p.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>
 <ul class="chips" style="padding:0">${p.tech.map(t => `<li class="chip">${esc(t)}</li>`).join("")}</ul>
 ${p.gh ? `<p style="margin-top:20px"><a class="btn primary" href="${p.gh}" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>` : ""}`;
 modal.showModal();
}
$("#cards").addEventListener("click", e => { const c = e.target.closest(".proj"); if (c) open(c.dataset.i); });
$("#cards").addEventListener("keydown", e => { if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("proj")) { e.preventDefault(); open(e.target.dataset.i); } });
$("#mx").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

// ---------- theme toggle ----------
const themeBtn = $("#theme");
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved === "dark") root.setAttribute("data-theme", "dark");
themeBtn.addEventListener("click", () => {
 const on = root.getAttribute("data-theme") === "dark";
 root.setAttribute("data-theme", on ? "" : "dark");
 localStorage.setItem("theme", on ? "" : "dark");
 themeBtn.textContent = on ? "☀" : "☾";
 toast(on ? "Light theme" : "Dark theme");
});
if (root.getAttribute("data-theme") === "dark") themeBtn.textContent = "☀";

// ---------- particle canvas ----------
const cv = $("#spark"), ctx = cv.getContext("2d");
let W, H, pts, raf;
function resize(){ cv.width = cv.offsetWidth * devicePixelRatio; cv.height = cv.offsetHeight * devicePixelRatio; cv.style.width = cv.offsetWidth+"px"; cv.style.height = cv.offsetHeight+"px"; }
function initPts(){
 pts = [];
 const n = Math.min(90, Math.floor(W/14));
 for (let i=0;i<n;i++) pts.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.6,vy:(Math.random()-.5)*.6,r:Math.random()*2+1});
}
function draw(){
 ctx.clearRect(0,0,W,H);
 const ac = getComputedStyle(root).getPropertyValue("--ac").trim() || "#4f46e5";
 for (let i=0;i<pts.length;i++){
  const p=pts[i]; p.x+=p.vx; p.y+=p.vy;
  if (p.x<0||p.x>W) p.vx*=-1; if (p.y<0||p.y>H) p.vy*=-1;
  ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7); ctx.fillStyle = ac; ctx.globalAlpha=.6; ctx.fill();
  for (let j=i+1;j<pts.length;j++){
   const q=pts[j], dx=p.x-q.x, dy=p.y-q.y, d2=dx*dx+dy*dy;
   if (d2<14000){ ctx.beginPath(); ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y); ctx.strokeStyle=ac; ctx.globalAlpha=(1-d2/14000)*.18; ctx.lineWidth=1; ctx.stroke(); }
  }
 }
 ctx.globalAlpha=1;
 raf = requestAnimationFrame(draw);
}
function startCanvas(){ if (!cv) return; resize(); initPts(); cancelAnimationFrame(raf); draw(); }
startCanvas();
addEventListener("resize", () => { resize(); initPts(); });

// ---------- hero typing ----------
const words = ["Machine Learning Intern", "Generative AI Developer", "Agentic AI Builder"];
let w = 0, ch = 0, del = false;
function type() {
 const t = words[w]; $("#typed").textContent = t.slice(0, ch);
 if (!del && ch === t.length) { del = true; return setTimeout(type, 1400); }
 if (del && ch === 0) { del = false; w = (w + 1) % words.length; }
 ch += del ? -1 : 1; setTimeout(type, del ? 35 : 75);
}
reduce ? $("#typed").textContent = words[0] : type();

// ---------- scroll effects ----------
const bar = $("#bar"), up = $("#up"), head = $("#top");
addEventListener("scroll", () => {
 const h = document.documentElement;
 bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
 head.classList.toggle("sh", scrollY > 10); up.hidden = scrollY < 600;
}, {passive: true});
up.addEventListener("click", () => scrollTo({top: 0, behavior: reduce ? "auto" : "smooth"}));

const count = el => { const n = +el.dataset.n; let v = 0; const s = () => { v += Math.max(1, n / 30); el.textContent = Math.min(n, Math.round(v)); if (v < n) requestAnimationFrame(s); }; s(); };
$("#pcount").dataset.n = PROJECTS.length;
const io = new IntersectionObserver(es => es.forEach(e => {
 if (!e.isIntersecting) return;
 e.target.classList.add("in"); e.target.querySelectorAll("[data-n]").forEach(count); io.unobserve(e.target);
}), {threshold: .15});
document.querySelectorAll(".rv").forEach(el => io.observe(el));

const links = [...document.querySelectorAll("#links a")];
const spy = new IntersectionObserver(es => es.forEach(e => {
 if (e.isIntersecting) links.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
}), {rootMargin: "-45% 0px -50% 0px"});
links.forEach(a => spy.observe($(a.getAttribute("href"))));

// ---------- nav, contact ----------
const menu = document.querySelector(".menu"), ul = $("#links");
menu.addEventListener("click", () => menu.setAttribute("aria-expanded", ul.classList.toggle("open")));
ul.addEventListener("click", e => { if (e.target.tagName === "A") { ul.classList.remove("open"); menu.setAttribute("aria-expanded", false); } });
$("#copy").addEventListener("click", () => navigator.clipboard.writeText("chetanbhardwaj5252@gmail.com").then(() => toast("Email copied"), () => toast("Copy failed. Select the email manually.")));
$("#form").addEventListener("submit", e => {
 e.preventDefault(); const d = new FormData(e.target);
 location.href = "mailto:chetanbhardwaj5252@gmail.com?subject=" + encodeURIComponent("Portfolio message from " + d.get("n")) +
  "&body=" + encodeURIComponent("From: " + d.get("n") + " (" + d.get("e") + ")\n\n" + d.get("m"));
});
$("#yr").textContent = new Date().getFullYear();
render();
