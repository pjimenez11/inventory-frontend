
import { useDispatch, useSelector } from "react-redux"
import { asignarSuggestor, changeSuggestionsEdit, loadSuggestionsEdit, suggestionsClear, suggestionsClearEdit, suggestionsError, suggestionsLoading, suggestionsNew, suggestionsSuccess } from "../store/slices/suggestion/suggestionSlice";
import { createSuggestions, getAllSuggestions, removeSuggestions, updateSuggestions } from "../services/SuggestionService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { createActivities } from "../services/activitiesServices";

const useSuggestion = () => {
    const { suggestions, suggestion, suggestionEdit, loading, error } = useSelector((state) => state.suggestion);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlerGetAll = async () => {
        try {
            dispatch(suggestionsLoading())
            const response = await getAllSuggestions()
            dispatch(suggestionsSuccess(response.data))
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            dispatch(suggestionsError(error))
        }
    }

    const modifyNewSuggestions = (values) => {
        dispatch(suggestionsNew(values))
    }

    const saveSuggestions = async () => {
        try {
            await createSuggestions(suggestion)
            navigate("/inventory/sugerencias")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const modifyEditSuggestions = (values) => {
        dispatch(changeSuggestionsEdit(values))
    }

    const handlerUpdateSuggestions = async () => {
        try {
            await updateSuggestions(suggestionEdit)
            dispatch(suggestionsClearEdit())
            navigate("/sugerencias")
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const handlerGetById = async (id) => {
        const suggestion = suggestions.find(suggestion => suggestion.id == id)
        if (!suggestion) {
            navigate("/inventory/sugerencias")
            return
        }
        dispatch(loadSuggestionsEdit(suggestion))
    }

    const handlerRemoveSuggestions = async (id) => {
        try {
            await removeSuggestions(id)
            handlerGetAll()
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }
    }

    const handlerAsinedSuggestor = (id) => {
        dispatch(asignarSuggestor(id))
    }

    const handlerCreateActivity = async (suggestion_id) => {
        try {
            const response = await createActivities(suggestion_id)
            handlerGetAll()
        } catch (error) {
            throw error
        }
    }

    return {
        suggestions,
        suggestion,
        suggestionEdit,
        loading,
        error,
        handlerGetAll,
        modifyNewSuggestions,
        saveSuggestions,
        modifyEditSuggestions,
        handlerUpdateSuggestions,
        handlerGetById,
        handlerRemoveSuggestions,
        handlerAsinedSuggestor,
        handlerCreateActivity
    }
}

export default useSuggestion