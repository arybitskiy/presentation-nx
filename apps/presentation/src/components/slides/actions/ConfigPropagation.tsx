import { SlideType } from '../../../types';
import { Slide } from '../../Slide';

export const ConfigPropagation = () => (
  <Slide
    type={SlideType.ACTION}
    name="Config Propagation"
    time={1}
    dx={1}
    co={1}
    resolution={1}
  >{`
  # Single config - easy propagation to other repositories
  ## short description
  ### shorter description
  #### shortest description
  # Single config - easy propagation to other repositories
  ## short description
  ### shorter description
  #### shortest description
  # Single config - easy propagation to other repositories
  ## short description
  ### shorter description
  #### shortest description
  # Single config - easy propagation to other repositories
  ## short description
  ### shorter description
  #### shortest description
`}</Slide>
);
