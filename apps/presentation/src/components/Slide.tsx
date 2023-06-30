import React, { useContext, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { kebabCase } from 'lodash';
import ReactMarkdown from 'react-markdown';
import {
  Paper,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';

import { SlidesContext } from './SlidesContextProvider';
import { RenderTo, SlideData } from '../types';
import { Stats } from './Stats';

interface SlideProps extends SlideData {
  children: React.ReactNode;
}

export const Slide = (props: SlideProps) => {
  const { name, children, ...rest } = props;

  const { addSlide, renderTo, renderId, closeModal, slides } =
    useContext(SlidesContext);

  const id = kebabCase(name);

  useEffect(() => {
    addSlide({ id, name, ...rest });
  }, [addSlide, id, name, rest]);

  const renderedChildren = useMemo(
    () => (
      <Typography>
        {typeof children === 'string' ? (
          <ReactMarkdown>{children}</ReactMarkdown>
        ) : (
          children
        )}
      </Typography>
    ),
    [children]
  );

  if (renderTo === RenderTo.DIV_WITH_ID) {
    const target = document.getElementById(id);
    if (target) {
      return ReactDOM.createPortal(<Paper>{renderedChildren}</Paper>, target);
    }
  }

  if (renderTo === RenderTo.MODAL && renderId === id) {
    const slide = slides.find((slide) => slide.id === id);
    return (
      <Dialog open scroll="paper" fullWidth maxWidth="xl" onClose={closeModal}>
        <DialogTitle>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <div>{name}</div>
            <div>
              <Stats {...slide} />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>{renderedChildren}</DialogContent>
      </Dialog>
    );
  }

  return null;
};
