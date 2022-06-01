import { Todo } from "../../../../domain/todo/Todo";
import { Button } from "../../atoms/Button";
import React from "react";
import Visitors from "./TodoVisitor";

export const TodoItem = ({ todo, updateTodos }: { todo: Todo; updateTodos: (todos: Todo) => void }) => {
  const visitor = Visitors.all.find((value) => value.allowed(todo))!!;

  const callUpdate = () => visitor.visit(todo).then(updateTodos);

  const style: React.CSSProperties = { color: visitor.style, display: "flex", justifyContent: "space-between" };
  return (
    <li style={style}>
      {todo.task}

      {visitor.actionLabel && <Button onClick={callUpdate}>{visitor.actionLabel}</Button>}
    </li>
  );
};
