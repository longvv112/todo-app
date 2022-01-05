const initState = "all"

const todoFilterReducer = (state = initState, action) => {
    switch (action.type) {
        case "CHANGE_FILTER": {
            return action.status
        }
        default:
            return state
    }
}

export default todoFilterReducer