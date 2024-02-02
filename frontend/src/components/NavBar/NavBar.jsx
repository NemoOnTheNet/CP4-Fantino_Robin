import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <section className="navBar">
      <div className="navbar-div">
        <img
          className="navBar_img"
          src={`${
            import.meta.env.VITE_BACKEND_URL
          }/assets/images/icon-book.png`}
          alt="book"
        />
        <h1>Ethymologia</h1>
      </div>
      <Link to="/register">
        <img
          className="user-img"
          src="src/assets/icone-user.svg"
          alt="icon utilisateur"
        />
      </Link>
    </section>
  );
}

export default NavBar;
