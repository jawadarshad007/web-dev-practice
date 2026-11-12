import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

// createAsyncThunk()	Handles asynchronous operations/API calls
export let loginEmployee = createAsyncThunk(
    "auth/login" , 
    // thunkApi	Provides extra functionality, such as dispatch, getState, rejectWithValue
   async (credentials,thunkApi)=>{
    try {
        let res = await axiosInstance.post('/auth/login' , credentials)
        console.log(res)
        return res.data;
    } 
    catch (error) {
        return thunkApi.rejectWithValue(error)   
    }
})