import React, { useEffect, useState } from "react";
import style from "../Styles/Navbar.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@material-ui/core";
import "../Styles/Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "../Styles/Animations.scss";

const NavBar = ({ wishlist, amount }) => {
  const [showmenu, setshowmenu] = useState(false);

  const togglelist = () => {
    setshowmenu((showMenu) => !showMenu);
  };

  const toggle = showmenu ? "activeb" : "";

  useEffect(()=>{
    console.log(amount)
  })

  return (
    <div className={`${style.container} slidedown`}>
      <div className={style.logo}>
        <h2>Xea</h2>
      </div>

      <div className={`${style.navlink} ${toggle}`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link active" : "link")}
          onClick={togglelist}
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "link active" : "link")}
          onClick={togglelist}
        >
          Products
        </NavLink>
        <NavLink to="/wishlist" onClick={togglelist}>
          <div className={style.wishlist}>
            <>Whishlist</>
            {wishlist.length > 0 && (
              <div className={style.wishlistLength} />
            )}{" "}
            <></>
          </div>
        </NavLink>
      </div>

      <div className={style.cartSec}>
        <NavLink to="/login">Log&nbsp;In</NavLink>
        <Badge badgeContent={amount} color="secondary" overlap="rectangular">
          <NavLink to="cart">
            <ShoppingCartIcon className="cart" />
          </NavLink>
        </Badge>
        <div className={style.hamburger} onClick={togglelist}>
          <span className={style.bars}></span>
          <span className={style.bars}></span>
          <span className={style.bars}></span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    wishlist: state.wishlist,
    cartamount: state.cartamount,
    amount: state.amount,
  };
};

export default connect(mapStateToProps)(NavBar);
