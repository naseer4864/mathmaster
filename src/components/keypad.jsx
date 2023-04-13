
const KeyPads = ({handleNumberClick, handleEqualsClick, handleClearClick}) => {
  return (
    <div className="calculator">
      <h1>MathMaster</h1>
      <br />
      <button onClick={() => handleNumberClick('1')}>1</button>
      <button onClick={() => handleNumberClick('2')}>2</button>
      <button onClick={() => handleNumberClick('3')}>3</button>
      <button onClick={() => handleNumberClick('4')}>4</button>
      <button onClick={() => handleNumberClick('5')}>5</button>
      <br />
      <button onClick={() => handleNumberClick('6')}>6</button>
      <button onClick={() => handleNumberClick('7')}>7</button>
      <button onClick={() => handleNumberClick('8')}>8</button>
      <button onClick={() => handleNumberClick('9')}>9</button>
      <button onClick={() => handleNumberClick('0')}>0</button>
      <br />
      <button onClick={() => handleClearClick()}>C</button>
      <button onClick={() => handleEqualsClick()}>=</button>
      <button onClick={() => handleNumberClick('+')}>+</button>
      <button onClick={() => handleNumberClick('-')}>-</button>
      <button onClick={() => handleNumberClick('*')}>*</button>
      <button onClick={() => handleNumberClick('/')}>/</button>
      <br />
    </div>
  );
}
 
export default KeyPads;