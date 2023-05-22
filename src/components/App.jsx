import React, { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import ButtonFeedback from './ButtonFeeedback/ButtonFeedback';
import Notification from './Notification/Notification';




export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onBtnClick = feedback => {
    if (feedback === 'good') {
      setGood(prevState => prevState + 1)
    } else {
      if (feedback === 'neutral') {
        setNeutral(prevState => prevState + 1)
      } else {
        if (feedback === 'bad')
        { setBad(prevState => prevState + 1) }
        return
      }
    }
    
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  const feedbacks = ['good', 'neutral', 'bad'];
  return (
    <>
      <Section title="Please leave feedback">
        <ButtonFeedback
          options={feedbacks}
          onBtnClick={onBtnClick}
        />
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          />) : (
          <Notification message="There is no feedback"/>
        )}
      </Section>
    </>
  )
};
