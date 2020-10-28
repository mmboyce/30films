import React from 'react';
import Col from 'react-bootstrap/Col';

import tmdbPrimaryFull from './tmdb_primary_full.svg';
import './Credit.css';

export default function Credit() {
  return (
    <>
      <Col sm={{ span: 3, offset: 2 }} className="tmdb-powered-by py-3 pl-3 pr-0">
        <p>Created By:</p>
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
      </Col>
      <Col sm={{ span: 1, offset: 0 }} className="tmdb-powered-by py-3 pr-0 pl-3">
        <a href="https://www.themoviedb.org/">
          <img src={tmdbPrimaryFull} className="tmdb-logo" alt="tmdb" />
        </a>
      </Col>
    </>
  );
}
