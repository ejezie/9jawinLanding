import React from "react";
import "./category-tabs.scss";
import { IconTextHome } from "../../../../premitives/icon-text/icon-text";
import Container from "../../container/container";

const CategoryTabs = ({ gap = "30px", menuList = [], textColor = "", headerTab=false }) => {
  const [activeTab, setActiveTab] = React.useState("Home");

  return (
    <div className="tabs-category">
        <div
          className="tabs-category-container space-between"
          style={{ gap: `${gap}`, overflowX: 'scroll' }}
        >
          {menuList.map((item) => (
            <IconTextHome
              onClick={() => {
                setActiveTab(item.name);
              }}
              active={activeTab === item.name}
              icon={item.icon}
              text={item.name}
              horizontal
              iconHeight="8px"
              iconWidth="14px"
              textColor={textColor}
              headerTab
            />
          ))}
        </div>
    </div>
  );
};

export default CategoryTabs;
