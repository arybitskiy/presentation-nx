import { SlideType } from '../../../types';
import { Slide } from '../../Slide';
import image2 from './images/Screenshot 2023-06-28 at 3.57.03 PM.png';

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
  </Slide>
);
