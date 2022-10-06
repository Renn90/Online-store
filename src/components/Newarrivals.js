import React from "react";
import products from "../data2";
import style from "../Styles/ProductItem.module.scss";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ADD, ADDTOWISHLIST } from "../feautures/Action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Newarrivals = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h4 className={style.contt}>dont wait to snag that price-</h4>
      <h2 className={style.arrivals}>NEW ARRIVALS</h2>
      <div className={style.container}>
        {products.slice(0, 8).map((item) => {
          return (
            <article key={item.id} className={style.product}>
              <div className={style.imgSec}>
                <img src={item.images} alt={item.title}/>
                <div className={style.actCont}>
                  <div className={style.actions}>
                    <ShoppingCartIcon
                      className={style.actionButtons}
                      onClick={() => dispatch({ type: ADD, payload: item })}
                    />
                    <FavoriteBorderOutlinedIcon
                      className={style.actionButtons}
                      onClick={() =>
                        dispatch({ type: ADDTOWISHLIST, payload: item })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className={style.title}>
                <h6>{item.title.substring(0, 25)}...</h6>
                <h6>${item.price}</h6>
              </div>
              <Link
                to={`/products/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className={style.btn}>
                  <button className={style.button}>View more</button>
                  <VisibilityOutlinedIcon className={style.view} />
                </div>
              </Link>
              <div className={style.discount}>
                <p>- {item.discountPercentage} %</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Newarrivals;
