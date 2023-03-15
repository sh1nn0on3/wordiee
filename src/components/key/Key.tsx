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
  const dispatch = useDispatch();
  const chooseLetter = () => {
    if(possition >= 30) return ;
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
