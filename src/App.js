import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/home/Home';
import Results from './components/results/Results';

const apiPath = 'http://192.168.1.226:3000';

// wake Heroku server if it's asleep
fetch(`${apiPath}`, { mode: 'cors' });

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/results">
          <Results apiPath={apiPath} />
        </Route>
        <Route path="/">
          <Home apiPath={apiPath} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
