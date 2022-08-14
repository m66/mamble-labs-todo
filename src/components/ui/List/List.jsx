import EmptyToDoList from "../EmptyToDoList/EmptyToDoList";
import ListItem from "../ListItem/ListItem";

import styles from "./list.module.scss";

const List = ({ todos, getRemovedId, onChange, hideChecked, setIsActiveModal }) => {
  function handleChange(checked, itemId) {
    const newTodoList = todos.map((item) =>
      item.id === itemId ? { ...item, checked } : item
    );

    onChange(newTodoList);
  }

  return (
    <div className={styles.list}>
      {todos.length ? (
        todos
          .filter((item) => !hideChecked || !item.checked)
          .map(({ checked, id, text }) => (
            <ListItem
              setIsActiveModal={setIsActiveModal}
              onChange={handleChange}
              getRemovedId={getRemovedId}
              checked={checked}
              text={text}
              key={id}
              id={id}
            />
          ))
      ) : (
        <EmptyToDoList />
      )}
    </div>
  );
};

export default List;
