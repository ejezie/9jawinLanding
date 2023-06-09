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
  upIcon,
} from "../../../../../assets/images";

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
                <div className="club center" style={{marginBottom: "8px", flexDirection: "column"}}>
                  <img src={madridIcon} alt="icon" />
                  <div style={{color: "#989191"}} className="text">Real Madrid</div>
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
                <div className="club center" style={{marginBottom: "8px", flexDirection: "column"}}>
                  <img src={arsenalIcon} alt="icon" />
                  <div style={{color: "#989191"}} className="text">Arsenal</div>
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
                  <span style={{
                    color: "#0A661A",
                  }}className="text">1</span>
                  <span style={{
                    color: "#0A661A",
                  }}className="text">1.34</span>
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
                  <span style={{
                    color: "#0A661A",
                  }}className="text">X</span>
                  <span style={{
                    color: "#0A661A",
                  }}className="text">5.79</span>
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
                  <span
                    style={{
                      color: "#0A661A",
                    }}
                    className="text"
                  >
                    2
                  </span>
                  <span
                    style={{
                      color: "#0A661A",
                    }}
                    className="text"
                  >
                    5.79
                  </span>
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
                <div className="club center" style={{marginBottom: "8px", flexDirection: "column"}}>
                  <img src={madridIcon} alt="icon" />
                  <div style={{color: "#989191"}} className="text">Real Madrid</div>
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
                <div className="club center" style={{marginBottom: "8px", flexDirection: "column"}}>
                  <img src={arsenalIcon} alt="icon" />
                  <div style={{color: "#989191"}} className="text">Arsenal</div>
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
                  <span style={{
                    color: "#0A661A",
                  }}className="text">1</span>
                  <span style={{
                    color: "#0A661A",
                  }}className="text">1.34</span>
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
                  <span style={{
                    color: "#0A661A",
                  }}className="text">X</span>
                  <span style={{
                    color: "#0A661A",
                  }}className="text">5.79</span>
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
                  <span style={{
                    color: "#0A661A",
                  }}className="text">2</span>
                  <span style={{
                    color: "#0A661A",
                  }}className="text">5.79</span>
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
                <div style={{ color: "white" }} className="heading-text">
                  Live
                </div>
              </div>
              <div className="line-v" style={{ color: "white" }}>
                .
              </div>
              <div className="text-live heading-text ">Football</div>
              <div className="text-live heading-text ">Basketball</div>
              <div className="text-live heading-text ">Tennis</div>
              <div className="text-live heading-text ">Table Tennis</div>
              <div className="text-live heading-text ">American Football</div>
              <div className="text-live heading-text ">Volleyball</div>
              <div className="text-live heading-text ">Beachball</div>
              <div className="text-live heading-text ">Handball</div>
              <div className="text-live heading-text ">Baseball</div>
              <div className="text-live heading-text ">More Sports</div>
            </div>
          </Container>
        </div>
        <div className="x">
          <Container>
            <div className="x-wrap left">
              <div className="text-live center active-x heading-text">1X2</div>
              <div className="line-v"></div>
              <div className="text-live heading-text ">Over/Under</div>
              <div className="text-live heading-text ">Next Goal</div>
              <div className="text-live heading-text "> Double Chance</div>
              <div className="text-live heading-text ">Over/Under</div>
              <div className="text-live heading-text ">Volleyball</div>
              <div className="text-live heading-text ">Beachball</div>
              <div className="text-live heading-text ">Handball</div>
              <div className="text-live heading-text ">Baseball</div>
              <div className="text-live heading-text ">More Sports</div>
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
              <div className="btn center heading-text">
                View All Live Events
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="highlight-mob-n">
        <div className="live">
          <Container>
            <div className="live-wrap left">
              <div className="live-tabs-top left">
                <img src={fireIcon} alt="icon" style={{ marginRight: "4px" }} />
                <div style={{ color: "white" }} className="heading-text">
                  Live
                </div>
              </div>
              <div className="line-v" style={{ color: "white" }}>
                .
              </div>
              <div className="text-live heading-text ">Football</div>
              <div className="text-live heading-text ">Basketball</div>
              <div className="text-live heading-text ">Tennis</div>
              <div className="text-live heading-text ">Table Tennis</div>
              <div className="text-live heading-text ">American Football</div>
              <div className="text-live heading-text ">Volleyball</div>
              <div className="text-live heading-text ">Beachball</div>
              <div className="text-live heading-text ">Handball</div>
              <div className="text-live heading-text ">Baseball</div>
              <div className="text-live heading-text ">More Sports</div>
            </div>
          </Container>
        </div>
        <div className="x">
          <Container>
            <div className="x-wrap left">
              <div className="text-live center active-x heading-text">1X2</div>
              <div className="line-v"></div>
              <div className="text-live heading-text ">Over/Under</div>
              <div className="text-live heading-text ">Next Goal</div>
              <div className="text-live heading-text "> Double Chance</div>
              <div className="text-live heading-text ">Over/Under</div>
              <div className="text-live heading-text ">Volleyball</div>
              <div className="text-live heading-text ">Beachball</div>
              <div className="text-live heading-text ">Handball</div>
              <div className="text-live heading-text ">Baseball</div>
              <div className="text-live heading-text ">More Sports</div>
            </div>
          </Container>
        </div>
        <div className="onextwo space-between">
          <div className="text">03 August 2021</div>
          <div>
            <span>1</span>
            <span>x</span>
            <span>2</span>
          </div>
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
                <div className="center">
                  <img src={graphIcon} alt="icon" className="graph-icon-sim" />
                  <div className="left odd-text-sim">
                    <div className="text comp-text">Bayern</div>
                    <div className="text comp-text">Liepzig</div>
                  </div>
                </div>
                <div className="value-wrap-sim left">
                  <div className="value-red-up center text">
                    <span>1.34</span>
                    <img src={upIcon} alt="icon" />
                  </div>
                  <div className="value-red center text">5.70</div>
                  <div className="value-red center text">1.34</div>
                </div>
              </div>
              <div className="space-between">
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginLeft: "13px",
                  }}
                  className="text"
                >
                  +66
                </span>
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginRight: "6px",
                  }}
                  className="text"
                >
                  Comments 2
                </span>
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
                <div className="center">
                  <img src={graphIcon} alt="icon" className="graph-icon-sim" />
                  <div className="left odd-text-sim">
                    <div className="text comp-text">Middlesbrough FC</div>
                    <div className="text comp-text">Stoke FC</div>
                  </div>
                </div>
                <div className="value-wrap-sim left">
                  <div className="value-red center text">1.34</div>
                  <div className="value-red center text">5.70</div>
                  <div className="value-red center text">1.34</div>
                </div>
              </div>
              <div className="space-between">
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginLeft: "13px",
                  }}
                  className="text"
                >
                  +66
                </span>
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginRight: "6px",
                  }}
                  className="text"
                >
                  Comments 2
                </span>
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
                <div className="center">
                  <img src={graphIcon} alt="icon" className="graph-icon-sim" />
                  <div className="left odd-text-sim">
                    <div className="text comp-text">Porto</div>
                    <div className="text comp-text">Sportng Lisbon</div>
                  </div>
                </div>
                <div className="value-wrap-sim left">
                  <div className="value-red center text">1.34</div>
                  <div className="value-red center text">5.70</div>
                  <div className="value-red center text">1.34</div>
                </div>
              </div>
              <div className="space-between">
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginLeft: "13px",
                  }}
                  className="text"
                >
                  +66
                </span>
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginRight: "6px",
                  }}
                  className="text"
                >
                  Comments 2
                </span>
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
                <div className="center">
                  <img src={graphIcon} alt="icon" className="graph-icon-sim" />
                  <div className="left odd-text-sim">
                    <div className="text comp-text">Cardiff City</div>
                    <div className="text comp-text">Burnley FC</div>
                  </div>
                </div>
                <div className="value-wrap-sim left">
                  <div className="value-red center text">1.34</div>
                  <div className="value-red center text">5.70</div>
                  <div className="value-red center text">1.34</div>
                </div>
              </div>
              <div className="space-between">
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginLeft: "13px",
                  }}
                  className="text"
                >
                  +66
                </span>
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginRight: "6px",
                  }}
                  className="text"
                >
                  Comments 2
                </span>
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
                <div className="center">
                  <img src={graphIcon} alt="icon" className="graph-icon-sim" />
                  <div className="left odd-text-sim">
                    <div className="text comp-text">HULL City</div>
                    <div className="text comp-text">Watford</div>
                  </div>
                </div>
                <div className="value-wrap-sim left">
                  <div className="value-red center text">1.34</div>
                  <div className="value-red center text">5.70</div>
                  <div className="value-red center text">1.34</div>
                </div>
              </div>
              <div className="space-between">
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginLeft: "13px",
                  }}
                  className="text"
                >
                  +66
                </span>
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginRight: "6px",
                  }}
                  className="text"
                >
                  Comments 2
                </span>
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
                <div className="center">
                  <img src={graphIcon} alt="icon" className="graph-icon-sim" />
                  <div className="left odd-text-sim">
                    <div className="text comp-text">Dortmund</div>
                    <div className="text comp-text">Valenicia</div>
                  </div>
                </div>
                <div className="value-wrap-sim left">
                  <div className="value-red center text">1.34</div>
                  <div className="value-red center text">5.70</div>
                  <div className="value-red center text">1.34</div>
                </div>
              </div>
              <div className="space-between">
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginLeft: "13px",
                  }}
                  className="text"
                >
                  +66
                </span>
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginRight: "6px",
                  }}
                  className="text"
                >
                  Comments 2
                </span>
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
                <div className="center">
                  <img src={graphIcon} alt="icon" className="graph-icon-sim" />
                  <div className="left odd-text-sim">
                    <div className="text comp-text">Lyon</div>
                    <div className="text comp-text">AC Milan</div>
                  </div>
                </div>
                <div className="value-wrap-sim left">
                  <div className="value-red center text">1.34</div>
                  <div className="value-red center text">5.70</div>
                  <div className="value-red center text">1.34</div>
                </div>
              </div>
              <div className="space-between">
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginLeft: "13px",
                  }}
                  className="text"
                >
                  +66
                </span>
                <span
                  style={{
                    color: "#989191",
                    fontSize: "10px",
                    marginRight: "6px",
                  }}
                  className="text"
                >
                  Comments 2
                </span>
              </div>
            </div>
            {/* <div className="padding-sim">
              <div className="btn center heading-text">
                View All Live Events
              </div>
            </div> */}
          </Container>
        </div>
      </div>
    </>
  );
};

export default HighlightMob;
