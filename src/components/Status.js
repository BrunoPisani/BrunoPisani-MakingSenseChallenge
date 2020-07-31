import React from 'react';

const Status = ({ gameWon, gameLost, movesLeft, width }) => {
    return (
        <div style={{display:'flex', justifyContent:'space-between', width: width}}>
            {gameWon && <div style={{color: 'green'}}>{'You won!'}</div>}
            {gameLost && <div style={{color: 'red'}}>{'You lost!'}</div>}
            <div></div>
            <div>{`moves left ${movesLeft}`}</div>
        </div>
    )
}

export default Status;
