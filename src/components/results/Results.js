import React from 'react';
import './Results.css';
import PropTypes from 'prop-types';

export default function Results(props) {
  const { filmList } = props;

  return (
    <div>
      <ol>
        {filmList}
      </ol>
    </div>
  );
}

Results.propTypes = {
  filmList: PropTypes.arrayOf(PropTypes.shape({
    tmdbId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};
