import generateRandomID from "../utils/helpers/generateRandomID"

const getTodosList = () => {
    // fake call api fetch todos list
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 1, title: "To do 1", is_completed: false},
                {id: 2, title: "To do 2", is_completed: false},
                {id: 3, title: "To do 3", is_completed: false}
            ])
        }, 1000)
    })
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