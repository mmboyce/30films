import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useParams } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card'; TODO

import RouteTemplate from '../routeTemplate/RouteTemplate';

import './Results.css';

function IndividualResults(props) {
  const { filmList, name } = props;

  return (
    <div>
      { name}
      &apos;results
      <ol>
        film list
        {filmList}
      </ol>
    </div>
  );
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

  const loadHead = () => {
    let headContent;

    if (JSON.stringify(response) === JSON.stringify({})) {
      headContent = <h2>Loading Results...</h2>;
    } else if (individual) {
      // TODO: refactor this into IndividualResult component
      headContent = (
        <h2>
          {response.name}
          &apos;s Results
        </h2>
      );
    } else {
      headContent = <h2>Response Stats</h2>;
    }
    return (
      <Row>
        <Col className="mt-4">
          {headContent}
        </Col>
      </Row>
    );
  };

  const loadBody = () => {
    let bodyContent;

    if (JSON.stringify(response) === JSON.stringify({})) {
      bodyContent = '';
      // TODO: refactor this into IndividualResult component
    } else if (individual) {
      const { films } = response;
      const filmTitles = films.map((film) => <li>{film.title}</li>);

      bodyContent = (
        <ul>
          {filmTitles}
        </ul>
      );
    } else {
      const { results } = response;
      const resultNames = results.map((result) => (
        <li>
          <a href={result.url}>{result.name}</a>
        </li>
      ));

      bodyContent = (
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
    }

    return (
      <Row>
        <Col>
          {bodyContent}
        </Col>
      </Row>
    );
  };

  useEffect(() => {
    if (JSON.stringify(response) === JSON.stringify({})) {
      handleLoad();
    }
  });

  // TODO: Use IndividualResult component!!
  return (
    <RouteTemplate className="results">
      <Row className="mx-auto">
        <Col className="results-bg vh-100" on>
          {loadHead()}
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
