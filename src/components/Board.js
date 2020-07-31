import React from 'react';
import Cell from './Cell';

const paintRoom = (cellType) => {
    let color;
    switch (cellType) {
        case ' ':
            color = 'white';
            break;
        case 'W':
            color = 'grey';
            break;
        case 'S':
            color = 'yellow';
            break;
        case 'E':
            color = 'green';
            break;
        default:
            color = 'white';
    }
    return color;
};

const Board = ({ matrix, cellDimensions, width, height, playerCell }) => {

    return (
        <div style={{display:'block', width: width, height: height, backgroundColor: 'red', border:'1px solid black'}}>
            <div style={{display: 'flex', flexDirection:'column'}}>
            {                    
                matrix.map((row, rowIndex) => {
                    return (
                        <div style={{display: 'flex', flexDirection:'row'}} key={rowIndex}>
                            {
                            row.map((col, colIndex) => {
                                const color = paintRoom(col);
                                const id = `${rowIndex},${colIndex}`;
                                const player = (playerCell.col === colIndex) && (playerCell.row === rowIndex);
                                
                                return (
                                    <Cell color={color} dimensions={cellDimensions} hasPlayer={player} key={id} />
                                )
                            })
                            }
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
};

export default Board;