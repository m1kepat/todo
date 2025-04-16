import React, { useState } from "react";
import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";
import "../styles/main.scss";

const TodoForm = ({ create }) => {
  const [newTodo, setTodo] = useState({ title: "" });
  const [error, setError] = useState("");

  const addNewTodo = (e) => {
    e.preventDefault();

    if (!newTodo.title.trim()) {
      setError("Заполните поле");
      return;
    }

    create(newTodo);
    setTodo({ title: "" });
    setError("");
  };

  return (
    <form className="input" onSubmit={addNewTodo}>
      <Input
        className="input__control"
        type="text"
        placeholder="Название задачи"
        value={newTodo.title}
        onChange={(e) => setTodo({ ...newTodo, title: e.target.value })}
      />

      {error && <p>{error}</p>}
      <Button className="button" type="submit">
        Создать задачу
      </Button>
    </form>
  );
};

export default TodoForm;
