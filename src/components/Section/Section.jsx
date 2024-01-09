import React  from "react";
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics";
import css from "./Section.module.css"



const Section = ({good, neutral, bad, total, positivePercentage, onLeaveFeedback}) => {
  



      
   return ( 
      <div className={css.sectionBloc}>
<FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}/>
<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
 </div>  )
}
export default Section