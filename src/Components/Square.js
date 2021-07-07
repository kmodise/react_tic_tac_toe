import React from 'react';
import '../App.css';

function Square({ val, whichSquare }) {
    return (
        <div className="square" onClick={whichSquare}>
            {val}
        </div>
    );
}

export default Square;