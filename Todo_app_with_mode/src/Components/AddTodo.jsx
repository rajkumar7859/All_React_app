import { useState } from "react";

function AddTodo({ handleAddTodo, data }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onClick = () => {
    handleAddTodo(text);
    setText("");
  };

  return (
    <div>
      <input onChange={handleChange} value={text} placeholder="Add something" />
      <button disabled={data.length == 5} onClick={onClick}>
        ADD
      </button>
    </div>
  );
}

export default AddTodo;
