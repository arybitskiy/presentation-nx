import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const EachRepositoryHasItsOwnConfig = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Each Repository Has Its Own Config"
    time={-5}
    dx={-1}
    co={-1}
    issue={1}
  >
    <h2>Every repository has it's own configuration of build scripts</h2>
    <h2>
      When there is new version of frontend generator comes out - we need to run
      migration and it updates those scripts
    </h2>
  </Slide>
);
