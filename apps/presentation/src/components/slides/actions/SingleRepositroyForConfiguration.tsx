import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SingleRepositroyForConfiguration = () => (
  <Slide
    type={SlideType.ACTION}
    name="1. Single Repository for Configuration"
    time={1}
    resolution={1}
  >
    <h2>We will have single repository for all build and execution scripts</h2>
    <h2>Separate generator/executor for:</h2>
    <ul style={{ fontWeight: 'bold', fontSize: '1rem' }}>
      <li>New repository creation</li>
      <li>Application</li>
      <li>Library</li>
      <li>Publishable library (as npm package to artifactory)</li>
      <li>Unit tests</li>
      <li>Linter</li>
      <li>Typescript checker</li>
      <li>E2E tests</li>
      <li>...</li>
    </ul>
    <h2>
      While creating new project you will be able to use any combination of
      those predefined generators/executors
    </h2>
  </Slide>
);
