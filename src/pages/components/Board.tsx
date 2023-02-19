import React, { useState } from 'react'
import {Board} from '../helper';
import Cell from './Cell';
import Tile from './Tile';
import useEvent from '../helper/useEvent';
import GameOverlay from './GameOverlay';

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  const resetGame = () => {
    setBoard(new Board());
  }

  const handleKeyDown = (event: any) => {
    if (board.hasWon()) {
      return;
    }
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(Object.create(Object.getPrototypeOf(board)), board);
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  }

  useEvent("keydown", handleKeyDown);

  // Cells
  const cells = board.cells.map((row: any, rowIndex: number) => {
    return (
      <div key={rowIndex}>
        {row.map((col: any, colIndex: number) => {
          return <Cell key={colIndex * board.size + colIndex} />
        })}
      </div>
    )
  })

  // tiles
  const tiles = board.tiles.filter((tile) => tile.value !== 0).map((tile, index) => {
    return <Tile key={index} tile={tile}/>
  })

  return (
    <div>
      <div className="details-box">
        <div className='resetButton' onClick={resetGame}>Reset Game</div>
        <div className='score-box'>
          <div className='score-header'>Score</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
    </div>
  );
}

export default BoardView;
