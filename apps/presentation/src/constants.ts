const multiplier = 2;
const initial = 10;
const strokeWidth = 10;
const disposition = 1;

export const EPOCHS = [
  'explanation' as const,
  'issue' as const,
  'resolution' as const,
];

export const SLIDES_STATS_CONFIG = [
  {
    multiplier: multiplier,
    initial: initial + disposition,
    color: '#be4d25',
    title: 'User Experience',
    strokeWidth,
    dataKey: 'ux' as const,
  },
  {
    multiplier: multiplier,
    initial: initial + disposition * 2,
    color: '#49be25',
    title: 'Development Experience',
    strokeWidth,
    dataKey: 'dx' as const,
  },
  {
    multiplier: multiplier,
    initial: initial + disposition * 3,
    color: '#2596be',
    title: 'Continuous Integration',
    strokeWidth,
    dataKey: 'ci' as const,
  },
  {
    multiplier: multiplier,
    initial: initial + disposition * 4,
    color: '#000000',
    title: 'Company Impact',
    strokeWidth,
    dataKey: 'co' as const,
  },
];
