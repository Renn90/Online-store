import React from "react";
import products from "../data2";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import style from "../Styles/SingleProducts.module.scss";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { sliceAction } from "../feautures/Store";

const SingleProducts = () => {
  const dispatch = useDispatch();

  const { productId } = useParams();
  const wishList = useSelector((state)=> state.wishlist)
  const cart = useSelector((state)=> state.cart)
  const product = products.find((productg) => productg.id === productId);
  
  let timeoutId = null

  const addHandler =(e)=> {
    dispatch(sliceAction.addToCart(e))
    // Clear any pending timeouts
    clearTimeout(timeoutId);

    dispatch(sliceAction.setAlert({show:true, message: 'Added To Cart'}))
    timeoutId =  setTimeout(() => {
      dispatch(sliceAction.setAlert({show:false}))
    }, 800);
  }

  const removeFromWishlist =(e)=> {
    dispatch(sliceAction.removeFromWishlist(e))
     // Clear any pending timeouts
     clearTimeout(timeoutId);

    dispatch(sliceAction.setAlert({show:true, message: 'Item Removed'}))
    timeoutId = setTimeout(() => {
      dispatch(sliceAction.setAlert({show:false}))
    }, 800);
  }
  
  const addToWishlist =(e)=> {
    dispatch(sliceAction.addToWishlist(e))
     // Clear any pending timeouts
     clearTimeout(timeoutId);

    dispatch(sliceAction.setAlert({show:true, message: 'Added To Wishlist'}))
    timeoutId = setTimeout(() => {
      dispatch(sliceAction.setAlert({show:false}))
    }, 800);
  }
   
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
            <button onClick={()=> addHandler(product)}>
              Add To Cart
            </button>
            <AddShoppingCartIcon className={style.icon} />
          </span>
          {cart.find((item)=> item.id === product.id) ? null : 
          <span className={wishList.find((item)=> item.id === product.id) ? style.activeHeart : style.heart}>
            <FavoriteRoundedIcon
              onClick= {wishList.find((item)=> item.id === product.id) ? ()=>removeFromWishlist(product) : ()=>addToWishlist(product)}
            />
          </span> }
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
