import { Badge, Chip } from '@mui/material';
import { SLIDES_STATS_CONFIG } from '../constants';
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import { times } from 'lodash';

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
        style={{ margin: '6px', display: 'inline-block' }}
      >
        <Chip
          color={themeColor}
          label={times(Math.abs(Math.round(diff / 10)), (index) =>
            diff >= 0 ? (
              <ArrowUpward key={index} />
            ) : (
              <ArrowDownward key={index} />
            )
          )}
        />
      </Badge>
    ) : null;
  });
