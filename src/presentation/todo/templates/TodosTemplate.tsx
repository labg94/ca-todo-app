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
    <MainTitle data-test={"main-title"}>{header}</MainTitle>
    <TodosList data-test={"todos-list"} todos={todos} updateTodos={updateTodos} />
    <TextInput data-test={"text-input"} value={task} onChange={updateTask} />
    <Button data-test={"create-button"} onClick={createTask}>
      Create
    </Button>
  </>
);
