import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, FeedbackButton } from './FeedbackWidget.styles';

class Feedback extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ButtonWrapper>
        {options.map((option) => (
          <FeedbackButton key={option} type={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackButton>
        ))}
      </ButtonWrapper>
    );
  }
}

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
