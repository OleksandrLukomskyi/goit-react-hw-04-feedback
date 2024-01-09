import React, {Component} from "react";
import {FeedbackOptions} from "components/FeedbackOptions/FeedbackOptions"
import { Statistics } from "components/Statistics/Statistics";
import css from "./Section.module.css"

export class Section extends Component {
   render(){
      const { good, neutral, bad, total, positivePercentage, onLeaveFeedback } = this.props;
   return ( 
      <div className={css.sectionBloc}>
<FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}/>
<Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
 </div>  )}
}