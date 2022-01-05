import {combineReducers} from "redux"
import todoFilterReducer from "./todoFilter"
import todosReducer from "./todos"

const rootReducer = combineReducers({
    todos: todosReducer,
    todo_filter: todoFilterReducer
})

export default rootReducer