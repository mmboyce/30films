import React from 'react';
import tmdbPrimaryFull from './tmdb_primary_full.svg';
import './Credit.css';

export default function Credit() {
  return (
    <div className="tmdb-powered-by">
      <p>Powered By:</p>
      <a href="https://www.themoviedb.org/">
        <img src={tmdbPrimaryFull} className="tmdb-logo" alt="tmdb" />
      </a>
    </div>
  );
}
