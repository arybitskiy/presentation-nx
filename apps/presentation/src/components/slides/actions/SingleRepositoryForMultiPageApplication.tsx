import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SingleRepositoryForMultiPageApplication = () => (
  <Slide
    type={SlideType.ACTION}
    name="Single Repository for Multi Page Application"
    time={6}
    ux={40}
    co={40}
    resolution={1}
  >
    <h2>1. All applications will be exported as libraries</h2>
    <h2>2. Those libraries will be imported in single repository</h2>
    <h2>3. Build script will generate all the pages</h2>
    <br />
    <h2>Web worker will preload whole application</h2>
    <h2>Page size will go from 0.5-1MB to around 100KB</h2>
    <h2>React and other libraries will be in separate chunks</h2>
    <h1>
      0 loading time for user, it will work immediatelly after it is get cached
      on user's machine (comparing to 3 seconds now)
    </h1>
  </Slide>
);
