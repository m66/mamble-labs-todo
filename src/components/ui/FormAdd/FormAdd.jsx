import { useState } from "react";
import "./formAdd.scss";

const FormAdd = ({ onAdd }) => {
  const [text, setText] = useState("");

  return (
    <form
      className="form-add"
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        placeholder="Write here"
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default FormAdd;
