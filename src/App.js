import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([0, 0, 0]);

  const changeCount = (n) => {
    setCounters(
      counters.map((element, index) => {
        if (n === index) {
          return element + 1;
        }

        return element;
      })
    );
  };

  return (
    <>
      {[0, 1, 2].map((elementOfArray, indexOfElement) => {
        return (
          <button key={indexOfElement}
            className="button"
            onClick={() => changeCount(indexOfElement)}
          >
            {counters[indexOfElement]}
          </button>
        );
      })}
    </>
  );
}

//localStorage
//если счетчик достигает 10 на одном, то все обновляются
// counters.some((el) => {
//   if (el === 10) {
//     setCounters([0, 0, 0]);
//   }
// });

//написал просто в коде ниже, + не знаю правильный ли метод
//если на одном достигает 10, то он обновляется

export default App;
