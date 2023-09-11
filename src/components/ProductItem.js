import React, { useState } from "react";
import Pagination from "./Pagination";
import { products } from "../data2";
import style from "../Styles/ProductItem.module.scss";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sliceAction } from "../feautures/Store";

const ProductItem = ({sort}) => {

  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishlist)
  const cart = useSelector((state) => state.cart)
  const searchArray = useSelector((state)=> state.searchArray)

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

  const addToWishlist =(e)=> {
    dispatch(sliceAction.addToWishlist(e))
     // Clear any pending timeouts
     clearTimeout(timeoutId);

    dispatch(sliceAction.setAlert({show:true, message: 'Added To Wishlist'}))
    timeoutId = setTimeout(() => {
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

  //making the pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  //sorting product for component re-use
  let sorted = products
  if(sort.toLowerCase() === 'all products'){
     sorted = products
  }else if(sort.toLowerCase() === 'new arrivals'){
     sorted = products.slice(0, 8)
  }else if(sort.toLowerCase() === 'search'){
     sorted = searchArray
  }
  else{
     sorted = products.filter((item)=> item.category === sort.toLowerCase())
  }

  // setting the pagination index
  const indexoflastpost = currentPage * postPerPage;
  const indexoffirstpost = indexoflastpost - postPerPage;
  const currentpost = sorted.slice(indexoffirstpost, indexoflastpost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.mainContt}>
      <div className={style.header}>
        {sort.toLowerCase() !== 'search' && <h1>{sort.toUpperCase()}</h1>}
      </div>
      <div className={style.container}>
        {currentpost.map((item) => {
            return (
              <article key={item.id} className={style.product}>
                <div className={style.imgSec}>
                  <img src={item.images} alt={item.title}/>
                  <div className={style.actCont}>
                    <div className={style.actions}>
                      <ShoppingCartIcon
                        className={style.actionButtons}
                        onClick={()=>addHandler(item)}
                      />
                     {!cart.find((product)=>product.id === item.id) && <FavoriteBorderOutlinedIcon
                        className={wishList.find((product)=> item.id === product.id) ? style.activeHeart : style.actionButtons }
                        onClick= {wishList.find((product)=> item.id === product.id) ? ()=>removeFromWishlist(item) : ()=>addToWishlist(item)}
                      />}
                    </div>
                  </div>
                </div>
                <div className={style.title}>
                   <h6>{item.title.substring(0, 25)}...</h6>
                   <h6>${item.price}.00</h6>
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
     {sorted.length > postPerPage && <Pagination
        postPerPage={postPerPage}
        totalPosts={sorted.length}
        paginate={paginate}
      />}
    </div>
)
};


export default ProductItem;
