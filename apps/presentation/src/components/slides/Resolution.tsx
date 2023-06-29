import { SlideType } from '../../types';
import { Slide } from '../Slide';

export const Resolution = () => (
  <Slide type={SlideType.ISSUE} name="Resolution" time={0} resolution={1}>
    <h1>Migrate to Nx</h1>
  </Slide>
);
