import {DoneVisitor} from "./DoneVisitor";
import {Todo} from "../../../../../domain/todo/Todo";


describe("DoneVisitor tests", () => {

    const visitor: DoneVisitor = new DoneVisitor()

    test("the actionLabel should be ''", () =>
        expect(visitor.actionLabel).toBe(""));

    test("the  style should be 'red'", () => expect(visitor.style).toBe("red"));


    describe("when allowed is called", () => {

        describe("and the todo is with Created Status should return false", () => {

            const createdTodo = Todo.of("Dummy");

            expect(visitor.allowed(createdTodo)).toBeFalsy()
        })

        describe("and the todo is with WorkingOn Status should return false", () => {
            const workingOnTodo = Todo.of("Dummy").workingOn();

            expect(visitor.allowed(workingOnTodo)).toBeFalsy()
        })
        describe("and the todo is with Done Status should return true", () => {
            const completeTodo = Todo.of("Dummy").complete();

            expect(visitor.allowed(completeTodo)).toBeTruthy()
        })


    })


    describe("when visit is called", () => {

        const todo = Todo.of("test");
        let newTodo: Todo;

        beforeEach(async () => {
            newTodo = await visitor.visit(todo)
        })


        test("should return the same parameter", () =>
            expect(newTodo).toStrictEqual(todo));

    })


})
