const getTodos = (todos) => {
    return {
        type: "GET_TODO",
        value: todos
    }
}

const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        value: todo
    }
}

const removeTodo = (todoId) => {
    return {
        type: "REMOVE_TODO",
        todo_id: todoId
    }
}

const changeTodoCompleted = (todoId, isCompleted) => {
    return {
        type: "CHANGE_COMPLETED",
        todo_id: todoId,
        is_completed: isCompleted
    }
}

export const TodosActions = {
    getTodos,
    addTodo,
    removeTodo,
    changeTodoCompleted
}