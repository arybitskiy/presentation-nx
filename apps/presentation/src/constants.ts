const multiplier = 2;
const initial = 10;

export const EPOCHS = [
  'explanation' as const,
  'issue' as const,
  'resolution' as const,
];

export const SLIDES_STATS_CONFIG = [
  {
    multiplier: multiplier,
    initial: initial + 0.2,
    color: '#be4d25',
    title: 'User Experience',
    strokeWidth: 5,
    dataKey: 'ux' as const,
  },
  {
    multiplier: multiplier,
    initial: initial + 0.4,
    color: '#49be25',
    title: 'Development Experience',
    strokeWidth: 5,
    dataKey: 'dx' as const,
  },
  {
    multiplier: multiplier,
    initial: initial + 0.6,
    color: '#2596be',
    title: 'Continuous Integration',
    strokeWidth: 5,
    dataKey: 'ci' as const,
  },
  {
    multiplier: multiplier,
    initial: initial + 0.8,
    color: '#000000',
    title: 'Company Impact',
    strokeWidth: 5,
    dataKey: 'co' as const,
  },
];
