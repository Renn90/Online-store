import React from "react";
import products from "../data2";
import { useDispatch } from "react-redux";
import { ADD } from "../feautures/Action";
import { ADDTOWISHLIST } from "../feautures/Action";
import { Link, useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import style from "../Styles/SingleProducts.module.scss";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const SingleProducts = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const product = products.find((productg) => productg.id === productId);

  if (!product) {
    return "No matching product found.";
  }

  const {
    title,
    description,
    images,
    price,
    discountPercentage,
    brand,
    rating,
    stock,
  } = product;

  return (
    <section className={style.container}>
      <div className={style.img}>
        <p>-{discountPercentage}%</p>
        <img src={images} alt={title} />
      </div>
      <div className={style.textSec}>
        <span className={style.rating}>
          <i className={style.brand}>~{brand}</i>
          <p>
            {rating}
            <StarRateRoundedIcon style={{ width: "15px", color: "#FFD700" }} />
          </p>
        </span>
        <h2>{title}</h2>
        <p>{description}</p>
        <h4>${price}</h4>
        <i>{stock} items left</i>
        <p>Out of stock</p>

        <div className={style.btns}>
          <span>
            <button onClick={() => dispatch({ type: ADD, payload: product })}>
              Add To Cart
            </button>
            <AddShoppingCartIcon className={style.icon} />
          </span>
          <span className={style.heart}>
            {console.log("working")}
            <FavoriteRoundedIcon
              onClick={() =>
                dispatch({ type: ADDTOWISHLIST, payload: product })
              }
            />
          </span>
        </div>
        <span className={style.homeBtn}>
          <ArrowBackIosNewRoundedIcon className={style.arrow} />
          <Link to="/" className={style.link}>
            Back home
          </Link>
        </span>
      </div>
    </section>
  );
};

export default SingleProducts;
