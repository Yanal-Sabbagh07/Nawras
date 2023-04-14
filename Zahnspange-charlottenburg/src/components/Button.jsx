import React from "react";
// import { Link } from "react-router-dom";
import "../styles/components/Button.scss";
const Button = (props) => {
  return (
    <div className="termin-button">
      <a
        href="https://www.doctolib.de/praxis/berlin/kieferorthopaedie-dr-nawras-darkazanly/booking/new-patient?profile_skipped=true&amp;specialityId=1325"
        className="appointment-button"
        target="_blank"
        rel="noreferrer noopener"
        style={{ backgroundColor: props.bgColor, color: props.color }}
      >
        Termin buchen
      </a>
    </div>
  );
};

export default Button;
