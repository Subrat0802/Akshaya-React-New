// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from javascript";

// const root = document.getElementById("root");
// root.appendChild(heading);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "This is namste React 🚀"),
    React.createElement("h2", { id: "heading" }, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I'm a h1 tag"),
    React.createElement("h2", { id: "heading" }, "I'm a h2 tag"),
  ]),
]);

// const heading = React.createElement(
//     "h1",
//     {id: 'heading'}, //attribute
//     "Hello world from React!" //children
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
