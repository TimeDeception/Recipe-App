import React from "react";
import { useTheme } from "./ThemeContext";

const ToggleButton: React.FC = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ToggleButton;
