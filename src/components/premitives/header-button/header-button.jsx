import React from "react";
import "./header-button.scss";

const HeaderButton = ({ text, color }) => {
  return <div className={`header-button-${color} heading-text`}>{text}</div>;
};

export default HeaderButton;
