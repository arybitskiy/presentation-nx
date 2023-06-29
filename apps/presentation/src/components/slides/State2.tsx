import { SlideType } from '../../types';
import { Slide } from '../Slide';
import { Stats } from '../Stats';

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
    <h1>Chart will show direction of change and value of impact</h1>
    <Stats uxDiff={100} dxDiff={-100} ciDiff={50} coDiff={-30} />
  </Slide>
);
