import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// POST /users/signup 'create a new user'
export const register = createAsyncThunk(
    "auth/register",
    async (newUser, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', newUser);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

//POST /users/login 'login user'

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (creat, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', creat)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)