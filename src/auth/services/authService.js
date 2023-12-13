import axios from "axios"

export const sign_in = async (user) => {
    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/sign_in`, { user })
    } catch (error) {
        throw error
    }
}

export const register = async (user) => {
    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}`,  user )
    } catch (error) {
        throw error
    }
}

export const sign_out = async (email, password, ) => {
    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/sign_out`, { email, password })
    } catch (error) {
        throw error
    }
}