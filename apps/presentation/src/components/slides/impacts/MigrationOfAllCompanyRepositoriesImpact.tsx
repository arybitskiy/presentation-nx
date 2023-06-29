import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const MigrationOfAllCompanyRepositoriesImpact = () => (
  <Slide
    type={SlideType.IMPACT}
    name="Result: Migration of Company Repositories"
    time={4}
    dx={5}
    ux={5}
    ci={5}
    co={5}
    resolution={1}
  >
    <h2>
      Latest tools: nx, pnpm, vite, swc, vitest, esbuild, rollup, react 18 etc.
    </h2>
    <h2>
      Tree shaking, ES modules, correct config: JS bundle size reduced from
      5-10MB to 0.5-1MB (depends on project). Load time reduced from 3 seconds
      to around 1 second.
    </h2>
    <h2>Hot module replacement for JS, CSS and language files</h2>
    <h2>Conventional commits and CHANGELOG generation</h2>
    <h2>No transpilling needed for build, so it will be fast</h2>
  </Slide>
);
