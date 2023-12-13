import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { navigateSlice } from "./slices/navigate/navigateSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        navigate: navigateSlice.reducer,
    },
});

export default store;