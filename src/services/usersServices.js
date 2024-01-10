import inventoryApi from "../apis/inventoryApi"

const BASE_URL = '/api/v1/users'

export const getAllUsers = async () => {
    try {
        return await inventoryApi.get(`${BASE_URL}`)
    } catch (error) {
        throw error
    }
}

export const getByIdUsers = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}


export const createUsers = async (user) => {
    try {
        return await inventoryApi.post(`${BASE_URL}`, {user})
    } catch (error) {
        throw error
    }
}

export const updateUsers = async (users) => {
    try {
        return await inventoryApi.put(`${BASE_URL}/${users.id}`, users)
    } catch (error) {
        throw error
    }
}

export const deleteUsers = async (id) => {
    try {
        return await inventoryApi.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}
