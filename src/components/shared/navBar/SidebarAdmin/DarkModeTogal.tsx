// DarkModeToggle.js

import React, { useState, useEffect } from "react";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { PiMoonStarsFill } from "react-icons/pi";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <li className="nav-item nav-item-vertical-custom pt-5">
      <div className="nav-link nav-link-vertival-custom-admin with-tooltip-menu align-items-center">
        <span className="icon-container-nav-link-vertival">
          {theme === "light" ? <MdModeNight /> : <MdLightMode />}
        </span>
        <span className="hiddenable-navlink-label">
          Mode {theme === "light" ? "sombre" : "clair"}
        </span>
        <div className="content-switch-mode pt-1 mt-1">
          <label className="switch-btn">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <span></span>
          </label>
        </div>
      </div>
    </li>
  );
};

export default DarkModeToggle;
