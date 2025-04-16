import React from "react";
import Input from "../components/UI/input/Input";
import "../styles/main.scss";

const TodoFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        className="input__control"
        placeholder="Поиск"
        value={filter.query}
        onChange={(event) =>
          setFilter({ ...filter, query: event.target.value })
        }
      />
    </div>
  );
};

export default TodoFilter;
