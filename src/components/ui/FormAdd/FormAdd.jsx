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
      <div>
        <input
          type="text"
          value={text}
          placeholder="Write here"
          onChange={(e) => {
            setText(e.target.value);
            setErrorMessage(validateAddField(e.target.value));
          }}
        />
        <button disabled={(errorMessage || text === "") && "disabled"}>
          Add
        </button>
      </div>
      <p className={styles.errorMessage}>{errorMessage}</p>
    </form>
  );
};

export default FormAdd;
