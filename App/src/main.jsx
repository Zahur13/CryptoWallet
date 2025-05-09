import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import LivePriceProvider from "../src/Components/context/LivePrice.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LivePriceProvider>
      <App />
    </LivePriceProvider>
  </React.StrictMode>
);
