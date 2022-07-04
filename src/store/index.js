import { configureStore } from "@reduxjs/toolkit";
import blogs from './blogs';

const store = configureStore({
    reducer: {
        blogs
    }
})

export default store;