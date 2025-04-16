import React, { useEffect, useState } from "react";
import TodoService from "../API/TodoService";
import { useTodos } from "../hooks/useTodos";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Button from "../components/UI/button/Button";
import TodoForm from "../components/TodoForm";
import Modal from "../components/UI/modal/Modal";
import TodoFilter from "../components/TodoFilter";
import TodoList from "../components/TodoList";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import Select from "../components/UI/select/Select";
import "../styles/main.scss";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedTodos = useTodos(todos, filter.sort, filter.query);

  const [fetchTodos, isTodosLoading, todoError] = useFetching(
    async (limit, page) => {
      const response = await TodoService.getAll(limit, page);
      setTodos(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchTodos(limit, page);
  }, [page, limit]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    setModal(false);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((p) => p.id !== todo.id));
  };

  const removeAllTodos = () => {
    setTodos([]);
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <div className="panel">
        <div className="panel__body">
          <Button
            className="button button--accent"
            onClick={() => setModal(true)}
          >
            Создать задачу
          </Button>
          <Modal visible={modal} setVisible={setModal}>
            <TodoForm create={createTodo} />
          </Modal>
          <TodoFilter filter={filter} setFilter={setFilter} />
          <Select
            value={limit}
            onChange={(value) => setLimit(value)}
            defaultValue="Кол-во задач"
            options={[
              { value: 5, name: "5" },
              { value: 10, name: "10" },
              { value: 25, name: "25" },
              { value: -1, name: "Показать все" },
            ]}
          />
          <Button className="button" onClick={removeAllTodos}>
            Удалить все задачи
          </Button>
        </div>
      </div>
      {todoError && <h1>Произошла ошибка ${todoError}</h1>}
      <TodoList
        remove={removeTodo}
        todos={sortedAndSearchedTodos}
        title="Задачи"
      />
      {isTodosLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Todos;
