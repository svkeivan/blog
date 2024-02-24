"use client";
import { useContext, useState } from "react";
import { Switch } from "@headlessui/react";
import { ThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

const DarkToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Switch
      checked={theme === "light"}
      onChange={toggleTheme}
      className={`${theme === "dark" ? "bg-gray-200" : "bg-gray-700"}
        'relative focus:ring-offset-2' inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600`}
    >
      <span className="sr-only">Dark mode</span>
      <div
        // aria-hidden="true"
        className={`${theme === "dark" ? "translate-x-5 " : "translate-x-0 "}
          pointer-events-none inline-block size-5 transform rounded-full shadow ring-0 transition duration-300 ease-in-out`}
      >
        <Image
          src={theme === "dark" ? "/Images/moon.png" : "/Images/sun.png"}
          alt="darkMode"
          fill
          className="object-contain"
        />
      </div>
    </Switch>
  );
};

export default DarkToggle;
