import React from "react";

import classes from "./Nav.module.scss";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import logo from "../../assets/logo.png";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
      </div>
      <ul className={classes["nav__social"]}>
        <a href="tel:01113703636">
          <AiOutlineWhatsApp
            className={`${classes["nav__social--facebook"]} ${classes["nav__social--icon"]}`}
          />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100052347542071"
          target="_blank"
          rel="noreferrer"
        >
          <FiFacebook
            className={`${classes["nav__social--facebook"]} ${classes["nav__social--icon"]}`}
          />
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
