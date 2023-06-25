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
} from 'recharts';
import { Button } from '@mui/material';
import { TimelineDot } from '@mui/lab';

import { useSlides } from '../hooks/useSlides';

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

const CustomizedDot = (props: DotProps) => {
  const { cx, cy } = props;
  console.log(props);
  return (
    // <text>asdasd</text>
    // <circle
    //   cx={cx - 10}
    //   cy={cy - 10}
    //   r={25}
    //   stroke="black"
    //   strokeWidth={3}
    //   fill="red"
    // ><text>asd</text></circle>
    // <text x={cx} y={cy}>
    //   {props.payload.name}
    // </text>
    <foreignObject x={cx} y={cy} width="1" height="1">
      <TimelineDot />
    </foreignObject>
  );
};

export const Slides = () => {
  return (
    <>
      <ResponsiveContainer width={8000} height="100%">
        <AreaChart
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
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
