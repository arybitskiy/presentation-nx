import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SlowDevelopment = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Slow development"
    time={-7}
    dx={-3}
    co={-3}
    issue={1}
  >
    <h2>It takes about a minute for the dev build process to rebuild CSS</h2>
    <h2>No Hot Module Replacement for JS</h2>
    <h2>No Hot Module Replacement for language files</h2>
  </Slide>
);
