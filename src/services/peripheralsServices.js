import inventoryApi from "../apis/inventoryApi"

const BASE_URL = '/api/v1/peripherals'

export const getAllPeripherals = async () => {
    try {
        return await inventoryApi.get(`${BASE_URL}`)
    } catch (error) {
        throw error
    }
}

export const getByIdPeripherals = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

export const createPeripherals = async (peripheral) => {
    try {
        return await inventoryApi.post(`${BASE_URL}`, {peripheral})
    } catch (error) {
        throw error
    }
}

export const updatePeripherals = async (peripherals) => {
    try {
        return await inventoryApi.put(`${BASE_URL}/${peripherals.id}`, peripherals)
    } catch (error) {
        throw error
    }
}

export const removePeripherals = async (id) => {
    try {
        return await inventoryApi.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}