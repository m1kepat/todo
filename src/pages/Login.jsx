import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../components/UI/input/Input";
import Button from "../components/UI/button/Button";
import "../styles/main.scss";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const storedUserName = "admin";
  const storedPassword = "admin";

  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (userName === storedUserName && password === storedPassword) {
      setIsAuth(true);
      navigate("/todos");
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={submit}>
        <h1 className="login__title">Войти</h1>
        <ul className="login__list">
          <li className="login__item">
            <Input
              className="input__control"
              type="text"
              placeholder="Логин"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </li>
          <li className="login__item">
            <Input
              className="input__control"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <span>Логин и пароль: admin</span>
        </ul>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button className="button button--accent" type="submit">
          Войти
        </Button>
      </form>
    </div>
  );
};

export default Login;
