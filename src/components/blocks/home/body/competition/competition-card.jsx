import React from "react";
import "./competition.scss"

const CompetitionCard = ({ textOne, textTwo, borderGreen }) => {
  return (
    <div className={`left ${ borderGreen ? "competition-g" : "competition" } `}>
      <div className="text fade-comp-text">{textOne}</div>
      <div className="text comp-text">{textTwo}</div>
    </div>
  );
};

export default CompetitionCard;
