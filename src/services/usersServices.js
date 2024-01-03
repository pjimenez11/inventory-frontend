import axios from "axios"

export const createUser = async (user) => {
    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/users`, { user })
    } catch (error) {
        throw error
    }
}

export const updateUser = async (user) => {
    try {
        return await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/users/${user.id}`, { user })
    } catch (error) {
        throw error
    }
}

export const deleteUser = async (id) => {
    try {
        return await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/v1/users/${id}`)
    } catch (error) {
        throw error
    }
}

export const getUsers = async () => {
    try {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/users`)
    } catch (error) {
        throw error
    }
}

export const getUser = async (id) => {
    try {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/users/${id}`)
    } catch (error) {
        throw error
    }
}

