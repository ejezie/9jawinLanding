import React from "react";
import "./popular.scss";
import Accordion from "../../../premitives/accordion/accordion";
import Container from "../../layout/container/container";
import { himage } from "../../../../assets/images";

const Popular = () => {
  return (
    <div className="popular">
      <Container>
        <div className="left popular-layout">
          <div className="accordion-container">
            <div className="sub-heading" style={{ marginBottom: "-10px" }}>
              Popular
            </div>
            <Accordion text={"Today’s Football"} />
            <Accordion text={"Upcoming Events"} />
            <Accordion text={"England Premier League"} />
            <Accordion text={"BundesLiga"} />
            <Accordion text={"LA Liga"} />
            <Accordion text={"Seria A"} />
          </div>
          <img src={himage} alt="home" className="popular-image" />
        </div>
      </Container>
    </div>
  );
};

export default Popular;
