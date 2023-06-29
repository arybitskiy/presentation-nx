import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Dot,
  DotProps,
  ResponsiveContainer,
  LineChart,
  Legend,
  Line,
  ComposedChart,
} from 'recharts';
import {
  Badge,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Typography,
  GlobalStyles as GlobalStylesOriginal,
} from '@mui/material';
import { TimelineDot } from '@mui/lab';
import { Fragment, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { SLIDES_STATS_CONFIG } from '../constants';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { SlidesContext } from './SlidesContextProvider';
import { SlideDocument } from '../types';
import { useSetPresentation } from '../hooks/useSetPresentation';
import { Stats } from './Stats';

const StyledTimelineDot = styled(TimelineDot)`
  position: relative;
  left: -11px;
  top: -24px;
`;

const StyledCard = styled(Card)`
  transform: translate(-50%, -130%);
`;

const UserStyles = () => (
  <GlobalStylesOriginal
    styles={`
html,
body {
  overflow: hidden;
}
`}
  />
);
const WIDTH_PER_SLIDE = 400;

const CustomizedDot = (
  props: DotProps & {
    payload: SlideDocument;
    dataKey: string;
    stroke: string;
  }
) => {
  const { renderModal, isAdmin, visibleIds } = useContext(SlidesContext);
  const { showSlide, hideSlide } = useSetPresentation();
  const {
    cx,
    cy,
    dataKey,
    payload: { name, id },
    payload,
    stroke,
  } = props;

  const isVisible = visibleIds?.includes(id);

  const content =
    dataKey === 'tooltip' ? (
      <StyledCard
        sx={{ minWidth: 340 }}
        onClick={isAdmin ? undefined : () => renderModal(id)}
        id={`slide-${id}`}
      >
        <CardContent>
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
        </CardContent>
        <div style={{ padding: 12 }}>
          <Stats {...payload} />
        </div>
        {isAdmin && (
          <CardActions>
            {isVisible ? (
              <IconButton
                onClick={() => {
                  hideSlide(id);
                }}
              >
                <Visibility />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  showSlide(id);
                }}
              >
                <VisibilityOff />
              </IconButton>
            )}
          </CardActions>
        )}
      </StyledCard>
    ) : //@ts-ignore
    payload[`showDot${dataKey}`] ? (
      <StyledTimelineDot
        variant="filled"
        style={{
          backgroundColor:
            stroke === '#FFFFFF00'
              ? SLIDES_STATS_CONFIG.find(
                  ({ dataKey: dataKeyCur }) => dataKey === dataKeyCur
                )?.color || stroke
              : stroke,
          borderWidth: '8px',
        }}
      />
    ) : null;

  return (
    <foreignObject x={cx} y={cy} width="1" height="1">
      {content}
    </foreignObject>
  );
};

interface PresentationProps {
  admin?: boolean;
}

export const Presentation = ({ admin }: PresentationProps) => {
  const { slides, setIsAdmin, scrollIntoView } = useContext(SlidesContext);

  useEffect(() => {
    setIsAdmin(Boolean(admin));
    if (scrollIntoView && !admin) {
      const element = document.getElementById(scrollIntoView);
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  }, [admin, setIsAdmin, scrollIntoView]);

  return (
    <>
      {!admin && <UserStyles />}
      {slides.length ? (
        <ResponsiveContainer
          width={WIDTH_PER_SLIDE * (slides.length || 1)}
          height={admin ? '100%' : 1500}
        >
          <ComposedChart
            data={slides}
            margin={{ top: 50, right: 200, bottom: 50, left: 200 }}
          >
            <defs>
              <linearGradient id="colorExplanation" x1="0" y1="0" x2="0" y2="1">
                <stop offset="90%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorIssue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="90%" stopColor="#ca829d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ca829d" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorResolution" x1="0" y1="0" x2="0" y2="1">
                <stop offset="90%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              hide
              dataKey="time"
              tickFormatter={(value) => {
                if (value === 0) {
                  return "We're here";
                }
                return value >= 0
                  ? `${value} month${value > 1 ? 's' : ''}`
                  : '';
              }}
              ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
              tickCount={2}
            />
            <YAxis dataKey="yaxis" axisLine={false} tick={false} />
            {/* <Tooltip /> */}
            <Legend
              iconSize={16}
              wrapperStyle={{ fontSize: '1.4rem', fontWeight: 'bold' }}
              payload={SLIDES_STATS_CONFIG.map(({ title, color }) => ({
                value: title,
                color,
                type: 'circle',
              }))}
            />
            <Area
              type="monotone"
              dataKey="explanation"
              fill="url(#colorExplanation)"
              stroke="#FFFFFF00"
              baseLine={1}
            />
            <Area
              type="monotone"
              dataKey="issue"
              fill="url(#colorIssue)"
              stroke="#FFFFFF00"
            />
            <Area
              type="monotone"
              dataKey="resolution"
              fill="url(#colorResolution)"
              stroke="#FFFFFF00"
            />
            {SLIDES_STATS_CONFIG.map(
              ({ color, strokeWidth, dataKey, title }) => (
                <Fragment key={dataKey}>
                  <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke="#FFFFFF00"
                    strokeWidth={strokeWidth}
                    name={title}
                    isAnimationActive={false}
                    legendType="none"
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    dot={<CustomizedDot />}
                  />
                  <Line
                    type="monotone"
                    dataKey={dataKey}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    name={title}
                    isAnimationActive={!admin}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    dot={<CustomizedDot />}
                  />
                </Fragment>
              )
            )}
            <Line
              type="monotone"
              dataKey="tooltip"
              stroke="#FFFFFF00"
              strokeWidth={2}
              isAnimationActive={false}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              dot={<CustomizedDot />}
            />
          </ComposedChart>
        </ResponsiveContainer>
      ) : null}
    </>
  );
};
