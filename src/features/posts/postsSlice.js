import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "1", title: "Learning Reux Toolkit", content: "I've heard good things." },
    { id: "2", title: 'Slices...', content: "themore i say slice, the more I want pizza." },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    }
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer