import { TodosPageStore } from "./TodosPageStore";

describe("TodosPageStore test", () => {
  describe("when init() is called", () => {
    const initStore = TodosPageStore.init();

    test("the task value should be ''", () => {
      expect(initStore.task).toBe("");
    });

    test("the loading value should be false", () => {
      expect(initStore.loading).toBeFalsy();
    });

    test("the todos should be the initial value", () => {
      expect(initStore.todos.all()).toStrictEqual([]);
    });
  });
});
