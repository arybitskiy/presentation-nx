import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const MigrationOfAllCompanyRepositories = () => (
  <Slide
    type={SlideType.ACTION}
    name="3. Migration Of Company Repositories"
    time={3}
    resolution={1}
  >
    <h2>1. Start from applications</h2>
    <h2>2. Updating tier-1 dependencies</h2>
    <h2>2. Updating tier-2 dependencies</h2>
    <h2>2. Updating tier-n dependencies</h2>
  </Slide>
);
