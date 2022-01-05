const initialTodos = []

const todosReducer = (state = initialTodos, action) => {
    // switch()
    switch(action.type) {
        case "ADD_TODO": {
            const {todo: newTodo} = action.payload
            return [...state, newTodo]
        }


        default:
            return state
    }
}

export default todosReducer