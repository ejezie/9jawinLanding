import React from "react";
import "./body.scss";
import Highlights from "./highlights/highlights";
import HighlightMob from "./highlight-mob/highlight-mob";
import Container from "../../layout/container/container";
import Bet from "./bet/bet";

const Body = () => {
  return (
    <Container>
      <div className="body space-between">
        <div className="h-layout">
          <Highlights />
          <HighlightMob />
        </div>
        <div className="b-layout">
          <Bet />
        </div>
      </div>
    </Container>
  );
};

export default Body;
