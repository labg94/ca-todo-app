import {Todo} from "../../../domain/todo/Todo";
import {SaveTodoRepository} from "../../../domain/todo/repository/SaveTodoRepository";
import {CreateTodo} from "./CreateTodo";
import {CreateTodoImpl} from "./CreateTodoImpl";


describe("CreateTodoImpl test", () => {

    const todo: Todo = Todo.of("Dummy")
    const save: (task: string) => Promise<Todo> = jest.fn(async () => todo)

    const dummyRepository: SaveTodoRepository = {save}

    const useCase: CreateTodo = new CreateTodoImpl(dummyRepository)

    describe("when complete is called", () => {
        let todoGotten: Todo;
        const task = "Dummy task";

        beforeEach(async () => {
            jest.clearAllMocks()
            todoGotten = await useCase.create(task)
        })

        test("the repository should be called with the id parameter", () => {
            expect(save).toBeCalledWith(task)
        });

        test("the repository should be called once", () => {
            expect(save).toBeCalledTimes(1)
        });

        test("the return value should be the one from the repository", () => {
            expect(todoGotten).toBe(todo)
        })


    })


})
