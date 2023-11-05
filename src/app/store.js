import { configureStore } from '@reduxjs/toolkit';
import { reducer as userReducer } from "../features/User/redux/reducer";
import { reducer as roleReducer } from "../features/Role/redux/reducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        role: roleReducer,
    },
});
