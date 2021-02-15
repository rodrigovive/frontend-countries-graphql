import React from 'react';
import Home from './pages'
import { QueryClientProvider } from 'react-query'
import queryClient from "./react-query-client";

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Home />
      </QueryClientProvider>
  );
}

export default App;
