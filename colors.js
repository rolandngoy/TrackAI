// src/utils/colors.js
// Single source of truth for TrackAI's color system.
// Import this everywhere — never hardcode hex values in screens.

export const C = {
  BG:       '#0d0f1a',
  CARD:     '#151826',
  CARD2:    '#0f1320',
  BORDER:   '#22263d',
  TEXT:     '#e2e8ff',
  TEXT2:    '#c8d0f0',
  MUTED:    '#505878',
  MUTED2:   '#404868',

  // Student (blue)
  S:        '#4a9eff',
  S2:       '#00e5b0',
  S_BG:     '#0f1e35',
  S_BORDER: '#1a3a5c',

  // Professor (purple)
  P:        '#a78bfa',
  P2:       '#7c5cbf',
  P_BG:     '#1e1530',
  P_BORDER: '#2a1a4a',

  // Status
  SUCCESS:  '#00c090',
  SUCCESS_BG: '#0a2520',
  WARNING:  '#f0a040',
  WARNING_BG: '#2a1e0a',
  DANGER:   '#e05060',
  DANGER_BG: '#2a1015',
};

export default C;
