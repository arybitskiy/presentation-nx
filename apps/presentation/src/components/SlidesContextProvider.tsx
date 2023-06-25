/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useCallback } from 'react';

import { SlideDocument, RenderTo } from '../types';

export const SlidesContext = createContext<{
  slides: SlideDocument[];
  addSlide: (slide: SlideDocument) => void;
  renderTo?: RenderTo;
  setRenderTo: (renderTo?: RenderTo) => void;
}>({
  slides: [],
  addSlide: () => {},
  setRenderTo: () => {},
});

export const SlidesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [slides, setSlides] = useState<SlideDocument[]>([]);
  const [renderTo, setRenderTo] = useState<RenderTo>();

  const addSlide = useCallback(
    async (slide: SlideDocument) => {
      setSlides((slides) => {
        const foundSlide = slides.find(
          (currentSlide) => currentSlide.name === slide.name
        );
        if (!foundSlide) {
          return [...slides, slide];
        }
        return slides;
      });
    },
    [setSlides]
  );

  return (
    <SlidesContext.Provider value={{ slides, addSlide, renderTo, setRenderTo }}>
      {children}
    </SlidesContext.Provider>
  );
};
