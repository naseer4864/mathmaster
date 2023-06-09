import { useState } from "react";
import KeyPads from "./keypad";

const CalApp = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

  const handleOperatorClick = (operator) => {
    setInput(input + operator);
  };

  const handleClearClick = () => {
    setInput("");
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(input);
      setInput(result.toString());

      const date = new Date();
      setHistory([...history, { input, result, date }]);
      localStorage.setItem(
        "history",
        JSON.stringify([...history, { input, result, date }])
      );
    } catch (error) {
      setInput("Error");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClearHistoryClick = () => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  return (
    <div className="calculator">
      <input type="text" value={input} onChange={handleChange} />
      <KeyPads
        handleClearClick={handleClearClick}
        handleNumberClick={handleNumberClick}
        handleOperatorClick={handleOperatorClick}
        handleEqualsClick={handleEqualsClick}
      />
      {history.length > 0 && (
        <button
          onClick={handleClearHistoryClick}
          style={{ backgroundColor: "brown", fontSize: "1rem", margin: "10px", cursor:"pointer" }}
        >
          Clear History
        </button>
      )}
      <h3>Recent {history.length > 1 ? "Activities" : "Activity" }</h3>
      {history.map((calculation, index) => (
        <li key={index}>
          {calculation.input} = {calculation.result}{" "}
          {new Date(calculation.date).toLocaleString("en-US", {
            timeZone: "Africa/Lagos",
          })}
        </li>
      ))}
    </div>
  );
};

export default CalApp;
