import { useEffect, useRef, useState } from "react";

import Checkbox from "../../form/Checkbox/Checkbox";
import FormAdd from "../FormAdd/FormAdd";
import List from "../List/List";
import Modal from "../Modal/Modal";

import styles from "./toDo.module.scss";

const ToDo = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const [hideChecked, setHideChecked] = useState(false);
  const [isActiveModal, setIsActiveModal] = useState(false);
  const removedIdRef = useRef();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleHideChange(showChecked) {
    setHideChecked(showChecked);
  }

  function handleAdd(text) {
    setTodos([
      {
        id: new Date().getTime(),
        text: text,
        checked: true,
      },
      ...todos,
    ]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function handleListChange(newList) {
    setTodos(newList);
  }

  function getRemovedId(id) {
    setIsActiveModal(true);
    removedIdRef.current = id;
  }

  function onDelete(response) {
    if (response) {
      setTodos(todos.filter((item) => item.id !== removedIdRef.current));
      setIsActiveModal(false);
    } else {
      setIsActiveModal(false);
    }
  }

  return (
    <div className={styles.toDo}>
      {todos.length ? (
        <Checkbox
          onChange={handleHideChange}
          label="Hide complited"
          checked={hideChecked}
          name="hide"
        />
      ) : null}
      <FormAdd onAdd={handleAdd} />
      <List
        getRemovedId={getRemovedId}
        onChange={handleListChange}
        hideChecked={hideChecked}
        todos={todos}
      />
      {isActiveModal && (
        <Modal onClose={setIsActiveModal} onDelete={onDelete} />
      )}
    </div>
  );
};

export default ToDo;
