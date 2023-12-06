import { Component } from 'react';
import { ButtonStyle, ButtonsWrapper } from './FeedbackOptions.styled';

export default class FeedbackButtons extends Component {
  render() {
    return (
      <ButtonsWrapper>
        <ButtonStyle
          name="good"
          key={crypto.randomUUID()}
          onClick={this.props.onFeedback}
        >
          Good
        </ButtonStyle>

        <ButtonStyle
          name="neutral"
          key={crypto.randomUUID()}
          onClick={this.props.onFeedback}
        >
          Neutral
        </ButtonStyle>

        <ButtonStyle
          name="bad"
          key={crypto.randomUUID()}
          onClick={this.props.onFeedback}
        >
          Bad
        </ButtonStyle>
      </ButtonsWrapper>
    );
  }
}
