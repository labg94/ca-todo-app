import { Todos } from "../../../domain/todo/Todos";
import { Todo } from "../../../domain/todo/Todo";
import React from "react";
import { TodoItem } from "../molecules/TodoItem/TodoItem";

interface TodoListProps {
  todos: Todos;
  updateTodos: (todos: Todos) => void;
}

export const TodosList = ({ todos, updateTodos }: TodoListProps) => {
  const updateAllTodos = (todo: Todo) => updateTodos(todos.updateTodos(todo));

  return (
    <ul data-test={"container"}>
      {todos.sorted().map((todo) => (
        <TodoItem key={todo.id.value} todo={todo} updateTodos={updateAllTodos} />
      ))}
    </ul>
  );
};
