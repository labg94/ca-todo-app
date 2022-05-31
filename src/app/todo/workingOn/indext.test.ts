import {workingOnTodo} from "./index";
import {WorkingOnTodoImpl} from "./WorkingOnTodoImpl";


describe("GetAllTodos test", () => {

    test("the instance should be the type WorkingOnTodo", () =>
        expect(workingOnTodo instanceof WorkingOnTodoImpl).toBeTruthy());

})
