import React, { useContext } from "react";
import Todo from "./Components/Todo";
import { AppContext } from "./Context/Context";
import "./styles.css";

export default function App() {
  const { isTheme } = useContext(AppContext);

  return (
    <div className={`App ${isTheme ? "light" : "dark"}`}>
      <h1>Todo</h1>
      <Todo />
    </div>
  );
}

// all done
