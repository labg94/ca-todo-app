import {MemoryTodo} from "./memory/MemoryTodo";


const repository: MemoryTodo = new MemoryTodo();

const repositories = {
    saveTodo: repository,
    workingOn: repository,
    getAll: repository,
    complete: repository
}

export default repositories
