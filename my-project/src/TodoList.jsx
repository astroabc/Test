import TodoThing from "./TodoThing";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todoList }) => {
    return (
        <div className="basis-5/6 flex flex-col gap-3 items-center p-3 overflow-auto">
            {todoList &&
                // eslint-disable-next-line react/prop-types
                todoList.map((el, index) => (
                    <TodoThing
                        key={index}
                        content={el.task}
                        idTask={index}
                        isChecked={el.completed}
                    />
                ))}
        </div>
    );
};

export default TodoList;
