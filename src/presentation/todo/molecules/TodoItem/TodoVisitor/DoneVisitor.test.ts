import { Todo } from "../../../../../domain/todo/Todo";
import Mother from "./test/VisitorsMother";

describe("DoneVisitor tests", () => {
  const {
    visitors: { doneVisitor },
  } = Mother;

  test("the actionLabel should be ''", () => expect(doneVisitor.actionLabel).toBe(""));

  test("the  style should be 'red'", () => expect(doneVisitor.style).toBe("red"));

  describe("when allowed is called", () => {
    describe("and the todo is with Created Status should return false", () => {
      const createdTodo = Todo.of("Dummy");

      expect(doneVisitor.allowed(createdTodo)).toBeFalsy();
    });

    describe("and the todo is with WorkingOn Status should return false", () => {
      const workingOnTodo = Todo.of("Dummy").workingOn();

      expect(doneVisitor.allowed(workingOnTodo)).toBeFalsy();
    });
    describe("and the todo is with Done Status should return true", () => {
      const completeTodo = Todo.of("Dummy").complete();

      expect(doneVisitor.allowed(completeTodo)).toBeTruthy();
    });
  });

  describe("when visit is called", () => {
    const todo = Todo.of("test");
    let newTodo: Todo;

    beforeEach(async () => {
      newTodo = await doneVisitor.visit(todo);
    });

    test("should return the same parameter", () => expect(newTodo).toStrictEqual(todo));
  });
});
