/*
 * build-search-index.js: regenerate search-index.json for the Fall 2026 hub.
 *
 * Run locally whenever pages are added or renamed:
 *     node build-search-index.js
 * (GitHub Pages does not run this; it only serves the search-index.json it produces.)
 *
 * Source of truth is each week-NN/manifest.js (window.HUB_MANIFEST). For every entry of every kind
 * (visuals, reference, exercises, games) whose file exists under week-NN/<kind>/<file>, it records
 * the manifest fields plus the first 1500 characters of the page's visible text. Entries whose file
 * does not exist yet are skipped and counted, so search never links to a missing page.
 *
 * Output item shape (read by search.js):
 *   { week, weekLabel, section, title, desc, group, url, text }
 */
const fs = require('fs');
const path = require('path');

const HUB = __dirname;
const BODY_TEXT_CHARS = 1500;
const KINDS = [
  ['visuals', 'Visuals'],
  ['reference', 'Reference'],
  ['exercises', 'Exercises'],
  ['games', 'Games']
];

const NAMED = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', middot: '·',
  mdash: '—', ndash: '–', hellip: '…', rarr: '→', larr: '←',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', times: '×', bull: '•' };

function decodeEntities(s) {
  return s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') {
      const n = e[1] === 'x' || e[1] === 'X' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10);
      try { return String.fromCodePoint(n); } catch (_) { return m; }
    }
    const v = NAMED[e.toLowerCase()];
    return v !== undefined ? v : m;
  });
}

function visibleText(html) {
  const body = (html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i) || [, html])[1];
  return decodeEntities(
    body
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  ).replace(/\s+/g, ' ').trim();
}

function loadManifest(file) {
  const src = fs.readFileSync(file, 'utf8');
  const win = {};
  new Function('window', src)(win);
  return win.HUB_MANIFEST;
}

const weekDirs = fs
  .readdirSync(HUB)
  .filter(d => /^week-\d+$/.test(d) && fs.statSync(path.join(HUB, d)).isDirectory())
  .sort();

const index = [];
let skipped = 0;
let weeksRead = 0;

for (const wk of weekDirs) {
  const manPath = path.join(HUB, wk, 'manifest.js');
  if (!fs.existsSync(manPath)) continue;
  let man;
  try { man = loadManifest(manPath); }
  catch (err) { console.warn(`[search] ${wk}/manifest.js failed to evaluate: ${err.message}`); continue; }
  if (!man) { console.warn(`[search] ${wk}/manifest.js did not set window.HUB_MANIFEST`); continue; }
  weeksRead++;
  const week = Number(man.week) || parseInt(wk.split('-')[1], 10);
  const weekLabel = 'Week ' + week;

  for (const [kind, section] of KINDS) {
    for (const entry of man[kind] || []) {
      if (!entry || !entry.file) continue;
      const rel = `${wk}/${kind}/${entry.file}`;
      const abs = path.join(HUB, rel);
      if (!fs.existsSync(abs)) { skipped++; continue; }
      index.push({
        week,
        weekLabel,
        section,
        title: entry.title || entry.file,
        desc: entry.desc || '',
        group: entry.group || '',
        url: rel,
        text: visibleText(fs.readFileSync(abs, 'utf8')).slice(0, BODY_TEXT_CHARS)
      });
    }
  }
}

fs.writeFileSync(path.join(HUB, 'search-index.json'), JSON.stringify(index, null, 2) + '\n');
console.log(`search-index.json written: ${index.length} item(s) indexed from ${weeksRead} manifest(s), ${skipped} skipped (file not on disk yet).`);
