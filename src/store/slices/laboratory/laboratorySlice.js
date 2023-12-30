import { createSlice } from "@reduxjs/toolkit"

const initialLaboratory = {
    name: '',
    description: '',
    building: 1,
}

export const laboratorySlice = createSlice({
    name: 'laboratory',
    initialState: {
        laboratories: [],
        laboratory: {},
        loading: false,
        error: null
    },
    reducers: {
        laboratoryLoading: (state) => {
            state.loading = true
        },
        laboratorySuccess: (state, action) => {
            state.laboratories = action.payload
            state.loading = false
            state.error = null
        },
        laboratoryError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        laboratoryNew: (state, action) => {
            state.laboratory = action.payload
        },
        laboratoryClear: (state) => {
            state.laboratory = initialLaboratory
        }
    },
})

export const {
    laboratoryLoading,
    laboratorySuccess,
    laboratoryError,
    laboratoryNew,
    laboratoryClear
} = laboratorySlice.actions