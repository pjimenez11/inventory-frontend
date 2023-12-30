import { createSlice } from "@reduxjs/toolkit";

const adminNavigate = [
    {
        name: "Laboratorios",
        href: "/inventory/laboratorios",
        icon: "SiGoogleclassroom",
        current: false,
    },
    {
        name: "Bienes",
        href: "/inventory/bienes",
        icon: "FaComputer",
        current: false,
    },
    {
        name: "Sugerencias",
        href: "/inventory/sugerencias",
        icon: "MdOutlineSettingsSuggest",
        current: false,
    },
    {
        name: "Usuarios",
        href: "/inventory/usuarios",
        icon: "FaRegUser",
        current: false,
    },
];


const custodioNavigate = [
    {
        name: "Laboratorios",
        href: "/inventory/laboratorios",
        icon: "SiGoogleclassroom",
        current: false,
    },
    {
        name: "Bienes",
        href: "/inventory/bienes",
        icon: "FaComputer",
        current: false,
    },
    {
        name: "Sugerencias",
        href: "/inventory/sugerencias",
        icon: "MdOutlineSettingsSuggest",
        current: false,
    },
];




export const navigateSlice = createSlice({
    name: 'navigate',
    initialState: {
        navigateOptions: {
            TECHNICIAN: adminNavigate,
            CUSTODIAN: custodioNavigate,
            TECHNICIAN_CUSTODIAN: [...adminNavigate, ...custodioNavigate],
        }
    },
    reducers: {
        currentNavigate: (state, action) => {
            const { role } = action.payload
            state.navigateOptions[role] = state.navigateOptions[role].map((item) => {
                if (item.href === action.payload.href) {
                    item.current = true
                } else {
                    item.current = false
                }
                return item
            })
        }
    },

})

export const { currentNavigate } = navigateSlice.actions