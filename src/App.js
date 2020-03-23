import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';
import { Grid } from 'semantic-ui-react'


function App() {
  return (
    <Router>
      <div>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
