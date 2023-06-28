import { SlideType } from '../../../types';
import { Slide } from '../../Slide';
import image1 from './images/Screenshot 2023-06-28 at 2.38.50 PM.png';

export const HugeCSSBundles = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Huge CSS Bundle Size"
    time={-10}
    ux={-1}
    dx={-1}
    ci={-1}
    co={-1}
    issue={1}
  >
    <h2>FEKit has 763KB</h2>
    <img src={image1} />
    <h2>
      Real size of styles is around 10MB, but we are using postcss processing to
      remove duplicates
    </h2>
    <h2>Style compilation takes at least 1 minute</h2>
    <h2>Application css bundle is around 900KB</h2>
  </Slide>
);
