import React from "react";
import styles from "./TodoItem.module.css";

const TodoListItem = ({ title, id, status, handleToggle, handleDelete }) => {
  return (
    <div className={styles.itemContainer}>
      <div> {title} </div>
      <div className={styles.rightBox}>
        <div
          onClick={() => handleToggle(id, status)}
          className={`${styles.statusCircle} ${
            status ? styles.done : styles.pending
          }`}
        ></div>
        <div>
          <img
            // onClick={() => handleDelete(id)}
            width="20px"
            src="https://cdn1.iconfinder.com/data/icons/color-bold-style/21/56-512.png"
            alt="delete"
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
