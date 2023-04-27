import React from "react";
import "./bet.scss";
import CategoryTabs from "../../../layout/header/category-tabs/category-tab";

const myList = [
  { name: "Home", icon: null },
  { name: "Football", icon: null },
];

const Bet = () => {
  return (
    <div className="bet left">
      <div className="slip">
        <div className="slip-top">
          {/* <CategoryTabs menuList={myList} /> */}
          <div className="space-between slip-tab">
            <div className=" heading-text center active-slip">Betslip</div>
            <div className="heading-text active-slip-t">Cashout</div>
          </div>
          <div className=" toggle left">
            <div className="toggle-num center">2</div>
            <div className="left toggle-bg">
              <div className="toggle-text-white text">Real</div>
              <div className="text toggle-text-red">Sim</div>
            </div>
          </div>
        </div>
        <div className="slip-bottom">
            <div className="text" style={{color: "#989191", fontSize: "16px", textAlign: "left"}}>
                To place a bet, click on the odds. Or insert a booking code
            </div>
            <input/>
            <div className="slip-btn center heading-text">Load</div>
        </div>
      </div>
    </div>
  );
};

export default Bet;
