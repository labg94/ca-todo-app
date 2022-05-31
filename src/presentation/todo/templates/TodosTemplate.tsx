import {Todos} from "../../../domain/todo/Todos";
import {TodosList} from "../organisms/TodosList";
import {TextInput} from "../atoms/TextInput";
import {Button} from "../atoms/Button";
import React from "react";
import {Header1} from "../atoms/Header1";

export interface TodosTemplateProps {
    todos: Todos,
    updateTodos: (todos: Todos) => void,
    task: string,
    updateTask: (taskInput?: string) => void,
    createTask: () => void
    header: string
}

export const TodosTemplate = ({todos, updateTodos, task, updateTask, createTask, header}: TodosTemplateProps) => <div>
    <Header1>{header}</Header1>
    <TodosList todos={todos} updateTodos={updateTodos}/>
    <TextInput value={task} onChange={updateTask}/>
    <Button onClick={createTask}>Create</Button>
</div>;
