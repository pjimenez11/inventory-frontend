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
        laboratory: initialLaboratory,
        laboratoryEdit: {},
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
            state.laboratory[action.payload.name] = action.payload.value
        },
        laboratoryClear: (state) => {
            state.laboratory = initialLaboratory
        },
        loadLaboratoryEdit: (state, action) => {
            state.laboratoryEdit = action.payload
        },
        changeLaboratoryEdit: (state, action) => {
            state.laboratoryEdit[action.payload.name] = action.payload.value
        },
        laboratoryClearEdit: (state) => {
            state.laboratoryEdit = {}
        }
        
    },
})

export const {
    laboratoryLoading,
    laboratorySuccess,
    laboratoryError,
    laboratoryNew,
    laboratoryClear,
    changeLaboratoryEdit,
    laboratoryClearEdit,
    loadLaboratoryEdit,
} = laboratorySlice.actions