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
} from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import { TimelineDot } from '@mui/lab';
import { useContext } from 'react';
import { SlidesContext } from './SlidesContextProvider';
import styled from '@emotion/styled';

const data = [
  {
    name: 'test',
    underweight: 36.3,
    normal: 11.3,
    overweight: 6.8,
    obese: 56.7,
  },
  {
    name: 'test2',
    underweight: 70.3,
    normal: 22.7,
    overweight: 15.9,
    obese: 2.2,
  },
];

const StyledTimelineDot = styled(TimelineDot)`
  position: relative;
  left: -6px;
  top: -18px;
`;

const StyledCard = styled(Card)`
  transform: translate(-50%, -100%);
`;

const CustomizedDot = (
  props: DotProps & {
    payload: { name: string };
    dataKey: string;
    stroke: string;
  }
) => {
  const {
    cx,
    cy,
    dataKey,
    payload: { name },
    stroke,
  } = props;

  const content =
    dataKey === 'tooltip' ? (
      <StyledCard sx={{ minWidth: 200 }}>
        <CardContent>
          <Typography>{name}</Typography>
        </CardContent>
      </StyledCard>
    ) : (
      <StyledTimelineDot variant="filled" style={{ backgroundColor: stroke }} />
    );

  return (
    <foreignObject x={cx} y={cy} width="1" height="1">
      {content}
    </foreignObject>
  );
};

export const Presentation = () => {
  const { slides } = useContext(SlidesContext);

  return (
    <ResponsiveContainer width={4000} height="100%">
      <LineChart
        data={slides}
        margin={{ top: 50, right: 200, bottom: 50, left: 200 }}
      >
        <XAxis dataKey="time" />
        {/* <YAxis dataKey="height" /> */}
        {/* <Tooltip /> */}
        <Legend />
        <Line
          type="monotone"
          dataKey="ux"
          stroke="#be4d25"
          strokeWidth={2}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          dot={<CustomizedDot />}
        />
        <Line
          type="monotone"
          dataKey="dx"
          stroke="#49be25"
          strokeWidth={2}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          dot={<CustomizedDot />}
        />
        <Line
          type="monotone"
          dataKey="ci"
          stroke="#2596be"
          strokeWidth={2}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          dot={<CustomizedDot />}
        />
        <Line
          type="monotone"
          dataKey="tooltip"
          stroke="#FFFFFF00"
          strokeWidth={2}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          dot={<CustomizedDot />}
        />
      </LineChart>
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
  );
};
