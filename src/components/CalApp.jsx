import { useState } from "react";
import KeyPads from "./keypad";

const CalApp = () => {
    const [input, setInput] = useState("");

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

  const handleClearClick = () => {
    setInput("");
  };

  const handleEqualsClick = () => {
    setInput(eval(input).toString());
  };
    return ( 
        <div className="calculator">
            <input type="text" value={input} readOnly />
            <KeyPads
            handleClearClick={handleClearClick}
            handleNumberClick={handleNumberClick}
            handleEqualsClick={handleEqualsClick} />
        </div>
     );
}
 
export default CalApp;