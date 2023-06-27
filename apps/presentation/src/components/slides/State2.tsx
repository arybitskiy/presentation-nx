import { SlideType } from '../../types';
import { Slide } from '../Slide';

export const State2 = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Next State"
    time={-99}
    ux={1}
    dx={1}
    ci={1}
    co={1}
    explanation={1}
    yaxis={30}
  >
    <h1>State 2</h1>
  </Slide>
);
