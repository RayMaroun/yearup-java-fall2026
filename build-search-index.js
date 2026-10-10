/*
 * build-search-index.js — regenerate search-index.json for the visual hub.
 *
 * Run locally whenever you add/rename pages or flip something Live:
 *     node build-search-index.js
 * (GitHub Pages does NOT run this — it just serves the search-index.json it produces.)
 *
 * It reads each week-NN/index.html, and for every item card that is LIVE it records the
 * title + description + section + module group + a slice of the target page's body text.
 * Items marked Building (class contains `wip`) are SKIPPED entirely — their pages aren't even
 * opened — so nothing that isn't publicly Live on the index can appear in search.
 */
const fs = require('fs');
const path = require('path');

const HUB = __dirname;
const BODY_TEXT_CHARS = 1500; // how much of each page's visible text to index

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ')
    .replace(/&middot;/g, '·');
}

function stripTags(html) {
  return decodeEntities(
    html
      .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
  ).replace(/\s+/g, ' ').trim();
}

function sectionFromClass(cls) {
  if (/\bref\b/.test(cls)) return 'Reference';
  if (/\bex\b/.test(cls)) return 'Exercises';
  if (/\bgame\b/.test(cls)) return 'Games';
  return 'Visuals';
}

const weekDirs = fs
  .readdirSync(HUB)
  .filter(d => /^week-\d+$/.test(d) && fs.statSync(path.join(HUB, d)).isDirectory())
  .sort();

const index = [];
let liveCount = 0;
let skipped = 0;
let noindexed = 0;

for (const wk of weekDirs) {
  const weekNum = parseInt(wk.split('-')[1], 10);
  const weekLabel = 'Week ' + weekNum;
  const idxPath = path.join(HUB, wk, 'index.html');
  if (!fs.existsSync(idxPath)) continue;
  const html = fs.readFileSync(idxPath, 'utf8');

  // Walk section-titles and item cards in document order so each card keeps its module group.
  const tokenRe = /<div class="section-title">([\s\S]*?)<\/div>|<a\b([^>]*\bclass="link[^"]*"[^>]*)>([\s\S]*?)<\/a>/g;
  let m;
  let currentGroup = '';
  while ((m = tokenRe.exec(html)) !== null) {
    if (m[1] !== undefined) {
      currentGroup = stripTags(m[1]);
      continue;
    }
    const attrs = m[2];
    const inner = m[3];
    const cls = (attrs.match(/class="([^"]*)"/) || [, ''])[1];
    if (/\bwip\b/.test(cls)) { skipped++; continue; } // Building -> never indexed
    if (/\bnoindex\b/.test(cls)) { noindexed++; continue; } // Live locally, deliberately kept out of search
    const href = (attrs.match(/href="([^"]*)"/) || [, ''])[1];
    if (!href) continue;
    const title = decodeEntities(((inner.match(/<div class="title">([\s\S]*?)<\/div>/) || [, ''])[1]).trim());
    const desc = decodeEntities(((inner.match(/<div class="desc">([\s\S]*?)<\/div>/) || [, ''])[1]).trim());
    const section = sectionFromClass(cls);

    let text = '';
    const target = path.join(HUB, wk, href);
    if (fs.existsSync(target)) {
      text = stripTags(fs.readFileSync(target, 'utf8')).slice(0, BODY_TEXT_CHARS);
    }

    index.push({ title, desc, section, group: currentGroup, week: weekLabel, weekNum, url: `${wk}/${href}`, text });
    liveCount++;
  }
}

// ----- Assessment reviews (cross-week; e.g. assessment-reviews/kc1/index.html) -----
const arRoot = path.join(HUB, 'assessment-reviews');
if (fs.existsSync(arRoot)) {
  const arDirs = fs
    .readdirSync(arRoot)
    .filter(d => fs.statSync(path.join(arRoot, d)).isDirectory())
    .sort();
  for (const ar of arDirs) {
    const idxPath = path.join(arRoot, ar, 'index.html');
    if (!fs.existsSync(idxPath)) continue;
    const html = fs.readFileSync(idxPath, 'utf8');
    const label = ar.toUpperCase() + ' Review'; // e.g. "KC1 Review"
    const linkRe = /<a\b([^>]*\bclass="link[^"]*"[^>]*)>([\s\S]*?)<\/a>/g;
    let m;
    while ((m = linkRe.exec(html)) !== null) {
      const attrs = m[1];
      const inner = m[2];
      const cls = (attrs.match(/class="([^"]*)"/) || [, ''])[1];
      if (/\bwip\b/.test(cls)) { skipped++; continue; }
      if (/\bnoindex\b/.test(cls)) { noindexed++; continue; }
      const href = (attrs.match(/href="([^"]*)"/) || [, ''])[1];
      if (!href) continue;
      const title = decodeEntities(((inner.match(/<div class="title">([\s\S]*?)<\/div>/) || [, ''])[1]).trim());
      const desc = decodeEntities(((inner.match(/<div class="desc">([\s\S]*?)<\/div>/) || [, ''])[1]).trim());
      let text = '';
      const target = path.join(arRoot, ar, href);
      if (fs.existsSync(target)) text = stripTags(fs.readFileSync(target, 'utf8')).slice(0, BODY_TEXT_CHARS);
      index.push({ title, desc, section: 'Assessment', group: label, week: label, weekNum: 100, url: `assessment-reviews/${ar}/${href}`, text });
      liveCount++;
    }
  }
}

// ----- Capstone (weeks 10-11; one flat index.html of link cards grouped by "Part N" headings) -----
const capRoot = path.join(HUB, 'capstone');
const capIdxPath = path.join(capRoot, 'index.html');
if (fs.existsSync(capIdxPath)) {
  const html = fs.readFileSync(capIdxPath, 'utf8');
  // Capstone groups are "Part N  ·  Title" / "Reference" section-title divs, not week module headers.
  const tokenRe = /<div class="section-title">([\s\S]*?)<\/div>|<a\b([^>]*\bclass="link[^"]*"[^>]*)>([\s\S]*?)<\/a>/g;
  let m;
  let currentGroup = '';
  while ((m = tokenRe.exec(html)) !== null) {
    if (m[1] !== undefined) {
      currentGroup = stripTags(m[1]);
      continue;
    }
    const attrs = m[2];
    const inner = m[3];
    const cls = (attrs.match(/class="([^"]*)"/) || [, ''])[1];
    if (/\bwip\b/.test(cls)) { skipped++; continue; } // Building -> never indexed (none currently: all Live)
    if (/\bnoindex\b/.test(cls)) { noindexed++; continue; }
    const href = (attrs.match(/href="([^"]*)"/) || [, ''])[1];
    if (!href) continue;
    const title = decodeEntities(((inner.match(/<div class="title">([\s\S]*?)<\/div>/) || [, ''])[1]).trim());
    const desc = decodeEntities(((inner.match(/<div class="desc">([\s\S]*?)<\/div>/) || [, ''])[1]).trim());

    let text = '';
    const target = path.join(capRoot, href);
    if (fs.existsSync(target)) {
      text = stripTags(fs.readFileSync(target, 'utf8')).slice(0, BODY_TEXT_CHARS);
    }

    index.push({ title, desc, section: 'Capstone', group: currentGroup, week: 'Capstone', weekNum: 200, url: `capstone/${href}`, text });
    liveCount++;
  }

  // Two capstone reference pages that are not link cards on the index: the one-scroll overview
  // (linked from "Where to start") and the theme sheets page. Indexed the same way as the
  // Reference cards above.
  const capExtra = [
    { href: 'overview.html', title: 'The capstone, in one scroll',
      desc: 'the whole story on one page: what the two weeks produce, one change travelling from an editor to a live watched system, the eight parts on the shared map, the four themes compared, the path with its two milestones, and the last day' },
    { href: 'themes.html', title: 'Choose your theme',
      desc: 'the three theme sheets and the custom option, read on the six things every one of them asks for, with what each makes easy, what each hides, and a "choose this if" for all four' },
    { href: 'commands.html', title: 'Commands',
      desc: 'every command the screens ask you to run, grouped by what you are doing: what it does with the flags that matter explained, what you should see if it worked, and the page it comes from' }
  ];
  for (const { href, title, desc } of capExtra) {
    const target = path.join(capRoot, href);
    if (!fs.existsSync(target)) continue;
    // They are link cards on the index now (Part 0), so they are already indexed above.
    if (index.some(it => it.url === `capstone/${href}`)) continue;
    const text = stripTags(fs.readFileSync(target, 'utf8')).slice(0, BODY_TEXT_CHARS);
    index.push({ title, desc, section: 'Capstone', group: 'Reference', week: 'Capstone', weekNum: 200, url: `capstone/${href}`, text });
    liveCount++;
  }
}

fs.writeFileSync(path.join(HUB, 'search-index.json'), JSON.stringify(index));
console.log(`search-index.json written: ${liveCount} live items, ${skipped} Building item(s) skipped.${noindexed ? ' ' + noindexed + ' kept out of search (noindex).' : ''}`);
