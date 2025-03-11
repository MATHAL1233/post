import { createSlice } from "@reduxjs/toolkit";
import {usersData} from "../Exampledata";
const initialState = { value: usersData}; 
 const userSlice = createSlice({
  name: "users", 
 initialState,
  reducers: {
    addUser: (state, action) => {
    state.value.push(action.payload);
    },
    deleteUser: (state,action) => {
    state.value=state.value.filter((user)=> user.email !== action.payload);
    },
    updateUser: (state,action) =>{
    state.value.push(action.payload);
    },
  },

});
export const {addUser,deleteUser,updateUser}= userSlice.actions;
export default userSlice.reducer;