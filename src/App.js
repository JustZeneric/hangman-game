import React from 'react';
import './styles.css';
import Game from './components/Game';
import { GameProvider } from './components/GameContext'; // Import the GameProvider

// This is the main App component that wraps the Game component with the GameProvider
function App() {
  return (
    <div className="App">
      {/* Wrap the Game component with the GameProvider */}
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
