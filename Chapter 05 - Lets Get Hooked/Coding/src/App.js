import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../src/Components/Header";
import Body from "../src/Components/Body";

const resObj1 = {
  type: "resturanet",
  data: {
    name: "Meghana Foods",
    cusines: ["Biryani", "South Indian"],
    avgrating: "4.8",
    costforTwo: 65000,
    deliveryTime: 50,
    imgUrl:
      "https://d4t7t8y8xqo0t.cloudfront.net/resized/720X480/group%2F1542%2Fmenu020170930184033.jpg",
  },
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
