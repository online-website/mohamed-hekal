import React from "react";
import classes from "./Book.module.scss";


const Book = () => {
  return (
    <section
      className={classes.book}
    >
      <p className={classes.text}>
        بادر بحجز مقعدك الآن مع مستر محمد هيكل وتعلم اللغة الإنجليزيه بالطريقه
        الصحيحة
      </p>
      <p className={classes.address}>
        العنوان <br /> سنتر عبقرينو أمام مول الصفوه
      </p>
    </section>
  );
};

export default Book;
