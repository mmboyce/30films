/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Intro from '../intro/Intro';
import Credit from '../credit/Credit';
import Film from '../film/Film';

import './Home.css';

export default function Home(props) {
  const { apiPath } = props;

  return (
    <Container fluid className="home">
      <Row>
        <Col lg={{ span: 5, offset: 2 }} className="px-0">
          <Row className="mx-auto text-white">
            <Col className="intro-bg py-2 vh-100">
              <Intro />
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className="film-bg py-4">
              <Film apiPath={apiPath} />
            </Col>
          </Row>
          <Row className="mx-auto tmdb-powered-by py-3">
            <Credit />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

Home.propTypes = {
  apiPath: PropTypes.string.isRequired,
};
