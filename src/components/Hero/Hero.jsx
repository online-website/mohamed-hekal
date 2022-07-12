import React, { Fragment } from "react";
import classes from "./Hero.module.scss";
import { motion } from "framer-motion";

import abc from "../../assets/abc.png";

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <motion.div
        transition={{duration: 0.7, type: "spring"}}
        whileInView={{ x: [-100, 0],opacity: [0, 1]}}
        className={classes["hero__text-box"]}
      >
        <p>أحصل علي تجربه زي الخرا في تعلم اللغه الإنجليزيه</p>
      </motion.div>
      <motion.div
        transition={{duration: 0.7, type: "spring"}}
        whileInView={{ x: [100, 0], opacity: [0,  1] }}
        className={classes["hero__image-box"]}
      >
        <img
          className={classes["hero__image-box__image"]}
          src={abc}
          alt="learn english"
        ></img>
      </motion.div>
    </section>
  );
};

export default Hero;
