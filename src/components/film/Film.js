import React from 'react';
import PropTypes from 'prop-types';
import './Film.css';

// ------------ THIRTY QUESTIONS ------------
// What is a the first film you remember watching?
// What is a film you saw that starts with the first letter of your name?
// What is a film you saw that has more than five words in its title?
// What is a film you saw that has a number in its title?
// What is a film you saw where a character has a job you want?
// What is your favorite animated film?
// What is a film that you will never get tired of watching?
// What is a film whose soundtrack you enjoy more than the film itself?
// What is a film you hate that everyone else liked?
// What is your favorite superhero film?
// What is a film you like from your least favourite genre?
// What is a film that you hate from your favourite genre?
// What is a film that puts you deep in thought?
// What is a film that depressed you most?
// What is a film that makes you feel happy?
// What is a film that is personal to you?
// What is your favourite film sequel?
// What is a film that stars your favourite actor/actress?
// What is a film made by your favourite director?
// What is a film that changed your life?
// What is a film that you dozed off in?
// What is a film that made you angry?
// What is a film made by a director that is dead?
// What is a film you saw out of theaters that wish you saw in theaters?
// What is a film that you like that is not set in the current era?
// What is a film you like that is adapted from another piece of media?
// What is a film that is visually striking to you?
// What is a film that made you feel uncomfortable?
// What is a film that makes you want to fall in love?
// What film has your favourite ending?

export default function Film(props) {
  const { film } = props;

  return (
    <div>
      Film +
      {' '}
      {film}
    </div>
  );
}

Film.propTypes = {
  film: PropTypes.string.isRequired,
};
