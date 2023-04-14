import React from "react";
import Wave from "../components/Wave";
import "../styles/components/WaveSection.scss";
import Button from "./Button";
const WaveSection = (props) => {
  return (
    <>
      <Wave header={props.header} />
      <div className="WaveSection-content-container">
        <p className="WaveSection-content">{props.content}</p>
        <Button />
      </div>
    </>
  );
};

export default WaveSection;
