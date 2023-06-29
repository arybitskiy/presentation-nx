const multiplier = 1;
const initial = 10;
const strokeWidth = 10;
const disposition = 0.6;

export const EPOCHS = [
  'explanation' as const,
  'issue' as const,
  'resolution' as const,
];

export const SLIDES_STATS_CONFIG = [
  {
    multiplier: multiplier,
    initial: initial + disposition,
    color: '#ed6c02',
    title: 'User Experience',
    strokeWidth,
    dataKey: 'ux' as const,
    themeColor: 'warning' as const,
    shortLabel: 'UX',
  },
  {
    multiplier: multiplier,
    initial: initial + disposition * 2,
    color: '#2e7d32',
    title: 'Development Experience',
    strokeWidth,
    dataKey: 'dx' as const,
    themeColor: 'success' as const,
    shortLabel: 'DX',
  },
  {
    multiplier: multiplier,
    initial: initial + disposition * 3,
    color: '#1976d2',
    title: 'Continuous Integration',
    strokeWidth,
    dataKey: 'ci' as const,
    themeColor: 'primary' as const,
    shortLabel: 'CI',
  },
  {
    multiplier: multiplier,
    initial: initial + disposition * 4,
    color: '#9c27b0',
    title: 'Company Impact',
    strokeWidth,
    dataKey: 'co' as const,
    shortLabel: 'CO',
    themeColor: 'secondary' as const,
  },
];
