import inventoryApi from "../apis/inventoryApi"

const BASE_URL = '/api/v1/laboratories'

export const getAll = async () => {
    try {
        return await inventoryApi.get(`${BASE_URL}`)
    } catch (error) {
      throw error  
    }
}

export const getById = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

export const create = async (laboratory) => {
    try {
        return await inventoryApi.post(`${BASE_URL}`, laboratory)
    } catch (error) {
        throw error
    }
}

export const update = async (laboratory) => {
    try {
        return await inventoryApi.put(`${BASE_URL}/${laboratory.id}`, laboratory)
    } catch (error) {
        throw error
    }
}

export const remove = async (id) => {
    try {
        return await inventoryApi.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

