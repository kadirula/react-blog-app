import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
    authorBlogs: []
}

const blogs = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload
        },
        setAuthorBlogs: (state, action) => {
            state.authorBlogs = action.payload
        },
        // appendBlogs: (state, action) => {
        //     state.blogs = [...state.blogs, action.payload]
        // }
    }
});

export const { setBlogs, setAuthorBlogs } = blogs.actions;

export default blogs.reducer;