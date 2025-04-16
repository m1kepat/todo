import React from "react";
import TodoItem from "./TodoItem";
import "../styles/main.scss";

const TodoList = ({ todos, title, remove }) => {
  if (!todos.length) {
    return <h1 style={{ textAlign: "center" }}>Список задач пуст</h1>;
  }

  return (
    <div>
      <h1 className="todo-list__title">{title}</h1>
      {todos.map((todo, index) => (
        <TodoItem remove={remove} number={index + 1} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
