import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Homepage.css";
import Word from "../../components/Word/Word";

function Homepage() {
  const [words, setWords] = useState([]);
  const [chooseWord, setChooseWord] = useState(1);

  const handleClickWord = (event) => {
    setChooseWord(event.target.value);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/word/team/${chooseWord}`)
      .then((response) => response.json())
      .then((data) => setWords(data))
      .catch((error) => console.error(error));
  }, [chooseWord]);
  const [position, setPosition] = useState(1);
  const [order, setOrder] = useState(3);

  const buttonClick = () => {
    setOrder(order - 1);
  };

  const handleClick = () => {
    const movingPoint = document.getElementById("movingPoint");
    setPosition(position + 1);
    if (position === 1) {
      movingPoint.classList.add(`move${position}`);
      movingPoint.addEventListener(
        "animationend",
        () => {
          setOrder(order - 1);
        },
        { once: true }
      );
    }
    if (position === 2) {
      movingPoint.classList.remove("move1");
      movingPoint.classList.add(`move${position}`);
      movingPoint.addEventListener(
        "animationend",
        () => {
          setOrder(order - 1);
        },
        { once: true }
      );
    }
    if (position === 3) {
      movingPoint.classList.remove("move2");
      movingPoint.classList.add(`move${position}`);
      movingPoint.addEventListener(
        "animationend",
        () => {
          setOrder(order - 1);
        },
        { once: true }
      );
    }
  };

  return (
    <main className="homepage">
      <section className="homepage_section">
        <section className="homepage_info">
          <h1 className="homepage_info_title">Bienvenue dans Ethymologia</h1>
          <p className="homepage_info_p">
            L'objectif d'Ethnologia est de découvrire les mots, leurs passés,
            leurs histoire. Pour le moment, vous pouvez choisir un mot entre «
            café » et « thé ». À l'avenire mon but est de créer une application
            qui soit accessible à tous et pour que chacun puisse apprendre et
            partager. Mais surtout de vous proposer de plus en plus de mot en
            ajoutant des fonctionnalités au fil du temps.
          </p>
        </section>
        <div className="homepage_div">
          <p>Choississez votre mot : </p>
          <button
            className="words"
            type="button"
            value={1}
            onClick={handleClickWord}
          >
            Café
          </button>
          <button
            className="words"
            type="button"
            value={2}
            onClick={handleClickWord}
          >
            Thé
          </button>
        </div>
        <button className="button_phone" type="button" onClick={buttonClick}>
          origine du mot
        </button>
        <section className="homepage_header">
          {words && <Word handleClick={handleClick} words={words} />}
          <Card data={words[order]} chooseWord={chooseWord} />
        </section>
      </section>
    </main>
  );
}

export default Homepage;
