import React from "react";
import css from "./FeedbackOptions.module.css"

 export const FeedbackOptions = ({options, onLeaveFeedback}) => {
   return (
      <div className={css.feedbackBloc}>
         <h1>Pleace leave feedback</h1>
         <div className={css.blocButton}>
           {options.map((option) => (<button key={option} className={css.button} type="button" name={option} onClick={onLeaveFeedback} >{option}</button>))} 
            
         </div>
      </div>
   )
 }


