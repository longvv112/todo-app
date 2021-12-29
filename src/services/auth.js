const getToken = () => {
    return localStorage.getItem("token")
}

const setToken = (token) => {
    localStorage.setItem("token", token)
}

const removeToken = () => {
    localStorage.removeItem("token")
}

const login = (email, password) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const response = {token: "123"}
            resolve(response)
        }, 1000)
    })
}

const logout = () => {
    // todo
}

export const AuthServices = {
    getToken,
    setToken,
    removeToken,
    login,
    logout
}