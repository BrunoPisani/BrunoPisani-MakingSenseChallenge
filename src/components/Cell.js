import React from 'react';
import Mouse from './mouse.png';
import Cheese from './cheese.jpg';

const Cell = ({color, dimensions, hasPlayer, exit}) => {
    const width = dimensions.width;
    const height = dimensions.height;

    return (
        <div style={{width: width, height: height, backgroundColor: color, border: '1px solid black', position: 'relative', display: 'block', justifyContent: 'center', alignItems: 'center'}}>
            { 
                exit && 
                <div style={{width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, backgroundColor: 'white', backgroundImage: Mouse}}><img src={Cheese} alt="Cheese" style={{width:width, height:height, transform: 'scaleX(-1)'}} /></div>
            }
            { 
                hasPlayer && 
                <div style={{width: '100%', height: '100%', zIndex: 2, backgroundColor: 'white', backgroundImage: Mouse}}><img src={Mouse} alt="Mouse" style={{width:width, height:height, transform: 'scaleX(-1)'}} /></div>
            }
        </div>
    )
}

export default Cell;