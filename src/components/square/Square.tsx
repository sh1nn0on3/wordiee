import React, { useEffect, useState } from "react";
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
  // console.log("🚀 ~ file: Square.tsx:14 ~ index:", index);
  // redux
  const corWord = useSelector((state: rootState) => state.board.correctWord);
  const pos = useSelector((state: rootState) => state.board.pos);
  const row = useSelector((state: rootState) => state.board.row);
  // state
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);
  
  let currentPos = (pos - 1) % 5;
  
  console.log("corWord:",corWord);
  // console.log('ky tu :', corWord[currentPos]);
  // console.log('val :', val);
  
  // console.log("pos", pos);
  

  useEffect(() => {
    // console.log("pos:", pos);
    if (corWord[currentPos] === val) {
      setCorrect(true);
    } else if (!correct && val !== "" && corWord.includes(val)) {
      setAlmost(true);
    } else if (!correct && val !== "" && !corWord.includes(val)) {
      setWrong(true);
    }
    return () => {
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [val]);

  const status: any =
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

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
      <div className="square" id={status}>
        {val}
      </div>
    </motion.div>
  );
};

export default Square;
