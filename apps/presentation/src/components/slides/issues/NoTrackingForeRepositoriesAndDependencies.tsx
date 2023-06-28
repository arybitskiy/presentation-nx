import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const NoTrackingForeRepositoriesAndDependencies = () => (
  <Slide
    type={SlideType.ISSUE}
    name="No Tracking For Repositories And Dependencies"
    time={-3}
    dx={-1}
    co={-1}
    issue={1}
  >
    <h2>There is no way to tell what changes are in repositories</h2>
    <h2>Even if there is CHANGELOG - it is manual, like in FEKit</h2>
    <h2>
      We can't say what what packages and apps depends on what packages - we
      can't plan global changes
    </h2>
  </Slide>
);
