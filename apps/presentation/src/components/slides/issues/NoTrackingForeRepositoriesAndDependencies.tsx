import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const NoTrackingForeRepositoriesAndDependencies = () => (
  <Slide
    type={SlideType.ISSUE}
    name="No Tracking For Repositories And Dependencies"
    time={-3}
    dx={-2}
    co={-2}
    issue={1}
  >
    <h2>There is no way to tell what changes are in repositories</h2>
    <h2>Even if there is CHANGELOG - it is manual, like in FEKit</h2>
    <h2>
      We can't say what packages and apps depend on what packages - hard to plan
      global changes
    </h2>
  </Slide>
);
