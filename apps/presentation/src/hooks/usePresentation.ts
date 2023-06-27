import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { presentationsCollection } from '../collections';
import { PresentationData } from '../types';

const presentation = doc(presentationsCollection, 'admin');

export const usePresentation = () => {
  const [data, setData] = useState<PresentationData | undefined>({
    visibleIds: [],
  });

  useEffect(() => {
    return onSnapshot(presentation, (doc) => {
      setData(doc.data());
    });
  }, [setData]);

  return data;
};
