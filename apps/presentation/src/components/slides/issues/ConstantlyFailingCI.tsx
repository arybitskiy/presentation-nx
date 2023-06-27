import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const ConstantlyFailingCI = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Constantly Failing CI"
    time={-1}
    ci={-1}
    co={-1}
    issue={1}
  >
    <h1>Constantly Failing CI</h1>
  </Slide>
);
