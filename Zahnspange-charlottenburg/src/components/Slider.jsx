import React, { useState, useEffect, useRef } from "react";
import "../styles/components/Slider.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import Image from "react-image-webp";
import Slide from "./Slide";
const Slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [delay, setDelay] = useState(7000);
  const [arrowClicked, setArrowClicked] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      setSlideIndex(slideIndex < props.count ? slideIndex + 1 : props.count);
      setDelay(500000);
      console.log("swipe", isLeftSwipe ? "left" : "right");
    }
    //   console.log("swipe", isLeftSwipe ? "left" : "right");
    // // add your conditional logic here
    // setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    else if (isRightSwipe) {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
      setDelay(500000);
      console.log("swipe", isLeftSwipe ? "left" : "right");
    }
  };

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

  const handleClick = (direction) => {
    setArrowClicked(true);
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
      setDelay(500000);
    } else {
      setSlideIndex(slideIndex < props.count ? slideIndex + 1 : props.count);
      setDelay(500000);
    }
  };
  useInterval(() => {
    if (slideIndex < props.count) {
      setSlideIndex(slideIndex + 1);
    }
  }, delay);

  return (
    <div
      className="slider-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="arrow arrow-left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewIcon className="arrow-icon" />
      </div>
      <div
        className="images-wrapper"
        style={{
          transform:
            slideIndex === 1
              ? "translateX(-100vw)"
              : slideIndex === 2
              ? "translateX(-200vw)"
              : slideIndex === 3
              ? "translateX(-300vw)"
              : slideIndex === 4
              ? "translateX(-400vw)"
              : slideIndex === 5
              ? "translateX(-500vw)"
              : slideIndex === 6
              ? "translateX(-600vw)"
              : "translateX(0)",
          transition: (arrowClicked || touchEnd) && "all .5s ease",
        }}
      >
        {props.sliderData.map(function (element) {
          return <Slide class={element.slideClassName} key={element.id} />;
        })}
      </div>
      <div className="arrow arrow-right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon className="arrow-icon" />
      </div>
    </div>
  );
};

export default Slider;
