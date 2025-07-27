import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={input} readOnly className="display" />
        <div className="buttons">
          {buttons.map((btn, i) => (
            <button key={i} onClick={() => handleClick(btn)}>{btn}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
