import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "tw-elements";

import { PlaceProvider } from "./Context/PlaceProvider/PlaceProvider";

// TODO: EXPLAIN COMMENTED STRICT MODE
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PlaceProvider>
    <App />
  </PlaceProvider>
);
