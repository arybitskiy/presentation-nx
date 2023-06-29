import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const NoUnifiedLibrariesAcrossCompany = () => (
  <Slide
    type={SlideType.ISSUE}
    name="No Unified Libraries Across Company"
    time={-4}
    ux={-2}
    dx={-2}
    co={-2}
    issue={1}
  >
    <h2>
      With the exception of React, Lerna Generator, FEKit and few others - there
      is no unified policy for libraries
    </h2>
    <h2>
      For example we have no library to handle logic in forms, handling requests
      to backend
    </h2>
    <h2>Different versions of packages in every repository</h2>
    <h2>
      When developer moves from project to project - he has to get used to new
      tools
    </h2>
  </Slide>
);
