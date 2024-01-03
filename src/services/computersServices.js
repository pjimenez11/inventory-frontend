import inventoryApi from "../apis/inventoryApi"

const BASE_URL = '/api/v1/computers'

export const getAllComputers = async () => {
    try {
        return await inventoryApi.get(`${BASE_URL}`)
    } catch (error) {
        throw error
    }
}

export const getByIdComputers = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

export const createComputers = async (computer) => {
    try {
        return await inventoryApi.post(`${BASE_URL}`, {computer})
    } catch (error) {
        throw error
    }
}

export const updateComputers = async (computers) => {
    try {
        return await inventoryApi.put(`${BASE_URL}/${computers.id}`, computers)
    } catch (error) {
        throw error
    }
}

export const removeComputers = async (id) => {
    try {
        return await inventoryApi.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

export const getAllComputersByLaboratory = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/laboratory/${id}`)
    } catch (error) {
        throw error
    }
}

export const getAllComputersByCustodian = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/custodian/${id}`)
    } catch (error) {
        throw error
    }
}