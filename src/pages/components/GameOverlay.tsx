import React from 'react'
import Image from 'next/image'
import TryAgainLogo from '../../../public/Assets/try-again.gif';

type game = {
  onRestart: any;
  board: any;
}

const GameOverlay = ({onRestart, board}: game) => {
  if (board.hasWon()) {
    return (
      <div className="tile2048"></div>
    )
  }
  else if (board.hasLost()) {
    return (
      <div className="gameOver" onClick={onRestart}>
        <Image src={TryAgainLogo} alt='try-again' width={450} height={450} style={{cursor: 'pointer'}} />
      </div>  
    )
  }
  
  return (
    null
  );
}

export default GameOverlay
