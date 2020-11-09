import React from 'react';
import PropTypes from 'prop-types';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

function FilmCardGroup(props) {
  const { FilmCards } = props;

  const firstCol = FilmCards.slice(0, 10);
  const secondCol = FilmCards.slice(10, 20);
  const thirdCol = FilmCards.slice(20, 30);

  return (
    <Row>
      <Col lg>
        {firstCol}
      </Col>
      <Col lg>
        {secondCol}
      </Col>
      <Col lg>
        {thirdCol}
      </Col>
    </Row>
  );
}

export default function FilmCard(props) {
  const {
    title, posterPath, id, question,
  } = props;
  const baseTMDbUrl = 'https://www.themoviedb.org/movie/';

  return (
    <Card className="my-4 mx-auto">
      <Card.Body>
        <Card.Title>{question}</Card.Title>
        <Card.Subtitle className="ml-2">
          <em>
            {' '}
            -
            {' '}
            <a href={baseTMDbUrl + id}>{title}</a>
          </em>
        </Card.Subtitle>
      </Card.Body>
      <Card.Img variant="bottom" src={posterPath} />
    </Card>
  );
}

export { FilmCardGroup };

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};

FilmCardGroup.propTypes = {
  FilmCards: PropTypes.arrayOf(PropTypes.element).isRequired,
};
