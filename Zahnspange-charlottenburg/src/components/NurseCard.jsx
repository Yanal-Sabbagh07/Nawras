import React from "react";
import "../styles/components/NurseCard.scss";
// import { useState } from "react";
import { useInView } from "react-intersection-observer";

const NurseCard = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: ".6",
  });

  return (
    <div className={"card-container"}>
      <div className="image-container">
        <div
          ref={ref}
          className={!inView ? "nurse-img" : "nurse-img nurse-animate"}
          style={{ backgroundImage: props.img }}
        />
      </div>

      <div className="details-container">
        <div className="details-wrapper">
          <div className="name-container">
            <h3>{props.name}</h3>
          </div>

          <div className="job-container">
            <p>{props.job}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NurseCard;
