import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const EveryAppHasItsOwnBundle = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Every Application Has Its Own Bundle"
    time={-8}
    ux={-5}
    ci={-5}
    co={-5}
    issue={1}
  >
    <h2>We have separate build for each application.</h2>
    <h2>
      As a result we have separate FEKit and other libraries js/css in each
      application
    </h2>
  </Slide>
);
