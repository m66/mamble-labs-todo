import "./hideItems.scss";
import { useState } from "react";

const HideItems = ({ todos, setTodos, isSelectedItems }) => {
const [checked, setChecked] = useState(false);

if(checked) {
    // setTodos(todos.filter(todo => !todo.isCompleted))
    console.log(todos.filter((todo) => todo.isCompleted))
} else {

}


  return (
    <>
      {isSelectedItems && (
        <div className="hide-items">
          <input type="checkbox" id="hide-btn" onChange={() => setChecked(!checked)}/>
          <label for="hide-btn">Hide completed</label>
        </div>
      )}
    </>
  );
};

export default HideItems;
