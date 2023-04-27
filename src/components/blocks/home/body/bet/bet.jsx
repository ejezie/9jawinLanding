import React from "react";
import "./bet.scss";
import CategoryTabs from "../../../layout/header/category-tabs/category-tab";
import { bgone } from "../../../../../assets/images";
import Container from "../../../layout/container/container";

const Bet = () => {
  return (
    <div className="bet left">
      <div className="slip-slide">
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
            <div
              className="text slip-text"
              style={{ color: "#989191", fontSize: "16px", textAlign: "left" }}
            >
              To place a bet, click on the odds. Or insert a booking code
            </div>
            <input />
            <div className="slip-btn center heading-text">Load</div>
          </div>
        </div>
        <div className="slide center">
          <img src={bgone} alt="bg" />
          <div className="indicator left">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="price-wrap left">
        <div className="price-text sub-heading">Grand Prize Winners</div>
        <div className="price-col">
          <div className="price">
            <div className="win space-between">
              <div className="win-text">
                <div className="win-num text">090**** **** 90 Won</div>
                <div className="win-amount sub-heading">NGN 450.000.947</div>
                <div className="win-num text">In sports betting</div>
              </div>
              <div className="win-time text">1min ago</div>
            </div>
          </div>
          <div className="price">
            <div className="win space-between">
              <div className="win-text">
                <div className="win-num text">090**** **** 90 Won</div>
                <div className="win-amount sub-heading">NGN 450.000.947</div>
                <div className="win-num text">In sports betting</div>
              </div>
              <div className="win-time text">1min ago</div>
            </div>
          </div>
          <div className="price">
            <div className="win space-between">
              <div className="win-text">
                <div className="win-num text">090**** **** 90 Won</div>
                <div className="win-amount sub-heading">NGN 450.000.947</div>
                <div className="win-num text">In sports betting</div>
              </div>
              <div className="win-time text">1min ago</div>
            </div>
          </div>
          <div className="price">
            <div className="win space-between">
              <div className="win-text">
                <div className="win-num text">090**** **** 90 Won</div>
                <div className="win-amount sub-heading">NGN 450.000.947</div>
                <div className="win-num text">In sports betting</div>
              </div>
              <div className="win-time text">1min ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bet;
