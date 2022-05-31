import {TodoId} from "../../../domain/todo/TodoId";
import {Todo} from "../../../domain/todo/Todo";
import {WorkingOnTodoRepository} from "../../../domain/todo/repository/WorkingOnTodoRepository";
import {WorkingOnTodo} from "./WorkingOnTodo";
import {WorkingOnTodoImpl} from "./WorkingOnTodoImpl";


describe("WorkingOnTodoImpl test", () => {

    const todo: Todo = Todo.of("Dummy")
    const workingOn: (todoId: TodoId) => Promise<Todo> = jest.fn(async () => todo)

    const dummyRepository: WorkingOnTodoRepository = {workingOn}

    const useCase: WorkingOnTodo = new WorkingOnTodoImpl(dummyRepository)

    describe("when workingOn is called", () => {
        let todoGotten: Todo;

        beforeEach(async () => {
            jest.clearAllMocks()
            todoGotten = await useCase.workingOn(todo.id)
        })

        test("the repository should be called with the id parameter", () => {
            expect(workingOn).toBeCalledWith(todo.id)
        });

        test("the repository should be called once", () => {
            expect(workingOn).toBeCalledTimes(1)
        });

        test("the return value should be the one from the repository", () => {
            expect(todoGotten).toBe(todo)
        })


    })


})
