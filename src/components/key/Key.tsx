import React from "react";
import "./key.scss";

interface IProps {
  letter: string;
  index: number;
}

const Key: React.FC<IProps> = (props) => {
  const { letter } = props;
  return <div className="letter">{letter} </div>;
};

export default Key;
