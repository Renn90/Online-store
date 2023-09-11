import React from "react";
import style from "../Styles/ProductItem.module.scss";
import ProductItem from "./ProductItem";

const Newarrivals = () => {

  return (
    <>
      <h4 className={style.contt}>dont wait to snag that price-</h4>
        <ProductItem sort='new Arrivals'/>
    </>
  );
};

export default Newarrivals;
