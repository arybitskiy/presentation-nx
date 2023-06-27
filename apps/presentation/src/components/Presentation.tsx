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
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { TimelineDot } from '@mui/lab';
import { Fragment, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { SLIDES_STATS_CONFIG } from '../constants';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { SlidesContext } from './SlidesContextProvider';
import { SlideDocument } from '../types';
import { useSetPresentation } from '../hooks/useSetPresentation';

const StyledTimelineDot = styled(TimelineDot)`
  position: relative;
  left: -6px;
  top: -18px;
`;

const StyledCard = styled(Card)`
  transform: translate(-50%, -130%);
`;

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
        sx={{ minWidth: 200 }}
        onClick={isAdmin ? undefined : () => renderModal(id)}
        id={`slide-${id}`}
      >
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
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

  return slides.length ? (
    <ResponsiveContainer
      width={WIDTH_PER_SLIDE * (slides.length || 1)}
      height="100%"
    >
      <ComposedChart
        data={slides}
        margin={{ top: 50, right: 200, bottom: 50, left: 200 }}
      >
        <defs>
          <linearGradient id="colorExplanation" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorIssue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#ca829d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ca829d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorResolution" x1="0" y1="0" x2="0" y2="1">
            <stop offset="30%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          tickFormatter={(value) =>
            value >= 0 ? `${value} month${value > 1 ? 's' : ''}` : ''
          }
        />
        <YAxis dataKey="yaxis" axisLine={false} tick={false} />
        {/* <Tooltip /> */}
        <Legend />
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
        {SLIDES_STATS_CONFIG.map(({ color, strokeWidth, dataKey, title }) => (
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
        ))}
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
      {/* <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="name">
            <Label value="Višina (cm)" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label
              value="Teža (kg)"
              angle={-90}
              position="insideLeft"
              textAnchor="middle"
            />
          </YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Area
            type="monotone"
            dataKey="underweight"
            stackId="1"
            stroke="#8884d8"
            fill="#7d7dff"
            animationDuration={3500}
            name="Podhranjenost"
            dot={<CustomizedDot />}
          />
          <Area
            type="monotone"
            dataKey="normal"
            stackId="1"
            stroke="#82ca9d"
            fill="#7dff7d"
            animationDuration={3500}
            name="Normalna teža"
          />
          <Area
            type="monotone"
            dataKey="overweight"
            stackId="1"
            stroke="#ffc658"
            fill="#ffff7d"
            animationDuration={3500}
            name="Prekomerna teža"
          />
          <Area
            type="monotone"
            dataKey="obese"
            stackId="1"
            stroke="#ffc658"
            fill="#ff7d7d"
            animationDuration={3500}
            name="Debelost"
          />
        </AreaChart> */}
    </ResponsiveContainer>
  ) : null;
};
