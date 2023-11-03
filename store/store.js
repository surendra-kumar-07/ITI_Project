import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../src/feachers/authSlice";

const store = configureStore({
    reducer: {
        auth: AuthSlice
    }
});

export default store;