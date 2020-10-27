import React/* , { useState } */ from 'react';
import PropTypes from 'prop-types';
import './Film.css';

function IndividualFilm(props) {
  const { question, questionNumber } = props;

  return (
    <div data-question-number={questionNumber}>
      { question }
    </div>
  );
}

export default function Film(props) {
  const { apiPath } = props;
  /* const [searchResults, setSearchResults] = useState();

  // Function for fetch search results from API, most likely goes with autosuggest.
  function getSearchResults(query) {
    return new Promise((resolve, reject) => {
      fetch(`${apiPath}/search/${query}`, { mode: 'cors' })
        .then((response) => response.json())
        .then((searchResponse) => {
          const { results } = searchResponse;

          const formattedResults = results.map((result) => {
            const {
              title, id, popularity,
            } = result;
            const releaseDate = result.release_date;
            const releaseYear = releaseDate ? ` (${releaseDate.substr(0, 4)})` : '';

            return {
              title: `${title}${releaseYear}`,
              id,
              popularity,
            };
          });

          formattedResults.sort((resultA, resultB) => resultB.popularity - resultA.popularity);

          resolve(formattedResults);
        })
        .catch((err) => reject(err));
    });
  } */

  const questions = [
    // ------------ THIRTY QUESTIONS ------------
    'What is a the first film you remember watching?',
    'What is a film you saw that starts with the first letter of your name?',
    'What is a film you saw that has more than five words in its title?',
    'What is a film you saw that has a number in its title?',
    'What is a film you saw where a character has a job you want?',
    'What is your favorite animated film?',
    'What is a film that you will never get tired of watching?',
    'What is a film whose soundtrack you enjoy more than the film itself?',
    'What is a film you hate that everyone else liked?',
    'What is your favorite superhero film?',
    'What is a film you like from your least favourite genre?',
    'What is a film that you hate from your favourite genre?',
    'What is a film that puts you deep in thought?',
    'What is a film that depressed you most?',
    'What is a film that makes you feel happy?',
    'What is a film that is personal to you?',
    'What is your favourite film sequel?',
    'What is a film that stars your favourite actor/actress?',
    'What is a film made by your favourite director?',
    'What is a film that changed your life?',
    'What is a film that you dozed off in?',
    'What is a film that made you angry?',
    'What is a film made by a director that is dead?',
    'What is a film you saw out of theaters that wish you saw in theaters?',
    'What is a film that you like that is not set in the current era?',
    'What is a film you like that is adapted from another piece of media?',
    'What is a film that is visually striking to you?',
    'What is a film that made you feel uncomfortable?',
    'What is a film that makes you want to fall in love?',
    'What film has your favourite ending?',
  ];

  // Populate an array with IndividualFilm Components representing each question.
  const individualFilms = (() => {
    const arr = [];

    for (let i = 0; i < questions.length; i += 1) {
      arr.push(<IndividualFilm question={questions[i]} questionNumber={i} />);
    }

    return arr;
  }
  )();

  return (
    <div>
      {apiPath}
      {individualFilms}
    </div>
  );
}

Film.propTypes = {
  apiPath: PropTypes.string.isRequired,
};

IndividualFilm.propTypes = {
  question: PropTypes.string.isRequired,
  questionNumber: PropTypes.number.isRequired,
};
