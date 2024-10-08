import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import TodoList from "./TodoList";
import axios from "axios";
import { Pagination } from "../Pagination";
import parse from "parse-link-header";
import styles from "./Todo.module.css";
import { Spinner } from "../Common/Spinner";

function Todo() {
  // you can also maintain separate isLoading, and isError states
  const [todos, setTodos] = useState({
    isLoading: false,
    data: [],
    isError: false,
  });
  const [page, setPage] = useState(1);
  const [pageLinks, setPageLinks] = useState({});

  const getTodos = (page = 1, limit = 5) => {
    setTodos({ ...todos, isLoading: true, isError: false });

    axios
      .get(
        `https://todo-advance-api.onrender.com/tasks?_page=${page}&_limit=${limit}`
      )
      .then(({ data, headers: { link } }) => {
        setTodos({ ...todos, isLoading: false, data });
        setPageLinks(parse(link));
      })
      .catch((err) => {
        setTodos({ ...todos, isLoading: false, isError: true });
        // manage error
      });
  };
  const handleAdd = (title) => {
    const payload = {
      title,
      status: false,
    };
    setTodos({ ...todos, isLoading: true, isError: false });
    return (
      axios
        .post("https://todo-advance-api.onrender.com/tasks", payload)
        .then((res) => {
          console.log(res);
          return getTodos();
        })
        // can do .then if required
        .catch((err) => {
          setTodos({ ...todos, isLoading: false, isError: true });
          // manage error
        })
    );
  };
  const handleToggle = (id, status) => {
    setTodos({ ...todos, isLoading: true, isError: false });
    return (
      axios
        .patch(`https://todo-advance-api.onrender.com/tasks/${id}`, {
          status: !status,
        })
        .then((res) => {
          getTodos();
        })
        // can do .then if required
        .catch((err) => {
          setTodos({ ...todos, isLoading: false, isError: true });
          // manage error
        })
    );
  };
  const handleDelete = (id) => {
    setTodos({ ...todos, isLoading: true, isError: false });
    return (
      axios
        .delete(`https://todo-advance-api.onrender.com/tasks/${id}`)
        .then(() => {
          getTodos();
        })
        // can do .then if required
        .catch((err) => {
          setTodos({ ...todos, isLoading: false, isError: true });
          // manage error
        })
    );
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className={styles.todoContainer}>
      <TodoInput handleSubmit={handleAdd} />

      <TodoList
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        data={todos.data}
      />
      <div className={styles.spinnerContainer}>
        {todos.isLoading && <Spinner />}
      </div>
      <Pagination
        currentPage={page}
        pageLinks={pageLinks !== null && pageLinks}
        onChange={({ _limit, _page }) => {
          getTodos(_page, _limit);
          setPage(Number(_page));
        }}
      />
    </div>
  );
}

export default Todo;
