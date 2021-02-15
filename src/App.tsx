import React from 'react';
import Home from './pages'
import { QueryClientProvider } from 'react-query'
import queryClient from "./react-query-client";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Country from "./pages/Country";

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Router>
              <Switch>
                  <Route path="/country/:id" exact>
                      <Country />
                  </Route>
                  <Route path="/" exact>
                      <Home />
                  </Route>
              </Switch>
          </Router>
      </QueryClientProvider>
  );
}

export default App;
