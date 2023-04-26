import React from "react";
import "./tabs-header.scss";
import { IconText } from "../../../../premitives/icon-text/icon-text";
import Container from "../../container/container";


const TabsHeader = ({menuList = []}) => {
  const [activeTab, setActiveTab] = React.useState("Sports");

  return (
    <div className="tabs-header center">
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
    </div>
  );
};

export default TabsHeader;
