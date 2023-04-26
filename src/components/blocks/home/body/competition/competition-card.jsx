import React from "react";
import "./competition.scss"

const CompetitionCard = ({ textOne, textTwo }) => {
  return (
    <div className="left competition">
      <div className="text fade-comp-text">{textOne}</div>
      <div className="text comp-text">{textTwo}</div>
    </div>
  );
};

export default CompetitionCard;
