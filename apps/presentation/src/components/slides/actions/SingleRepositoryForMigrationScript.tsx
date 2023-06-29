import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const SingleRepositoryForMigrationScript = () => (
  <Slide
    type={SlideType.ACTION}
    name="Single Repository for Migration Script"
    time={2}
    resolution={1}
  >
    <h2>1. Analysis of any repository</h2>
    <h2>2. Searching all dependencies</h2>
    <h2>3. Searching all packages</h2>
    <h2>4. Generating report</h2>
    <h2>5. Executing generators</h2>
    <h2>6. Running lint/unit tests/e2e tests in pipeline</h2>
    <h2>7. Pass to team members</h2>
    <h2>8. Merge to master/main and PRs</h2>
  </Slide>
);
