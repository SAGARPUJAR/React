import React from "react";
import ReactDOM from "react-dom/client";

// React Component : Its normal JS function which return the JSX or React Element
// Types of Compoenents : 1. Class based Components
//                        2. Functional based Components.

// React Element
const head = React.createElement("h5",{id:"head"},"React Element");

// Creating React Component :
const Title = () =>(
    <div className="container">
        <h1>Title Compoenent</h1>
    </div>
);

// Different ways to write Functional Component 
const HeadingComponent1 =()=><h1>hello</h1>
const HeadingComponent2 =() => {
    return <h1>Return</h1>
};
const HeadingComponent = () =>(
    <div className="container">
        <Title/>  
        {Title()}
        <Title></Title>
        <h2>Heading Compoenent</h2>
        {head}
        <HeadingComponent1/>
        <HeadingComponent2 />
    </div>
);

// Rendering the React Component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);