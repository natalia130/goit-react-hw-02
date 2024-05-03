import { useState, useEffect } from 'react'
import './App.css';
import Description from '../description/Description.jsx'
import Options from '../options/Options.jsx'
import Feedback from '../feedback/Feedback.jsx'
import Notification from '../notification/Notification.jsx'

const App = () => {

  const [feedback, setFeedback] = useState(() => {
  const savedFeedback = window.localStorage.getItem("saved-feedback");

  if (savedFeedback !== null) {
    return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });
  
  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  }
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  
  return (
    <>
      <Description/>
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} />
      {totalFeedback ? (<Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />) :
        (<Notification></Notification>)}
    </>
  )
};

export default App;