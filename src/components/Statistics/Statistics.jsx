import { Component } from 'react';
import { WrapperButtons } from './Statistics.styled';

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, totalFeedback, positiveFeedback } = this.props;

    if (!totalFeedback) {
      return <h3>There is no feedback</h3>;
    }

    return (
      <WrapperButtons>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>Positive feedback: {positiveFeedback} </li>
      </WrapperButtons>
    );
  }
}
