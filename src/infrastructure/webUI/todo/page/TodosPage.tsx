import React, {useEffect} from 'react';
import {getAllTodos} from "../../../../app/todo/getAll";
import {Todo} from "../../../../domain/todo/Todo";
import {TodoState} from "../../../../domain/todo/TodoState";
import {Todos} from "../../../../domain/todo/Todos";
import {createTodo} from "../../../../app/todo/create";
import {workingOnTodo} from "../../../../app/todo/workingOn";
import {completeTodo} from "../../../../app/todo/complete";

const TodosPage = () => {

    const [todos, setTodos] = React.useState<Todos>(Todos.init());
    const [task, setTask] = React.useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false)


    useEffect(() => {
        setLoading(true)
        getAllTodos.getAll()
            .then(value => setTodos(value))
            .finally(() => setLoading(false))
    }, [])


    const pickColor = (todo: Todo) => {
        if (todo.state == TodoState.CREATED) return "purple"
        if (todo.state == TodoState.WORKING) return "blue"
        return "red"
    }


    const renderAll = () => {

        return todos.sorted().map(todo =>
            (
                <li key={todo.id.value}
                    style={{color: pickColor(todo), display: "flex", justifyContent: "space-between"}}>{todo.task}

                    {todo.state === TodoState.CREATED &&
                        <button onClick={() => {
                            workingOnTodo.workingOn(todo.id).then(value => setTodos(todos.updateTodos(value)))
                        }}>Working on</button>}
                    {todo.state === TodoState.WORKING &&
                        <button onClick={() => {
                            completeTodo.complete(todo.id).then(value => setTodos(todos.updateTodos(value)))
                        }}>Complete</button>}

                </li>))

    }

    if(loading) return <div>Loading todos...</div>


    return (
        <div>
            <h1>these are all the TODOS</h1>
            <ul>{renderAll()}</ul>


            <input
                type="text" value={task}
                onChange={event => {
                    setTask(event.target.value)
                }}
            />

            <button onClick={() => createTodo.create(task).then(value => {
                setTodos(todos.updateTodos(value))
                setTask("")
            })}>Create
            </button>

        </div>
    );
};

export default TodosPage;
