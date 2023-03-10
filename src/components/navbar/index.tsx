import { Logo, Container } from "./styles";
import "./style.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar container">
        <div className="nav__container">
          <div className="logo">Ruan Victor</div>
          <ul>
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
