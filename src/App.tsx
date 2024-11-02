import { useEffect } from "react";
import "./App.css";
import { applyInitialStyles } from "./jquery";

function App() {
  useEffect(() => {
    applyInitialStyles();
  }, []);

  const buttonPress = (symbol: string) => {
    console.log(symbol);
  };

  return (
    <>
      <div className="container">
        <h1>Calculator Application</h1>
        <div id="calculator">
          <div id="display" style={{ textAlign: "right" }}>
            <div id="answer"></div>
            <div id="expression"></div>
          </div>
          <div className="buttons">
            <button
              id="clear"
              onClick={() => buttonPress("clear")}
              className="light-gray"
            >
              C
            </button>
            <button
              id="negative"
              onClick={() => buttonPress("negative")}
              className="light-gray"
            >
              +/-
            </button>
            <button
              id="percentage"
              onClick={() => buttonPress("percentage")}
              className="light-gray"
            >
              %
            </button>
            <button
              id="divide"
              onClick={() => buttonPress("divide")}
              className="yellow"
            >
              /
            </button>
            <button
              id="seven"
              onClick={() => buttonPress("seven")}
              className="dark-gray"
            >
              7
            </button>
            <button
              id="eight"
              onClick={() => buttonPress("eight")}
              className="dark-gray"
            >
              8
            </button>
            <button
              id="nine"
              onClick={() => buttonPress("nine")}
              className="dark-gray"
            >
              9
            </button>
            <button
              id="multiply"
              onClick={() => buttonPress("multiply")}
              className="yellow"
            >
              x
            </button>
            <button
              id="four"
              onClick={() => buttonPress("four")}
              className="dark-gray"
            >
              4
            </button>
            <button
              id="five"
              onClick={() => buttonPress("five")}
              className="dark-gray"
            >
              5
            </button>
            <button
              id="six"
              onClick={() => buttonPress("six")}
              className="dark-gray"
            >
              6
            </button>
            <button
              id="subtract"
              onClick={() => buttonPress("subtract")}
              className="yellow"
            >
              -
            </button>
            <button
              id="one"
              onClick={() => buttonPress("one")}
              className="dark-gray"
            >
              1
            </button>
            <button
              id="two"
              onClick={() => buttonPress("two")}
              className="dark-gray"
            >
              2
            </button>
            <button
              id="three"
              onClick={() => buttonPress("three")}
              className="dark-gray"
            >
              3
            </button>
            <button
              id="add"
              onClick={() => buttonPress("add")}
              className="yellow"
            >
              +
            </button>
            <button
              id="zero"
              onClick={() => buttonPress("zero")}
              className="dark-gray"
            >
              0
            </button>
            <button
              id="decimal"
              onClick={() => buttonPress("decimal")}
              className="dark-gray"
            >
              .
            </button>
            <button
              id="equals"
              onClick={() => buttonPress("equals")}
              className="yellow"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
