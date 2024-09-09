import styles from "./Pagination.module.css";

const Pagination = ({ currentPage, onChange, pageLinks = {} }) => {
  const { first, next, last, prev } = pageLinks;

  return (
    <div className={styles.container}>
      <button disabled={!first} onClick={() => onChange(first)}>
        First
      </button>
      <button
        disabled={!prev || Number(currentPage) === 1}
        onClick={() => onChange(prev)}
      >
        Prev
      </button>
      <button>{currentPage}</button>
      <button disabled={!next} onClick={() => onChange(next)}>
        Next
      </button>
      <button disabled={!last} onClick={() => onChange(last)}>
        Last
      </button>
    </div>
  );
};

export { Pagination };
