"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    return theme || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setTheme(getFromLocalStorage());
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        toggleTheme: toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
