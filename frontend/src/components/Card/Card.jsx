/* eslint-disable eqeqeq */
import PropTypes from "prop-types";

import "./Card.css";

function Card({ data, chooseWord }) {
  return (
    <article className="card">
      {chooseWord == 1 && (
        <img
          className="card_img"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/coffe.JPG`}
          alt="café"
        />
      )}
      {chooseWord == 2 && (
        <img
          className="card_img"
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/the.jpeg`}
          alt="café"
        />
      )}
      <section className="card_info">
        {data && <h1>Nom : {data.word} </h1>}
        {data && <p>{data.Definition} </p>}
        {data && <p> Origine du mot : {data.name} </p>}
      </section>
    </article>
  );
}

Card.propTypes = {
  chooseWord: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string,
      Definition: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};
export default Card;
