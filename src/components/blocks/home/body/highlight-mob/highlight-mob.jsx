import React from "react";
import "./highlight-mob.scss";
import Container from "../../../layout/container/container";
import {
  premIcon,
  champIcon,
  europaIcon,
  wingIcon,
  madridIcon,
  arsenalIcon,
  fireIcon,
  graphIcon,
  botIcon,
} from "../../../../../assets/images";
import { getAllByRole } from "@testing-library/react";

const HighlightMob = () => {
  return (
    <>
    <div className="highlight-mob">
      <Container>
        <div className="comp-card-wrap-h left">
          <div className="comp-card-active left">
            <img src={champIcon} alt="icon" />
            <div className="heading-text"> UEFA Champions League</div>
          </div>
          <div className="comp-card center">
            <img src={premIcon} alt="icon" />
          </div>
          <div className="comp-card center">
            <img src={europaIcon} alt="icon" />
          </div>
          <div className="comp-card center">
            <img src={wingIcon} alt="icon" />
          </div>
        </div>
        <div className="odd-card-wrap left">
          <div className="odd-card">
            <div className="space-between">
              <div
                className="text"
                style={{
                  color: "#D23D2B",
                  fontSize: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                Best Odds
              </div>
              <div
                className="text"
                style={{
                  color: "#D23D2B",
                  fontSize: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                UEFA Championship
              </div>
            </div>
            <div className="club-fixture-odd space-between">
              <div className="club">
                <img src={madridIcon} alt="icon" />
                <div className="text">Real Madrid</div>
              </div>
              <div className="club-odd-text">
                <div className="text" style={{ color: "#313131" }}>
                  21:00 |{" "}
                  <span className="text" style={{ color: "#C4C4C4" }}>
                    Today
                  </span>
                </div>
                <div className="text" style={{ color: "#0A661A" }}>
                  1X2
                </div>
              </div>
              <div className="club">
                <img src={arsenalIcon} alt="icon" />
                <div className="text">Arsenal</div>
              </div>
            </div>
            <div className="space-between">
              <div
                className="space-between"
                style={{
                  width: "68px",
                  background: "#DEFFE4",
                  padding: "5px 4px",
                  color: "#0A661A",
                }}
              >
                <span>1</span>
                <span>1.34</span>
              </div>
              <div
                className="space-between"
                style={{
                  width: "68px",
                  background: "#DEFFE4",
                  padding: "5px 4px",
                  color: "#0A661A",
                }}
              >
                <span>X</span>
                <span>5.79</span>
              </div>
              <div
                className="space-between"
                style={{
                  width: "68px",
                  background: "#DEFFE4",
                  padding: "5px 4px",
                  color: "#0A661A",
                }}
              >
                <span>2</span>
                <span>5.79</span>
              </div>
            </div>
          </div>
          <div className="odd-card">
            <div className="space-between">
              <div
                className="text"
                style={{
                  color: "#D23D2B",
                  fontSize: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                Best Odds
              </div>
              <div
                className="text"
                style={{
                  color: "#D23D2B",
                  fontSize: "10px",
                  whiteSpace: "nowrap",
                }}
              >
                UEFA Championship
              </div>
            </div>
            <div className="club-fixture-odd space-between">
              <div className="club">
                <img src={madridIcon} alt="icon" />
                <div className="text">Real Madrid</div>
              </div>
              <div className="club-odd-text">
                <div className="text" style={{ color: "#313131" }}>
                  21:00 |{" "}
                  <span className="text" style={{ color: "#C4C4C4" }}>
                    Today
                  </span>
                </div>
                <div className="text" style={{ color: "#0A661A" }}>
                  1X2
                </div>
              </div>
              <div className="club">
                <img src={arsenalIcon} alt="icon" />
                <div className="text">Arsenal</div>
              </div>
            </div>
            <div className="space-between">
              <div
                className="space-between"
                style={{
                  width: "68px",
                  background: "#DEFFE4",
                  padding: "5px 4px",
                  color: "#0A661A",
                }}
              >
                <span>1</span>
                <span>1.34</span>
              </div>
              <div
                className="space-between"
                style={{
                  width: "68px",
                  background: "#DEFFE4",
                  padding: "5px 4px",
                  color: "#0A661A",
                }}
              >
                <span>X</span>
                <span>5.79</span>
              </div>
              <div
                className="space-between"
                style={{
                  width: "68px",
                  background: "#DEFFE4",
                  padding: "5px 4px",
                  color: "#0A661A",
                }}
              >
                <span>2</span>
                <span>5.79</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="live">
        <Container>
          <div className="live-wrap left">
            <div className="live-tabs-top left">
              <img src={fireIcon} alt="icon" style={{ marginRight: "4px" }} />
              <div style={{ color: "white" }}>Live</div>
            </div>
            <div className="line-v">.</div>
            <div className="text-live header-text ">Football</div>
            <div className="text-live header-text ">Basketball</div>
            <div className="text-live header-text ">Tennis</div>
            <div className="text-live header-text ">Table Tennis</div>
            <div className="text-live header-text ">American Football</div>
            <div className="text-live header-text ">Volleyball</div>
            <div className="text-live header-text ">Beachball</div>
            <div className="text-live header-text ">Handball</div>
            <div className="text-live header-text ">Baseball</div>
            <div className="text-live header-text ">More Sports</div>
          </div>
        </Container>
      </div>
      <div className="x">
        <Container>
          <div className="x-wrap left">
            <div className="text-live center active-x">1X2</div>
            <div className="line-v"></div>
            <div className="text-live header-text ">Over/Under</div>
            <div className="text-live header-text ">Next Goal</div>
            <div className="text-live header-text "> Double Chance</div>
            <div className="text-live header-text ">Over/Under</div>
            <div className="text-live header-text ">Volleyball</div>
            <div className="text-live header-text ">Beachball</div>
            <div className="text-live header-text ">Handball</div>
            <div className="text-live header-text ">Baseball</div>
            <div className="text-live header-text ">More Sports</div>
          </div>
        </Container>
      </div>
      <div className="onextwo">
        <span>1</span>
        <span>x</span>
        <span>2</span>
      </div>
      <div className="sim left">
        <Container>
          <div className="sim-bg">
            <div className="top-sim left">
              <div className="bot left">
                <span style={{ margin: "2px" }}>SIM</span>
                <img src={botIcon} alt="icon" />
              </div>
              <div style={{ color: "#4CD964", margin: "5px" }}>09:00</div>
              <div style={{ color: "#989191" }}>
                SIMULATED REALITY - UEFA CHAMPIONS LEAGUE
              </div>
            </div>
            <div className="left sim-data space-between">
              <img src={graphIcon} alt="icon" className="graph-icon-sim" />
              <div className="left odd-text-sim">
                <div className="text comp-text">Real Madrid</div>
                <div className="text comp-text">Arsenal</div>
              </div>
              <div className="left odd-text-sim">
                <div className="text comp-text">0</div>
                <div className="text comp-text">0</div>
              </div>
              <div className="value-wrap-sim left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
            </div>
          </div>
          <div className="sim-bg">
            <div className="top-sim left">
              <div className="bot left">
                <span style={{ margin: "2px" }}>SIM</span>
                <img src={botIcon} alt="icon" />
              </div>
              <div style={{ color: "#4CD964", margin: "5px" }}>09:00</div>
              <div style={{ color: "#989191" }}>
                SIMULATED REALITY - UEFA CHAMPIONS LEAGUE
              </div>
            </div>
            <div className="left sim-data space-between">
              <img src={graphIcon} alt="icon" className="graph-icon-sim" />
              <div className="left odd-text-sim">
                <div className="text comp-text">Real Madrid</div>
                <div className="text comp-text">Arsenal</div>
              </div>
              <div className="left odd-text-sim">
                <div className="text comp-text">0</div>
                <div className="text comp-text">0</div>
              </div>
              <div className="value-wrap-sim left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
            </div>
          </div>
          <div className="sim-bg">
            <div className="top-sim left">
              <div className="bot left">
                <span style={{ margin: "2px" }}>SIM</span>
                <img src={botIcon} alt="icon" />
              </div>
              <div style={{ color: "#4CD964", margin: "5px" }}>09:00</div>
              <div style={{ color: "#989191" }}>
                SIMULATED REALITY - UEFA CHAMPIONS LEAGUE
              </div>
            </div>
            <div className="left sim-data space-between">
              <img src={graphIcon} alt="icon" className="graph-icon-sim" />
              <div className="left odd-text-sim">
                <div className="text comp-text">Real Madrid</div>
                <div className="text comp-text">Arsenal</div>
              </div>
              <div className="left odd-text-sim">
                <div className="text comp-text">0</div>
                <div className="text comp-text">0</div>
              </div>
              <div className="value-wrap-sim left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
            </div>
          </div>
          <div className="sim-bg">
            <div className="top-sim left">
              <div className="bot left">
                <span style={{ margin: "2px" }}>SIM</span>
                <img src={botIcon} alt="icon" />
              </div>
              <div style={{ color: "#4CD964", margin: "5px" }}>09:00</div>
              <div style={{ color: "#989191" }}>
                SIMULATED REALITY - UEFA CHAMPIONS LEAGUE
              </div>
            </div>
            <div className="left sim-data space-between">
              <img src={graphIcon} alt="icon" className="graph-icon-sim" />
              <div className="left odd-text-sim">
                <div className="text comp-text">Real Madrid</div>
                <div className="text comp-text">Arsenal</div>
              </div>
              <div className="left odd-text-sim">
                <div className="text comp-text">0</div>
                <div className="text comp-text">0</div>
              </div>
              <div className="value-wrap-sim left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
            </div>
          </div>
          <div className="sim-bg">
            <div className="top-sim left">
              <div className="bot left">
                <span style={{ margin: "2px" }}>SIM</span>
                <img src={botIcon} alt="icon" />
              </div>
              <div style={{ color: "#4CD964", margin: "5px" }}>09:00</div>
              <div style={{ color: "#989191" }}>
                SIMULATED REALITY - UEFA CHAMPIONS LEAGUE
              </div>
            </div>
            <div className="left sim-data space-between">
              <img src={graphIcon} alt="icon" className="graph-icon-sim" />
              <div className="left odd-text-sim">
                <div className="text comp-text">Real Madrid</div>
                <div className="text comp-text">Arsenal</div>
              </div>
              <div className="left odd-text-sim">
                <div className="text comp-text">0</div>
                <div className="text comp-text">0</div>
              </div>
              <div className="value-wrap-sim left">
                <div className="value-red center text">1.34</div>
                <div className="value-red center text">5.70</div>
                <div className="value-red center text">1.34</div>
              </div>
            </div>
          </div>
          <div className="padding-sim">
            <div className="btn center heading-text">View All Live Events</div>
          </div>
        </Container>
      </div>
    </div>
    </>
  );
};

export default HighlightMob;
