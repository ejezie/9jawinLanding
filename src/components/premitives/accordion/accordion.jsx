import React from "react";
import "./accordion.scss";
import { rightIcon } from "../../../assets/images";

const Accordion = ({ text }) => {
  return (
    <div className="accordion left">
      <div className="text-heading accordion-text">{text}</div>
      <img src={rightIcon} alt="icon" />
    </div>
  );
};

export default Accordion;
