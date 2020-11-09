import React from 'react';
import PropTypes from 'prop-types';

// import Card from 'react-bootstrap/Card'; TODO

export default function FilmCard(props) {
  const {
    title, posterPath, id, question,
  } = props;
  const baseTMDbUrl = 'https://www.themoviedb.org/movie/';

  return (
    <div>
      <a href={baseTMDbUrl + id}>{title}</a>
      <img src={posterPath} alt={`Poster for ${title}`} />
      {question}
    </div>
  );
}

FilmCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};
