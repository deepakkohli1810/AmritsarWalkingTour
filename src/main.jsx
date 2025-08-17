import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {HashRouter} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const base =
  process.env.NODE_ENV === "production"
    ? "/AmritsarWalkingTour"
    : "";
createRoot(document.getElementById("root")).render(

  <StrictMode>
    <HashRouter basename={base}>
      <App />
    </HashRouter>
  </StrictMode>
);
