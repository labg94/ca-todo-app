import { Todo } from "../../../domain/todo/Todo";
import { GetTodosRepository } from "../../../domain/todo/repository/GetTodosRepository";
import { GetAllTodos } from "./GetAllTodos";
import { GetAllTodosImpl } from "./GetAllTodosImpl";
import { Todos } from "../../../domain/todo/Todos";

describe("GetAllTodosImpl test", () => {
  const todo: Todo = Todo.of("Dummy");
  const dummyTodos = Todos.init().updateTodos(todo);
  const getAll: () => Promise<Todos> = jest.fn(async () => dummyTodos);

  const dummyRepository: GetTodosRepository = { getAll };

  const useCase: GetAllTodos = new GetAllTodosImpl(dummyRepository);

  describe("when complete is called", () => {
    let actualTodos: Todos;

    beforeEach(async () => {
      jest.clearAllMocks();
      actualTodos = await useCase.getAll();
    });

    test("the repository should be called once", () => {
      expect(getAll).toBeCalledTimes(1);
    });

    test("the return value should be the one from the repository", () => {
      expect(actualTodos.all()[0]).toBe(todo);
    });

    test("the size should be the same as the repository returned", () => {
      expect(actualTodos.all()).toHaveLength(dummyTodos.all().length);
    });
  });
});
