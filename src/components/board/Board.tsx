import React from "react";
import "./board.scss";
import Square from "../square/Square";

interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (prop) => {
  const { board } = prop;
  return (
    <>
      <div className="board">
        {board.map((square , index) => {
            return (
                <div className="square">
                    <Square val={square} index={index} />
                </div>
            )
        })}
      </div>
      <div className="keyboard">
        
      </div>
    </>
  );
};

export default Board;
