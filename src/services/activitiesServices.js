import inventoryApi from "../apis/inventoryApi"

const BASE_URL = "/api/v1/activities"

export const getAllActivities = async () => {
    try {
        return await inventoryApi.get(`${BASE_URL}`)
    } catch (error) {
        throw error
    }
}

export const getByIdActivities = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

export const createActivities = async (activity) => {
    try {
        return await inventoryApi.post(`${BASE_URL}`, activity)
    } catch (error) {
        throw error
    }
}
