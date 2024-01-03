import inventoryApi from "../apis/inventoryApi"

const BASE_URL = '/api/v1/assets'

export const getAllAssets = async () => {
    try {
        return await inventoryApi.get(`${BASE_URL}`)
    } catch (error) {
      throw error  
    }
}

export const getByIdAssets = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

export const createAssets = async (asset) => {
    console.log(asset)
    console.log({asset})
    try {
        return await inventoryApi.post(`${BASE_URL}`, {asset})
    } catch (error) {
        throw error
    }
}

export const updateAssets = async (assets) => {
    try {
        return await inventoryApi.put(`${BASE_URL}/${assets.id}`, assets)
    } catch (error) {
        throw error
    }
}

export const removeAssets = async (id) => {
    try {
        return await inventoryApi.delete(`${BASE_URL}/${id}`)
    } catch (error) {
        throw error
    }
}

export const getAllAssetsByLaboratory = async (id) => {
    try {
        return await inventoryApi.get(`${BASE_URL}/laboratory/${id}`)
    } catch (error) {
        throw error
    }
}
