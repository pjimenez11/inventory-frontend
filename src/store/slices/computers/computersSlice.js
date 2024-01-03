import { createSlice } from "@reduxjs/toolkit"


const initialComputer = {
    name: '',
    description: '',
}
export const computersSlice = createSlice({
    name: 'computers',
    initialState: {
        computers: [],
        computer: initialComputer,
        computerEdit: {},
        loading: false,
        error: null
    },
    reducers: {
        computersLoading: (state) => {
            state.loading = true
        },
        computersSuccess: (state, action) => {
            state.computers = action.payload
            state.loading = false
            state.error = null
        },
        computersError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        computersNew: (state, action) => {
            state.computer[action.payload.name] = action.payload.value
        },
        computersClear: (state) => {
            state.computer = initialComputer
        },
        loadComputersEdit: (state, action) => {
            state.computerEdit = action.payload
        },
        changeComputersEdit: (state, action) => {
            state.computerEdit[action.payload.name] = action.payload.value
        },
        computersClearEdit: (state) => {
            state.computerEdit = {}
        }

    },
})

export const {
    computersLoading,
    computersSuccess,
    computersError,
    computersNew,
    computersClear,
    changeComputersEdit,
    computersClearEdit,
    loadComputersEdit,
} = computersSlice.actions