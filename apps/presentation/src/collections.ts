import { collection } from 'firebase/firestore';
import { firestore } from './app/firebase';
import { Slide } from './types';

export const slidesCollection = collection(
  firestore,
  'slides'
).withConverter<Slide>({
  toFirestore: (slide) => {
    return {
      name: slide.name,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      name: data.name,
    };
  },
});
