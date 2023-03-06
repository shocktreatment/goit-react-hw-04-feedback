import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h2
        style={{
          fontSize: '700',
          fontWeight: 'initial',
          fontFamily: 'sans-serif',
        }}
      >
        {title}
      </h2>
      {children}
    </>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}