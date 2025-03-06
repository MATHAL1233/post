import { createSlice } from "@reduxjs/toolkit";
import {usersData} from "../Exampledata";

const initialState = { value: usersData}; 
 const userSlice =createSlice({
  name: "users", 
 initialState : initialState,
  reducers: {},

});

export default userSlice.reducer;