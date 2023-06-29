import { SlideType } from '../../../types';
import { Slide } from '../../Slide';
import image1 from './images/Screenshot 2023-06-13 at 3.28.57 PM.png';

export const CodeAnalysisTools = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Code Analysis Tools Do Nothing"
    time={-2}
    dx={-2}
    ci={-3}
    co={-3}
    issue={1}
  >
    <h2>Checkmarx constantly failing</h2>
    <img src={image1} />
    <h2>
      Sonar wasn't working at all because of wrong config in evm-static (does it
      apply to other repositories?)
    </h2>
  </Slide>
);
