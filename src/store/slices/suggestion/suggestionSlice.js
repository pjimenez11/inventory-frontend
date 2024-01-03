import { createSlice } from "@reduxjs/toolkit";

const initialSuggestion =  localStorage.getItem('suggestion') || 
    [];

export const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState: {
        isCreate: false,
        selectedSuggestion: initialSuggestion,
        suggestions: [],
    },
    reducers: {
        loadSuggestions: (state, action) => {
            state.suggestions = action.payload
        },
    },

})

export const { loadSuggestions } = suggestionSlice.actions
