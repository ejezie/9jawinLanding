import React from "react";
import "./search-input.scss";
import { searchIcon } from "../../../assets/images";

const SearchInput = () => {
  return (
    <>
      <div className="search-input">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="search" className="search-icon" />
      </div>
      <div>
        <img src={searchIcon} alt="search" className="search-icon-mob" />
      </div>
    </>
  );
};

export default SearchInput;
