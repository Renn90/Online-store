import React from "react";
import style from "../Styles/Footer.module.scss";
import QuizIcon from "@mui/icons-material/Quiz";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import ArticleIcon from "@mui/icons-material/Article";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.logo}>
          <p>xea</p>
          <i>get your swag on!</i>
        </div>
        <div>
          <p>Home</p>
          <p>Men</p>
          <p>Women</p>
          <Link to="accessories" style={{ textDecoration: "none" }}>
            <p>Accessories</p>
          </Link>
        </div>
        <div>
          <Link to="cart" style={{ textDecoration: "none" }}>
            <p>Cart</p>
          </Link>
          <p>Order Tracking </p>
          <Link to="wishlist" style={{ textDecoration: "none" }}>
            <p>Wishlist</p>
          </Link>
        </div>
        <div>
          <h1>Contact us</h1>
          <p>Ikeja Lagos Nigeria</p>
          <p>Phone: +234 815 796 2248</p>
          <p>e-mail: xea@gmail.com</p>
          <p>www.xeaStores.com</p>
        </div>
        <div>
          <h1>help and support</h1>
          <div className={style.helpSec}>
            <QuizIcon style={{ fontSize: 20, marginRight: "5px" }} />
            <p>Frequently&nbsp;asked&nbsp;questions</p>
          </div>
          <div className={style.helpSec}>
            <PrivacyTipIcon style={{ fontSize: 20, marginRight: "5px" }} />
            <p>Privacy&nbsp;policy</p>
          </div>
          <div className={style.helpSec}>
            <ArticleIcon style={{ fontSize: 20, marginRight: "5px" }} />
            <p>Terms&nbsp;&&nbsp;conditions</p>
          </div>
        </div>
      </div>
      <hr style={{ margin: " 20px 5%", color: "grey" }} />
      <div className={style.socialMedia}>
        <FacebookRoundedIcon style={{ color: "white", margin: "2px" }} />
        <TwitterIcon style={{ color: "white", margin: "2px" }} />
        <LinkedInIcon style={{ color: "white", margin: "2px" }} />
        <InstagramIcon style={{ color: "white", margin: "2px" }} />
        <EmailRoundedIcon style={{ color: "white", margin: "2px" }} />
      </div>
      <p className={style.copyright}>&#169; copyright all rights reserved</p>
    </div>
  );
};

export default Footer;
