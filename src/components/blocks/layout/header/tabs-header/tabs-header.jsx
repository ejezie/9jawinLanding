import React from "react";
import "./tabs-header.scss";
import { IconText } from "../../../../premitives/icon-text/icon-text";
import Container from "../../container/container";
import {
  soccerIcon,
  tenisIcon,
  trophyIcon,
  calendarIcon,
  stopwatchIcon,
  pokerIcon,
} from "../../../../../assets/images";

const menuList = [
  { name: "Sports", icon: soccerIcon },
  { name: "Casino", icon: pokerIcon },
  { name: "Live", icon: stopwatchIcon },
  { name: "Today", icon: calendarIcon },
  { name: "Tennis", icon: trophyIcon },
  { name: "Jackpot", icon: tenisIcon },
  { name: "Livescore", icon: soccerIcon },
  { name: "Results", icon: soccerIcon },
  { name: "Promotion", icon: soccerIcon },
];

const TabsHeader = () => {
  const [activeTab, setActiveTab] = React.useState("Sports");

  return (
    <div className="tabs-header center">
      <Container>
        <div className="tabs-header-container space-between">
          {menuList.map((item) => (
            <IconText
              onClick={() => {
                setActiveTab(item.name);
              }}
              active={activeTab === item.name}
              icon={item.icon}
              text={item.name}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TabsHeader;
