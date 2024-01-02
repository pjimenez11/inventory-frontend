import axios from "axios"
import {createSuggestion, getSuggestions} from "../services/SuggestionService"
import { loadSuggestions } from "../store/slices/suggestion/suggestionSlice"
import { useDispatch, useSelector } from "react-redux"

export const useSuggestion = () => {
    const {suggestion} = useSelector((state) => state.suggestion);
    const dispatch = useDispatch();

    const handlerGetSuggestions = async () => {
        try {
            const response = await getSuggestions()
            if (response.status === 200) {
                dispatch(loadSuggestions(response.data))
            }
        } catch (error) {
            throw error
        }
    }

    const handlerCreateSuggestion = async (suggestion) => {
        try {
            const response = await createSuggestion(suggestion)
            if (response.status === 200) {
                const { data } = response
                dispatch(loadSuggestions(data.status.data))
            }
        } catch (error) {
            throw error
        }
    }
    
    return { suggestion, handlerGetSuggestions, handlerCreateSuggestion }
}