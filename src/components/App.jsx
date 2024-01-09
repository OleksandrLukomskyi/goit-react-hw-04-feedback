import { useState } from "react"
import { Section } from "./Section/Section"

// function name(params) {
//   return [value, fn]
// }

const App = () => {
  
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] = useState(0)

 

//  useEffect(() => {
//   console.log('render');
//  })

const onLeaveFeedback = (e) => {
  const feedback = e.currentTarget.name;
  console.log(feedback);
setFeedback(prevState => prevState[feedback] + 1); 
      }


const countTotalFeedback = () => {
  const {good, neutral, bad} = feedback;
const amount = good + neutral + bad
return amount;
}

const countPositiveFeedbackPercentage = () => {
  const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
    return 0;
  }
  return Math.round((feedback.good/ totalFeedback) * 100);

 }



  return (
  <> 
  <Section good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} onLeaveFeedback={onLeaveFeedback} />
  </>)
}

export default App
