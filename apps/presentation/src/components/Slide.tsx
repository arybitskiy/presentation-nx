import { SlideType } from '../types';

interface SlideProps {
  type: SlideType;
  name: string;
}

export const Slide = (props: SlideProps) => {
  return 'slide';
};
