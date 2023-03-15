import React from "react";
import "./keyboard.scss";
import Key from "../key/Key";
import {useSelector , useDispatch} from "react-redux"
import { rootState  } from "../interface";
import { decPos, setBoard } from "../../redux/boardSlice";

const KeyBoard: React.FC = () => {
  const board = useSelector((state:rootState) => state.board.board )
  const possition = useSelector((state:rootState) => state.board.pos )
  const dispatch = useDispatch();

  const handleBack = () => {
    if(possition <= 0 ) return;
    const newBoard = [...board];
    dispatch(decPos())
    newBoard[possition - 1 ] = "";
    dispatch(setBoard(newBoard));
  }

  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  return (
    <div className="keyboard-container">
      {rows.map((row, index) => {
        return (
          <div className="row" key={index}>
            {index === 2 && <span className="letter-row">Enter</span>}
            {row.split(" ").map((letter, index) => {
              return (
                <div className="letter-row" key={index}>
                  <Key letter={letter.toUpperCase()} index={index} />
                  {letter === "m" && <span className="letter-row" onClick={handleBack}>Back</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
