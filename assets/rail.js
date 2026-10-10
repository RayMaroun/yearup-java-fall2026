/* Rail - the numbered path at the bottom of every content page.
 *
 *   The page loads its week manifest first:  <script src="../manifest.js"></script>
 *   then:                                     <script src="../../assets/rail.js"></script>
 *   and calls: Rail.render(document.getElementById('rail'), { kind: 'visuals', current: '21-method-call-stack' });
 *
 *   The manifest (window.HUB_MANIFEST) lists every page of the week per kind, in order:
 *   { week: 1, title: "...", visuals: [{ file, title, group }], reference: [...], exercises: [...], games: [...] }
 *
 *   Renders: eyebrow ("Visuals · 21 of 25"), one dot per page of this kind (current marked, done before it,
 *   titles on hover), previous and next links. Also wires the keyboard: left/right = prev/next, Esc = index.
 */
(function () {
  "use strict";

  var CSS = [
    ".rail{position:relative;z-index:1;margin-top:38px;padding-top:20px;border-top:1px solid var(--line)}",
    ".rail-eyebrow{font-family:var(--mono);font-size:.64rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin:0 0 12px}",
    ".rail-eyebrow b{color:var(--accent);font-weight:500}",
    ".rail-dots{display:flex;align-items:center;gap:6px;list-style:none;margin:0;padding:0;flex-wrap:wrap}",
    ".rail-dots li{position:relative;display:flex}",
    ".rail-dots a{display:flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:9px;",
    "  border:1px solid var(--line);background:rgba(255,255,255,.03);color:var(--muted);text-decoration:none;",
    "  font-family:var(--mono);font-size:.72rem;transition:.15s}",
    ".rail-dots a:hover{border-color:var(--accent);color:var(--accent)}",
    ".rail-dots a:focus-visible{outline:2px solid var(--accent);outline-offset:2px}",
    ".rail-dots a.done{color:#9fb0d0}",
    ".rail-dots a.now{background:rgba(110,160,255,.18);border-color:rgba(110,160,255,.55);color:var(--accent);font-weight:500}",
    ".rail-dots li::after{content:attr(data-t);position:absolute;left:50%;bottom:calc(100% + 9px);transform:translateX(-50%);",
    "  white-space:nowrap;font-family:var(--mono);font-size:.68rem;color:var(--ink);background:rgba(8,12,23,.96);",
    "  border:1px solid var(--line);border-radius:8px;padding:5px 9px;opacity:0;pointer-events:none;transition:opacity .15s;z-index:5}",
    ".rail-dots li:hover::after{opacity:1}",
    ".rail-ends{display:flex;gap:14px;margin-top:16px}",
    ".rail-ends a{font-family:var(--mono);font-size:.82rem;color:var(--muted);text-decoration:none;transition:color .15s}",
    ".rail-ends a:hover{color:var(--accent)}",
    ".rail-ends .rail-next{margin-left:auto;text-align:right}",
    ".rail-keys{margin-top:12px;font-family:var(--mono);font-size:.62rem;letter-spacing:.08em;color:var(--muted);opacity:.7}"
  ].join("\n");

  var KIND_LABEL = { visuals: "Visuals", reference: "Reference", exercises: "Exercises", games: "Games" };

  function injectCss() {
    if (document.getElementById("rail-css")) return;
    var s = document.createElement("style");
    s.id = "rail-css";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function esc(t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function slug(file) { return String(file).replace(/\.html$/, ""); }

  function render(el, opts) {
    injectCss();
    var m = window.HUB_MANIFEST || {};
    var kind = (opts && opts.kind) || "visuals";
    var list = m[kind] || [];
    var cur = slug((opts && opts.current) || "");
    var at = -1;
    list.forEach(function (p, i) { if (slug(p.file) === cur) at = i; });

    var html = ['<nav class="rail" aria-label="' + esc(KIND_LABEL[kind] || kind) + ' of this week">'];
    html.push('<p class="rail-eyebrow">Week ' + esc(m.week || "") + " · " + esc(KIND_LABEL[kind] || kind)
      + (at >= 0 ? " · <b>" + (at + 1) + " of " + list.length + "</b>" : "") + "</p>");
    html.push('<ol class="rail-dots">');
    list.forEach(function (p, i) {
      var cls = i === at ? "now" : (at >= 0 && i < at ? "done" : "");
      var label = (i + 1) + ". " + p.title;
      html.push('<li data-t="' + esc(label) + '"><a class="' + cls + '" href="' + esc(p.file) + '" title="' + esc(label) + '"'
        + (i === at ? ' aria-current="page"' : "") + ">" + (i + 1) + "</a></li>");
    });
    html.push("</ol>");

    var prev = at > 0 ? list[at - 1] : null;
    var next = at >= 0 && at < list.length - 1 ? list[at + 1] : null;
    var indexHref = "../index.html" + (cur ? "#" + cur : "");
    html.push('<div class="rail-ends">');
    html.push(prev ? '<a class="rail-prev" href="' + esc(prev.file) + '">← ' + esc(prev.title) + "</a>"
                   : '<a class="rail-prev" href="' + indexHref + '">← Week index</a>');
    if (next) html.push('<a class="rail-next" href="' + esc(next.file) + '">' + esc(next.title) + " →</a>");
    html.push("</div>");
    html.push('<p class="rail-keys">keys: ← → previous / next · esc index</p>');
    html.push("</nav>");
    el.innerHTML = html.join("");

    document.addEventListener("keydown", function (e) {
      if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key === "ArrowLeft" && prev) location.href = prev.file;
      else if (e.key === "ArrowRight" && next) location.href = next.file;
      else if (e.key === "Escape") location.href = indexHref;
    });
  }

  window.Rail = { render: render };
})();
