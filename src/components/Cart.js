import React from "react";
import style from "../Styles/Cart.module.scss";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Link } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import { sliceAction } from "../feautures/Store";
import { useDispatch } from "react-redux";

const Cart = () => {

  const cart = useSelector((state)=> state.cart)
  const total = useSelector((state)=> state.total)
  const dispatch = useDispatch()
  
  const removeHandlder=(e)=> {
    dispatch(sliceAction.remove(e))
  }

  const increaseHandler =(e)=> {
    dispatch(sliceAction.increase(e))
  }

  const decreaseHandler =(e)=> {
    dispatch(sliceAction.decrease(e))
  }
 
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
      <h2 className={style.text}>Your Shopping Cart</h2>
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
                onClick={()=>increaseHandler({id, amount, price})}
              >
                +
              </button>
              <h4>{amount}</h4>
              <button
                 onClick={()=>decreaseHandler({id, amount, price})}
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
            onClick={()=>removeHandlder({id, amount, price})}
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

export default Cart;
