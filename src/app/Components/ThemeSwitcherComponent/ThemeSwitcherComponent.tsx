"use client"
import React, {FC, useEffect} from "react";

const ThemeSwitcherComponent:FC = () => {
    const toggleTheme = () => {

        const isDarkTheme = document.body.classList.contains("dark-theme");

        if (isDarkTheme) {
            document.body.classList.remove("dark-theme");
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-theme");
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        document.body.classList.add(`${savedTheme}-theme`);
    }, []);

    return <button onClick={toggleTheme}>Switch Theme</button>;
};

export default ThemeSwitcherComponent;
