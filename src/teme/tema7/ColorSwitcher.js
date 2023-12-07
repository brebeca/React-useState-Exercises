import React from "react";
import switcherStyles from "./ColorSwitcher.module.css";

function ColorSwitcher() {
  return (
    <div className={switcherStyles.container}>
      <select className={switcherStyles.switcher}>
        {/* Render the color options here */}
      </select>

      <div></div>
    </div>
  );
}

export default ColorSwitcher;
