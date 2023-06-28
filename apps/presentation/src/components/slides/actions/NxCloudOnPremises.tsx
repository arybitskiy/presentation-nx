import { SlideType } from '../../../types';
import { Slide } from '../../Slide';
import image1 from './images/nx-hashing.svg';
import image2 from './images/cache.svg';
import image3 from './images/task-graph-big.svg';
import image4 from './images/distributed-caching-and-task-execution.svg';
import image5 from './images/results.png';

export const NxCloudOnPremises = () => (
  <Slide
    type={SlideType.ACTION}
    name="Nx Cloud On Premises"
    time={5}
    dx={1}
    co={1}
    ci={1}
    resolution={1}
  >
    <h2>
      Cache jobs across all environments (single job in single library/app will
      be run once for code snapshot)
    </h2>
    <h4>Hashing</h4>
    <img src={image1} />
    <h4>Caching</h4>
    <img src={image2} />
    <h4>Task graph</h4>
    <img src={image3} />
    <h2>Distributed task execution</h2>
    <img src={image4} />
    <img src={image5} />
    <h2>
      Computation on demand, nx cloud is scallable - we use only those servers
      that we need
    </h2>
    <h2>Stable, reliable, fast CI</h2>
  </Slide>
);
