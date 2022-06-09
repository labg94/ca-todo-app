import { Todo, TodoBuilder } from "./Todo";
import { TodoState } from "./TodoState";
import { TodoId } from "./TodoId";
import { Task } from "./Task";

describe("Todo Tests", () => {
  describe("When complete() is called", () => {
    const todo = Todo.of("Dummy");
    let completed: Todo;

    beforeEach(() => {
      completed = todo.complete();
    });

    test("the state should be DONE", () => expect(completed.state).toBe(TodoState.DONE));

    test("the id should remain", () => expect(completed.sameId(todo.id)).toBeTruthy());

    test("the creationDate should remain", () => expect(completed.creationDate).toBe(todo.creationDate));

    test("the task should remain", () => expect(completed.task).toBe(todo.task));

    test("the value returned should be a new instance", () => expect(completed === todo).toBeFalsy());
  });

  describe("When workingOn() is called", () => {
    const todo = Todo.of("Dummy");
    let workingOn: Todo;

    beforeEach(() => {
      workingOn = todo.workingOn();
    });

    test("the state should be WORKING", () => expect(workingOn.state).toBe(TodoState.WORKING));

    test("the id should remain", () => expect(workingOn.sameId(todo.id)).toBeTruthy());

    test("the creationDate should remain", () => expect(workingOn.creationDate).toBe(todo.creationDate));

    test("the task should remain", () => expect(workingOn.task).toBe(todo.task));

    test("the value returned should be a new instance", () => expect(workingOn === todo).toBeFalsy());
  });

  describe("When a task is created", () => {
    test("the id should not be the same ", () => {
      const todo = Todo.of("Hello");
      const newTodo = Todo.of("Hello");

      expect(todo.sameId(newTodo.id)).toBeFalsy();
    });
  });

  describe("when created calling from()", () => {
    const builder: TodoBuilder = {
      id: new TodoId("id"),
      task: new Task("DummyTask"),
      state: TodoState.DONE,
      creationDate: new Date(),
    };

    const todoCreated = Todo.from(builder);

    type TodoKeys = keyof TodoBuilder;
    const keys = Object.keys(builder) as TodoKeys[];
    test.each(keys)("the %s should be the same as the builder", (keys) => {
      expect(todoCreated[keys]).toBe(builder[keys]);
    });
  });
});
