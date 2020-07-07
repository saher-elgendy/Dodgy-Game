import React from 'react';

const Square = ({ positions, playerSize, bg }) => {
    const { top, left } = positions;
    const size = playerSize + 'px';

    const style = {
        width: size,
        height: size,
        position: 'absolute',
        top: top + 'px',
        left: left + 'px',
        background: bg
    }

    return (
        <div className="square" style={style}> </div>
    )
}

export default Square
