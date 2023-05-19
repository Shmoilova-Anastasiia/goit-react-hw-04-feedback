import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import ButtonFeedback from './ButtonFeeedback/ButtonFeedback';
import Notification from './Notification/Notification';





export class App extends Component{
  state = {
  good: 0,
  neutral: 0,
  bad: 0,
  } 

onBtnClick = feedback => {
  this.setState(prevState => ({
    [feedback]: prevState[feedback] + 1
  }));
};

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};

countPositiveFeedback = () => {
  const { good } = this.state;
  const total = this.countTotalFeedback();
  return Math.round((good * 100) / total);
};

render() {
  const { good, neutral, bad } = this.state;
  return (
    <>
      <Section title="Please leave feedback">
        <ButtonFeedback
          options={Object.keys(this.state)}
          onBtnClick={this.onBtnClick}
        />
      </Section>
      <Section title='Statistics'>
        {this.countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedback()}
          />) : (
          <Notification message="There is no feedback"/>
        )}
    </Section>
    </>
  )
}
}
