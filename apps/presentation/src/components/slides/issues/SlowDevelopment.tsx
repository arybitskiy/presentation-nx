import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SlowDevelopment = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Slow development"
    time={-7}
    dx={-1}
    co={-1}
    issue={1}
  >
    <h1>Slow development</h1>
  </Slide>
);
