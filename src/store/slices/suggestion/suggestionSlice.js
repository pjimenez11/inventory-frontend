import { createSlice } from "@reduxjs/toolkit"

const initialSuggestion = {
    title: "",
    description: "",
    status: "open",
    asset_id: "",
    suggestor_id: "",
    suggestor_type: 'User',
}

export const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState: {
        suggestions: [],
        suggestion: initialSuggestion,
        suggestionEdit: {},
        loading: false,
        error: null
    },
    reducers: {
        suggestionsLoading: (state) => {
            state.loading = true
        },
        suggestionsSuccess: (state, action) => {
            state.suggestions = action.payload
            state.loading = false
            state.error = null
        },
        suggestionsError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        suggestionsNew: (state, action) => {
            state.suggestion[action.payload.name] = action.payload.value
        },
        suggestionsClear: (state) => {
            state.suggestion = initialSuggestion
        },
        loadSuggestionsEdit: (state, action) => {
            state.suggestionEdit = action.payload
        },
        changeSuggestionsEdit: (state, action) => {
            state.suggestionEdit[action.payload.name] = action.payload.value
        },
        suggestionsClearEdit: (state) => {
            state.suggestionEdit = {}
        },
        asignarSuggestor: (state, action) => {
            state.suggestion.suggestor_id = action.payload
        }
    },
})

export const {
    suggestionsLoading,
    suggestionsSuccess,
    suggestionsError,
    suggestionsNew,
    suggestionsClear,
    loadSuggestionsEdit,
    changeSuggestionsEdit,
    suggestionsClearEdit,
    asignarSuggestor
} = suggestionSlice.actions