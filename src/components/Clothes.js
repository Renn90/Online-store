import React from "react";
import { products } from "../data2";
import style from "../Styles/ProductItem.module.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ADD, ADDTOWISHLIST } from "../feautures/Action";

const Clothes = () => {
  const dispatch = useDispatch();

  return (
    <div className={style.mainContt}>
      <h1>Clothes</h1>
      <div className={style.container}>
        {products
          .filter((item) => item.category === "clothes")
          .map(({ id, amount, images, title, price, discountPercentage }) => {
            return (
              <article key={id} className={style.product}>
                <div className={style.imgSec}>
                  <img src={images} alt={title}/>
                  <div className={style.actCont}>
                    <div className={style.actions}>
                      <ShoppingCartIcon
                        className={style.actionButtons}
                        onClick={() =>
                          dispatch({
                            type: ADD,
                            payload: { id, amount, images, title, price },
                          })
                        }
                      />
                      <FavoriteBorderOutlinedIcon
                        className={style.actionButtons}
                        onClick={() =>
                          dispatch({
                            type: ADDTOWISHLIST,
                            payload: {
                              id,
                              amount,
                              images,
                              title,
                              price,
                              discountPercentage,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={style.title}>
                  <h6>{title.substring(0, 25)}...</h6>
                  <h6>${price}.00</h6>
                </div>
                <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
                  <div className={style.btn}>
                    <button className={style.button}>View more</button>
                    <VisibilityOutlinedIcon className={style.view} />
                  </div>
                </Link>
                <div className={style.discount}>
                  <p>- {discountPercentage} %</p>
                </div>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default Clothes;
