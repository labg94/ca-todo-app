import {MemoryTodo} from "./MemoryTodo";
import {Todos} from "../../../../domain/todo/Todos";
import {Todo} from "../../../../domain/todo/Todo";
import {TodoState} from "../../../../domain/todo/TodoState";


describe("MemoryTodo tests", () => {


    describe("when getAll is called", () => {

        describe("and the repository is new", () => {
            const repository = new MemoryTodo();
            test("should return an empty array", async () =>
                expect((await repository.getAll()).all()).toHaveLength(0));

        })

        describe("and the repository has values", () => {

            let repository;
            let todoGotten: Todo;
            let todosGotten: Todos;
            beforeEach(async () => {
                repository = new MemoryTodo()
                todoGotten = await repository.save("Dummy Task")
                todosGotten = await repository.getAll()
            })

            test("the length should be 1", async () => {
                expect(todosGotten.all()).toHaveLength(1)
            });

            test("the todo should be the same stored", async () => {
                expect(todosGotten.all()[0]).toStrictEqual(todoGotten)
            })

        })


    })

    describe("when save is called", () => {

        const repository = new MemoryTodo()
        const task = "Dummy Task";
        let actual: Todo;
        let allTodos: Todos;

        beforeEach(async () => {
            actual = await repository.save(task)
            allTodos = await repository.getAll();
        })

        test("the todos should have the length of 1", () => {
            expect(allTodos.all()).toHaveLength(1)
        });

        test("should have the same task the only todo", () => {
            expect(actual.task).toBe(task)
        })


    })
    describe("when complete is called", () => {

        const repository = new MemoryTodo()
        const task = "Dummy Task";
        let savedTodo: Todo;
        let allTodos: Todos;
        let updatedTodo: Todo

        beforeEach(async () => {
            savedTodo = await repository.save(task)
            updatedTodo = await repository.complete(savedTodo.id)
            allTodos = await repository.getAll();
        })

        test("the todos should have the length of 1", () => {
            expect(allTodos.all()).toHaveLength(1)
        });

        test("should return a todo with the Complete state", () => {
            expect(updatedTodo.state).toBe(TodoState.DONE)
        })

        test("the id of the todo should not change", () => {
            expect(updatedTodo.sameId(savedTodo.id)).toBeTruthy()
        });


    })
    describe("when workingOn is called", () => {

        const repository = new MemoryTodo()
        const task = "Dummy Task";
        let savedTodo: Todo;
        let allTodos: Todos;
        let updatedTodo: Todo

        beforeEach(async () => {
            savedTodo = await repository.save(task)
            updatedTodo = await repository.workingOn(savedTodo.id)
            allTodos = await repository.getAll();
        })

        test("the todos should have the length of 1", () => {
            expect(allTodos.all()).toHaveLength(1)
        });

        test("should return a todo with the Complete state", () => {
            expect(updatedTodo.state).toBe(TodoState.WORKING)
        })

        test("the id of the todo should not change", () => {
            expect(updatedTodo.sameId(savedTodo.id)).toBeTruthy()
        });


    })


})
