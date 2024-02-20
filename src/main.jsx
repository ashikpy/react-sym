import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/normalise.css"; // Assuming it's named normalize.css
import "./index.css";
import "./styles/utils.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
