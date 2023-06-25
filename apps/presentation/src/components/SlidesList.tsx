import { useContext, useEffect } from 'react';

import { SlidesContext } from './SlidesContextProvider';
import { Grid } from '@mui/material';
import { RenderTo } from '../types';

export const SlidesList = () => {
  const { slides, setRenderTo } = useContext(SlidesContext);

  useEffect(() => {
    setTimeout(() => {
      setRenderTo(RenderTo.DIV_WITH_ID);
    });

    return () => {
      setRenderTo();
    };
  }, [setRenderTo]);

  return (
    <Grid container spacing={2}>
      {slides.map((slide) => (
        <Grid item xs={3} key={slide.id} id={slide.id} />
      ))}
    </Grid>
  );
};
