import React, { createContext, useState, useContext, ReactNode } from "react";
import { LightTheme, DarkTheme } from "./themes";

interface ThemeContextType {
  theme: typeof LightTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(LightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === LightTheme ? DarkTheme : LightTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
