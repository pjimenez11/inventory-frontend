import { createSlice } from "@reduxjs/toolkit"

const initialPeripheral = {
    name: '',
    description: '',
    computer_id: undefined,
}

export const peripheralsSlice = createSlice({
    name: 'peripherals',
    initialState: {
        peripherals: [],
        peripheral: initialPeripheral,
        peripheralEdit: {},
        loading: false,
        error: null
    },
    reducers: {
        peripheralsLoading: (state) => {
            state.loading = true
        },
        peripheralsSuccess: (state, action) => {
            state.peripherals = action.payload
            state.loading = false
            state.error = null
        },
        peripheralsError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        peripheralsNew: (state, action) => {
            state.peripheral[action.payload.name] = action.payload.value
        },
        peripheralsClear: (state) => {
            state.peripheral = initialPeripheral
        },
        loadPeripheralsEdit: (state, action) => {
            state.peripheralEdit = action.payload
        },
        changePeripheralsEdit: (state, action) => {
            state.peripheralEdit[action.payload.name] = action.payload.value
        },
        peripheralsClearEdit: (state) => {
            state.peripheralEdit = {}
        },
    },
})

export const {
    peripheralsLoading,
    peripheralsSuccess,
    peripheralsError,
    peripheralsNew,
    peripheralsClear,
    loadPeripheralsEdit,
    changePeripheralsEdit,
    peripheralsClearEdit,
} = peripheralsSlice.actions