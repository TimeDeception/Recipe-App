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
      <span className="theme-icon" aria-label={theme}>
        {theme === "light" && <span role="img" aria-label="Light" className="icon sun">☀️</span>}
        {theme === "dark" && <span role="img" aria-label="Dark" className="icon moon">🌙</span>}
        {theme === "solar" && <span role="img" aria-label="Solar" className="icon solar">🔆</span>}
      </span>
      <span className="theme-label" style={{ marginLeft: "0.5em" }}>
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </span>
    </button>
  );
};

export default ThemeToggle;
