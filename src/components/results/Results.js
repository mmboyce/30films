import React from 'react';
import './Results.css';
import PropTypes from 'prop-types';

function individualResults(props) {
  const { filmList } = props;
  const { name } = props;

  return (
    <div>
      { name }
      &apos;results
      <ol>
        film list
        {filmList}
      </ol>
    </div>
  );
}

export default function Results(props) {
  const { apiPath } = props;

  return (
    <div>
      {apiPath}
    </div>
  );
}

Results.propTypes = {
  apiPath: PropTypes.string.isRequired,
};

individualResults.propTypes = {
  name: PropTypes.string.isRequired,
  filmList: PropTypes.arrayOf(PropTypes.shape({
    tmdbId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
  })).isRequired,
};
