import React from 'react';

const Cell = ({color, dimensions, hasPlayer}) => {
    return (
        <div style={{width: dimensions.width, height:dimensions.height, backgroundColor: color, border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            { 
                hasPlayer && 
                <div style={{width: '50%', height: '50%', borderRadius: Math.max(dimensions.width, dimensions.height), backgroundColor: 'white', border: '5px solid black'}}></div>
            }
        </div>
    )
}

export default Cell;