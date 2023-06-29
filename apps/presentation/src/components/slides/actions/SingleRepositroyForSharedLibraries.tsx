import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SingleRepositroyForSharedLibraries = () => (
  <Slide
    type={SlideType.ACTION}
    name="Single Repository for Shared Libraries"
    time={7}
    dx={20}
    ux={20}
    co={20}
    resolution={1}
  >
    <h2>
      Since we will be using ES modules which are tree-shakeable, we can have
      single toolset for whole company
    </h2>
    <h2>
      There is a bunch of libraries in JS/React world which will make our life
      simpler:
    </h2>
    <ul style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
      <li>react-query (good bye redux)</li>
      <li>react-hook-form (create complicated form in minutes)</li>
    </ul>
    <h2>There are libraries that are used in every project:</h2>
    <ul style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
      <li>react</li>
      <li>react-dom</li>
      <li>react-router</li>
      <li>lodash</li>
    </ul>
    <h2>
      Single chunk to have all those libraries get downloaded on client's side
    </h2>
    <h2>
      Global update of all repositories to new version (could be automated), for
      breaking changes do manual (or maybe automatic/semi-automatic) migration
    </h2>
  </Slide>
);
