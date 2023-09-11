import React from "react";
import style from "../Styles/Hero.module.scss";
import "../Styles/Animations.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className={style.container}
      style={{height: '90vh', backgroundImage: `url('./assets/bgimg.webp')`, }}
    >
      <div className={style.textContent}>
        <div className={`${style.textContain} slidein`}>
          <h1 className="slidein">Get your swag on!</h1>
          <p className="slideinb">
            Get fashionable clothes for every seasonand be gorgeous in every
            way,
            <br />
            We provide the best available products.
          </p>
          <Link to="/products">
            <button className="slideinc">Shop&nbsp;Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
