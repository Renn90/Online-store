import React from "react";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import style from "../Styles/Reviewslider.module.scss";
import reviews from "../data";
import { useEffect } from "react";
import "../Styles/General.scss";

const Reviewslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidelenght = reviews.length;

  const autoScroll = true;
  let slideInterval = "";
  let intervalTime = 5000;

  function auto() {
    slideInterval = setInterval(nextslide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const nextslide = () => {
    setCurrentSlide(currentSlide === slidelenght - 1 ? 0 : currentSlide + 1);
  };

  const prevslide = () => {
    setCurrentSlide(currentSlide === 0 ? slidelenght - 1 : currentSlide - 1);
  };

  return (
    <div className={style.container}>
      <div>
        <h2>What our customers are saying!</h2>
        {reviews.map((item, index) => {
          return (
            <div className={style.opp} key={item.id}>
              <div
                className={index === currentSlide ? "slide current" : "slide"}
                key={item.id}
              >
                {index === currentSlide && (
                  <div className={style.content}>
                    <img src={item.img} alt="/" />
                    <p>{item.review}</p>
                    <h4>{item.name}</h4>
                    <h5>{item.location}</h5>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.buttons}>
        <ChevronLeftIcon className={style.left} onClick={prevslide} />
        <ChevronRightIcon className={style.right} onClick={nextslide} />
      </div>
    </div>
  );
};

export default Reviewslider;
