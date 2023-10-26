import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
 

export const fetchData = createAsyncThunk('auth/fetchContent',
   async (user) => {
        const url = 'https://dummyjson.com/auth/login';
        const config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: user
        }
        const response = await axios(url, config)
        const data = await response.data
        console.log(data)
        return data
        
    }
    )

export const authSlice = createSlice({
    name : "auth",
    initialState : {
        user: null,
        isLoading : false,
        isAuthenticated : false
    },
    reducers : {
        logout : (state)=>{
            //console.log("localStorage==",localStorage);
            state.isAuthenticated = false
            state.user = null
            localStorage.clear();
            //console.log("localStorage==",localStorage);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
          state.isLoading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
          state.isAuthenticated = true
          state.isLoading = false
          state.user = action.payload
          localStorage.setItem("localInfo", JSON.stringify(state.user));
          
          //alert(JSON.stringify(state.user))
        })
        builder.addCase(fetchData.rejected, (state, action) => {
          state.isLoading = false
          state.error = action.error.message
        })
      },
})
export const {logout} = authSlice.actions
export default authSlice.reducer;