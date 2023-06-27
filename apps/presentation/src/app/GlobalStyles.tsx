import { GlobalStyles as GlobalStylesOriginal } from '@mui/material';

export const GlobalStyles = () => (
  <GlobalStylesOriginal
    styles={`
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

foreignObject {
  overflow: visible;
}

.recharts-default-legend {
  position: fixed;
}

.recharts-legend-item-text {
  vertical-align: middle;
}
`}
  />
);
