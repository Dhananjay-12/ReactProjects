import { useState } from "react";
import "./App.css";
const Card = () => {
  const [temp, setTemp] = useState(0);
  const [color, setColor] = useState("neutral");

  const changeTemp = (amount) => {
    const newTemp = temp + amount;
    if (newTemp > 25) setColor("hot");
    else if (newTemp < 11) setColor("cold");
    else setColor("neutral");

    setTemp(newTemp);
  };
  return (
    <div className="card">
      <div className={`circle ${color}`}>
        <span className="temperature">{temp} C🌡️</span>
      </div>
      <div className="buttons">
        <button className="increment" onClick={() => changeTemp(1)}>
          +
        </button>
        <button className="decrement" onClick={() => changeTemp(-1)}>
          -
        </button>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <Card />
    </>
  );
}

export default App;
