import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SlowDevelopment = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Slow development"
    time={-7}
    height={2}
    ux={11}
    dx={12}
    ci={13}
  >
    <h1>Slow development</h1>
  </Slide>
);
