import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const NoUnifiedLibrariesAcrossCompany = () => (
  <Slide
    type={SlideType.ISSUE}
    name="No Unified Libraries Across Company"
    time={-4}
    ux={-5}
    dx={-5}
    co={-5}
    issue={1}
  >
    <h2>There is no unified policy for libraries</h2>
    <h2>Everyone uses whatever he wants</h2>
    <h2>Different versions of packages in every repository</h2>
    <h2>
      When developer moves from project to project - he has to get used to new
      tools
    </h2>
  </Slide>
);
