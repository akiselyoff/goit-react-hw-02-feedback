import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p>Statistics</p>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive Feedback: {positivePercentage} %</li>
    </ul>
  </>
);

export default Statistics;
