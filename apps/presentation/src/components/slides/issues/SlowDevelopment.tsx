import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SlowDevelopment = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Slow development"
    time={-7}
    dx={-3}
    co={-5}
    ux={-5}
    issue={1}
  >
    <h2>At least 1 minute for CSS reload because of FEKit size</h2>
    <h2>No Hot Module Replacement for JS</h2>
    <h2>Need to restart dev server to see changes in language files</h2>
  </Slide>
);
