import React from "react";
import "./key.scss";
import { rootState } from "../interface";
import { useSelector, useDispatch } from "react-redux";
import { setBoard, incPos } from "../../redux/boardSlice";

interface IProps {
  letter: string;
  index: number;
}

const Key: React.FC<IProps> = (props) => {
  const { letter } = props;
  const board = useSelector((state: rootState) => state.board.board);
  const possition = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row);
  const currentRow = Math.floor(possition / 5);
  const dispatch = useDispatch();

  const chooseLetter = () => {
    if (currentRow > row) return;
    if (possition >= 30) return;
    // console.log("possition:", possition)
    // console.log("row:", row);
    // console.log("currentRow:", currentRow);
    const newBoard = [...board];
    newBoard[possition] = letter;
    dispatch(setBoard(newBoard));
    dispatch(incPos());
  };

  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
