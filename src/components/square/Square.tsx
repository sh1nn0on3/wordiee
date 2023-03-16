import React from "react";
import "./square.scss";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { rootState } from "../interface";

interface IProps {
  val: string;
  index: number;
}

const Square: React.FC<IProps> = (props) => {
  const { val, index } = props;
  const corWord = useSelector((state: rootState) => state.board.correctWord);
  const pos = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row);

  let currentPos = (pos - 1 ) % 5 ;
  console.log("🚀 ~ file: Square.tsx:19 ~ currentPos:", currentPos)

  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };
  return (
    <motion.div animate={val ? "filled" : "unfilled"} variants={variants}>
      <div className="square">{val}</div>
    </motion.div>
  );
};

export default Square;
