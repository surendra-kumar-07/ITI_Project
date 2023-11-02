import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../src/feachers/authSlice";

const store = configureStore({
    reducer: {
        AuthSlice
    }
});

export default store;