// import React from "react"; // you dont need this anymore, when you use JSX

const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  );
};

// const Pet = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, props.name),
//     React.createElement("h2", {}, props.breed),
//     React.createElement("h3", {}, props.animal),
//   ]);
// };

export default Pet;
