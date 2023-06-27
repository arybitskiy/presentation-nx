import { useCallback } from 'react';
import { doc, runTransaction } from 'firebase/firestore';

import { presentationsCollection } from '../collections';
import { firestore } from '../app/firebase';

const presentation = doc(presentationsCollection, 'admin');

export const useSetPresentation = () => {
  const showSlide = useCallback(async (slideId: string) => {
    try {
      await runTransaction(firestore, async (transaction) => {
        const sfDoc = await transaction.get(presentation);
        if (!sfDoc.exists()) {
          throw new Error('Document does not exist!');
        }

        const visibleIds = sfDoc.data().visibleIds;
        if (visibleIds.includes(slideId)) {
          return;
        }
        transaction.update(presentation, {
          visibleIds: [...visibleIds, slideId],
          scrollIntoView: `slide-${slideId}`,
        });
      });
    } catch (e) {
      console.log('Transaction failed: ', e);
    }
  }, []);

  const hideSlide = useCallback(async (slideId: string) => {
    try {
      await runTransaction(firestore, async (transaction) => {
        const sfDoc = await transaction.get(presentation);
        if (!sfDoc.exists()) {
          throw new Error('Document does not exist!');
        }

        const visibleIds = sfDoc.data().visibleIds;
        if (!visibleIds.includes(slideId)) {
          return;
        }
        transaction.update(presentation, {
          visibleIds: visibleIds.filter((id) => id !== slideId),
          scrollIntoView: '',
        });
      });
    } catch (e) {
      console.log('Transaction failed: ', e);
    }
  }, []);

  return { showSlide, hideSlide };
};
