import React, {useEffect} from 'react';
import {getAllTodos} from "../../../../app/todo/getAll";
import {Todo} from "../../../../domain/todo/Todo";
import {TodoState} from "../../../../domain/todo/TodoState";
import {createTodo} from "../../../../app/todo/create";
import {workingOnTodo} from "../../../../app/todo/workingOn";
import {completeTodo} from "../../../../app/todo/complete";
import {todosReducer} from "./reducer/TodosReducer";
import {TodosPageStore} from "./store/TodosPageStore";
import {UpdateTodosAction} from "./action/UpdateTodosAction";
import {AddTaskAction} from "./action/AddTaskAction";
import {LoadingAction} from "./action/LoadingAction";
import {LoadedAction} from "./action/LoadedAction";

const TodosPage = () => {

    const [{todos, task, loading}, dispatch] = React.useReducer(todosReducer, TodosPageStore.init())


    useEffect(() => {
        dispatch(new LoadingAction())
        getAllTodos.getAll()
            .then(value => dispatch(new UpdateTodosAction(value)))
            .finally(() => dispatch(new LoadedAction()))
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
                            workingOnTodo.workingOn(todo.id).then(value =>
                                dispatch(new UpdateTodosAction(todos.updateTodos(value)))
                            )
                        }}>Working on</button>}
                    {todo.state === TodoState.WORKING &&
                        <button onClick={() => {
                            completeTodo.complete(todo.id).then(value =>
                                dispatch(new UpdateTodosAction(todos.updateTodos(value)))
                            )
                        }}>Complete</button>}

                </li>))

    }

    if (loading) return <div>Loading todos...</div>


    return (
        <div>
            <h1>these are all the TODOS</h1>
            <ul>{renderAll()}</ul>


            <input
                type="text" value={task}
                onChange={event => {dispatch(new AddTaskAction(event.target.value))}}
            />

            <button onClick={() => createTodo.create(task).then(value => {
                dispatch(new UpdateTodosAction(todos.updateTodos(value)))
                dispatch(new AddTaskAction(""))
            })}>Create
            </button>

        </div>
    );
};

export default TodosPage;
