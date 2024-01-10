import { createSlice } from "@reduxjs/toolkit"

export const initialUser = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
};

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        user: {},
        userEdit: {},
        loading: false,
        error: null
    },
    reducers: {
        usersLoading: (state) => {
            state.loading = true
        },
        usersSuccess: (state, action) => {
            state.users = action.payload
            state.loading = false
            state.error = null
        },
        usersError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        usersNew: (state, action) => {
            state.user[action.payload.name] = action.payload.value
        },
        usersClear: (state) => {
            state.user = initialUser
        },
        loadUsersEdit: (state, action) => {
            state.userEdit = action.payload
        },
        changeUsersEdit: (state, action) => {
            state.userEdit[action.payload.name] = action.payload.value
        },
        usersClearEdit: (state) => {
            state.userEdit = {}
        },
        asignarUser: (state, action) => {
            state.user.user_id = action.payload
        }
    },
})

export const {
    usersLoading,
    usersSuccess,
    usersError,
    usersNew,
    usersClear,
    loadUsersEdit,
    changeUsersEdit,
    usersClearEdit,
    asignarUser
} = userSlice.actions