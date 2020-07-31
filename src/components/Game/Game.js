import React, { useEffect } from 'react';
import Header from '../Header';
import Board from '../Board';
import Status from '../Status';
import { DOWN, UP, RIGHT, LEFT } from '../../constants/directions';

const cellDimensions = {
    width: 98,
    height: 98,
    border: 1
};

const Game = ({levels, level, playerCell, movesLeft, gameLost, gameWon, move, goToLevel}) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === DOWN) {
                move(DOWN);
            }
            if (event.key === UP) {
                move(UP);
            }
            if (event.key === RIGHT) {
                move(RIGHT);
            }
            if (event.key === LEFT) {
                move(LEFT);
            }
        }

        window.addEventListener('keydown', handleKeyDown);

        // Remove event listeners on cleanup
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
    }, [playerCell, move]);

    useEffect(() => {
        if (gameWon) {
            setTimeout(()=>{
                goToLevel(level + 1);
            }, 2000);
            return;
        }
    }, [gameWon, goToLevel, level]);

    const { border, height, width } = cellDimensions;
    const matrix = levels[level].board;
    const boardWidth = (width + (border * 2)) * matrix[0].length;
    const boardHeight = (height + (border * 2)) * matrix.length;

    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}} >
            <Header />
            <Board 
                matrix={matrix} 
                cellDimensions={cellDimensions} 
                width={boardWidth} 
                height={boardHeight} 
                playerCell={playerCell} 
            />
            <Status 
                gameWon={gameWon} 
                gameLost={gameLost}
                movesLeft={movesLeft} 
                width={boardWidth}
            />
        </div>
    );
}

export default Game;
