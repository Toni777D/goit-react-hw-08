import { createSlice } from "@reduxjs/toolkit";
import { logIn, register } from "./operations";

const authSlice = createSlice({
    name: "auth",
    initialState: {
            user: {
                name: null,
                email: null,
             },
            token: null,
            isLoggedIn: false,
            isRefreshing: false,  
    },
    extraReducers: (builder) => 
        builder
    .addCase(register.pending, (state) => {
           
    })
    .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
    .addCase(register.rejected, (state) => {
    })
    .addCase(logIn.pending, (state, action) => {
        
    })
    .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    })
    .addCase(logIn.rejected, (state) => {
    })
})
export default authSlice.reducer;