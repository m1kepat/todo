import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../styles/images/logo.svg";

const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item logo">
          <img src={logo} alt="Logo" />
        </li>
        <li className="menu__item">
          <Link className="menu__item-link" to="/todos">
            Задачи
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__item-link" to="/login">
            Войти
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
