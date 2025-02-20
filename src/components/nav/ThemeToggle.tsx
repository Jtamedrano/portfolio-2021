"use client";

import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";
import { HiMoon, HiSun } from "react-icons/hi2";

export const ThemeToggle = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  return (
    <button onClick={themeContext.toggleTheme}>
      {themeContext.theme === "light" ? (
        <HiSun className="size-6" />
      ) : (
        <HiMoon className="size-6" />
      )}
    </button>
  );
};
