import PropTypes from "prop-types";

import "./Title.css";

function Title({ title, className }) {
  return <h1 className={className}>{title}</h1>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Title;
