import { CollectionReference, collection } from 'firebase/firestore';
import { firestore } from './app/firebase';
import { PresentationData } from './types';

export const presentationsCollection = collection(
  firestore,
  'presentations'
) as CollectionReference<PresentationData>;
