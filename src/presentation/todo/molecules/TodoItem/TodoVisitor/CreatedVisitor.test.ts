import { CreatedVisitor } from "./CreatedVisitor";
import { Todo } from "../../../../../domain/todo/Todo";
import Mother from "./test/VisitorsMother";

describe("CreatedVisitor tests", () => {
  const {
    mocks: { workingOn },
    stubs: { createTodoReturned },
    visitors: { createdVisitor },
  } = Mother;

  const visitor: CreatedVisitor = createdVisitor;

  test("the actionLabel should be 'Working on'", () => expect(visitor.actionLabel).toBe("Working on"));

  test("the  style should be 'purple'", () => expect(visitor.style).toBe("purple"));

  describe("when allowed is called", () => {
    describe("and the todo is with Created Status should return true", () => {
      const createdTodo = Todo.of("Dummy");

      expect(visitor.allowed(createdTodo)).toBeTruthy();
    });

    describe("and the todo is with WorkingOn Status should return false", () => {
      const workingOnTodo = Todo.of("Dummy").workingOn();

      expect(visitor.allowed(workingOnTodo)).toBeFalsy();
    });
    describe("and the todo is with Done Status should return false", () => {
      const completeTodo = Todo.of("Dummy").complete();

      expect(visitor.allowed(completeTodo)).toBeFalsy();
    });
  });

  describe("when visit is called", () => {
    const todo = Todo.of("test");
    let newTodo: Todo;

    beforeEach(async () => {
      jest.clearAllMocks();
      newTodo = await visitor.visit(todo);
    });

    test("the useCase should be called with the todoId from the todo parameter", () =>
      expect(workingOn).toHaveBeenCalledWith(todo.id));

    test("the useCase should be called only once", () => expect(workingOn).toHaveBeenCalledTimes(1));

    test("should return the value from the useCase", () => expect(newTodo).toStrictEqual(createTodoReturned));
  });
});
