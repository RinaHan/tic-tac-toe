import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  // console.log("history", history, history.length);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  const calculateWinner = (squares) => {
    // console.log('squaresee', squares)
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      // console.log('cliced:', lines[i], 'a:', clicked[a],clicked[b],clicked[c])
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        // console.log('win:', squares[a])
        return squares[a];
      }
      // console.log('squaresValue', squares)
    }
    return null;
  };

  const current = history[stepNumber];
  //(original) Before making a new history
  // const current = history[history.length - 1];
  const winner = calculateWinner(current.squares);
  // console.log('winner', winner)

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = `Next player: ${xIsNext ? "X" : "0"}`;
  }

  const handleClick = (i) => {
    // console.log("handle");
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...newHistory, { squares: newSquares }]);
    setXIsNext((prev) => !prev);

    setStepNumber(newHistory.length);
  };
  // (original) Before making a new history
  // const handleClick = (i) => {
  //   // console.log("handle");
  //   const newSquares = current.squares.slice();
  //   if (calculateWinner(newSquares) || newSquares[i]) {
  //     return;
  //   }
  //   newSquares[i] = xIsNext ? "X" : "O";
  //   setHistory([...history, { squares: newSquares }]);
  //   setXIsNext((prev) => !prev);
  // };

  const moves = history.map((step, move) => {
    // console.log('step', step, move)
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      {/* <div className='game-info'>game-info</div> */}
      <div className='status'>{status}</div>
      <ol>{moves}</ol>
    </div>
  );
}

export default App;
