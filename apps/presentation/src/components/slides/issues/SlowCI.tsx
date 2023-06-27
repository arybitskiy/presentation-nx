import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SlowCI = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Slow Continuous Integration"
    time={-2}
    ci={-1}
    co={-1}
    issue={1}
  >
    <h1>Slow Continuous Integration</h1>
  </Slide>
);
