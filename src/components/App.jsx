import { useState, useEffect } from 'react';

import Section from './Section';
import FeedbackOptions from './Section/FeedbackOptions';
import Statistics from './Section/Statistics';
import Notification from './Section/Statistics/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, bad, neutral]);

  function countPercantage() {
    return Math.round((good * 100) / total);
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            setGood={setGood}
            neutral={neutral}
            setNeutral={setNeutral}
            bad={bad}
            setBad={setBad}
            total={total}
            positivePercentage={countPercantage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
