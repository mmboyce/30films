import React from 'react';

import Col from 'react-bootstrap/Col';

import tmdbPrimaryFull from './tmdb_primary_full.svg';
import './Credit.css';

export default function Credit() {
  return (
    <>
      <Col>
        <p>Created By:</p>
        <ul className="credits-nav-list">
          <li>
            <a href="https://mmboyce.github.io" className="by-me">
              <span>
                W Mathieu
                {' '}
              </span>
              <span>
                {/* &#8209; = non-breaking hyphen */}
                Mimms&#8209;Boyce
              </span>
            </a>
          </li>
          <li className="mt-2">
            <a href="/results">Stats</a>
          </li>
        </ul>
      </Col>
      <Col className="py-2">
        <a href="https://www.themoviedb.org/">
          <img src={tmdbPrimaryFull} className="tmdb-logo" alt="tmdb" />
        </a>
      </Col>
    </>
  );
}
