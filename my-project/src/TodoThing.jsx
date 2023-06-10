import { useRef } from "react";

// eslint-disable-next-line react/prop-types
const TodoThing = ({ content, idTask }) => {
    const statusRef = useRef();
    const contentRef = useRef();
    const onChecked = () => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        todos[idTask].completed = !todos[idTask].completed;
        localStorage.setItem("todos", JSON.stringify(todos));
        statusRef.current.classList.toggle("bg-gray-600");
        contentRef.current.classList.toggle("line-through");
    };
    return (
        <label
            onClick={onChecked}
            htmlFor="todo"
            className="bg-slate-300 w-[95%] h-12 flex gap-4 items-center px-3 cursor-pointer"
        >
            <div
                id="status"
                ref={statusRef}
                className="h-5 w-5 rounded-full border-2 border-solid"
            ></div>
            <p
                id="content"
                ref={contentRef}
                className="select-none text-2xl font-light"
            >
                {content}
            </p>
        </label>
    );
};

export default TodoThing;
