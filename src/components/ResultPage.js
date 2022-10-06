import React from "react";
import { products } from "../data2";
import style from "../Styles/ProductItem.module.scss";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../feautures/Action";
import { ADDTOWISHLIST } from "../feautures/Action";

const ResultPage = ({ filteredData }) => {
  const dispatch = useDispatch();

  return (
    <div className={style.mainContt}>
      <div className={style.header}>
        <div className={style.arrivals}>
          <h3>Search results for '{filteredData}'</h3>
          <p>
            If you are not happy with the results below please do another
            search..
          </p>
        </div>
      </div>
      <div className={style.container}>
        {products
          .filter((item) => {
            if (filteredData === "") {
              return item;
            } else if (
              item.title &&
              item.description
                .toLowerCase()
                .replace(/ +/g, "")
                .includes(filteredData.toLowerCase().replace(/ +/g, ""))
            ) {
              return item;
            }
          })
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

export default ResultPage;
