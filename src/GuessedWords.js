import React from 'react';
import PropTypes from 'prop-types';

//Functional Component
const GuessedWords = (props) => {
  let contents;
  if (props.guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">
      Try to guess the secret word!
      </span>
    );
  }
  return (

    <div data-test="component-guessed-words">
    { contents }
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired //The whole propTypes is required.
};

export default GuessedWords;
