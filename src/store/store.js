import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { navigateSlice } from "./slices/navigate/navigateSlice";
import { laboratorySlice } from "./slices/laboratory/laboratorySlice";
import { userSlice } from "./slices/user/userSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        navigate: navigateSlice.reducer,
        laboratory: laboratorySlice.reducer,
        user: userSlice.reducer,
    },
});

export default store;