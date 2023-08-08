import React, { createContext, useContext, useState } from 'react';

// Create a new context for the game data and functions
const GameContext = createContext();

// Custom hook for using the GameContext
export const useGameContext = () => useContext(GameContext);

// GameProvider component that provides game data and functions to its children
export const GameProvider = ({ children }) => {
  // Initial game state
  const words = ['hangman', 'javascript', 'react'];
  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);

  // Generate array of available letters
  const availableLetters = Array.from({ length: 26 }, (_, i) => ({
    value: String.fromCharCode(97 + i),
    isGuessed: guessedLetters.includes(String.fromCharCode(97 + i)),
  }));

  // Check if the word is fully guessed
  const wordIsGuessed = () => {
    return word.split('').every(letter => guessedLetters.includes(letter));
  };

  // Restart the game
  const restartGame = () => {
    setWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setIncorrectGuesses(0);
  };

  // Create an object with game data and functions to be provided by the context
  const gameContextValue = {
    word,
    guessedLetters,
    incorrectGuesses,
    availableLetters,
    handleLetterClick: (letter) => {
      if (!guessedLetters.includes(letter)) {
        if (word.includes(letter)) {
          setGuessedLetters([...guessedLetters, letter]);
        } else {
          setIncorrectGuesses(incorrectGuesses + 1);
        }
      }
    },
    wordIsGuessed,
    restartGame,
  };

  // Provide the game context value to the children components
  return (
    <GameContext.Provider value={gameContextValue}>
      {children}
    </GameContext.Provider>
  );
};
