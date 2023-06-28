import { SlideType } from '../../../types';
import { Slide } from '../../Slide';
import image2 from './images/Screenshot 2023-06-28 at 3.57.03 PM.png';
import image3 from './images/Screenshot 2023-06-28 at 3.59.42 PM.png';
import image4 from './images/Screenshot 2023-05-31 at 5.20.07 PM.png';

export const HugeJSBundles = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Huge JS Bundle Size"
    time={-9}
    ux={-1}
    dx={-1}
    co={-1}
    ci={-1}
    issue={1}
  >
    <h2>Every @ctct dependency is generated as UMD package</h2>
    <img src={image2} />
    <h2>
      Those huge libraries have dependency on <b>@ctct/ui-react</b> and we can't
      use <code>import Button from '@ctct/ui-react/components/Button'</code>
    </h2>
    <h3>Just a single library in dependency can make build a lot larger</h3>
    <img src={image3} />
    <h2>
      We have not correct build config for external libraries, as a result in{' '}
      <i>evm-static</i> we had 6 jQuery libraries in a bundle.
    </h2>
    <img src={image4} />
    <h2>We are not using Peer dependencies</h2>
    <h2>A lot of source code is included into built packages</h2>
  </Slide>
);
