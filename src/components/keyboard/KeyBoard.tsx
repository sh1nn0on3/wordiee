import React from "react";
import "./keyboard.scss";
import Key from "../key/Key";

const KeyBoard: React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];
  return (
    <div className="keyboard-container">
      {rows.map((row, index) => {
        return (
          <div className="row">
            {index === 2 && <span className="letter-row">Enter</span> }
            {row.split(" ").map((letter, index) => {
              return (
                <div className="letter-row">
                  <Key letter={letter.toUpperCase()} index={index} />
                  {letter === "m" && <span className="letter-row">Back</span>}
                </div> 
              );
            }) }
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
