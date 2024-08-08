import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// POST /users/signup 'create a new user'
export const register = createAsyncThunk(
    "auth/register",
    async (newUser, thunkAPI) => {
        try {
            const response = await axios.post("/users/signup", newUser);
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

//POST /users/login 'login user'

export const logIn = createAsyncThunk(
    "auth/login",
    async (creds, thunkAPI) => {
        try {
            const response = await axios.post("/users/login", creds);
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
//POST /users/logout  'logout out user'
export const logOut = createAsyncThunk(
    "auth/logOut",
    async (_, thunkAPI) => {
        try {
            await axios.post("/users/logout");
            axios.defaults.headers.common.Authorization = "";
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    } 
)

// GET /users/current
export const refreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        if(!reduxState.auth.token){
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        axios.defaults.headers.common.Authorization = `Bearer ${reduxState.auth.token}`;

        try {
            const response = await axios.get("/users/current");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }  
    },
    {
        condition: (_, thunkAPI) => {
            const reduxState = thunkAPI.getState();
            return reduxState.auth.token !== null;
        },
    }
)