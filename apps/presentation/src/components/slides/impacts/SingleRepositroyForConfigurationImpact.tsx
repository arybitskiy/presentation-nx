import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SingleRepositroyForConfigurationImpact = () => (
  <Slide
    type={SlideType.IMPACT}
    name="Result: Single Repository for Configuration"
    time={1}
    dx={3}
    co={2}
    resolution={1}
  >
    <h2>
      Easy propagation of changes to all repositories (renovate @Sam Garfinkel)
    </h2>
    <h2>
      Global (single team) management of configuration, as a result - lower
      development load
    </h2>
    <h2>
      Easy generation of new project / easy extendinsion of existing project
    </h2>
  </Slide>
);
