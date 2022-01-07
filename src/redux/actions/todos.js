import { TodosService } from "../../services/todos"

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

const changeTodoTitle = (todoId, title) => {
    return {
        type: "CHANGE_TITLE",
        todo_id: todoId,
        title: title
    }
}

const getTodosAsync = () => {
    return (dispatch, getState) => {
        // console.log("state: ", getState());

        return TodosService.getTodosList().then((todos) => {
            dispatch(getTodos(todos))
        })
    }
}

const changeTodoTitleAsync = (todoId, title) => {
    return dispatch => {
        return TodosService.changeTitle(todoId, title).then((todoUpdated) => {
            dispatch(changeTodoTitle(todoId, todoUpdated.title))
        })
    }
}

export const TodosActions = {
    getTodos,
    addTodo,
    removeTodo,
    changeTodoCompleted,
    getTodosAsync,
    changeTodoTitleAsync
}