import { useState } from "react";
import FormAdd from "../FormAdd/FormAdd";
import Checkbox from "../Checkbox/Checkbox";
import List from "../List/List";

import "./toDo.scss";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [hideChecked, setHideChecked] = useState(false);

  function handleHideChange(showChecked) {
    setHideChecked(showChecked);
  }

  function handleAdd(text) {
    setTodos([
      ...todos,
      {
        id: new Date().getTime(),
        text: text,
        checked: false,
      },
    ]);
  }

  function handleListChange(newList) {
    setTodos(newList);
  }

  return (
    <div className="to-do">
      {todos.length ? (
        <Checkbox
          onChange={handleHideChange}
          label="Hide checked items"
          checked={hideChecked}
          name="hide"
        />
      ) : null}
      <FormAdd onAdd={handleAdd} />
      <List
        onDelete={(id) => {
          setTodos(todos.filter((item) => item.id !== id));
        }}
        onChange={handleListChange}
        hideChecked={hideChecked}
        todos={todos}
      />
    </div>
  );
};

export default ToDo;
