import PropTypes from "prop-types";

import "./Card.css";

function Card({ data }) {
  return (
    <article className="card">
      <img
        className="card_img"
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/coffe.JPG`}
        alt="café"
      />
      <section className="card_info">
        {data && <h1>Nom : {data.word} </h1>}
        {data && <p>{data.Definition} </p>}
        {data && <p> Origine du mot : {data.name} </p>}
      </section>
    </article>
  );
}

Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string,
      Definition: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};
export default Card;
