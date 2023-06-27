/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useCallback, useMemo } from 'react';
import { isEqual } from 'lodash';

import { SlideDocument, RenderTo } from '../types';
import { EPOCHS, SLIDES_STATS_CONFIG } from '../constants';
import { usePresentation } from '../hooks/usePresentation';

export const SlidesContext = createContext<{
  slides: SlideDocument[];
  addSlide: (slide: SlideDocument) => void;
  renderTo?: RenderTo;
  setRenderTo: (renderTo?: RenderTo) => void;
  renderId?: string;
  renderModal: (id: string) => void;
  closeModal: () => void;
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  visibleIds?: string[];
  scrollIntoView?: string;
}>({
  slides: [],
  addSlide: () => {},
  setRenderTo: () => {},
  renderModal: () => {},
  closeModal: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
});

export const SlidesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [slides, setSlides] = useState<SlideDocument[]>([]);
  const [renderTo, setRenderTo] = useState<RenderTo>();
  const [renderId, setRenderId] = useState<string>();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const presentation = usePresentation();

  const renderModal = useCallback(
    (id: string) => {
      setRenderTo(RenderTo.MODAL);
      setRenderId(id);
    },
    [setRenderId, setRenderTo]
  );

  const closeModal = useCallback(() => {
    setRenderTo(undefined);
  }, [setRenderTo]);

  const addSlide = useCallback(
    async (slide: SlideDocument) => {
      setSlides((slides) => {
        const foundSlide = slides.find(
          (currentSlide) => currentSlide.name === slide.name
        );

        if (!foundSlide) {
          return [...slides, slide];
        }

        if (isEqual(foundSlide, slide)) {
          return slides;
        }

        return slides.map((currentSlide) => {
          if (currentSlide.id === slide.id) {
            return slide;
          }

          return currentSlide;
        });
      });
    },
    [setSlides]
  );

  const calculatedSlides = useMemo(() => {
    const sortedSlides = slides
      .filter(({ id }) => isAdmin || presentation?.visibleIds?.includes(id))
      .sort((a, b) => a.time - b.time);
    const values = {} as any;
    const prevEpochs = {} as any;

    return sortedSlides.map((slide, index) => {
      let min = Number.MAX_VALUE;
      let max = Number.MIN_VALUE;
      const isFirst = index === 0;
      const isLast = index === sortedSlides.length - 1;

      EPOCHS.forEach((epoch) => {
        delete values[epoch];
      });

      SLIDES_STATS_CONFIG.forEach((stat) => {
        values[stat.dataKey] =
          (values[stat.dataKey] ?? stat.initial) +
          (slide[stat.dataKey] ?? 0) * stat.multiplier;
        min = Math.min(min ?? values[stat.dataKey], values[stat.dataKey]);
        max = Math.max(max ?? values[stat.dataKey], values[stat.dataKey]);
        values[`showDot${stat.dataKey}`] =
          typeof slide[stat.dataKey] !== 'undefined' || isFirst || isLast;
        // if (min <= 3) {
        values.tooltip = slide.tooltip ?? max + 0;
        // } else {
        // values.tooltip = slide.tooltip ?? min - 0;
        // }
      });

      EPOCHS.forEach((epoch) => {
        if (typeof (slide as any)[epoch] === 'number') {
          values[epoch] = max + 100;
        }
      });

      const ret = {
        ...slide,
        ...values,
      };

      EPOCHS.forEach((epoch) => {
        if (
          typeof ret[epoch] !== 'number' &&
          typeof prevEpochs[epoch] === 'number'
        ) {
          ret[epoch] = max + 100;
        }
        delete prevEpochs[epoch];
        if (typeof (slide as any)[epoch] === 'number') {
          prevEpochs[epoch] = max;
        }
      });

      return ret;
    });
  }, [slides, isAdmin, presentation]);

  return (
    <SlidesContext.Provider
      value={{
        slides: calculatedSlides,
        addSlide,
        renderTo,
        setRenderTo,
        renderModal,
        renderId,
        closeModal,
        isAdmin,
        setIsAdmin,
        visibleIds: presentation?.visibleIds,
        scrollIntoView: presentation?.scrollIntoView,
      }}
    >
      {children}
    </SlidesContext.Provider>
  );
};
