import React from 'react';
import logo from './logo.svg';
import tmdbPrimaryFull from './tmdb_primary_full.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="tmdb-powered-by">
          <p>Powered By:</p>
          <a href="https://www.themoviedb.org/">
            <img src={tmdbPrimaryFull} className="tmdb-logo" alt="tmdb" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
