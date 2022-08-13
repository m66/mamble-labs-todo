import './toDo.scss';
import { useState } from "react";
import FormAdd from "../FormAdd/FormAdd";
import HideItems from "../HideItems/HideItems";
import List from "../List/List";

const ToDo = () => {
    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: "text 1",
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: "text 2",
            isCompleted: false,
        },
        {
            id: Math.random(),
            text: "text 3",
            isCompleted: false,
        },
    ])
    return (
        <div className="to-do">
            <HideItems todos={todos} setTodos={setTodos} isSelectedItems={!!todos.length}/>
            <FormAdd onAdd={(text) => {
                setTodos([
                    ...todos,
                    {
                        id: Math.random(),
                        text: text,
                        isCompleted: false,
                    }
                ])
            }}/>
            <List todos={todos} onDelete={(id) => {
                setTodos(todos.filter(item => item.id !== id));
            }}/>
        </div>
    )
}

export default ToDo;