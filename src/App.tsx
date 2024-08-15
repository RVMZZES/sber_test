import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PopularProjects from './components/PopularProjects';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PopularProjects />
    </QueryClientProvider>
  );
};

export default App;
