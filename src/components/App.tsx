import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      {/* Adding the QueryParamProvider so that I can have a persistant query string between renders */}
      <QueryParamProvider ReactRouterRoute={Route}>
        <Home />
      </QueryParamProvider>
    </Router>
  );
}

export default App;
