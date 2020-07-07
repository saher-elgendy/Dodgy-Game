import React from 'react'
import Square from './square'

const Board = ({ positions, ...props }) => {
    return (
        <div className="board">
            <Square positions={positions.player} bg="fireBrick" {...props} />
        </div>
    )
}

export default Board
