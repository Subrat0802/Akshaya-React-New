import React from "react";
import ReactDOM from "react-dom/client";

//React elements
// const heading = React.createElement("h1", { id: "heading" }, "Namste React!");

//JSX - Html like or xml like syntax

const elem = <span>hello world</span>
//react element------------------
const Title = <h1 className="head">{elem} Hello Namste react using jsx</h1>;

//-----------------------------------
//react components
//class based component - OLD
//function Component - New

// const HeadingComponent = () => {
//   return <h1>Namste react functional components</h1>;
// };

// const HeadingComponent1 = () => <h1>Namste react functional components</h1>;



const Title1 = () => (
    <h1 className="head">react is booster for your frontend🚀</h1>
)



const number = 1000;
//react component--------------------
const HeadingComponent2 = () => (
<div id="container">
    <Title1/>
    {Title1()}
    <Title1></Title1>

    {Title}  
    {number + 1000}
    <h1>Namste react functional components{number}</h1>
</div>
);
//---------------------------------------

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);
