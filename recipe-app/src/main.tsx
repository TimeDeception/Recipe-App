import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("main")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("Navbar")!).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);
