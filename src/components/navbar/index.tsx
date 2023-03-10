import { Logo, Container } from "./styles";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container nav__container">
          <div className="logo">
            <a href="#">Ruan Victor</a>
          </div>
          <ul className="nav__list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Portifólio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
