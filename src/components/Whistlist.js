import React from "react";
import { connect, useDispatch } from "react-redux";
import { ADD, REMOVEWISHLIST } from "../feautures/Action";
import { Link } from "react-router-dom";
import style from "../Styles/ProductItem.module.scss";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Whistlist = ({ wishlist }) => {
  const dispatch = useDispatch();

  if (wishlist.length <= 0) {
    return (
      <div className={style.emptyWhishlist}>
        <img src="../assets/empty-whishlist.png" className={style.box} alt='/'/>
        <h1>Your Whishlist is empty</h1>
        <p>Add your favourite products to the whishlist and view them later</p>
        <Link to="/products">
          <button>View&nbsp;Products</button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className={style.text}>
        <h2>Your Whislist</h2>
        <p>You added these products to your whishlist</p>
      </div>
      <div className={style.container}>
        {wishlist.map((item) => (
          <article key={item.id} className={style.product}>
            <div className={style.imgSec}>
              <Link
                to={`/products/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className={style.spImg}>
                  <img src={item.images} alt={item.title}/>
                </div>
              </Link>

              <div
                className={style.removewishlist}
                onClick={() =>
                  dispatch({ type: REMOVEWISHLIST, payload: item })
                }
              >
                <HighlightOffIcon className={style.removeBtn} />
              </div>
            </div>
            <div className={style.title}>
              <h6>{item.title.substring(0, 25)}...</h6>
              <h6>${item.price}.00</h6>
            </div>

            <div
              className={style.SpCart}
              onClick={() => dispatch({ type: ADD, payload: item })}
            >
              <button>ADD TO CART</button>
              <AddShoppingCartIcon
                style={{ fontSize: "23px", color: "white", marginRight: "9px" }}
              />
            </div>

            <div className={style.discount}>
              <p>- {item.discountPercentage} %</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (store) => {
  return { wishlist: store.wishlist };
};

export default connect(mapStateToProps)(Whistlist);
