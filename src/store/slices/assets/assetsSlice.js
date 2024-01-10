import { createSlice } from "@reduxjs/toolkit"

const initialAsset = {
    name: '',
    description: '',
    stock: true,
    amount: 1,
    computer_id: undefined,
    custodian_id: undefined,
    custodian_type: "User",
    laboratory_id: "",
}

export const assetsSlice = createSlice({
    name: 'assets',
    initialState: {
        assets: [],
        asset: initialAsset,
        assetEdit: {},
        loading: false,
        error: null
    },
    reducers: {
        assetsLoading: (state) => {
            state.loading = true
        },
        assetsSuccess: (state, action) => {
            state.assets = action.payload
            state.loading = false
            state.error = null
        },
        assetsError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        assetsNew: (state, action) => {
            state.asset[action.payload.name] = action.payload.value
        },
        assetsClear: (state) => {
            state.asset = initialAsset
        },
        loadAssetsEdit: (state, action) => {
            state.assetEdit = action.payload
        },
        changeAssetsEdit: (state, action) => {
            state.assetEdit[action.payload.name] = action.payload.value
        },
        assetsClearEdit: (state) => {
            state.assetEdit = {}
        },
    },
})

export const {
    assetsLoading,
    assetsSuccess,
    assetsError,
    assetsNew,
    assetsClear,
    changeAssetsEdit,
    assetsClearEdit,
    loadAssetsEdit,
} = assetsSlice.actions