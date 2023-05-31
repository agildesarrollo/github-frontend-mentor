"use client";

import React, { useEffect, useState } from "react";
import SunIcon from "../components/icons/SunIcon";
import MoonIcon from "../components/icons/MoonIcon";

const initialThemeState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") as "light" | "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "light"
      : "dark";
    }
  return "dark";
 }; 

const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState);

  useEffect(() => {
    setHasMounted(true);
  },[])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  if(!hasMounted) {
    return <>Cargando...</>;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <header className="mb-10 flex items-center space-x-2">
      <h1 className="flex-grow text-3xl font-bold text-fondo dark:text-white">
        devfinder
      </h1>

      <span className=" uppercase text-fondo dark:text-white">
        {theme === "light" ? "dark mode" : "light mode"}
      </span>
      <button onClick={handleTheme}>
        {theme === "light" ? (
          <MoonIcon className="dark:fill-fondo" height={30} />
        ) : (
          <SunIcon className="fill-white" width={30} />
        )}
      </button>
    </header>
  );
};

export default Navbar;
