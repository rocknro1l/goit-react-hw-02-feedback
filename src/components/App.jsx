import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackButtons from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handlerClick = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        this.setState(prevState => ({ good: prevState.good + 1 }));
        break;
      case 'neutral':
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
        break;
      case 'bad':
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
        break;
      default:
    }
  };

  // handleClickIncrementGood = () =>
  //   this.setState(prevState => ({ good: prevState.good + 1 }));

  // handleClickIncrementNeutral = () =>
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  // handleClickIncrementBad = () =>
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    this.state.good / this.countTotalFeedback();

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback =
      (this.countPositiveFeedbackPercentage() * 100).toFixed(0) + '%';

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '50px',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackButtons onFeedback={this.handlerClick} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      </div>
    );
  }
}
