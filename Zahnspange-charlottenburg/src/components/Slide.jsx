import React from "react";

const Slide = (props) => {
  return (
    <div className="image-container">
      <div className="hero-image">
        <div className={props.class} />
      </div>
    </div>
  );
};

export default Slide;
