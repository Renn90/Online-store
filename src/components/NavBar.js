import React, { useState } from "react";
import style from "../Styles/Navbar.module.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@material-ui/core";
import "../Styles/Navbar.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Styles/Animations.scss";

const NavBar = () => {
  const [showmenu, setshowmenu] = useState(false);

  const togglelist = () => {
    setshowmenu((showMenu) => !showMenu);
  };

  const toggle = showmenu ? "activeb" : "";

  const cart = useSelector((state)=> state.cart)
  const wishlist = useSelector((state)=> state.wishlist)

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
            <>Wishlist</>
              <div className={wishlist.length > 0 ? style.wishlistLength : null} />
            <></>
          </div>
        </NavLink>
      </div>

      <div className={style.cartSec}>
        <NavLink to="/login">Log&nbsp;In</NavLink>
        <Badge badgeContent={cart.length} color="secondary" overlap="rectangular">
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

export default NavBar;
