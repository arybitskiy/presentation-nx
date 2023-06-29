import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const ComplicatedBuildConfig = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Outdated Build Config"
    time={-6}
    dx={-1}
    co={-1}
    issue={1}
  >
    <h2>
      We have a lot of configs that makes it hard to detect what is broken or
      not and how it works
    </h2>
    <h2>
      For example we should manually add language json anytime we add new
      package if that package has translations, that could be automated
    </h2>
  </Slide>
);
