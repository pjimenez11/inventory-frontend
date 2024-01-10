
import { useDispatch, useSelector } from "react-redux"
import { asignarSuggestor, changeSuggestionsEdit, loadSuggestionsEdit, suggestionsClear, suggestionsClearEdit, suggestionsError, suggestionsLoading, suggestionsNew, suggestionsSuccess } from "../store/slices/suggestion/suggestionSlice";
import { createSuggestions, getAllSuggestions, removeSuggestions, updateSuggestions } from "../services/SuggestionService";
import { useNavigate } from "react-router-dom";
import { createActivities } from "../services/activitiesServices";
import Swal from "sweetalert2";

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
            const result = await Swal.fire({
                icon: 'warning',
                title: '¿Estas seguro de eliminar?',
                text: 'No podras revertir esto!',
                showCancelButton: true,
                confirmButtonText: 'Si, eliminar!',
                cancelButtonText: 'No, cancelar!',
                reverseButtons: true
            })
            if (result.isConfirmed) {
                await removeSuggestions(id)
                handlerGetAll()
                Swal.fire(
                    'Eliminado!',
                    'La sugerencia ha sido eliminada.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelado',
                    'La sugerencia no se elimino',
                    'error'
                )
            }
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
            const result = await Swal.fire({
                input: 'textarea',
                inputLabel: 'Mensaje',
                inputPlaceholder: 'Escribe tu mensaje aqui...',
                inputAttributes: {
                    'aria-label': 'Escribe tu mensaje aqui'
                },
                showCancelButton: true
            })
            if (result.isConfirmed) {
                if (result.value === "") {
                    Swal.fire(
                        'Error',
                        'No se puede enviar un mensaje vacio',
                        'error'
                    )
                    return
                }
                const activity = {
                    message: result.value,
                    suggestion_id: suggestion_id
                }
                await createActivities(activity)
                Swal.fire(
                    'Enviado!',
                    'La sugerencia ha sido enviada.',
                    'success'
                )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire(
                    'Cancelado',
                    'La sugerencia no se envio',
                    'error'
                )
            }

        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La sugerencia ya fue atendida!',
            })
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