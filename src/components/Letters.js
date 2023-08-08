import React from 'react';

// This component displays the available letters for the user to guess.
const Letters = ({ availableLetters, handleLetterClick }) => {
  return (
    <div className="letters">
      {/* Map through the available letters and create a button for each */}
      {availableLetters.map((letterObj, index) => (
        <button
          key={index}
          // Call the handleLetterClick function when a letter button is clicked
          onClick={() => handleLetterClick(letterObj.value)}
          // Disable the button if the letter has already been guessed
          disabled={letterObj.isGuessed}
          // Apply the "guessed" class to the button if the letter has been guessed
          className={letterObj.isGuessed ? "guessed" : ""}
        >
          {/* Display the letter on the button */}
          {letterObj.value}
        </button>
      ))}
    </div>
  );
};

export default Letters;
