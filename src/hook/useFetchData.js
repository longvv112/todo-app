import { useEffect } from "react"
import { useState } from "react/cjs/react.development"
import { api } from "../services/api"

const useFetchData = (endpoint, params = {}) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await api("GET", endpoint, params)

                setData(response)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return {loading: loading, data: data}
}

export default useFetchData