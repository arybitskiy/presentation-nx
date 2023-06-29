import { KeyboardArrowRightSharp } from '@mui/icons-material';
import { SlideType } from '../../types';
import { Slide } from '../Slide';

import image1 from './Screenshot 2023-06-29 at 5.18.20 PM.png';

export const Resolution = () => (
  <Slide type={SlideType.ISSUE} name="Resolution" time={0} resolution={1}>
    <h2>
      Lerna <KeyboardArrowRightSharp /> Nx
      <br />
      npm <KeyboardArrowRightSharp /> pnpm
      <br />
      webpack/babel <KeyboardArrowRightSharp /> vite / esbuild / swc / rollup
      <img src={image1} />
      <br />
      jest <KeyboardArrowRightSharp /> vitest
      <br />+ typescript
    </h2>
    <h2>Already migrated repositories:</h2>
    <ul style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
      <li>Retention Science UI</li>
      <li>QE Guild @ctct/playwright-ui-automation</li>
      <li>Events V2 evm-static</li>
    </ul>
  </Slide>
);
