import React from "react";
import "../styles/components/TreatmentProcess.scss";
const TreatmentProcess = (props) => {
  return (
    <div className="treatment-process-card">
      <div className="card-img-container">
        <img
          src={require(`../imgs/${props.img}.png`)}
          alt="1"
          className="img"
        />
      </div>
      <div className="txt-container">
        <div className="txt-header-container">
          <h4>{props.title}</h4>
        </div>
        <div className="txt-content-container">
          <p>{props.txt}</p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentProcess;
