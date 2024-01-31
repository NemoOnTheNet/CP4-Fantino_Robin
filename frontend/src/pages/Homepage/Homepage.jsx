import Title from "../../components/Title/Title";
import Text from "../../components/Text/Text";

function Homepage() {
  const titleSection1 = "je suis la section 1";
  const titleSection2 = "je suis la section 2";
  const textSection1 =
    "Je suis le text de la section numéro 1 et j'espère que vous allez bien";
  const textSection2 =
    "Je suis le text de la section numéro 2 et j'espère que vous allez mal.";

  return (
    <>
      <section className="homePage_section1">
        <Title title={titleSection1} />
        <Text text={textSection1} />
      </section>
      <section className="homePage_section2">
        <Title title={titleSection2} />
        <Text text={textSection2} />
      </section>
    </>
  );
}

export default Homepage;
