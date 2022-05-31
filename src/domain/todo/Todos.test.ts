import {Todos} from "./Todos";
import {TodoId} from "./TodoId";
import {TodoState} from "./TodoState";
import {Todo} from "./Todo";

describe("Todos tests", () => {
    const todos: Todos = Todos.init();

    describe("when init is called", () => {
        const init: Todos = Todos.init();

        test("the todos should be empty", () =>
            expect(init.all()).toStrictEqual([]));

    })
    describe("when workingOn is called", () => {

        describe("and the id does not exist", () => {

            const todoId: TodoId = new TodoId()

            test("Should throw an error", () => {
                expect(() => todos.workingOn(todoId))
                    .toThrow(`Todo with id ${todoId.value} does not exist`)
            })

        })
        describe("and the id  exists", () => {

            const todoCreated = Todo.of("Dummy Task");
            const todosUpdated = todos.updateTodos(todoCreated)

            const todoUpdated = todosUpdated.workingOn(todoCreated.id);


            test("Should update the state", () => {
                expect(todoUpdated.state).toBe(TodoState.WORKING)
            })

            test("Should keep the task value", () => {
                expect(todoUpdated.task).toBe(todoCreated.task)
            })

        })


    })
    describe("when completed is called", () => {

        describe("and the id does not exist", () => {

            const todoId: TodoId = new TodoId()

            test("Should throw an error", () => {
                expect(() => todos.workingOn(todoId))
                    .toThrow(`Todo with id ${todoId.value} does not exist`)
            })

        })
        describe("and the id  exists", () => {

            const todoCreated = Todo.of("Dummy Task");
            const todosUpdated = todos.updateTodos(todoCreated)

            const todoUpdated = todosUpdated.completed(todoCreated.id);


            test("Should update the state", () => {
                expect(todoUpdated.state).toBe(TodoState.DONE)
            })

            test("Should keep the task value", () => {
                expect(todoUpdated.task).toBe(todoCreated.task)
            })

        })


    })

    describe("when updateTodos is called", () => {

        describe("and the task existed", () => {
            const task = "Dummy Task";
            const newTodo = Todo.of(task);
            const todosUpdated = todos.updateTodos(newTodo);

            const newUpdated = todosUpdated.updateTodos(newTodo.workingOn());

            test("should only appear once", () => {
                expect(newUpdated.all()).toHaveLength(1);
            });
        })

        // TODO: what do i need to do when the todo does not exist
    })

    describe("when sorted is called", () => {

        const todo1 = Todo.of("task 1").complete();
        const todo2 = Todo.of("task 2");
        const todo3 = Todo.of("task 3").workingOn();

        const allTodos = todos.updateTodos(todo1).updateTodos(todo2).updateTodos(todo3);

        describe("should be sorted by state", () => {

            test("first the created", () => expect(allTodos.sorted()[0].state).toBe(TodoState.CREATED));
            test("second the working on", () => expect(allTodos.sorted()[1].state).toBe(TodoState.WORKING));
            test("third the completed", () => expect(allTodos.sorted()[2].state).toBe(TodoState.DONE));

        });


    })


})
