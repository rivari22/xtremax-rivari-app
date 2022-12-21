import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "tw-elements";

import { PlaceProvider } from "./Context/PlaceProvider/PlaceProvider";

// NOTES: Issue on react strict mode on google map react 3rd package library, for detail: https://stackoverflow.com/questions/72115135/google-map-react-not-loading-uncaught-typeerror-cannot-read-properties-of-unde
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PlaceProvider>
    <App />
  </PlaceProvider>
);
