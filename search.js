/*
 * search.js: Spotlight-style global search for the Fall 2026 hub.
 *
 * Add ONE line to any page (path is relative to that page):
 *     landing (hub root):   <script src="search.js"></script>
 *     a week index:         <script src="../search.js"></script>
 *     a content page:       <script src="../../search.js" data-mini></script>
 * Attributes: data-nolaunch = keyboard only (/ or Cmd/Ctrl-K), no visible launcher;
 *             data-mini     = compact launcher pinned top-right.
 *
 * Loads search-index.json (written by build-search-index.js from the week manifests) and searches
 * title, desc, group, section, weekLabel and page text. Item fields used:
 *     title, desc, group, section, week (number), weekLabel, url, text
 */
(function () {
  var self = document.currentScript;
  var src = self ? self.getAttribute('src') || '' : '';
  var BASE = src.replace(/search\.js.*$/, ''); // "" on landing, "../" on a week index, "../../" on a content page
  var NOLAUNCH = !!(self && self.hasAttribute('data-nolaunch'));
  var MINI = !!(self && self.hasAttribute('data-mini'));

  var FONT_HREF = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap';
  var MAG = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" ' +
            'stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/></svg>';

  var STYLE = [
    '.hs-launch,.hs-overlay{--hs-bg:#080c17;--hs-bg2:#0c1428;--hs-surface:rgba(255,255,255,.045);--hs-line:rgba(255,255,255,.09);',
    '  --hs-ink:#eef2fb;--hs-muted:#8496b6;--hs-accent:#6ea0ff;--hs-gold:#ffc862;',
    '  --hs-body:"Inter",system-ui,sans-serif;--hs-mono:"JetBrains Mono",ui-monospace,monospace;}',
    '.hs-launch{display:flex;align-items:center;gap:10px;width:340px;max-width:100%;margin:14px 0 26px;',
    '  background:var(--hs-surface);border:1px solid var(--hs-line);border-radius:999px;padding:9px 10px 9px 16px;',
    '  font-family:var(--hs-body);font-size:.88rem;color:var(--hs-muted);cursor:pointer;',
    '  transition:border-color .15s,box-shadow .15s,background .15s;}',
    '.hs-launch:hover,.hs-launch:focus-visible{outline:none;border-color:rgba(110,160,255,.55);background:rgba(110,160,255,.07);',
    '  box-shadow:0 0 0 3px rgba(110,160,255,.12);}',
    '.hs-launch .hs-lmag{display:flex;color:var(--hs-accent);}',
    '.hs-launch .hs-lph{flex:1;text-align:left;}',
    '.hs-key{font-family:var(--hs-mono);font-size:.7rem;color:var(--hs-muted);border:1px solid var(--hs-line);',
    '  border-radius:6px;padding:1px 7px;background:rgba(255,255,255,.03);}',
    '.hs-launch.hs-mini{position:fixed;top:14px;right:16px;width:auto;margin:0;padding:7px 9px 7px 12px;gap:8px;z-index:60;',
    '  font-size:.8rem;background:rgba(12,20,40,.82);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);}',
    '.hs-overlay{position:fixed;inset:0;z-index:70;display:none;align-items:flex-start;justify-content:center;',
    '  padding:14vh 16px 0;background:rgba(4,7,15,.66);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px);',
    '  font-family:var(--hs-body);}',
    '.hs-overlay.open{display:flex;}',
    '.hs-panel{width:min(640px,100%);background:linear-gradient(180deg,var(--hs-bg2),var(--hs-bg));',
    '  border:1px solid var(--hs-line);border-radius:14px;overflow:hidden;',
    '  box-shadow:inset 0 1px 0 rgba(255,255,255,.05),0 30px 70px rgba(0,0,0,.6);animation:hs-in .15s ease-out;}',
    '@keyframes hs-in{from{opacity:0;transform:translateY(-8px) scale(.985);}to{opacity:1;transform:none;}}',
    '@media (prefers-reduced-motion:reduce){.hs-panel{animation:none;}}',
    '.hs-box{display:flex;align-items:center;gap:12px;padding:15px 18px;border-bottom:1px solid var(--hs-line);}',
    '.hs-box .hs-icon{display:flex;color:var(--hs-accent);flex:none;}',
    '.hs-box input{flex:1;min-width:0;background:transparent;border:none;outline:none;color:var(--hs-ink);',
    '  font-size:1.1rem;font-family:var(--hs-body);}',
    '.hs-box input::placeholder{color:var(--hs-muted);}',
    '.hs-results{max-height:56vh;overflow-y:auto;}',
    '.hs-results a.hs-item{display:block;padding:11px 18px;text-decoration:none;border-bottom:1px solid var(--hs-line);',
    '  border-left:3px solid transparent;transition:background .15s;}',
    '.hs-results a.hs-item:last-child{border-bottom:none;}',
    '.hs-results a.hs-item.sel,.hs-results a.hs-item:hover{background:rgba(110,160,255,.09);border-left-color:var(--hs-accent);}',
    '.hs-title{color:var(--hs-ink);font-size:.97rem;font-weight:500;}',
    '.hs-title mark,.hs-desc mark{background:rgba(255,200,98,.2);color:var(--hs-gold);border-radius:3px;padding:0 1px;}',
    '.hs-desc{color:var(--hs-muted);font-size:.82rem;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}',
    '.hs-meta{font-family:var(--hs-mono);color:var(--hs-muted);font-size:.68rem;letter-spacing:.04em;margin-top:4px;}',
    '.hs-meta .hs-sec{color:var(--hs-accent);text-transform:uppercase;letter-spacing:.14em;}',
    '.hs-hint{padding:16px 18px;color:var(--hs-muted);font-size:.88rem;}',
    '.hs-foot{display:flex;gap:14px;padding:9px 18px;border-top:1px solid var(--hs-line);font-family:var(--hs-mono);',
    '  font-size:.66rem;color:var(--hs-muted);letter-spacing:.06em;}',
    '.hs-foot .hs-key{font-size:.62rem;margin-right:5px;}'
  ].join('\n');

  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function highlight(text, terms) {
    var out = esc(text);
    terms.forEach(function (t) {
      if (!t) return;
      var re = new RegExp('(' + esc(t).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![^<]*>)', 'ig');
      out = out.replace(re, '<mark>$1</mark>');
    });
    return out;
  }
  function weekLabel(it) { return it.weekLabel || (it.week != null ? 'Week ' + it.week : ''); }

  var INDEX = [], results = [], sel = -1, terms = [];

  function score(item) {
    var t = String(item.title || '').toLowerCase(), d = String(item.desc || '').toLowerCase(),
        g = String(item.group || '').toLowerCase(), s = String(item.section || '').toLowerCase(),
        w = weekLabel(item).toLowerCase(), b = String(item.text || '').toLowerCase();
    var total = 0;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i], hit = 0;
      if (t.indexOf(term) !== -1) hit += 10;
      if (d.indexOf(term) !== -1) hit += 5;
      if (g.indexOf(term) !== -1) hit += 3;
      if (s.indexOf(term) !== -1 || w.indexOf(term) !== -1) hit += 2;
      if (b.indexOf(term) !== -1) hit += 1;
      if (hit === 0) return 0; // AND: every term must match somewhere
      total += hit;
    }
    return total;
  }

  function runQuery(q) {
    terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) { results = []; return; }
    results = INDEX
      .map(function (it) { return { it: it, s: score(it) }; })
      .filter(function (r) { return r.s > 0; })
      .sort(function (a, b) { return b.s - a.s || (a.it.week || 0) - (b.it.week || 0) || String(a.it.title).localeCompare(String(b.it.title)); })
      .slice(0, 12)
      .map(function (r) { return r.it; });
  }

  var overlay, input, box, launcher;

  function render() {
    box.innerHTML = '';
    var q = input.value.trim();
    if (!q) { box.appendChild(el('div', 'hs-hint', 'Type to search titles, topics and page text across every week.')); return; }
    if (!results.length) { box.appendChild(el('div', 'hs-hint', 'No matches for “' + esc(q) + '”.')); return; }
    results.forEach(function (it, i) {
      var a = el('a', 'hs-item' + (i === sel ? ' sel' : ''));
      a.href = BASE + it.url;
      var meta = '<span class="hs-sec">' + esc(it.section || '') + '</span> · ' + esc(weekLabel(it)) +
                 (it.group ? ' · ' + esc(it.group) : '');
      a.innerHTML = '<div class="hs-title">' + highlight(it.title || '', terms) + '</div>' +
                    (it.desc ? '<div class="hs-desc">' + highlight(it.desc, terms) + '</div>' : '') +
                    '<div class="hs-meta">' + meta + '</div>';
      box.appendChild(a);
    });
  }

  function refresh() { sel = -1; runQuery(input.value); render(); }
  function open() { overlay.classList.add('open'); input.focus(); input.select(); refresh(); }
  function close() { overlay.classList.remove('open'); if (launcher) launcher.focus(); }
  function isOpen() { return overlay.classList.contains('open'); }

  function moveSel(dir) {
    if (!results.length) return;
    sel = (sel + dir + results.length) % results.length;
    render();
    var selEl = box.querySelector('.hs-item.sel');
    if (selEl) selEl.scrollIntoView({ block: 'nearest' });
  }

  function ensureFonts() {
    var links = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
    for (var i = 0; i < links.length; i++) {
      var h = links[i].getAttribute('href') || '';
      if (h.indexOf('Inter') !== -1 && h.indexOf('JetBrains') !== -1) return;
    }
    var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = FONT_HREF; document.head.appendChild(l);
  }

  function mount() {
    ensureFonts();
    var style = el('style'); style.textContent = STYLE; document.head.appendChild(style);

    if (MINI) {
      launcher = el('button', 'hs-launch hs-mini', '<span class="hs-lmag">' + MAG + '</span><span>Search</span><span class="hs-key">/</span>');
    } else if (!NOLAUNCH) {
      launcher = el('button', 'hs-launch', '<span class="hs-lmag">' + MAG + '</span><span class="hs-lph">Search the hub</span><span class="hs-key">/</span>');
    }
    if (launcher) {
      launcher.type = 'button';
      launcher.setAttribute('aria-label', 'Search the hub');
      launcher.addEventListener('click', open);
      if (MINI) document.body.appendChild(launcher);
      else {
        // in-flow, right below the page's lede (or title)
        var anchor = document.querySelector('.lede') || document.querySelector('.subtitle') || document.querySelector('h1');
        if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(launcher, anchor.nextSibling);
        else document.body.insertBefore(launcher, document.body.firstChild);
      }
    }

    overlay = el('div', 'hs-overlay');
    overlay.innerHTML = '<div class="hs-panel" role="dialog" aria-modal="true" aria-label="Search the hub">' +
      '<div class="hs-box"><span class="hs-icon">' + MAG + '</span>' +
      '<input type="text" autocomplete="off" spellcheck="false" placeholder="Search the hub" aria-label="Search the hub">' +
      '<span class="hs-key">esc</span></div><div class="hs-results" role="listbox"></div>' +
      '<div class="hs-foot"><span><span class="hs-key">↑↓</span>move</span><span><span class="hs-key">enter</span>open</span>' +
      '<span><span class="hs-key">esc</span>close</span></div></div>';
    document.body.appendChild(overlay);

    input = overlay.querySelector('input');
    box = overlay.querySelector('.hs-results');

    input.addEventListener('input', refresh);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); moveSel(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); moveSel(-1); }
      else if (e.key === 'Enter') { var pick = results[sel] || results[0]; if (pick) window.location.href = BASE + pick.url; }
      else if (e.key === 'Escape') { e.preventDefault(); close(); }
    });

    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });

    document.addEventListener('keydown', function (e) {
      var a = document.activeElement || {};
      var typing = /^(INPUT|TEXTAREA|SELECT)$/.test(a.tagName || '') || a.isContentEditable;
      if ((e.metaKey || e.ctrlKey) && (e.key || '').toLowerCase() === 'k') { e.preventDefault(); isOpen() ? close() : open(); }
      else if (e.key === '/' && !typing && !isOpen()) { e.preventDefault(); open(); }
    });
  }

  function boot() {
    fetch(BASE + 'search-index.json')
      .then(function (r) { return r.json(); })
      .then(function (data) { INDEX = Array.isArray(data) ? data : []; mount(); })
      .catch(function (err) { console.warn('[hub-search] could not load search-index.json:', err); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
