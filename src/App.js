import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counters, setCounters] = useState(
    JSON.parse(localStorage.getItem("items")) || [0, 0, 0]
  );

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

  const resetCounters = (callbackFunc) => {
    const tenResult = callbackFunc();
    console.log(tenResult);
    if (tenResult) {
      setCounters([0, 0, 0]);
    }
  };

  const ifOneElementIsTen = () => {
    return counters.some((el) => el === 10);
  };

  const ifEveryElementIsTen = () => {
    return counters.every((el) => el >= 10);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(counters))
  }, [counters])

  return (
    <>
      {[0, 1, 2].map((elementOfArray, indexOfElement) => {
        return (
          <button
            key={indexOfElement}
            className="button"
            onClick={() => {
              changeCount(indexOfElement);
              resetCounters(ifEveryElementIsTen);
            }}
          >
            {counters[indexOfElement]}
          </button>
        );
      })}
    </>
  );
}



export default App;
