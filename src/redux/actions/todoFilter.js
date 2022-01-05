const changeFilter = status => {
    return {
        type: "CHANGE_FILTER",
        status: status
    }
}

export const TodoFilterActions = {
    changeFilter
}