import React from "react";

import classes from "./Services.module.scss";

import Card from "../ui/Card";

import lap from "../../assets/lap.png"

import source from "../../assets/source.png"

import cer from "../../assets/cer.png"






const Services = () => {
  return (
    <section className={classes.services}>
      <div className={classes.cards}>
      <Card odd={true} image={lap} text={"تعليم تفاعلي بواسطة أحدث الطرق التعليميه"} className={classes.card}/>
      <Card image={source} text={"نوفر أفضل المصادر والمراجع التعليميه"} className={classes.card}/>
      <Card odd={true} image={cer} text={"نساعدك في الحصول علي أعلي الدرجات"} className={classes.card}/>
      </div>
    </section>
  );
};

export default Services;
