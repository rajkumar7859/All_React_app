import { useContext, useState } from "react";
import { AppContext } from "../Context/Context";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function Todo() {
  const { isTheme, toggoleTheme } = useContext(AppContext);
  const [todos, setTodos] = useState([]);
  // const [Status , setStatus]=useState(false)

  const handleAddTodo = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: new Date().toDateString() + text
    };
    setTodos([...todos, newItem]);
  };

  const handleDelete = (id) => {
    const removeItem = todos.filter((item) => item.id !== id);
    setTodos(removeItem);
  };
  const handelstatus = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  return (
    <div>
      <button onClick={toggoleTheme}>Mode {isTheme ? "Dark" : "Light"}</button>
      <AddTodo data={todos} handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            status={item.status}
            handleDelete={() => handleDelete(item.id)}
            handelstatus={() => handelstatus(item.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
