import astro from "../../assets/astro.png";
import rocket from "../../assets/rocket.png";
import book from "../../assets/book.png";
import "./MainAnimation.css";

const MainAnimation = () => {
  return (
    <>
      <section style={{ height: "100vh" }} className="lead-animations">
        <img className="astro" src={astro} />
        <img className="rocket" src={rocket} />
        <img className="book" src={book} />
      </section>
    </>
  );
};

export default MainAnimation;
