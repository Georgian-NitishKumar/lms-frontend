import { createSlice } from "@reduxjs/toolkit";

//import {authSliceReducer} from 'src/Redux/Slices/AuthSlice.js';

const initialState = {
    isLoggedIn: localStorage.getItem('isLoggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

//export const {} = authSlice.actions;
export default authSlice.reducer;