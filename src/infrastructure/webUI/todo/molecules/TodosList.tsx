import {Todos} from "../../../../domain/todo/Todos";
import {Todo} from "../../../../domain/todo/Todo";
import React from "react";
import {TodoItem} from "./TodoItem/TodoItem";

export const TodosList = ({todos, updateTodos}: { todos: Todos, updateTodos: (todos: Todos) => void }) => {

    const updateAllTodos = (value: Todo) => updateTodos(todos.updateTodos(value));

    return (<ul>{
        todos
            .sorted()
            .map(todo => <TodoItem key={todo.id.value} todo={todo} updateTodos={updateAllTodos}></TodoItem>)
    }</ul>)

}
