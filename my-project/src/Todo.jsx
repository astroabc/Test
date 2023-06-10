import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const Todo = () => {
    const [todoList, setTodoList] = useState([]);
    const getTask = (tasks) => {
        setTodoList(tasks);
    };
    return (
        <div className="w-[500px] h-[500px] bg-white rounded-md shadow-md flex flex-col">
            <TodoHeader />
            <TodoList todoList={todoList} />
            <TodoForm getTask={getTask} />
        </div>
    );
};

export default Todo;
