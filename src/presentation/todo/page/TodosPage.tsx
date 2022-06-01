import React, { useEffect } from "react";
import { getAllTodos } from "../../../app/todo/getAll";
import { createTodo } from "../../../app/todo/create";
import { todosReducer } from "./reducer/TodosReducer";
import { TodosPageStore } from "./store/TodosPageStore";
import { UpdateTodosAction } from "./action/UpdateTodosAction";
import { AddTaskAction } from "./action/AddTaskAction";
import { LoadingAction } from "./action/LoadingAction";
import { LoadedAction } from "./action/LoadedAction";
import { Todos } from "../../../domain/todo/Todos";
import { Loader } from "../atoms/Loader";
import { TodosTemplate, TodosTemplateProps } from "../templates/TodosTemplate";

const TodosPage = () => {
  const header: string = "these are all the TODOS";
  const [{ todos, task, loading }, dispatch] = React.useReducer(todosReducer, TodosPageStore.init());

  const updateTodos = (todos: Todos) => dispatch(new UpdateTodosAction(todos));

  const updateTask = (taskInput: string = "") => dispatch(new AddTaskAction(taskInput));

  const loaded = () => dispatch(new LoadedAction());

  const startLoading = () => dispatch(new LoadingAction());

  const createTask = async () => {
    const value = await createTodo.create(task);
    updateTodos(todos.updateTodos(value));
    updateTask();
  };

  const templateProps: TodosTemplateProps = { createTask, updateTodos, todos, task, updateTask, header };

  useEffect(() => {
    startLoading();
    getAllTodos.getAll().then(updateTodos).finally(loaded);
  }, []);

  if (loading) return <Loader />;

  return <TodosTemplate {...templateProps} />;
};

export default TodosPage;
