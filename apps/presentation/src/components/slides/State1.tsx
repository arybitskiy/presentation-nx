import { SlideType } from '../../types';
import { Slide } from '../Slide';
import image1 from './nx-logo-8EB5A23B44-seeklogo.com.png';
import image2 from './logo-with-shadow.png';

export const State1 = () => (
  <Slide
    type={SlideType.ISSUE}
    name="Intro to presentation"
    time={-100}
    explanation={1}
    yaxis={-5}
  >
    <h2>
      Reason and benefits of migration frontend repositories to Nx And Vite
    </h2>
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={image1} />
      </div>
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={image2} />
      </div>
    </div>
  </Slide>
);
