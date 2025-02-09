import "./App.css";
//import LoginForm from "./components/LoginForm.tsx";
import React from "react";
import NavBar from "./components/NavBar.tsx";
//import Home from "./components/Home.tsx";
//import Card from "./components/cardTemplate";
import { ThemeProvider, useTheme } from "./components/ThemeContext.tsx";
import { GlobalStyles } from "./components/GlobalStyles.tsx";
import { BrowserRouter as Router } from "react-router-dom";

const ThemedApp: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyles theme={theme} />
      <NavBar className="NavCard" />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </Router>
  );
};

export default App;
