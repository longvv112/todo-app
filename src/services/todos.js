import { api } from "./api"

const getTodosList = () => {
  // fake call api fetch todos list
  return api("GET", "/todos")
}

const addTodo = (todoTitle) => {
  return api("POST", "/todos", {
    title: todoTitle,
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
  addTodo,
}
