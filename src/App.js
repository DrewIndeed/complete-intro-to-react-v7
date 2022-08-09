/*eslint-env browser*/

import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Yena",
      animal: "dog",
      breed: "A",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "cat",
      breed: "B",
    }),
    React.createElement(Pet, {
      name: "Anna",
      animal: "bear",
      breed: "C",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
