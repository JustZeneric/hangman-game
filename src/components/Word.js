import React from 'react';

// This component displays the hidden word, revealing guessed letters and hiding the rest.
const Word = ({ word, guessedLetters }) => {
  // Create an array of letter spans, each representing a guessed letter or an underscore
  const displayWord = word
    .split('')
    .map((letter, index) => (
      <span key={index}>
        {/* If the letter is guessed, display it; otherwise, display an underscore */}
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));

  // Render the word display element with the mapped letter spans
  return <div className="word-display">{displayWord}</div>;
};

export default Word;
