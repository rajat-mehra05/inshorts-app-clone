import React from "react";
import "./NavigBar.css";
import InshortsDrawer from "./InshortsDrawer";

const NavigBar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        <InshortsDrawer setCategory={setCategory} />
      </div>
      <img
        style={{ cursor: "pointer" }}
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        alt="icon"
        height="80%"
      />
    </div>
  );
};

export default NavigBar;
