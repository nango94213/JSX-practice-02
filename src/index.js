import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const number = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {name} and {number}!
    </h1>
    <p>my lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,

  document.getElementById("root")
);
