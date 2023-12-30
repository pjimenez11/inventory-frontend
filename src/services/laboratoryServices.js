import inventoryApi from "../apis/inventoryApi"

const BASE_URL = '/api/v1/laboratories'

export const getAllLaboratory = async () => {
    try {
        return await inventoryApi.get(`${BASE_URL}`)
    } catch (error) {
      throw error  
    }
}

export const getByIdLaboratory = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

export const createLaboratory = async (laboratory) => {
    try {
        return await inventoryApi.post(`${BASE_URL}`, laboratory)
    } catch (error) {
        throw error
    }
}

export const updateLaboratory = async (laboratory) => {
    try {
        return await inventoryApi.put(`${BASE_URL}/${laboratory.id}`, laboratory)
    } catch (error) {
        throw error
    }
}

export const removeLaboratory = async (id) => {
    try {
        return await inventoryApi.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

