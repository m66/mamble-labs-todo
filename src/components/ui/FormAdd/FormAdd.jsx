import { useState } from "react";
import { validateAddField } from "../../../helpers/validation";

import styles from "./formAdd.module.scss";

const FormAdd = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <form
      className={styles.formAdd}
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <span>Task</span>
      <div className={styles.formField}>
        <input
          type="text"
          value={text}
          placeholder="Write here"
          className={styles.addField}
          onChange={(e) => {
            setText(e.target.value);
            setErrorMessage(validateAddField(e.target.value));
          }}
        />
        <button className={styles.addBtn} disabled={(errorMessage || text === "") && "disabled"}>
          Add
        </button>
      </div>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </form>
  );
};

export default FormAdd;