import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { SlidesRegistry } from '../components/SlidesRegistry';
import { GlobalStyles } from './GlobalStyles';
import { SlidesContextProvider } from '../components/SlidesContextProvider';
import { SlidesList } from '../components/SlidesList';
import { Presentation } from '../components/Presentation';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <CssBaseline />
      <SlidesContextProvider>
        <SlidesRegistry />
        <BrowserRouter basename={process.env.REACT_ROUTER_DOM_BASENAME}>
          <Routes>
            <Route path="/" element={<Presentation />}></Route>
            <Route path="/admin" element={<Presentation admin />}></Route>
            <Route path="/slides/*" element={<SlidesList />}></Route>
          </Routes>
        </BrowserRouter>
      </SlidesContextProvider>
    </QueryClientProvider>
  );
}

export default App;
