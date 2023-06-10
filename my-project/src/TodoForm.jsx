import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoForm = ({ getTask }) => {
    const [tasks, setTasks] = useState([]);
    const taskRef = useRef("");

    function loadTasks() {
        let loadedTasks = localStorage.getItem("todos");

        let tasks = JSON.parse(loadedTasks);

        if (tasks) {
            setTasks(tasks);
        } else {
            setTasks([]);
        }
    }
    useEffect(() => {
        loadTasks();
    }, []);

    function saveTasks(task) {
        localStorage.setItem("todos", JSON.stringify(task));
    }

    const onClickAddTodo = (e) => {
        e.preventDefault();
        loadTasks();
        if (taskRef.current.value != "") {
            setTasks([
                ...tasks,
                {
                    task: taskRef.current.value,
                    completed: false,
                },
            ]);
            saveTasks([
                ...tasks,
                {
                    task: taskRef.current.value,
                    completed: false,
                },
            ]);
            taskRef.current.value = "";
        }
    };
    getTask(tasks);

    return (
        <div className="basis-1/12 flex items-center px-3 bg-slate-100 gap-3">
            <input
                ref={taskRef}
                type="text"
                className="basis-4/5 outline-none border-solid border-[1px] border-gray-400 rounded-lg h-[80%] pl-3"
            />
            <button
                onClick={onClickAddTodo}
                className="basis-1/5 h-[80%] w-[80%] bg-slate-300 rounded-lg"
            >
                Submit
            </button>
        </div>
    );
};

export default TodoForm;
