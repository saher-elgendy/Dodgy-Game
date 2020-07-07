import React, { useState } from 'react';
import Board from './components/board';

const Game = ({ playerSize, boardUnit }) => {
  const maxDim = playerSize * boardUnit;
  const center = (maxDim - playerSize) / 2;

  const [positions, setPositions] = useState({
    player: {
      top: center,
      left: center
    },
    enemies: []
  })

  
  return (
    <div className="Game">
      <Board positions={positions} maxDim={maxDim} playerSize={playerSize} />
    </div>
  );
}

export default Game;
