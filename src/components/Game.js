import React, { useState } from 'react';
import Modal from 'react-modal'; // Import the react-modal library
import Header from './Header';
import Word from './Word';
import Letters from './Letters';
import Hangman from './Hangman';

// Style configuration for the modal
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    backgroundColor: 'white',
  },
};

const Game = () => {
  // Initialize game state
  const words = ['hangman', 'javascript', 'react'];
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false); // State for the modal

  // Handle user clicking a letter
  const handleLetterClick = (letter) => {
    if (!guessedLetters.includes(letter)) {
      if (word.includes(letter)) {
        setGuessedLetters([...guessedLetters, letter]);
      } else {
        setIncorrectGuesses(incorrectGuesses + 1);
      }
    }
  };

  // Generate array of available letters
  const availableLetters = Array.from({ length: 26 }, (_, i) => ({
    value: String.fromCharCode(97 + i),
    isGuessed: guessedLetters.includes(String.fromCharCode(97 + i)),
  }));

  // Restart the game
  const restartGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  };

  // Check if the word is fully guessed
  const wordIsGuessed = () => {
    return word.split('').every(letter => guessedLetters.includes(letter));
  };

  // Toggle the Help Modal
  const toggleHelpModal = () => {
    setIsHelpModalOpen(!isHelpModalOpen);
  };

  return (
    <div className="game-container">
      {/* Display the header */}
      <Header className="header" />
      {/* Display the hangman graphics */}
      <Hangman className="hangman" incorrectGuesses={incorrectGuesses} />
      {/* Display the word to guess */}
      <Word className="word" word={word} guessedLetters={guessedLetters} />
      {/* Display the available letters for guessing */}
      <Letters className="letters" availableLetters={availableLetters} handleLetterClick={handleLetterClick} />
      {/* Display game outcome notification and play again button */}
      {(incorrectGuesses >= 6 || wordIsGuessed()) && (
        <div className="outcome-notification">
          {incorrectGuesses >= 6 ? 'You lost!' : 'Congratulations, you won!'}
          <button onClick={restartGame} className="restart-button">Play Again</button>
        </div>
      )}
      {/* Display the Help button */}
      <button onClick={toggleHelpModal} className="help-button">Help</button>
      {/* Help Modal */}
      <Modal
        isOpen={isHelpModalOpen}
        onRequestClose={toggleHelpModal}
        style={modalStyles}
        contentLabel="Help Modal"
      >
        <div className="modal-content">
          <h2>Hangman Game Rules</h2>
          <p>Guess the letters to reveal the hidden word before the hangman is fully drawn.</p>
          <p>You have 6 incorrect guesses before you lose the game.</p>
          <button onClick={toggleHelpModal} className="close-modal-button">Close</button>
        </div>
      </Modal>
    </div>
  );
};

export default Game;
