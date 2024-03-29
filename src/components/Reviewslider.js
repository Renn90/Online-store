import React from "react";
import { useState,useCallback  } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import style from "../Styles/Reviewslider.module.scss";
import reviews from "../data";
import { useEffect } from "react";
import "../Styles/General.scss";

const Reviewslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animation, setAnimation] = useState('')
  const slidelenght = reviews.length;

  let intervalTime = 5000
  const autoScroll = true;



  useEffect(() => {
    setCurrentSlide(0);
  }, []);


  const nextslide = useCallback(() => {
    setCurrentSlide(currentSlide === slidelenght - 1 ? 0 : currentSlide + 1);
    setAnimation('slide-left')
  }, [currentSlide,slidelenght]);


  useEffect(() => {
    setTimeout(() => {
      nextslide()
    }, intervalTime);
    return () => clearInterval();
  }, [currentSlide, autoScroll, intervalTime, nextslide]);


  const prevslide = () => {
    setCurrentSlide(currentSlide === 0 ? slidelenght - 1 : currentSlide - 1);
    setAnimation('slide-right')
  };

  return (
    <div className={style.container}>
      <div>
        <h2>What our customers are saying!</h2>
        {reviews.map((item, index) => {
          return (
            <div className={style.opp} key={item.id}>
              <div
                className={`slide ${index === currentSlide && animation}`}
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
