import { links } from "../../Data";
import "./navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <a href="/" className="nav-logo">
          <img
            src={require("../../assests/Home-Page/Logo/logo__2_-removebg-preview.png")}
            alt=""
            className="nav-logo"
          />
        </a>
        <div className="nav-menu">
          <ul className="nav-list">
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav-item" key={index}>
                  <a href={path} className="nav-link">
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
