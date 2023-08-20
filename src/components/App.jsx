import React, { useState } from 'react';
import Feedback from './FeedbackWidget/FeedbackWidget';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  const totalFeedback = feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positivePercentage = totalFeedback === 0 ? 0 : (feedbackCounts.good / totalFeedback) * 100;

  return (
    <div>
      <Section title="Please leave your feedback">
        <Feedback options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedbackCounts.good}
            neutral={feedbackCounts.neutral}
            bad={feedbackCounts.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}

export default App;