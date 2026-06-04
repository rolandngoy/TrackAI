// src/utils/universities.js
// All colleges and universities in Washington State.
// Northwest University is always first.

export const UNIVERSITIES = [
  // ── FEATURED ─────────────────────────────────────────────────
  { n: 'Northwest University',                   s: 'NU',           l: 'Kirkland, WA',        e: '✝️',  t: 'featured' },

  // ── PUBLIC ────────────────────────────────────────────────────
  { n: 'University of Washington',               s: 'UW',           l: 'Seattle, WA',         e: '🌿',  t: 'public' },
  { n: 'UW Bothell',                             s: 'UW Bothell',   l: 'Bothell, WA',         e: '🌿',  t: 'public' },
  { n: 'UW Tacoma',                              s: 'UW Tacoma',    l: 'Tacoma, WA',          e: '🌿',  t: 'public' },
  { n: 'Washington State University',            s: 'WSU',          l: 'Pullman, WA',         e: '🐾',  t: 'public' },
  { n: 'WSU Vancouver',                          s: 'WSU Vancouver',l: 'Vancouver, WA',       e: '🐾',  t: 'public' },
  { n: 'WSU Tri-Cities',                         s: 'WSU TC',       l: 'Richland, WA',        e: '🐾',  t: 'public' },
  { n: 'WSU Everett',                            s: 'WSU Everett',  l: 'Everett, WA',         e: '🐾',  t: 'public' },
  { n: 'Western Washington University',          s: 'WWU',          l: 'Bellingham, WA',      e: '🌊',  t: 'public' },
  { n: 'Eastern Washington University',          s: 'EWU',          l: 'Cheney, WA',          e: '🦅',  t: 'public' },
  { n: 'Central Washington University',          s: 'CWU',          l: 'Ellensburg, WA',      e: '⛰️',  t: 'public' },
  { n: 'The Evergreen State College',            s: 'Evergreen',    l: 'Olympia, WA',         e: '🌲',  t: 'public' },
  { n: 'Georgia Institute of Technology',        s: 'GT',           l: 'Online / Atlanta, GA',e: '⚙️',  t: 'public' },

  // ── PRIVATE ───────────────────────────────────────────────────
  { n: 'Seattle University',                     s: 'SU',           l: 'Seattle, WA',         e: '🔴',  t: 'private' },
  { n: 'Seattle Pacific University',             s: 'SPU',          l: 'Seattle, WA',         e: '✝️',  t: 'private' },
  { n: 'Gonzaga University',                     s: 'Gonzaga',      l: 'Spokane, WA',         e: '🐾',  t: 'private' },
  { n: 'Pacific Lutheran University',            s: 'PLU',          l: 'Tacoma, WA',          e: '✝️',  t: 'private' },
  { n: 'Whitman College',                        s: 'Whitman',      l: 'Walla Walla, WA',     e: '📚',  t: 'private' },
  { n: 'Whitworth University',                   s: 'Whitworth',    l: 'Spokane, WA',         e: '🌲',  t: 'private' },
  { n: 'University of Puget Sound',              s: 'UPS',          l: 'Tacoma, WA',          e: '🌲',  t: 'private' },
  { n: "Saint Martin's University",              s: 'SMU',          l: 'Lacey, WA',           e: '✝️',  t: 'private' },
  { n: 'Walla Walla University',                 s: 'WWU',          l: 'College Place, WA',   e: '✝️',  t: 'private' },
  { n: 'Heritage University',                    s: 'Heritage',     l: 'Toppenish, WA',       e: '🏛️',  t: 'private' },
  { n: 'Trinity Lutheran College',               s: 'TLC',          l: 'Everett, WA',         e: '✝️',  t: 'private' },
  { n: 'DigiPen Institute of Technology',        s: 'DigiPen',      l: 'Redmond, WA',         e: '🎮',  t: 'private' },
  { n: 'Bastyr University',                      s: 'Bastyr',       l: 'Kenmore, WA',         e: '🌿',  t: 'private' },
  { n: 'Cornish College of the Arts',            s: 'Cornish',      l: 'Seattle, WA',         e: '🎨',  t: 'private' },
  { n: 'City University of Seattle',             s: 'CityU',        l: 'Seattle, WA',         e: '🏙️',  t: 'private' },
  { n: 'Antioch University Seattle',             s: 'Antioch',      l: 'Seattle, WA',         e: '📖',  t: 'private' },
  { n: 'The Art Institute of Seattle',           s: 'AI Seattle',   l: 'Seattle, WA',         e: '🎨',  t: 'private' },

  // ── COMMUNITY & TECHNICAL ─────────────────────────────────────
  { n: 'Bellevue College',                       s: 'BC',           l: 'Bellevue, WA',        e: '🏙️',  t: 'community' },
  { n: 'Big Bend Community College',             s: 'BBCC',         l: 'Moses Lake, WA',      e: '🌾',  t: 'community' },
  { n: 'Cascadia College',                       s: 'Cascadia',     l: 'Bothell, WA',         e: '🌊',  t: 'community' },
  { n: 'Clark College',                          s: 'Clark',        l: 'Vancouver, WA',       e: '📚',  t: 'community' },
  { n: 'Clover Park Technical College',          s: 'CPTC',         l: 'Lakewood, WA',        e: '⚙️',  t: 'community' },
  { n: 'Columbia Basin College',                 s: 'CBC',          l: 'Pasco, WA',           e: '🌊',  t: 'community' },
  { n: 'Edmonds College',                        s: 'Edmonds',      l: 'Lynnwood, WA',        e: '🌿',  t: 'community' },
  { n: 'Everett Community College',              s: 'EvCC',         l: 'Everett, WA',         e: '🏔️',  t: 'community' },
  { n: 'Grays Harbor College',                   s: 'GHC',          l: 'Aberdeen, WA',        e: '🌲',  t: 'community' },
  { n: 'Green River College',                    s: 'GRC',          l: 'Auburn, WA',          e: '🌿',  t: 'community' },
  { n: 'Highline College',                       s: 'Highline',     l: 'Des Moines, WA',      e: '✈️',  t: 'community' },
  { n: 'Lake Washington Institute of Technology',s: 'LWIT',         l: 'Kirkland, WA',        e: '💻',  t: 'community' },
  { n: 'Lower Columbia College',                 s: 'LCC',          l: 'Longview, WA',        e: '🌲',  t: 'community' },
  { n: 'Olympic College',                        s: 'OC',           l: 'Bremerton, WA',       e: '⚓',  t: 'community' },
  { n: 'Peninsula College',                      s: 'PC',           l: 'Port Angeles, WA',    e: '🌊',  t: 'community' },
  { n: 'Pierce College',                         s: 'Pierce',       l: 'Lakewood, WA',        e: '🦅',  t: 'community' },
  { n: 'Renton Technical College',               s: 'RTC',          l: 'Renton, WA',          e: '⚙️',  t: 'community' },
  { n: 'Seattle Central College',                s: 'SCC',          l: 'Seattle, WA',         e: '🌆',  t: 'community' },
  { n: 'North Seattle College',                  s: 'NSC',          l: 'Seattle, WA',         e: '🌆',  t: 'community' },
  { n: 'South Seattle College',                  s: 'SSC',          l: 'Seattle, WA',         e: '🌆',  t: 'community' },
  { n: 'Shoreline Community College',            s: 'Shoreline',    l: 'Shoreline, WA',       e: '🌊',  t: 'community' },
  { n: 'Skagit Valley College',                  s: 'SVC',          l: 'Mount Vernon, WA',    e: '🌷',  t: 'community' },
  { n: 'South Puget Sound Community College',    s: 'SPSCC',        l: 'Olympia, WA',         e: '🌲',  t: 'community' },
  { n: 'Spokane Community College',              s: 'SCC',          l: 'Spokane, WA',         e: '🌿',  t: 'community' },
  { n: 'Spokane Falls Community College',        s: 'SFCC',         l: 'Spokane, WA',         e: '🌊',  t: 'community' },
  { n: 'Tacoma Community College',               s: 'TCC',          l: 'Tacoma, WA',          e: '🌲',  t: 'community' },
  { n: 'Walla Walla Community College',          s: 'WWCC',         l: 'Walla Walla, WA',     e: '🍷',  t: 'community' },
  { n: 'Wenatchee Valley College',               s: 'WVC',          l: 'Wenatchee, WA',       e: '🍎',  t: 'community' },
  { n: 'Whatcom Community College',              s: 'WCC',          l: 'Bellingham, WA',      e: '🌊',  t: 'community' },
  { n: 'Yakima Valley College',                  s: 'YVC',          l: 'Yakima, WA',          e: '🍎',  t: 'community' },
];

export function searchUniversities(query = '') {
  const q = query.trim().toLowerCase();
  if (!q) return UNIVERSITIES;
  return UNIVERSITIES.filter(
    u =>
      u.n.toLowerCase().includes(q) ||
      u.s.toLowerCase().includes(q) ||
      u.l.toLowerCase().includes(q)
  );
}

export default UNIVERSITIES;
