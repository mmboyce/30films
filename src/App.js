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

// The server sleeps after 30min of inactivity, so to ensure the API responses are
// quick, we ping the server. By pinging early, if the server is asleep it will be
// awake in time for the client's requests.
(function wakeServer() {
  const noCacheHeaders = new Headers();
  noCacheHeaders.append('pragma', 'no-cache');
  noCacheHeaders.append('cache-control', 'no-cache');

  fetch(`${apiPath}`, { mode: 'cors', headers: noCacheHeaders });
}());

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
