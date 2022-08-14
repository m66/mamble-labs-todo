import EmptyToDoList from "../EmptyToDoList/EmptyToDoList";
import ListItem from "../ListItem/ListItem";

import "./list.scss";

const List = ({ todos, onDelete, onChange, hideChecked }) => {
  function handleChange(checked, itemId) {
    const newTodoList = todos.map((item) =>
      item.id === itemId ? { ...item, checked } : item
    );

    onChange(newTodoList);
  }

  return (
    <div className="list">
      {todos.length ? (
        todos
          .filter((item) => !hideChecked || !item.checked)
          .map(({ checked, id, text }) => (
            <ListItem
              onChange={handleChange}
              onDelete={onDelete}
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
