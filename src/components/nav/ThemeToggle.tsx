"use client";

import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";

export const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  return (
    <button onClick={themeContext.toggleTheme}>
      {themeContext.theme === "light" ? "🌞" : "🌜"}
    </button>
  );
};
