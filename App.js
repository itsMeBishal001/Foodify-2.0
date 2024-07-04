import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <div>App</div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// can call  a functional component ==> <component/> && component()-- because it is a function
root.render(<App />);
