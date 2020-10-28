import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Credit from '../credit/Credit';

export default function RouteTemplate(props) {
  const { className, children } = props;

  return (
    <Container fluid className={className}>
      <Row>
        <Col lg={{ span: 5, offset: 2 }} className="px-0">
          {children}
          <Row className="mx-auto tmdb-powered-by py-3">
            <Credit />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

RouteTemplate.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
};

RouteTemplate.defaultProps = {
  className: '',
  children: <></>,
};
