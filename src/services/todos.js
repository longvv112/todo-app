import { api } from "./api"

const getTodosList = () => {
    return api("GET", "/todos")
}

const addTodo = (todoTitle) => {
    return api("POST", "/todos", {title: todoTitle})
}

const removeTodo = (todoId) => {
    return api("DELETE", `/todos/${todoId}`)
}

const getTodo = (todoId) => {
    return api("GET", `/todos/${todoId}`)
}

export const TodosService = {
    getTodosList,
    addTodo,
    removeTodo,
    getTodo
}