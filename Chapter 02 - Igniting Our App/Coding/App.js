import  React  from "react";
import  ReactDOM  from "react-dom/client";
/**
 * 1. Creating the Elements using JavaScript DOM or Manipulate the HTML DOM using Javscript
 */

// const heading = document.createElement("h1");
// heading.innerHTML = "Welcome to Namaste React !!";
// const root = document.getElementById("root");
// root.appendChild(heading);

/**
 * 2. Creating the HTML Elements using React and Render using React-DOM or Manipulate the HTML DOM using React
 */

//Step 1 : Create a h1 element
const heading = React.createElement("h1",{ id: "heading1" },"Namaste JavaScript from React Element");
//Step 2 : Create a root node element
const root = ReactDOM.createRoot(document.getElementById("root"));
//Step 3 : render the heading element using a root.render() => ReactDOM
root.render(heading);

/**
 * 3. Create nested React Elements
 * <div id="parent">
 *      <div id="child1">
 *          <h1> heading 1 </h1>
 *          <h2> heading 2 </h2>
 *      </div>
 * *    <div id="child2">
 *          <h1> heading 1 </h1>
 *          <h2> heading 2 </h2>
 *      </div>
 * </div>
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Header <h1></h1>"),
    React.createElement("h2", {}, "Header <h2></h2>"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Header <h1></h1>"),
    React.createElement("h2", {}, "Header <h2></h2>"),
  ]),
]);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
