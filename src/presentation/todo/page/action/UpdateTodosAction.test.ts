import { TodoCommandAction } from "./TodoCommandAction";
import { UpdateTodosAction } from "./UpdateTodosAction";
import { TodosPageStore } from "../store/TodosPageStore";
import { Todos } from "../../../../domain/todo/Todos";
import { Todo } from "../../../../domain/todo/Todo";
import { noChangedKeys } from "./test/TodoCommandActionCommon";

describe("UpdateTodosAction test", () => {
  describe("when execute is called", () => {
    const todos = Todos.init().updateTodos(Todo.of("DUMMY"));
    const action: TodoCommandAction = new UpdateTodosAction(todos);
    const initialStore: TodosPageStore = TodosPageStore.init();

    const updatedStore = action.execute(initialStore);
    test("the new todos should be the same as the action", () => expect(updatedStore.todos).toBe(todos));

    test("the returned store should not be the same instance", () => expect(initialStore === updatedStore).toBeFalsy());

    noChangedKeys({ changedKey: "todos", initialStore, updatedStore });
  });
});
