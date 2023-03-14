import React from "react";
import "./square.scss";

interface IProps {
  val: string;
  index: number;
}

const Square: React.FC<IProps> = (props) => {
  const { val } = props;
  return (
    <>
      <div className="square">{val} </div>
    </>
  );
};

export default Square;
