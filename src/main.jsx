import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// This is the actual starting point of the whole app.
// It finds the <div id="root"> from index.html and tells React
// "render the <App /> component tree inside this element".
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
