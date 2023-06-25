import { collection } from 'firebase/firestore';
import { firestore } from './app/firebase';
import { SlideData } from './types';

// export const slidesCollection = collection(
//   firestore,
//   'slides'
// ).withConverter<SlideData>({
//   toFirestore: (slide) => {
//     return {
//       name: slide.name,
//     };
//   },
//   fromFirestore: (snapshot, options) => {
//     const data = snapshot.data(options);
//     return {
//       id: snapshot.id,
//       name: data.name,
//     };
//   },
// });
