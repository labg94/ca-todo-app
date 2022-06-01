import { Todos } from "../../../domain/todo/Todos";
import { TodosList } from "../organisms/TodosList";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";
import React from "react";
import { MainTitle } from "../atoms/MainTitle";

export interface TodosTemplateProps {
  todos: Todos;
  updateTodos: (todos: Todos) => void;
  task: string;
  updateTask: (taskInput?: string) => void;
  createTask: () => void;
  header: string;
}

export const TodosTemplate = ({ todos, updateTodos, task, updateTask, createTask, header }: TodosTemplateProps) => (
  <>
    <MainTitle>{header}</MainTitle>
    <TodosList todos={todos} updateTodos={updateTodos} />
    <TextInput value={task} onChange={updateTask} />
    <Button onClick={createTask}>Create</Button>
  </>
);
