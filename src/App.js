const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Yena"),
    React.createElement("h2", {}, "Bright"),
    React.createElement("h3", {}, "Quillen"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
