function TodoItem({ title, status, handleDelete, handelstatus }) {
  const style = { display: "flex", gap: 8, justifyContent: "center" };

  return (
    <div data-testid="list-container" style={style}>
      {
        // Data.map((item) => (
        <>
          <p data-testid="list-item">
            <b data-testid="list-item-title">{title}</b>
            <span data-testid="list-item-status">
              {status ? "Done" : "Not Done"}
              <button onClick={handelstatus}>Toggole</button>
            </span>
          </p>
          <button onClick={handleDelete} data-testid="delete-btn">
            DELETE
          </button>
        </>
        // ))
      }
    </div>
  );
}
export default TodoItem;
