import "./App.css";
import "./themes.css";
//import LoginForm from "./components/LoginForm.tsx";
import React from "react";
import GuestPage from "../pages/GuestHome.tsx";

//import Home from "./components/Home.tsx";
//import Card from "./components/cardTemplate";

const App: React.FC = () => {
  return (
    <>
      <GuestPage />
    </>
  );
};

export default App;
