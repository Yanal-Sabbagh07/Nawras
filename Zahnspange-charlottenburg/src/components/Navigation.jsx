import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/components/navigation.scss";
import Header from "./Header";
import MobileFooter from "./MobileFooter";
const Navigation = () => {
  const [navOpen, setnavOpen] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="navigation">
      <Header open={navOpen} setOpen={setnavOpen} />
      <div
        className="navigation__button"
        onClick={() => setnavOpen(!navOpen)}
        style={{ backgroundColor: navOpen ? "white" : "#1f5ca2" }}
      >
        <span className={!navOpen ? "navigation__icon" : "navigation__openHam"}>
          &nbsp;
        </span>
      </div>

      <div
        className="navigation__background"
        style={{ transform: navOpen ? "scale(130)" : "scale(1)" }}
      >
        &nbsp;
      </div>

      <nav
        className="navigation__nav"
        style={{
          opacity: navOpen && "1",
          left: navOpen && "0px",
          width: navOpen ? "100%" : "-100vw",
        }}
      >
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link
              to="/"
              className="navigation__link"
              onClick={() => setnavOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to="/about"
              className="navigation__link"
              onClick={() => setnavOpen(false)}
            >
              Über uns
            </Link>
          </li>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            className="navigation__according"
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "space-between",
              justifyContent: "flex-start",
              // marginTop: "-16px",
              // marginBottom: "-16px",
              // border: "1px solid white",
            }}
          >
            <li
              className="navigation__item"
              style={{
                width: "65%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Link
                to="/treatment"
                className="navigation__link "
                onClick={() => setnavOpen(false)}
              >
                Leistungen
              </Link>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    className="ex-icon"
                    style={{
                      fontSize: "xx-large",
                      color: "white",
                      // border: "1px solid white",
                      // borderRadius: "50%",
                      // border: "1px solid white",
                      // borderRadius: "8px",
                    }}
                  />
                }
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              ></AccordionSummary>
            </li>
            <AccordionDetails
              style={{
                // marginLeft: "16px",
                // marginTop: "-16px",
                marginBottom: "-16px",
              }}
            >
              <li className="navigation__item">
                <Link
                  to="/treatment/kids"
                  className="navigation__link navigation__special"
                  onClick={() => setnavOpen(false)}
                >
                  Kinder/Jugendliche
                </Link>
              </li>
            </AccordionDetails>
            <AccordionDetails style={{ marginBottom: "-24px" }}>
              <li className="navigation__item">
                <Link
                  to="/treatment/adults"
                  className="navigation__link navigation__special"
                  onClick={() => setnavOpen(false)}
                >
                  Erwachsene
                </Link>
              </li>
            </AccordionDetails>
          </Accordion>

          <li className="navigation__item">
            <Link
              to="/contact"
              className="navigation__link"
              onClick={() => setnavOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
      <MobileFooter className="mobile-footer-container" open={navOpen} />
    </div>
  );
};

export default Navigation;
