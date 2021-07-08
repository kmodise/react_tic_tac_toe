import './App.css';
import { useState } from 'react';
import Square from './Components/Square';
import {Patterns} from './Patterns'

function App() {
  const [board, setBoard] = useState(["","","","","","","","","",]);
  const [player, setPlayer] = useState("X");

  const chooseSquare = (square) => {
    setBoard(board.map((val, indx) => {
      if(indx === square && val === ""){
        return player;
      } 
      return val;
    }))
    if (player === 'X'){
      setPlayer('O');
    }else{
      setPlayer('X');
    }
  };

  // const checkWin = () => {
  //   Patterns.forEach((currentPattern) => {

  //   })
  // }

  return (
    <div className="App">
      <div className="board"> 
        <div className="row">
          <Square val={board[0]} whichSquare={() => {chooseSquare(0)}}/>
          <Square val={board[1]} whichSquare={() => {chooseSquare(1)}}/>
          <Square val={board[2]} whichSquare={() => {chooseSquare(2)}}/>
        </div>
        <div className="row">
          <Square val={board[3]} whichSquare={() => {chooseSquare(3)}}/>
          <Square val={board[4]} whichSquare={() => {chooseSquare(4)}}/>
          <Square val={board[5]} whichSquare={() => {chooseSquare(5)}}/>
        </div>
        <div className="row">
          <Square val={board[6]} whichSquare={() => {chooseSquare(6)}}/>
          <Square val={board[7]} whichSquare={() => {chooseSquare(7)}}/>
          <Square val={board[8]} whichSquare={() => {chooseSquare(8)}}/>
        </div>
      </div>
    </div>
  );
}

export default App;
