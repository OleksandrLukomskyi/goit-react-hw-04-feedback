
import React, { Component } from 'react'
import { Section } from "components/Section/Section"
 
export class App extends Component {
  state = {
     good: 0,
     neutral: 0,
     bad: 0,
     
   }

   onLeaveFeedback = (e) => {
      const option = e.currentTarget.name
      this.setState((prevState) => {
                  return {
            [option]: prevState[option] + 1,
                     }
                }); 
          }

   countTotalFeedback = () => {
    const {good, neutral, bad} = this.state
    const amount = good + neutral + bad
   

 return amount;
   }

   countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const {good} = this.state;
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);

   }

  render() {
    
    const { good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return ( 
    

      <Section good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} onLeaveFeedback={this.onLeaveFeedback} />
     
    )
  }

}


export default App