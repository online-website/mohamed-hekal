import React from "react";
import classes from "./Book.module.scss";

import { motion } from "framer-motion";

const Book = () => {
  return (
    <motion.section
      transition={{ duration: 0.7, type: "spring" }}
      whileInView={{ y: [100, 0], opacity: [0, 1] }}
      className={classes.book}
    >
      <p className={classes.text}>
        بادر بحجز مقعدك الآن مع مستر محمد هيكل وتعلم اللغة الإنجليزيه بالطريقه
        الصحيحة
      </p>
      <p className={classes.address}>
        العنوان <br /> سنتر مكه خلف مسجد الصحابه{" "}
      </p>
    </motion.section>
  );
};

export default Book;
