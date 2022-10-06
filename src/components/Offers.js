import React from "react";
import style from "../Styles/Offers.module.scss";

const Offers = () => {
  return (
    <>
      <h1 className={style.h1}>We Offer</h1>
      <div className={style.container}>
        <div className={style.imgSec}>
          <img src="./assets/offersimg.jpg" alt="/" />
        </div>
        <div className={style.cardSec}>
          <div className={style.cards}>
            <img src="./assets/money.png" alt='/'/>
            <h3>Pay on delivery</h3>
            <p>Pay for products only after delivery</p>
          </div>
          <div className={style.cards}>
            <img src="./assets/delivery-bag.png" alt='/'/>
            <h3>Best deals</h3>
            <p>Enjoy Big Discounts on Modern & Stylish Wears</p>
          </div>
          <div className={style.cards}>
            <img src="./assets/delivery-box.png" alt='/'/>
            <h3>Fast delivery</h3>
            <p>Get your products across the nation with Fast Delivery</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
