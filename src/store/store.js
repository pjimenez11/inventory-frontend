import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { navigateSlice } from "./slices/navigate/navigateSlice";
import { laboratorySlice } from "./slices/laboratory/laboratorySlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        navigate: navigateSlice.reducer,
        laboratory: laboratorySlice.reducer,
    },
});

export default store;