import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import { Slides } from '../components/Slides';
import { GlobalStyles } from './GlobalStyles';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Slides />
    </QueryClientProvider>
  );
}

export default App;
