import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Animations.scss";
import style from "../Styles/Section.module.scss";
import { cartegories } from "../data";

const Section = () => {
  return (
    <div className={`${style.container} slideleft`}>
      {cartegories.map((item) => (
        <div className={style.sectionItem} key={item.id}>
          <img src={item.img} alt={item.title}/>
          <span>
            <Link to={`${item.title}`} style={{ textDecoration: "none" }}>
              <h1>{item.title}</h1>
            </Link>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Section;
