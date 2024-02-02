import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./Homepage.css";
import Word from "../../components/Word/Word";

function Homepage() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/word/team/1`)
      .then((response) => response.json())
      .then((data) => setWords(data))
      .catch((error) => console.error(error));
  }, []);
  const [position, setPosition] = useState(1);
  const [test, setTest] = useState(3);

  const handleClick = () => {
    const movingPoint = document.getElementById("movingPoint");
    setPosition(position + 1);
    if (position === 1) {
      movingPoint.classList.add(`move${position}`);
      movingPoint.addEventListener(
        "animationend",
        () => {
          setTest(test - 1);
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
          setTest(test - 1);
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
          setTest(test - 1);
        },
        { once: true }
      );
    }
  };

  return (
    <main className="homepage">
      {words && <Word handleClick={handleClick} words={words} />}
      <Card data={words[test]} />
    </main>
  );
}

export default Homepage;
