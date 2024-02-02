// eslint-disable-next-line no-unused-vars
import PropTypes, { shape } from "prop-types";
import "./Word.css";

function Word({ handleClick, words }) {
  return (
    <section className="testSectin">
      <img
        src={`${
          import.meta.env.VITE_BACKEND_URL
        }/assets/images/carte-monde.jpg`}
        alt=""
      />
      <input
        type="button"
        id="movingPoint"
        className="point boat"
        onClick={handleClick}
      />

      {words &&
        words.map((word) => (
          <div key={word.name} className={`${word.name}`}>
            {word.name}
          </div>
        ))}
    </section>
  );
}

Word.propTypes = {
  handleClick: PropTypes.func.isRequired,
  words: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string,
      Definition: PropTypes.string,
      order_list: PropTypes.number,
      name: PropTypes.string,
    })
  ).isRequired,
};

export default Word;
