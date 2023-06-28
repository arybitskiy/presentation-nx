import { Badge, Chip } from '@mui/material';
import { SLIDES_STATS_CONFIG } from '../constants';

interface StatsProps {
  uxDiff?: number;
  dxDiff?: number;
  ciDiff?: number;
  coDiff?: number;
}

export const Stats = (props: StatsProps) =>
  SLIDES_STATS_CONFIG.map(({ themeColor, shortLabel, dataKey }) => {
    const diff = props[`${dataKey}Diff`];
    return typeof diff === 'number' ? (
      <Badge
        badgeContent={shortLabel}
        color={themeColor}
        style={{ margin: '0 6px', display: 'inline-block' }}
      >
        <Chip color={themeColor} label={`${diff >= 0 ? '+' : ''}${diff}%`} />
      </Badge>
    ) : null;
  });
