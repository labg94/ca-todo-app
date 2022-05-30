import {Todo} from "./Todo";
import {TodoState} from "./TodoState";

describe("Todo Tests", () => {


    describe("When complete() is called", () => {

        const todo = Todo.of("Dummy");
        let completed: Todo;

        beforeEach(() => {
            completed = todo.complete()
        })

        test("the state should be DONE", () => expect(completed.state).toBe(TodoState.DONE));

        test("the id should remain", () => expect(completed.sameId(todo.id)).toBeTruthy());

        test("the creationDate should remain", () => expect(completed.creationDate).toBe(todo.creationDate));

        test("the task should remain", () => expect(completed.task).toBe(todo.task));

        test("the value returned should be a new instance", () => expect(completed === todo).toBeFalsy());

    })

    describe("When workingOn() is called", () => {

        const todo = Todo.of("Dummy");
        let workingOn: Todo;

        beforeEach(() => {
            workingOn = todo.workingOn()
        })

        test("the state should be WORKING", () => expect(workingOn.state).toBe(TodoState.WORKING));

        test("the id should remain", () => expect(workingOn.sameId(todo.id)).toBeTruthy());


        test("the creationDate should remain", () => expect(workingOn.creationDate).toBe(todo.creationDate));

        test("the task should remain", () => expect(workingOn.task).toBe(todo.task));

        test("the value returned should be a new instance", () => expect(workingOn === todo).toBeFalsy());

    })

    describe("When a task is created", () => {


        test("the id should not be the same ", () => {
            const todo = Todo.of("Hello");
            const newTodo = Todo.of("Hello");


            expect(todo.sameId(newTodo.id)).toBeFalsy()

        });


    })

})
