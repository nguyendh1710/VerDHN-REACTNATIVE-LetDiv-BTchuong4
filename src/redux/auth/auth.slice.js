import {createSlice} from "@reduxjs/toolkit";
import {loginThunk} from "./auth.thunk";


const INIT_STATE= {
    token:null,

}

const authSlice = createSlice({

   name:'auth',
   initialState: INIT_STATE,
   reducers: {},
   extraReducers: (builder) => {
       builder.addCase(loginThunk.fulfilled, (state,action)=>{
          const {payload} = action;
          state.token= payload;
       });
   }


})

export default authSlice.reducer;

