import {getAllTodos} from "./index";
import {GetAllTodosImpl} from "./GetAllTodosImpl";


describe("GetAllTodos test", () => {

    test("the instance should be the type GetAllTodosImpl", () =>
        expect(getAllTodos instanceof GetAllTodosImpl).toBeTruthy());

})
