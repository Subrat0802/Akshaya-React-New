import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1", 
//     {id:"heading"},
//     "Namste React🚀"
// );





// const jsxHeading = <h1>Namste React once again🚀</h1>

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);





const Span = <span>Hello,</span>;

const Title = () => (
    <h1 className="head">{Span}Raect development Course</h1>
);

const HeadingComponent = () => (
    <div id="container">
        <Title/>
        <h1 className="course">Namaste React by Akshaya saini🚀</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);


