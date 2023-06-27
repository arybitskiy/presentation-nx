import { SlideType } from '../../types';
import { Slide } from '../Slide';

export const State1 = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Intro to presentation"
    time={-100}
    explanation={1}
    yaxis={-10}
  >
    <h1>State 1</h1>
  </Slide>
);
