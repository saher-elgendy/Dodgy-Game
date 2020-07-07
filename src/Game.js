import React, { useEffect, useState } from 'react';
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

  const handlePlayerMovement = (e) => {
    let { player: { top, left } } = positions;
    let newPlayer = {};
    switch (e.keyCode) {
      case 37:
        if (left === 0) return;
        newPlayer = { top, left: left - playerSize };
        break;
      case 38:
        if (top === 0) return;
        newPlayer = { left, top: top - playerSize };
        break;
      case 39:
        if (left === maxDim - playerSize) return;
          newPlayer = { top, left: left + playerSize }
        break;
      case 40:
        if(top === maxDim - playerSize) return;
        newPlayer = { left, top: top + playerSize };
        break;
      default:
        newPlayer = { top, left }
    }

    setPositions({
      ...positions,
      player: newPlayer
    })
  }

  useEffect(() => {
    window.addEventListener('keydown', handlePlayerMovement);
    return () => {
      window.removeEventListener('keydown', handlePlayerMovement);
    }
  });

  return (
    <div className="Game">
      <Board positions={positions} maxDim={maxDim} playerSize={playerSize} />
    </div>
  );
}

export default Game;
