import generateRandomID from "../utils/helpers/generateRandomID"
import { api } from "./api"

const getTodosList = () => {
    // fake call api fetch todos list
    return api("GET", "/todos")
}

const addTodo = (todoTitle) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: generateRandomID(),
                title: todoTitle,
                is_completed: false
            })
        }, 1000)
    })
}

const removeTodo = (todoId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 1000)
    })
}

export const TodosService = {
    getTodosList,
    addTodo
}