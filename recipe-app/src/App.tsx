import "./App.css";
import LoginForm from "./components/LoginForm";
import React from "react";
import NavBar from "./components/NavBar.tsx";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { GlobalStyles } from "./components/GlobalStyles";

const ThemedApp: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyles theme={theme} />
      <NavBar />
      <LoginForm />
    </>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
};

export default App;
