import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

// createAsyncThunk()	Handles asynchronous operations/API calls
export let loginEmployee = createAsyncThunk(
    "auth/login" , 
    // thunkApi	Provides extra functionality, such as dispatch, getState, rejectWithValue

    // credentials ma data aye ga jo useAuth.jsx sa behj rahn hn onLoginSubmit function sa
   async (credentials,thunkApi)=>{
    try {
        let res = await axiosInstance.post('/auth/login' , credentials)
        console.log(res)
        console.log(createImageBitmap)
        return res.data;
    } 
    catch (error) {
        return thunkApi.rejectWithValue(error)   
    }
})