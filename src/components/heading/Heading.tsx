import React from "react";
import "./heading.css"

interface Prop {
  type: string;
  text: string;
}

const Heading: React.FC<Prop> = (props) => {
  const { type, text } = props;
  return (
    <>
      <p className={`heading-${type}`}>{text}</p>
    </>
  );
};

export default Heading;
