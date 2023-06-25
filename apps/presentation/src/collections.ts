import { collection } from 'firebase/firestore';
import { firestore } from './app/firebase';
import { SlideDocument } from './types';

export const slidesCollection = collection(
  firestore,
  'slides'
).withConverter<SlideDocument>({
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
