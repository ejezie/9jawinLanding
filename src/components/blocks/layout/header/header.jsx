import React from "react";
import "./header.scss";
import Container from "../container/container";
import HamburgerMenu from "../../../premitives/hamburger/hamburger";
import SearchInput from "../../../premitives/search-input/search-input";
import HeaderButton from "../../../premitives/header-button/header-button";
import { logo, himage, downIcon } from "../../../../assets/images";
import TabsHeader from "./tabs-header/tabs-header";
import CategoryHeader from "./category-tabs/category-tab";

const menuList = [
  { name: "Home", icon: null },
  { name: "Football", icon: null },
  { name: "Basketball", icon: null },
  { name: "Table Tennis", icon: null },
  { name: "American Football", icon: null },
  { name: "Volleyball", icon: null },
  { name: "Beachball", icon: null },
  { name: "Handball", icon: null },
  { name: "Baseball", icon: null },
  { name: "More Sports", icon: downIcon },
];

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header-container center">
        <Container>
          <div className="space-between">
            <div className="center">
              <HamburgerMenu isOpen={isOpen} handleClick={handleClick} />
              <img src={logo} alt="logo" className="header-logo" />
            </div>
            <div className="center">
              <SearchInput />
              <HeaderButton text={"Register"} color={"blue"} />
              <HeaderButton text={"Login"} color={"red"} />
            </div>
          </div>
        </Container>
      </div>
      <img src={himage} alt="heroImage" className="himage" />
      <TabsHeader />
      <Container>
        <CategoryHeader menuList={menuList} />
      </Container>
    </>
  );
};

export default Header;
