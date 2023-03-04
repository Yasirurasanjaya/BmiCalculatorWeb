import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(1);
  const increaseW = () => {
    setWeight(weight + 1);
  };
  const decreaseW = () => {
    setWeight(weight - 1);
  };
  const [Height, setHeight] = useState(1);
  const increaseH = () => {
    setHeight(Height + 1);
  };
  const decreaseH = () => {
    setHeight(Height - 1);
  };
  let bmi = (weight / (Height * Height)) * 10000;

  return (
    <div className="app">
      <div className="wh">
        <h2 className="weight">
          Weight <br /> {weight} kg{" "}
        </h2>
        <h2 className="Height">
          Height <br /> {Height} cm
        </h2>
      </div>

      <br />
      <button className="button-61" onClick={increaseW}>
        + weight
      </button>
      <button className="button-61" onClick={decreaseW}>
        - weight
      </button>

      <button className="button-61" onClick={increaseH}>
        + Height
      </button>
      <button className="button-61" onClick={decreaseH}>
        - Height
      </button>
      <h1 className="bmi">Bmi Value = {bmi}</h1>

      {bmi < 25 ? (
        <h1>You are underweight</h1>
      ) : bmi >= 25 && bmi < 30 ? (
        <h1>You are a healthy weight</h1>
      ) : (
        <h1>You are overweight</h1>
      )}
    </div>
  );
}

export default App;
