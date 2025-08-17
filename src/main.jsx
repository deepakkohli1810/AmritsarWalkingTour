import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const base =
  process.env.NODE_ENV === "production"
    ? "/AmritsarWalkingTour"
    : "";
createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <BrowserRouter basename={base}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
