import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const incrementar = (numero: number = 1): void => {
    setCounter(counter + numero);
  };
  return (
    <>
      <div className="mt-5">
        <h3>useState</h3>
        <h3>Counter</h3>
        <span>Valor: {counter}</span>
      </div>
      <br />
      <div>
        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => incrementar()}
        >
          +1
        </button>

        <button
          className="btn btn-outline-primary mt-2"
          onClick={() => incrementar(2)}
        >
          +2
        </button>
        <button className="btn btn-danger mt-2" onClick={() => setCounter(0)}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Counter;
