/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import Autosuggest from 'react-autosuggest';

import './Film.css';

function FilmFormEntry(props) {
  const {
    question, questionNumber, apiPath, responses, setResponses,
  } = props;
  const [searchResults, setSearchResults] = useState([]);
  const [entryValue, setEntryValue] = useState('');

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
  }

  // HELPERS FOR Autosuggest
  const getSuggestionValue = (suggestion) => suggestion.title;
  const renderSuggestion = (suggestion) => <div className="dropdown-item-text">{suggestion.title}</div>;

  const inputOnChange = (event, { newValue }) => {
    setEntryValue(newValue);
  };

  const loadSuggestions = (value) => {
    getSearchResults(value).then((results) => setSearchResults(results));
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    // Restrict call frequency.
    if (value.length === 2
      || (value.length > 3 && value.length % 4 === 0)) {
      loadSuggestions(value);
    }
  };

  const onSuggestionsClearRequested = () => {
    setSearchResults([]);
  };

  return (
    <div className="form-group my-5">
      <label className="mb-2" htmlFor={`question${questionNumber}`}>{question}</label>
      <Autosuggest
        suggestions={searchResults}
        getSuggestionValue={getSuggestionValue}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: 'Enter a Film Title.',
          value: entryValue,
          id: `question${questionNumber}`,
          className: 'form-control',
          onChange: inputOnChange,
        }}
      />
    </div>
  );
}

export default function Film(props) {
  const { apiPath } = props;
  const [responses, setResponses] = useState([]);

  const questions = [
    // ------------ THIRTY QUESTIONS ------------
    'What is the first film you remember watching?',
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

  // Populate an array with FilmFormEntry Components representing each question.
  const FilmFormEntries = (() => {
    const arr = [];

    for (let i = 0; i < questions.length; i += 1) {
      arr.push(<FilmFormEntry
        apiPath={apiPath}
        question={questions[i]}
        questionNumber={i}
        responses={responses}
        setResponses={setResponses}
      />);
    }

    return arr;
  }
  )();

  return (
    <form>
      <div className="form-group mb-5">
        <label htmlFor="userName"> What is your name?</label>
        <input id="userName" type="text" className="form-control" />
      </div>
      {FilmFormEntries}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

Film.propTypes = {
  apiPath: PropTypes.string.isRequired,
};

FilmFormEntry.propTypes = {
  question: PropTypes.string.isRequired,
  questionNumber: PropTypes.number.isRequired,
  apiPath: PropTypes.string.isRequired,
  responses: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
  }).isRequired,
  setResponses: PropTypes.func.isRequired,
};
