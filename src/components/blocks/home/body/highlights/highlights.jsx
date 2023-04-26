import React from "react";
import "./highlights.scss";
import Container from "../../../layout/container/container";
import {
  printIcon,
  refreshIcon,
  downIcon,
  graphIcon,
  rightIcon,
} from "../../../../../assets/images";
import CategoryTabs from "../../../layout/header/category-tabs/category-tab";
import CompetitionCard from "../competition/competition-card";

const menuList = [
  { name: "Football", icon: null },
  { name: "Basketball", icon: null },
  { name: "Table Tennis", icon: null },
  { name: "Tennis", icon: null },
  { name: "More Sports", icon: downIcon },
];

const Highlights = () => {
  return (
    <>
      <div className="highlights">
        <div className="highlight-text-container space-between padding">
          <div className="highlight-text left">
            <div className="red"></div>
            <div className="sub-heading highlight-text-sub">Highlights</div>
          </div>
          <div className="icon-text-highlight-container left">
            <div
              className="icon-text-highlight left"
              style={{ marginRight: "28px" }}
            >
              <img src={printIcon} alt="icon" />
              <span className="text">Print</span>
            </div>
            <div className="icon-text-highlight left">
              <img src={refreshIcon} alt="icon" />
              <span className="text">Print</span>
            </div>
          </div>
        </div>
        <div className="padding">
          <CategoryTabs menuList={menuList} gap="80px" textColor="#2A384E" />
        </div>
        <div className="padding">
          <div className="left comp-card-wrap">
            <CompetitionCard
              textOne={"UEFA"}
              textTwo={"UEFA Champions League"}
            />
            <CompetitionCard textOne={"Friendly"} textTwo={"Int Friendly"} />
            <CompetitionCard textOne={"Europa"} textTwo={"Europa League"} />
            <CompetitionCard
              textOne={"UEFA"}
              textTwo={"UEFA Champions League"}
            />
          </div>
        </div>

        <div className="padding">
          <div className="left date">
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
        </div>
        <div className="padding">
          {[1, 1, 1, 1, 1].map((i) => (
            <div className="left table-data ">
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
                  <img src={downIcon} alt="icon" />
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
            <div className="red"></div>
            <div className="sub-heading highlight-text-sub">Highlights</div>
          </div>
          <div className="icon-text-highlight-container left">
            <div
              className="icon-text-highlight left"
              style={{ marginRight: "28px" }}
            >
              <img src={printIcon} alt="icon" />
              <span className="text">Print</span>
            </div>
            <div className="icon-text-highlight left">
              <img src={refreshIcon} alt="icon" />
              <span className="text">Print</span>
            </div>
          </div>
        </div>
        <div className="padding">
          <CategoryTabs menuList={menuList} gap="80px" textColor="#2A384E" />
        </div>
        <div className="padding">
          <div className="left comp-card-wrap">
            <CompetitionCard
              textOne={"UEFA"}
              textTwo={"UEFA Champions League"}
            />
            <CompetitionCard textOne={"Friendly"} textTwo={"Int Friendly"} />
            <CompetitionCard textOne={"Europa"} textTwo={"Europa League"} />
            <CompetitionCard
              textOne={"UEFA"}
              textTwo={"UEFA Champions League"}
            />
          </div>
        </div>

        <div className="padding">
          <div className="left date">
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
        </div>
        <div className="padding">
          {[1, 1, 1, 1, 1].map((i) => (
            <div className="left table-data ">
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
                  <img src={downIcon} alt="icon" />
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
    </>
  );
};

export default Highlights;
