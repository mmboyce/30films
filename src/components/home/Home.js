import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RouteTemplate from '../routeTemplate/RouteTemplate';
import Intro from '../intro/Intro';
import Film from '../film/Film';

import './Home.css';

export default function Home(props) {
  const { apiPath } = props;

  return (
    <RouteTemplate className="home">
      <Row className="mx-auto text-white">
        <Col className="intro-bg py-2 min-vh-100">
          <Intro />
        </Col>
      </Row>
      <Row className="mx-auto">
        <Col className="film-bg py-4">
          <Film apiPath={apiPath} />
        </Col>
      </Row>
    </RouteTemplate>
  );
}

Home.propTypes = {
  apiPath: PropTypes.string.isRequired,
};
