import { useState } from "react";
import Section from "./Section/Section"
import Statistics from "./Statistics/Statistics"
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Notification from "./Notification/Notification"




const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  

  const onLeaveFeedback = event => {
    const {name} = event.target;
    switch(name){
    case "good":
      setGood(prevState => prevState +1);
      break;

    case "neutral":
      setNeutral(prevState => prevState +1);
      break;

    case "bad":
      setBad(prevState => prevState +1);
      break;

      default: return;
         
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    } return Math.round((good / countTotalFeedback()) * 100);
  };

  
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (<Notification message="There is no feedback" />) :
          (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />)}
      </Section>
    </>
  );

};


     

export default App;