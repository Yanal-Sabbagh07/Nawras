import React from "react";
import "../styles/components/NurseCard.scss";
// import { useState } from "react";
import { useInView } from "react-intersection-observer";

const NurseCard = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: ".5",
  });

  return (
    <div
      className={!inView ? "card-container" : "card-container animate-nurse"}
      ref={ref}
      // style={{
      //   scale: !inView ? "0.75" : "1",
      //   // transform: !nurseIsVisible ? "translateY(50vh)" : "translateY(0px)",
      //   transition: "all .8s ease-in-out",
      // }}
    >
      {/* <div
        className="image-contianer"
        style={{ backgroundImage: `url(/imgs/${props.img}.jpg)` }}
      ></div> */}
      <div className="image-container">
        <div className="nurse-img" style={{ backgroundImage: props.img }} />
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
