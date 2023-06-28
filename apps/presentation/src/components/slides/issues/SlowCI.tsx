import { SlideType } from '../../../types';
import { Slide } from '../../Slide';
import image1 from './images/image.png';
import image2 from './images/image (1).png';

export const SlowCI = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Slow Continuous Integration"
    time={-2}
    ci={-1}
    co={-1}
    issue={1}
  >
    <h2>Our CI is very slow and constantly failing</h2>
    <h2>Jenkins server has:</h2>
    <ul style={{ fontWeight: 'bold', fontSize: '1rem' }}>
      <li>
        main: 8GB RAM
        <br />
        <img src={image1} />
      </li>
      <li>
        agent: 16GB RAM, no swap file
        <br />
        <img src={image2} />
      </li>
    </ul>
  </Slide>
);
