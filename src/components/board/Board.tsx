import React from "react";
import "./board.scss";
import Square from "../square/Square";
import KeyBoard from "../keyboard/KeyBoard";

interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (prop) => {
  const { board } = prop;
  return (
    <>
      <div className="board">
        {board.map((square, index) => {
          return (
            <div className="square" key={index}>
              <Square val={square} index={index} key={index} />
            </div>
          );
        })}
      </div>
      <div className="keyboard">
        <KeyBoard />
      </div>
    </>
  );
};

export default Board;
