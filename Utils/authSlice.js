import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice(
    {
        name: "Auth",
        initialState: {
            username: "",
            password: "",
        },
        reducers:{
            setUsername:(state,action)=>{
                state.username = action.payload;
            },
            setPassword: (state,action) => {
                state.password = action.payload;
            },
            setLogOut: (state) => {
                state.username="",
                state.password=""
            }
        }
    }
)

export const {setUsername, setPassword, setLogOut} = authSlice.actions;
export default authSlice.reducer;