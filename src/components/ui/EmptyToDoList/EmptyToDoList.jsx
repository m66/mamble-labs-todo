import styles from "./emptyToDoList.module.scss";

const EmptyToDoList = () => {
  return (
    <div className={styles.emptyList}>
      <p>Your life is a blank page. You write on it.</p>
      <p>So start by adding your tasks here.</p>
    </div>
  );
};

export default EmptyToDoList;
