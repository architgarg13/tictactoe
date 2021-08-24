import React , {useState} from 'react';
import Board from './components/Board';
import calculateWinner from './Helper';
import History from './components/History';
import './styles/root.scss';

const App = () => {


  const [history,setHistory] = useState([{board:Array(9).fill(null), Xpressed: true},]);
  
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  const winner = calculateWinner(current.board);
  const Message = winner ? `Winner is ${winner}` : current.Xpressed? `Next Player X`: `Next Player O`
  const handleSquareClick = (pos) => {
    if(current.board[pos] || winner){
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length-1];
      console.log(prev);
    

      const newBoard = last.board.map((square,position) => {
        
        if(pos === position ){
          return last.Xpressed ? 'X' : 'O';
        }

        return square;
      })

      return prev.concat({board:newBoard, Xpressed: !last.Xpressed});
      }
    )
    setCurrentMove(prev => prev + 1)
    }


    const click = (move) => {
      setCurrentMove(move);

    }
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{Message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick}/>
      <History history={history} click={click} currentMove={currentMove}/>
    </div>
  );
};

export default App;
