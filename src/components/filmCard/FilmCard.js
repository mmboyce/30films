import React from 'react';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

function FilmCardGroup(props) {
  const { FilmCards } = props;

  return (
    <CardColumns className="p-2">
      {FilmCards}
    </CardColumns>
  );
}

export default function FilmCard(props) {
  const {
    title, posterPath, id, question,
  } = props;
  const baseTMDbUrl = 'https://www.themoviedb.org/movie/';

  return (
    <Card className="sm" style={{ width: '14rem' }}>
      <Card.Img variant="top" src={posterPath} />
      <Card.Body>
        <Card.Title><a href={baseTMDbUrl + id}>{title}</a></Card.Title>
        <Card.Text>{question}</Card.Text>
      </Card.Body>
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
