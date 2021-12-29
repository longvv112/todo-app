import { setJWT } from "./storage"

const login = (email, password) => {
    return new Promise((resolve) => {
        // fake call api login
        setTimeout(() => {
            const response = {token: "123"}
            resolve(response)
        }, 1000)
    }).then(response => {
        return response.token
    })
}

export const AuthService = {
    login
}