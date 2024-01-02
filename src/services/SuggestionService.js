import axios from "axios"

export const createSuggestion = async (suggestion) => {
    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/suggestions`, { suggestion })
    } catch (error) {
        throw error
    }
}


export const getSuggestions = async () => {
    try {
        return await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/suggestions`)
    } catch (error) {
        throw error
    }
}

return { createSuggestion, getSuggestions }