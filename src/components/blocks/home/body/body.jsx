import React from "react";
import "./body.scss";
import Highlights from "./highlights/highlights";
import HighlightMob from "./highlight-mob/highlight-mob";
import Container from "../../layout/container/container";

const Body = () => {
  return (
    <div className="body space-between">
      <div className="h-layout">
        <Container>
          <Highlights />
        </Container>
        <HighlightMob />
      </div>
      <div className="b-layout">Hello</div>
    </div>
  );
};

export default Body;
