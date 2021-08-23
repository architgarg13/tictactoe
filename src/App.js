import React , {useState} from 'react';
import Board from './components/Board';
import calculateWinner from './Helper';

import './styles/root.scss';

const App = () => {


  const [board,setBoard] = useState(Array(9).fill(null));
  const [Xpressed, setXpressed] = useState(false);


  const winner = calculateWinner(board);
  const Message = winner ? `Winner is ${winner}` : Xpressed? `Next Player X`: `Next Player O`
  const handleSquareClick = (pos) => {
    if(board[pos] || winner){
      return;
    }
    setBoard((prev) => {
      console.log(prev);
      return prev.map((square,position) => {
        
        if(pos === position ){
          return Xpressed ? 'X' : 'O';
        }
        return square;
      })
      }
    )
    setXpressed((prev) => !prev)
    }
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{Message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  );
};

export default App;
