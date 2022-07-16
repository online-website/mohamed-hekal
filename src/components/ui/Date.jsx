import { Fragment } from "react";
import classes from "./Date.module.scss";


const Date = ({firstDay, secondDay, thirdDay,title}) => {
  return <div className={classes.card}>
    <h3>{title}</h3>
    <p>سبت أثنين أربعاء</p>
    <p>الساعه: {firstDay}</p>
    <p>أحد ثلاثاء خميس</p>
    <p>الساعه: {secondDay}</p>
    {(
      thirdDay &&
      <Fragment>
    <p>الساعه: {thirdDay}</p>
      </Fragment>
    )}
  </div>
}

export default Date;