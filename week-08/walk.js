/* Week 8 guides: one step on screen at a time.
 * A guide page keeps its steps as <section class="step"> inside #steps, with its list of steps in #toc.
 * This file shows only the current step, adds Back and Next, a progress line, and remembers where the learner stopped.
 * It also turns every link to a week 8 picture into a button that opens the picture in a wide panel,
 * and folds each "Watch out" block so it opens only when asked for. */
(function () {
  "use strict";
  var box = document.getElementById("steps"), toc = document.getElementById("toc");
  if (!box) return;
  var SECS = [].slice.call(box.querySelectorAll("section.step"));
  if (!SECS.length) return;
  var KEY = "hub-cap2-walk-" + location.pathname.split("/").pop().replace(/\.html$/, "");

  var css = document.createElement("style");
  css.textContent =
    ".walk .before{display:none}" +
    ".walk #steps p.phase{display:none}" +
    ".walk #steps section.step{display:none}" +
    ".walk #steps section.step.cur{display:block}" +
    ".wbar{margin:0 0 14px}" +
    ".wtrack{height:6px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}" +
    ".wtrack i{display:block;height:100%;width:0;border-radius:999px;background:linear-gradient(90deg,#6ea0ff,#9fc0ff);transition:width .3s}" +
    ".wwhere{display:flex;flex-wrap:wrap;gap:6px 14px;justify-content:space-between;margin:9px 2px 0;font-family:var(--mono);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}" +
    ".wwhere b{color:var(--accent);font-weight:500}" +
    ".wnav{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:16px 0 0}" +
    ".wnav .wpos{font-family:var(--mono);font-size:.76rem;color:var(--muted)}" +
    ".wb{font:inherit;font-family:var(--mono);font-size:.86rem;padding:11px 18px;border-radius:12px;cursor:pointer;border:1px solid var(--line);background:rgba(255,255,255,.04);color:var(--ink);transition:.15s}" +
    ".wb:hover{border-color:var(--accent)}" +
    ".wb.go{border-color:rgba(110,160,255,.6);background:rgba(110,160,255,.18);color:#fff}" +
    ".wb[disabled]{opacity:.3;cursor:default}" +
    "details.part.watch>summary{cursor:pointer;list-style:none}" +
    "details.part.watch>summary::-webkit-details-marker{display:none}" +
    "details.part.watch>summary:after{content:' \\00b7 open';color:var(--muted);letter-spacing:.08em}" +
    "details.part.watch[open]>summary:after{content:' \\00b7 close'}" +
    ".wres{margin:12px 0 0}" +
    ".wresb{font:inherit;font-family:var(--mono);font-size:.82rem;width:100%;text-align:left;padding:11px 14px;border-radius:12px;cursor:pointer;border:1px dashed rgba(255,200,98,.5);background:rgba(255,200,98,.06);color:#ffd88f}" +
    ".wresb:hover{border-color:#ffc862}" +
    ".wresb b{font-weight:500;color:#fff}" +
    ".wover{position:fixed;inset:0;z-index:900;background:rgba(4,7,14,.82);display:flex;padding:3vh 3vw}" +
    ".wover[hidden]{display:none}" +
    ".wpanel{flex:1;display:flex;flex-direction:column;min-width:0;border:1px solid var(--line);border-radius:20px;overflow:hidden;background:#080c17;box-shadow:0 30px 80px -20px #000}" +
    ".wtop{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 12px 10px 18px;border-bottom:1px solid var(--line)}" +
    ".wtop p{margin:0;font-family:var(--disp);font-weight:700;font-size:1.05rem;color:var(--ink)}" +
    ".wpanel iframe{flex:1;width:100%;border:0;display:block}";
  document.head.appendChild(css);
  document.documentElement.classList.add("walk");

  /* the phase of a step: the heading that stands before it, when the page has headings between its steps */
  var PHASE = SECS.map(function (s) {
    if (s.getAttribute("data-phase")) return s.getAttribute("data-phase");
    var p = s.previousElementSibling;
    while (p && !(p.tagName === "P" && p.classList.contains("phase"))) p = p.previousElementSibling;
    return p ? p.textContent : "";
  });

  var bar = document.createElement("div");
  bar.className = "wbar";
  bar.innerHTML = '<div class="wtrack"><i></i></div><p class="wwhere"><span class="wphase"></span><b class="wcount"></b></p>';
  box.insertBefore(bar, box.firstChild);

  var nav = document.createElement("div");
  nav.className = "wnav";
  nav.innerHTML = '<button type="button" class="wb" data-go="-1">&#8592; Back</button><span class="wpos"></span><button type="button" class="wb go" data-go="1">Next &#8594;</button>';
  box.appendChild(nav);

  var cur = 0;
  function label(i) {
    var n = SECS[i].querySelector(".num");
    return n ? n.textContent : String(i + 1);
  }
  function show(i, move) {
    cur = Math.max(0, Math.min(SECS.length - 1, i));
    SECS.forEach(function (s, k) { s.classList.toggle("cur", k === cur); });
    bar.querySelector("i").style.width = Math.round(((cur + 1) / SECS.length) * 100) + "%";
    bar.querySelector(".wphase").textContent = PHASE[cur] || "";
    bar.querySelector(".wcount").textContent = "Step " + (cur + 1) + " of " + SECS.length;
    nav.querySelector(".wpos").textContent = (cur + 1) + " / " + SECS.length;
    nav.querySelector('[data-go="-1"]').disabled = cur === 0;
    nav.querySelector('[data-go="1"]').disabled = cur === SECS.length - 1;
    if (toc) [].forEach.call(toc.querySelectorAll("a"), function (a) {
      a.classList.toggle("now", a.getAttribute("href") === "#" + SECS[cur].id);
    });
    try { localStorage.setItem(KEY, SECS[cur].id); } catch (e) {}
    if (move) {
      var top = bar.getBoundingClientRect().top + window.pageYOffset - 16;
      window.scrollTo({ top: top, behavior: "auto" });
    }
    document.dispatchEvent(new CustomEvent("walk:show", { detail: { id: SECS[cur].id, index: cur } }));
  }
  function indexOf(id) {
    for (var k = 0; k < SECS.length; k++) if (SECS[k].id === id) return k;
    return -1;
  }

  nav.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-go]");
    if (b && !b.disabled) show(cur + Number(b.getAttribute("data-go")), true);
  });
  /* any link on the page that points to a step opens that step */
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a) return;
    var k = indexOf(a.getAttribute("href").slice(1));
    if (k < 0) return;
    e.preventDefault();
    show(k, true);
  });

  /* "Watch out" opens only when the learner asks for it */
  SECS.forEach(function (s) {
    [].forEach.call(s.querySelectorAll("div.part.watch"), function (w) {
      var d = document.createElement("details");
      d.className = w.className;
      var k = w.querySelector(".k"), sum = document.createElement("summary");
      sum.className = "k";
      sum.textContent = k ? k.textContent : "Watch out";
      if (k) k.parentNode.removeChild(k);
      d.appendChild(sum);
      while (w.firstChild) d.appendChild(w.firstChild);
      w.parentNode.replaceChild(d, w);
    });
  });

  /* a link to a week 8 picture becomes a button on the step. The picture opens in a wide panel over the page:
     the step column is too narrow for it, and the learner stays on the step. */
  var over = document.createElement("div");
  over.className = "wover";
  over.hidden = true;
  over.innerHTML = '<div class="wpanel" role="dialog" aria-modal="true"><div class="wtop"><p></p><button type="button" class="wb">Close &#10005;</button></div></div>';
  document.body.appendChild(over);
  var panel = over.querySelector(".wpanel"), lastBtn = null;
  function closePicture() {
    if (over.hidden) return;
    over.hidden = true;
    var f = panel.querySelector("iframe");
    if (f) panel.removeChild(f);
    document.documentElement.style.overflow = "";
    if (lastBtn) lastBtn.focus();
  }
  function openPicture(href, name, btn) {
    lastBtn = btn;
    over.querySelector(".wtop p").textContent = name;
    var f = document.createElement("iframe");
    f.title = name;
    f.src = href + "?embed=1";
    panel.appendChild(f);
    over.hidden = false;
    document.documentElement.style.overflow = "hidden";
    over.querySelector(".wtop button").focus();
  }
  over.addEventListener("click", function (e) {
    if (e.target === over || e.target.closest(".wtop button")) closePicture();
  });
  /* while a picture is open, the keys belong to it: Escape closes it, and the arrow keys do not change page */
  window.addEventListener("keydown", function (e) {
    if (over.hidden) return;
    if (e.key === "Escape") closePicture();
    if (e.key === "Escape" || e.key === "ArrowLeft" || e.key === "ArrowRight") { e.stopImmediatePropagation(); e.preventDefault(); }
  }, true);

  SECS.forEach(function (s) {
    var seen = {};
    [].forEach.call(s.querySelectorAll('a.chip[href*="/visuals/"]'), function (a) {
      var href = a.getAttribute("href");
      if (href.indexOf("../visuals/") !== 0) return;      /* only this week's pictures */
      var name = a.textContent;
      a.parentNode.removeChild(a);
      if (seen[href]) return;
      seen[href] = true;
      var wrap = document.createElement("div");
      wrap.className = "wres";
      wrap.innerHTML = '<button type="button" class="wresb">Open the picture: <b></b></button>';
      wrap.querySelector("b").textContent = name;
      var btn = wrap.querySelector("button");
      btn.addEventListener("click", function () { openPicture(href, name, btn); });
      var parts = s.querySelector(".parts");
      if (parts) parts.parentNode.insertBefore(wrap, parts.nextSibling); else s.appendChild(wrap);
    });
  });

  /* start where the address says, or where the learner stopped last time */
  var start = indexOf(location.hash.slice(1));
  if (start < 0) { try { start = indexOf(localStorage.getItem(KEY) || ""); } catch (e) { start = -1; } }
  show(start < 0 ? 0 : start, false);
})();
