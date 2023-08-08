import React from 'react';

// This component displays the hangman graphics based on the number of incorrect guesses.
const Hangman = ({ incorrectGuesses }) => {
  const maxIncorrectGuesses = 6;
  const remainingGuesses = maxIncorrectGuesses - incorrectGuesses;

  return (
    <div className="hangman">
      {/* Display remaining guesses */}
      <p>Remaining Guesses: {remainingGuesses}</p>
      {/* Additional hangman graphics or elements can be added here */}
    </div>
  );
};

export default Hangman;
