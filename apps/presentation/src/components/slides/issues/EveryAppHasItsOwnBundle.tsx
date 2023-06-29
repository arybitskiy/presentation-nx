import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const EveryAppHasItsOwnBundle = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Every Application Has Its Own Bundle"
    time={-8}
    ux={-3}
    co={-3}
    issue={1}
  >
    <h2>We have separate build for each application</h2>
    <h2>
      As a result we have separate FEKit and other libraries js/css in each
      application
    </h2>
    <h2>
      When user moves between pages - on every page he loads separate copy of
      FEKit, also versions of FEKit might be different: on each page he loads
      763KB of CSS, at least 1MB of JavaScript
    </h2>
  </Slide>
);
