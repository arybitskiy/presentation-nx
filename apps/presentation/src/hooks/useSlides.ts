import { useFirestoreQuery } from '@react-query-firebase/firestore';
import { query } from 'firebase/firestore';
import { slidesCollection } from '../collections';

export const QUERY_KEY = 'slides';

export const useSlides = () => {
  const ref = query(slidesCollection);
  return useFirestoreQuery([QUERY_KEY], ref, { subscribe: true });
};
