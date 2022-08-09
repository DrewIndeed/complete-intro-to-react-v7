/*eslint-env browser*/

import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Yena" animal="dog" breed="German" />
      <Pet name="Luna" animal="cat" breed="Three colors" />
      <Pet name="Anna" animal="bear" breed="Panda" />
    </div>
  );
};

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Yena",
//       animal: "dog",
//       breed: "A",
//     }),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "cat",
//       breed: "B",
//     }),
//     React.createElement(Pet, {
//       name: "Anna",
//       animal: "bear",
//       breed: "C",
//     }),
//   ]);
// };

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
