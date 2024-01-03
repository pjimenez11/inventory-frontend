import inventoryApi from "../apis/inventoryApi"

const BASE_URL = "/api/v1/suggestions"

export const getAllSuggestions = async () => {
    try {
        return await inventoryApi.get(`${BASE_URL}`)
    } catch (error) {
        throw error
    }
}

export const getByIdSuggestions = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

export const createSuggestions = async (suggestion) => {
    try {
        return await inventoryApi.post(`${BASE_URL}`, {suggestion})
    } catch (error) {
        throw error
    }
}

export const updateSuggestions = async (suggestions) => {
    try {
        return await inventoryApi.put(`${BASE_URL}/${suggestions.id}`, suggestions)
    } catch (error) {
        throw error
    }
}

export const removeSuggestions = async (id) => {
    try {
        return await inventoryApi.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}