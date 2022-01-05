import store from "../store"

const getActiveStatus = () => {
    return store.getState().todo_filter
}

export const TodoFilterSelectors = {
    getActiveStatus
}