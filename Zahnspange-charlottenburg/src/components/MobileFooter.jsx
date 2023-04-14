import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "../styles/components/Mobile-Footer.scss";
const MobileFooter = (props) => {
  const open = props.open;
  return (
    <div
      className={"social-container"}
      style={{
        backgroundColor: !open ? "" : "white",
        transition: "all .8s ease",
      }}
    >
      <div className="social-wrapper">
        <div className="icons-container">
          <a href="mailto:info@zahnspange-charlottenburg.de">
            <EmailIcon className="icon" />
          </a>
        </div>
        <div className="icons-container">
          <a
            href="https://goo.gl/maps/DHKyNRQ9tzcoiURw8"
            target="_blank"
            rel="noreferrer noopener"
          >
            <PlaceIcon className="icon" />
          </a>
        </div>
        <div className="icons-container">
          <a
            data-testid="linkElement"
            href="https://www.doctolib.de/praxis/berlin/kieferorthopaedie-dr-nawras-darkazanly/booking/new-patient?profile_skipped=true&amp;specialityId=1325"
            target="_blank"
            rel="noreferrer noopener"
          >
            <CalendarMonthIcon className="icon" />
          </a>
        </div>
        <div className="icons-container">
          <a
            data-testid="linkElement"
            href="tel:+49 30 3414 060"
            target="_blank"
            rel="noreferrer noopener"
          >
            <PhoneIcon className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
