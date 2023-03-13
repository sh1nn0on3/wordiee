import React from "react";
import "./square.scss"

interface IProps {
  val: string;
  index: number;
}

const Square: React.FC<IProps> = (props) => {
  const { val, index } = props;
  return (
    <>
      <div className="square">{val} </div>
    </>
  );
};

export default Square;
