import React from "react";
import Button from "./UI/button/Button";
import "../styles/main.scss";

const TodoItem = (props) => {
  return (
    <div className="todo">
      <div className="todo__body">
        <div className="todo__content">
          <div className="todo__text">
            <strong>
              {props.todo.id || props.number}. {props.todo.title}
            </strong>
            <div>{props.todo.body}</div>
          </div>
          <div className="todo__button">
            <Button
              className="button button--accent"
              onClick={() => props.remove(props.todo)}
            >
              Удалить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
