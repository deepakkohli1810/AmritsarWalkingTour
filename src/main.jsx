import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css' ;
import App from './App.jsx' ;

const HomeBase = "/AmritsarWalkingTour";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={HomeBase}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
