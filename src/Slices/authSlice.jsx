import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { isLogin } from '../Components/isLogin';
 
// Fetch login data
export const fetchData = createAsyncThunk('auth',
   async (userr) => {
        const url = 'http://localhost:5000/user/signin';
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: userr
        }
        const response = await axios(url, config)
        const data = await response.data
        return data
        
    }
)

// Register new user
export const registerUser = createAsyncThunk('auth',
   async (user) => {
        const url = 'http://localhost:5000/user/add';
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' },
            data: user
        }
        const response = await axios(url, config)
        const data = await response.data
        return data
        
    }
)

export const authSlice = createSlice({
    name : "auth",
    initialState : {
        user: null,
        isLoading : false,
        isAuthenticated : false,
    },
    reducers : {
        logout : (state)=>{
            localStorage.clear();
            state.isAuthenticated = false
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
          state.user = action.payload
          localStorage.setItem("localToken", JSON.stringify(action.payload.token));
          state.isAuthenticated = isLogin()
          state.isLoading = false
        })
        builder.addCase(fetchData.rejected, (state, action) => {
          state.isLoading = false
          state.error = action.error.message
        })
      },
})
export const {logout} = authSlice.actions
export default authSlice.reducer;