/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.css';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Intro from '../intro/Intro';
import Credit from '../credit/Credit';
import Film from '../film/Film';

export default function Home(props) {
  const { apiPath } = props;

  return (
    <Container fluid className="mx-0">
      <Col>
        {apiPath}
        <Row>
          <Intro />
        </Row>
        <Row>
          <Film apiPath={apiPath} />
        </Row>
        <Row>
          <Credit />
        </Row>
      </Col>
    </Container>
  );
}

Home.propTypes = {
  apiPath: PropTypes.string.isRequired,
};
