import axios from "axios"

const axiosClient = axios.create({
    baseURL: "https://61c9685420ac1c0017ed8c28.mockapi.io/api/",
    headers: {
        "content-type": "application/json"
    }
})

export const api = (method, url, payload = {}) => {
//   return fetch(url, { method }).then((res) => {
//     console.log(res)
//     return res.json()
//   })


    return axiosClient(url, {method, data: payload}).then(response => response.data).catch(error => {throw error})
}
