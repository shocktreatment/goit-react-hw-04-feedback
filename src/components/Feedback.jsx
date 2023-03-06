import PropTypes from 'prop-types';

const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '5px',
      }}
    >
      {options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => onLeaveFeedback(option)}
          style={{ width: '60px' }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Feedback;

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired)
};