import React from "react";
import ReactDOM from "react-dom";
import logo from "./Images/logo.png";
import userIcon from "./Images/userIcon.png";

// using React.createElement
const elm = React.createElement("div", { id: "header" }, [
  React.createElement("h1", { className: "title" }, "heading 1"),
  React.createElement("h2", { className: "title" }, "heading 2"),
  React.createElement("h3", { className: "title" }, "heading 3"),
]);

const Header1 = () => <h1>Header 1</h1>;
const Header2 = () => <h2>Header 2</h2>;
const Header3 = () => <h3>Header 3</h3>;

//using JSX Functional Component :
const Header = () => (
  <div id="header">
    <Header1 />
    {Header2()}
    <Header3></Header3>
  </div>
);

// Creating Header Component with Logo SearchBar and UserIcon
const HeaderCompoent = () => (
  <div className="container">
    <div className="logo">
      <img src={logo} width={55} height={50} />
    </div>
    <div className="searchbar">
      <input type="text" placeholder="Search" />
    </div>
    <div className="userIcon">
      <img src={userIcon} width={30} height={30} />
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderCompoent />);
