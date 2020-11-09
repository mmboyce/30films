import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import RouteTemplate from '../routeTemplate/RouteTemplate';
import FilmCard from '../filmCard/FilmCard';

import './Results.css';

function ResultsTemplate(props) {
  const { head, body } = props;

  return (
    <>
      <Row>
        <Col className="mt-4">
          {head}
        </Col>
      </Row>
      <Row>
        <Col>
          {body}
        </Col>
      </Row>
    </>
  );
}

// This is what will be rendered when an indivudal's results are being requested.
function IndividualResults(props) {
  const { filmList, name } = props;

  // ------------ THIRTY QUESTIONS (BUT FORMATTED FOR SUBMITTED RESPONSES) ------------
  const questions = [
    'The first film I remember watching.',
    'A film I saw that starts with the first letter of my name.',
    'A film I saw that has more than five words in its title.',
    'A film I saw that has a number in its title.',
    'A film I saw where a character has a job that I want.',
    'My favorite animated film.',
    'A film that I will never get tired of watching.',
    'A film whose soundtrack I enjoy more than the film itself.',
    'A film I hate that everyone else liked.',
    'My favorite superhero film.',
    'A film I like from my least favourite genre.',
    'A film that I hate from my favourite genre.',
    'A film that puts me deep in thought.',
    'The film that depressed me most.',
    'A film that makes me feel happy.',
    'A film that is personal to me.',
    'My favourite film sequel.',
    'A film that stars my favourite actor/actress.',
    'A film made by my favourite director.',
    'A film that changed my life.',
    'A film that I dozed off in.',
    'A film that made me angry.',
    'A film made by a director that is dead.',
    'A film I saw out of theaters that wish I saw in theaters.',
    'A film that I like that is not set in the current era.',
    'A film I like that is adapted from another piece of media.',
    'A film that is visually striking to me.',
    'A film that made me feel uncomfortable.',
    'A film that makes me want to fall in love.',
    'The film that has my favourite ending.',
  ];

  const filmCards = (function populateFilmCards() {
    const filmCardsList = [];

    for (let i = 0; i < questions.length; i += 1) {
      filmCardsList[i] = (
        <li>
          <FilmCard
            title={filmList[i].title}
            posterPath={filmList[i].posterPath}
            question={questions[i]}
            id={filmList[i].tmdbId}
          />
        </li>
      );
    }

    return filmCardsList;
  }());

  const head = (
    <h2>
      {name}
      {' '}
      &apos;s Results
    </h2>
  );
  const body = <ul>{filmCards}</ul>;

  return <ResultsTemplate head={head} body={body} />;
}

// Individual when true denotes whether this is the results page for a specific user, or for all
// users when false.
export default function Results(props) {
  const { apiPath, individual } = props;
  const { id } = useParams();
  const [response, setResponse] = useState({});

  const handleLoad = () => {
    fetch(`${apiPath}/results${individual ? `/${id}` : ''}`, { mode: 'cors' })
      .then((resp) => resp.json())
      .then((resp) => setResponse(resp));
  };

  useEffect(() => {
    if (JSON.stringify(response) === JSON.stringify({})) {
      handleLoad();
    }
  });

  const loadBody = () => {
    let body;

    // Display loading info.
    if (JSON.stringify(response) === JSON.stringify({})) {
      const loadingHeader = <h2>Loading Results...</h2>;
      body = <ResultsTemplate head={loadingHeader} />;
    } else if (!individual) {
      const { results } = response;
      const resultNames = results.map((result) => (
        <li>
          <a href={result.url}>{result.name}</a>
        </li>
      ));

      const groupHeader = <h2>Response Stats</h2>;
      const groupBody = (
        <>
          <p>
            Response Count:
            {' '}
            {response.count}
          </p>
          <ul>
            {resultNames}
          </ul>
        </>
      );

      body = <ResultsTemplate head={groupHeader} body={groupBody} />;
    } else {
      const { films, name } = response;

      body = <IndividualResults filmList={films} name={name} />;
    }

    return body;
  };

  return (
    <RouteTemplate className="results">
      <Row className="mx-auto">
        <Col className="results-bg vh-100" on>
          {loadBody()}
        </Col>
      </Row>
    </RouteTemplate>
  );
}

Results.propTypes = {
  apiPath: PropTypes.string.isRequired,
  individual: PropTypes.bool,
};

Results.defaultProps = {
  individual: false,
};

IndividualResults.propTypes = {
  name: PropTypes.string.isRequired,
  filmList: PropTypes.arrayOf(PropTypes.shape({
    tmdbId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
  })).isRequired,
};

ResultsTemplate.propTypes = {
  head: PropTypes.element,
  body: PropTypes.element,
};

ResultsTemplate.defaultProps = {
  head: <></>,
  body: <></>,
};
