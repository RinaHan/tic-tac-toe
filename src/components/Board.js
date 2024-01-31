// import React, { useState } from "react";
import Square from "./Square";
import "./Board.css";

const Board = (props) => {
// const Board = (squares, onClick) => {
  // const [squares, setSquares] = useState([Array[9]].fill(null));
  // const [xIsNext, setXIsNext] = useState(true);

  // const handleClick = (i) => {
  //   const newSquares = squares.slice();
  //   // console.log('squaresN', newSquares, i)
  //   if (calculateWinner(newSquares) || newSquares[i]) {
  //     return;
  //   }
  //   newSquares[i] = xIsNext ? "X" : "0";
  //   setSquares(newSquares);
  //   setXIsNext((prev) => !prev);
  // };

  const renderSquare = (i) => {
    return <Square value={props.squares[i]} onClick={()=>{props.onClick(i)}} />;
    // return <Square value={squares[i]} onClick={()=>{onClick(i)}} />;
  };

  return (
    <div className="board-wrapper">
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
