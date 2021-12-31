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

const getTodo = (id) => {
    return api("GET", `/todos/${id}`)
}

export const TodosService = {
    getTodosList,
    addTodo,
    removeTodo,
    getTodo
}