import { useState } from 'react';

// import { Component } from 'react';

import Section from './Section';
import Feedback from './Feedback';
import Statistic from './Statistic';
import Notification from './Notification';

const voteOptions = ['good', 'neutral', 'bad'];

const App = () => {
  const [vote, setVote] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = option => {
    setVote(prevState => {
      const value = prevState[option];
      return { ...prevState, [option]: value + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = vote;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = (total, positive) => {
    if (!total) {
      return 0;
    }
    return ((positive * 100) / total).toFixed(2);
  };

  const { good, neutral, bad } = vote;
  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage(total, good);

  return (
    <>
      <Section title="Please leave feedback">
        <Feedback onLeaveFeedback={onLeaveFeedback} options={voteOptions} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        )}
      </Section>
    </>
  );
};

export default App;



// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => {
//       return { [option]: prevState[option] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   countPositiveFeedbackPercentage = (total, positive) => {
//     if (!total) {
//       return 0;
//     }
//     return ((positive * 100) / total).toFixed(2);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positive = this.countPositiveFeedbackPercentage(total, good);

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <Feedback
//             onLeaveFeedback={this.onLeaveFeedback}
//             options={Object.keys(this.state)}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistic
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positive}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }

// export default App;
