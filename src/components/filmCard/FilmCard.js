import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';

export default function FilmCard(props) {
  const {
    title, posterPath, id, question,
  } = props;
  const baseTMDbUrl = 'https://www.themoviedb.org/movie/';

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterPath} />
      <Card.Body>
        <Card.Title><a href={baseTMDbUrl + id}>{title}</a></Card.Title>
        <Card.Text>{question}</Card.Text>
      </Card.Body>
    </Card>
  );
}

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};
