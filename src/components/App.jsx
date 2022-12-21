import {useState} from "react";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification";
import "./style.css";
export default function App() {
  const [good,setGood]= useState(0);
  const [neutral,setNeutral]= useState(0);
  const [bad,setBad]= useState(0);
  const addFetback=(event)=>{
        const{name}= event.currentTarget;
        switch (name) {
          case 'good':
            setGood(prevState=>prevState + 1)
            break;
          case 'neutral':
            setNeutral(prevState=> prevState + 1)       
            break;
            case 'bad':
              setBad(prevState=>prevState + 1)
              break;
          default:
            break;
        }
      }
      const countTotalFeedback =()=>{
              return good + neutral + bad;
            }
      const countPositiveFeedbackPercentage =()=>{
            const positive = Math.round((good / countTotalFeedback()) * 100) 
                  return positive;
        }
      return  <> 
          <h2>Please leave feedback</h2>
          <FeedbackOptions  onLeaveFeedback={addFetback} mas={['good','neutral','bad']}/> 
          <h2>Statistics</h2> 
          {countTotalFeedback()?
           <Statistics  good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}/>
           :<Notification message="There is no feedback"/>}
          
          </>
          
          
        
}
