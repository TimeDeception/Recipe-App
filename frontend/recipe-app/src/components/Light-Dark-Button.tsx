import "../CSS/themes.css";
import { useState } from "react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState("light"); // Default theme
  const themes = ["light", "dark", "solar"];

  const toggleTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Mood
      <div className="icon"></div>
    </button>
  );
};

export default ThemeToggle;
