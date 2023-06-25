import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { query } from 'firebase/firestore';
import { slidesCollection } from '../collections';

export const useSlides = () => {
  const ref = query(slidesCollection);
  return useFirestoreQuery(['products'], ref, { subscribe: true });
};
