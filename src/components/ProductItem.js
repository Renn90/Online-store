import React, { useState } from "react";
import Pagination from "./Pagination";
import { products } from "../data2";
import style from "../Styles/ProductItem.module.scss";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../feautures/Action";
import { ADDTOWISHLIST } from '../feautures/Action'

const ProductItem = () => {
  //making the pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  // setting the pagination index
  const indexoflastpost = currentPage * postPerPage;
  const indexoffirstpost = indexoflastpost - postPerPage;
  const currentpost = products.slice(indexoffirstpost, indexoflastpost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const dispatch = useDispatch();

  return (
    <div className={style.mainContt}>
      <div className={style.header}>
        <h1 className={style.arrivals}>Products</h1>
      </div>
      <div className={style.container}>
        {currentpost.map(({id, amount, images, title, price, discountPercentage}) => {
            return (
              <article key={id} className={style.product}>
                <div className={style.imgSec}>
                  <img src={images} alt={title}/>
                  <div className={style.actCont}>
                    <div className={style.actions}>
                      <ShoppingCartIcon
                        className={style.actionButtons}
                        onClick={() => dispatch({ type: ADD, payload: {id, amount, images, title, price} })}
                      />
                      <FavoriteBorderOutlinedIcon 
                        className={style.actionButtons}
                        onClick= {()=> dispatch({type: ADDTOWISHLIST, payload: {id, amount, images, title, price, discountPercentage} })}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.title}>
                   <h6>{title.substring(0, 25)}...</h6>
                   <h6>${price}.00</h6>
                </div>
                <Link
                  to={`/products/${id}`}
                  style={{ textDecoration: "none" }}
                >
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
      <Pagination
        postPerPage={postPerPage}
        totalPosts={products.length}
        paginate={paginate}
      />
    </div>
)
};

 const mapStateToProps = (store) => {
   return {wishlist: store.wishlist}
}

export default connect(mapStateToProps)(ProductItem);
