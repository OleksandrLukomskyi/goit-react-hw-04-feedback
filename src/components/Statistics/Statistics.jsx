import React from "react";
import { Notification } from "./Notification";
import css from "./Statistics.module.css"

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return(
<div className={css.statisticsBloc}>
   
          <h2>Statistics</h2>
          { total === 0 ? (<Notification message="There is no feedback"/>):
           (<div>
              <p>Good:{good}</p>
              <p>Neutral:{neutral}</p>
              <p>Bad:{bad}</p>
              <p >Total:{total} </p>
              <p>Positive feedback:{positivePercentage}%</p>
           </div>)}
           
</div>)}

      