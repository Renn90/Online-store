import React from "react";
import style from "../Styles/Cart.module.scss";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { GET_TOTAL, REMOVE } from "../feautures/Action";
import { INCREASE } from "../feautures/Action";
import { DECREASE } from "../feautures/Action";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = ({ cart, total }) => {
  React.useEffect(() => {
    dispatch({ type: GET_TOTAL });
  });

  const dispatch = useDispatch();

  if (cart.length <= 0) {
    return (
      <div className={style.empty}>
        <img src="../assets/empty-box.png" className={style.box} alt='/'/>
        <h1>Your cart is empty</h1>
        <Link to="/products">
          <button>View&nbsp;Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h2>Your Shopping Cart</h2>

      {cart.map(({ title, price, id, images, amount }) => (
        <div className={style.content} key={id}>
          <div className={style.left}>
            <div className={style.imgSec}>
              <img src={images} alt={title}/>
            </div>

            <div className={style.info}>
              <Link
                to={`/products/${id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <h3>{title.slice(0, 20)}..</h3>
              </Link>
              <p>
                ID: {id}46{id}
              </p>
            </div>

            <div className={style.quantity}>
              <button
                onClick={() =>
                  dispatch({ type: INCREASE, payload: { id, amount } })
                }
              >
                +
              </button>
              <h4>{amount}</h4>
              <button
                onClick={() =>
                  dispatch({ type: DECREASE, payload: { id, amount } })
                }
              >
                -
              </button>
            </div>

            <div>
              <h4>${price}</h4>
            </div>
          </div>
          <div
            className={style.remove}
            onClick={() => dispatch({ type: REMOVE, payload: { id } })}
          >
            <ClearIcon />
          </div>
        </div>
      ))}
      <div className={style.total}>
        <span className={style.homeBtn}>
          <ArrowBackIosNewRoundedIcon className={style.arrow} />
          <Link to="/" className={style.link}>
            Back home
          </Link>
        </span>
        <h4>Subtotal: {total}.00 $</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return { cart: store.cart, total: store.total };
};

export default connect(mapStateToProps)(Cart);
