import React from "react";
import "./highlights.scss";
import Container from "../../../layout/container/container";
import {
  printIcon,
  refreshIcon,
  downwIcon,
  graphIcon,
  rightIcon,
  fireIcon,
  printwIcon,
  refreshwIcon,
} from "../../../../../assets/images";
import CategoryTabs from "../../../layout/header/category-tabs/category-tab";
import CompetitionCard from "../competition/competition-card";

const menuList = [
  { name: "Football", icon: null },
  { name: "Basketball", icon: null },
  { name: "Tennis", icon: null },
  { name: "Table Tennis", icon: null },
  { name: "Tennis", icon: null },
  { name: "Football", icon: null },
  { name: "Football", icon: null },
  { name: "More Sports", icon: downwIcon },
];

const Highlights = () => {
  return (
    <>
      <div className="highlights">
        <div className="highlight-text-container space-between padding">
          <div className="highlight-text left">
            <div className="red"></div>
            <div className="sub-heading highlight-text-sub" >Highlights</div>
          </div>
          <div className="icon-text-highlight-container left">
            <div
              className="icon-text-highlight left center"
              style={{ marginRight: "28px" }}
            >
              <img src={printIcon} alt="icon" />
              <span className="heading-text">Print</span>
            </div>
            <div className="icon-text-highlight left center">
              <img src={refreshIcon} alt="icon" />
              <span className="heading-text">Refresh</span>
            </div>
          </div>
        </div>
        <div className="padding">
          <CategoryTabs menuList={menuList} gap="80px" textColor="#000000" />
        </div>
        <div className="left comp-card-wrap padding">
          <CompetitionCard textOne={"UEFA"} textTwo={"UEFA Champions League"} />
          <CompetitionCard textOne={"Friendly"} textTwo={"Int Friendly"} />
          <CompetitionCard textOne={"Europa"} textTwo={"Europa League"} />
          <CompetitionCard textOne={"UEFA"} textTwo={"UEFA Champions League"} />
        </div>

        <div className="left date padding">
          <div className="sub-heading date-sub-heading">28/03 Tuesday</div>
          <div className="value-wrap left">
            <div className="value-white center text">1</div>
            <div className="value-white center text">2</div>
            <div className="value-white center text">3</div>
          </div>
          <div className="value-wrap left">
            <div className="value-white center">Goals</div>
            <div className="value-white center">Over</div>
            <div className="value-white center">Under</div>
          </div>
        </div>
        <div className="">
          {[1, 1, 1, 1, 1].map((i) => (
            <div className="left table-data padding">
              <img src={graphIcon} alt="icon" className="graph-icon" />
              <div className="left odd-id">
                <div className="text comp-text">18:00</div>
                <div className="text fade-comp-text">ID: 89022</div>
              </div>
              <div className="left odd-text">
                <div className="text comp-text">Real Madrid</div>
                <div className="text comp-text">Arsenal</div>
              </div>
              <div className="value-wrap left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
              <div className="value-wrap left" style={{ marginRight: "60px" }}>
                <div className="value-red center">
                  <span style={{ marginRight: "6px" }}>2</span>
                  <img src={downwIcon} alt="icon" />
                </div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
              </div>
              <div className="left arrow-text">
                <div className="text">+13</div>
                <img src={rightIcon} alt="icon" />
              </div>
            </div>
          ))}
        </div>

        <div className="padding">
          <div className="btn center heading-text">View All Live Events</div>
        </div>
      </div>
      <div className="highlights-t">
        <div className="highlight-text-container space-between padding">
          <div className="highlight-text left">
            <img src={fireIcon} alt="icon" style={{ marginRight: "7px" }} />
            <div className="sub-heading highlight-text-sub">Live</div>
          </div>
          <div className="icon-text-highlight-container left">
            <div
              className="icon-text-highlight left center"
              style={{ marginRight: "28px" }}
            >
              <img src={printwIcon} alt="icon" />
              <span className="headingtext" style={{ color: "white" }}>
                Print
              </span>
            </div>
            <div className="icon-text-highlight left center" style={{alignItems: "center"}}>
              <img src={refreshwIcon} alt="icon" />
              <span className="heading-text" style={{ color: "white" }}>
                Refresh
              </span>
            </div>
          </div>
        </div>
        <div className="padding" style={{ borderBottom: "1px solid #ececec" }}>
          <CategoryTabs menuList={menuList} gap="32px" textColor="#FFFFFF" />
        </div>
        <div className="">
          <div className="left date padding">
            <div className="sub-heading date-sub-heading">
              International Friendly Match
            </div>
            <div className="value-wrap left">
              <div
                style={{ color: "white" }}
                className="value-blue center text"
              >
                1
              </div>
              <div
                style={{
                  color: "white",
                  flexDirection: "column",
                  marginTop: "-11px",
                }}
                className="value-blue center text"
              >
                <span style={{ whiteSpace: "nowrap", fontSize: "12px" }}>3ways</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "14px" }}>2</span>
              </div>
              <div
                style={{ color: "white" }}
                className="value-blue center text"
              >
                3
              </div>
            </div>
            <div className="value-wrap left">
              <div style={{ color: "white" }} className="value-blue center">
                1
              </div>
              <div
                style={{
                  color: "white",
                  flexDirection: "column",
                  marginTop: "-11px",
                }}
                className="value-blue center text"
              >
                <span style={{ whiteSpace: "nowrap", fontSize: "12px" }}>Next Goals</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "14px" }}>No Goal</span>
              </div>
              <div style={{ color: "white" }} className="value-blue center">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="">
            <div className="left table-data padding" style={{ borderBottom: "none" }}>
              {/* <img src={graphIcon} alt="icon" className="graph-icon" /> */}
              <div className="left odd-id">
                <div className="text comp-text">18:00</div>
                <div className="text fade-comp-text">HT</div>
              </div>
              <div className="left odd-text">
                <div className="text comp-text">France</div>
                <div className="text comp-text">Nigeria</div>
              </div>
              <div className="value-wrap left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
              <div className="value-wrap left" style={{ marginRight: "60px" }}>
                <div className="value-red center">
                  <span style={{ marginRight: "6px" }}>2</span>
                  <img src={downwIcon} alt="icon" />
                </div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
              </div>
              <div className="left arrow-text">
                <div className="text">+13</div>
                <img src={rightIcon} alt="icon" />
              </div>
            </div>
            <div className="left table-data padding" >
              {/* <img src={graphIcon} alt="icon" className="graph-icon" /> */}
              <div className="left odd-id">
                <div className="text comp-text">18:00</div>
                <div className="text fade-comp-text">HT</div>
              </div>
              <div className="left odd-text">
                <div className="text comp-text">France</div>
                <div className="text comp-text">Nigeria</div>
              </div>
              <div className="value-wrap left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
              <div className="value-wrap left" style={{ marginRight: "60px" }}>
                <div className="value-red center">
                  <span style={{ marginRight: "6px" }}>2</span>
                  <img src={downwIcon} alt="icon" />
                </div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
              </div>
              <div className="left arrow-text">
                <div className="text">+13</div>
                <img src={rightIcon} alt="icon" />
              </div>
            </div>
        </div>
        <div className="">
          <div className="left date padding">
            <div className="sub-heading date-sub-heading">
              International Friendly Match
            </div>
            <div className="value-wrap left">
              <div
                style={{ color: "white" }}
                className="value-blue center text"
              >
                1
              </div>
              <div
                style={{
                  color: "white",
                  flexDirection: "column",
                  marginTop: "-11px",
                }}
                className="value-blue center text"
              >
                <span style={{ whiteSpace: "nowrap", fontSize: "12px" }}>3ways</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "14px" }}>2</span>
              </div>
              <div
                style={{ color: "white" }}
                className="value-blue center text"
              >
                3
              </div>
            </div>
            <div className="value-wrap left">
              <div style={{ color: "white" }} className="value-blue center">
                1
              </div>
              <div
                style={{
                  color: "white",
                  flexDirection: "column",
                  marginTop: "-11px",
                }}
                className="value-blue center text"
              >
                <span style={{ whiteSpace: "nowrap", fontSize: "12px" }}>Next Goals</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "14px" }}>No Goal</span>
              </div>
              <div style={{ color: "white" }} className="value-blue center">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="">
            <div className="left table-data padding" style={{ borderBottom: "none" }}>
              {/* <img src={graphIcon} alt="icon" className="graph-icon" /> */}
              <div className="left odd-id">
                <div className="text comp-text">18:00</div>
                <div className="text fade-comp-text">HT</div>
              </div>
              <div className="left odd-text">
                <div className="text comp-text">Gabon</div>
                <div className="text comp-text">Seria leone</div>
              </div>
              <div className="value-wrap left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
              <div className="value-wrap left" style={{ marginRight: "60px" }}>
                <div className="value-red center">
                  <span style={{ marginRight: "6px" }}>2</span>
                  <img src={downwIcon} alt="icon" />
                </div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
              </div>
              <div className="left arrow-text">
                <div className="text">+13</div>
                <img src={rightIcon} alt="icon" />
              </div>
            </div>
            <div className="left table-data padding" >
              {/* <img src={graphIcon} alt="icon" className="graph-icon" /> */}
              <div className="left odd-id">
                <div className="text comp-text">18:00</div>
                <div className="text fade-comp-text">HT</div>
              </div>
              <div className="left odd-text">
                <div className="text comp-text">Namibia</div>
                <div className="text comp-text">Egypt</div>
              </div>
              <div className="value-wrap left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
              <div className="value-wrap left" style={{ marginRight: "60px" }}>
                <div className="value-red center">
                  <span style={{ marginRight: "6px" }}>2</span>
                  <img src={downwIcon} alt="icon" />
                </div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
              </div>
              <div className="left arrow-text">
                <div className="text">+13</div>
                <img src={rightIcon} alt="icon" />
              </div>
            </div>
        </div>
        <div className="">
          <div className="left date padding">
            <div className="sub-heading date-sub-heading">
              International Friendly Match
            </div>
            <div className="value-wrap left">
              <div
                style={{ color: "white" }}
                className="value-blue center text"
              >
                1
              </div>
              <div
                style={{
                  color: "white",
                  flexDirection: "column",
                  marginTop: "-11px",
                }}
                className="value-blue center text"
              >
                <span style={{ whiteSpace: "nowrap", fontSize: "12px" }}>3ways</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "14px" }}>2</span>
              </div>
              <div
                style={{ color: "white" }}
                className="value-blue center text"
              >
                3
              </div>
            </div>
            <div className="value-wrap left">
              <div style={{ color: "white" }} className="value-blue center">
                1
              </div>
              <div
                style={{
                  color: "white",
                  flexDirection: "column",
                  marginTop: "-11px",
                }}
                className="value-blue center text"
              >
                <span style={{ whiteSpace: "nowrap", fontSize: "12px" }}>Next Goals</span>
                <span style={{ whiteSpace: "nowrap", fontSize: "14px" }}>No Goal</span>
              </div>
              <div style={{ color: "white" }} className="value-blue center">
                2
              </div>
            </div>
          </div>
        </div>
        <div className="">
            <div className="left table-data padding" style={{ borderBottom: "none" }}>
              {/* <img src={graphIcon} alt="icon" className="graph-icon" /> */}
              <div className="left odd-id">
                <div className="text comp-text">18:00</div>
                <div className="text fade-comp-text">HT</div>
              </div>
              <div className="left odd-text">
                <div className="text comp-text">France</div>
                <div className="text comp-text">Nigeria</div>
              </div>
              <div className="value-wrap left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
              <div className="value-wrap left" style={{ marginRight: "60px" }}>
                <div className="value-red center">
                  <span style={{ marginRight: "6px" }}>2</span>
                  <img src={downwIcon} alt="icon" />
                </div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
              </div>
              <div className="left arrow-text">
                <div className="text">+13</div>
                <img src={rightIcon} alt="icon" />
              </div>
            </div>
            <div className="left table-data padding" style={{ borderBottom: "none" }} >
              {/* <img src={graphIcon} alt="icon" className="graph-icon" /> */}
              <div className="left odd-id">
                <div className="text comp-text">18:00</div>
                <div className="text fade-comp-text">HT</div>
              </div>
              <div className="left odd-text">
                <div className="text comp-text">France</div>
                <div className="text comp-text">Nigeria</div>
              </div>
              <div className="value-wrap left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
              <div className="value-wrap left" style={{ marginRight: "60px" }}>
                <div className="value-red center">
                  <span style={{ marginRight: "6px" }}>2</span>
                  <img src={downwIcon} alt="icon" />
                </div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
                <div className="value-red center">5.70</div>
              </div>
              <div className="left arrow-text">
                <div className="text">+13</div>
                <img src={rightIcon} alt="icon" />
              </div>
            </div>
        </div>

        <div className="padding">
          <div className="btn center heading-text">View All Live Events</div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
