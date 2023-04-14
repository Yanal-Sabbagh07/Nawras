import React from "react";
import { useInView } from "react-intersection-observer";

const Wave = (props) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <>
      <div
        className="welcome-title-container"
        ref={ref}
        style={{ scale: !inView ? "0" : "1", transition: "all 1.8s ease-out" }}
      >
        <h1 className="welcome-title">{props.header}</h1>
      </div>
      <div className="welcome-waves"></div>
    </>
  );
};

export default Wave;
