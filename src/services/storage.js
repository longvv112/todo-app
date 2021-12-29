export const getJWT = () => {
    return localStorage.getItem('token') || false;
}

export const setJWT = (token) => {
    localStorage.setItem('token', token)
}

export const removeJWT = () => {
    localStorage.removeItem('token');
}