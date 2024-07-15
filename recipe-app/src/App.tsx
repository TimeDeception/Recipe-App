import "./App.css";
import LoginForm from "./components/LoginForm";

import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import { GlobalStyles } from "./components/GlobalStyles";
import ToggleButton from "./components/Light-Dark-Button";

const ThemedApp: React.FC = () => {
  const { theme } = useTheme();

  return (
    <>
      <GlobalStyles theme={theme} />
      <ToggleButton />
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
