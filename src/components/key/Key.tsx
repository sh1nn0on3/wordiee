import React from "react";
import "./key.scss";
import { rootState } from "../interface";
import { useSelector } from "react-redux";

interface IProps {
  letter: string;
  index: number;
}

const Key: React.FC<IProps> = (props) => {
  const { letter } = props;
  const board = useSelector((state: rootState) => state.board.board);
  const chooseLetter = () => {};

  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
