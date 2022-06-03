import { TodoCommandAction } from "./TodoCommandAction";
import { AddTaskAction } from "./AddTaskAction";
import { TodosPageStore } from "../store/TodosPageStore";
import { noChangedKeys } from "./test/TodoCommandActionCommon";

describe("AddTaskAction test", () => {
  describe("when execute is called", () => {
    const task = "Dummy task";
    const action: TodoCommandAction = new AddTaskAction(task);
    const initialStore: TodosPageStore = TodosPageStore.init();

    const updatedStore = action.execute(initialStore);
    test("the new task should be the same as the action", () => expect(updatedStore.task).toBe(task));

    test("the returned store should not be the same instance", () => expect(initialStore === updatedStore).toBeFalsy());

    noChangedKeys({ changedKey: "task", initialStore, updatedStore });
  });
});
