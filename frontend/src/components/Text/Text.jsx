import PropTypes from "prop-types";

function Text({ text, className }) {
  return <p className={className}>{text}</p>;
}

Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Text;
