import { createSlice } from "@reduxjs/toolkit";

//Three different props we must provide 
//name 
//initialState
//reducers
const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
    //Reducer functions 
    changeName(state, action){
        //Updating the state
        state.name = action.payload;
    },
    changeCost(state, action){
        //Updating the state
        state.cost = action.payload
    }

    }
});

//Exporting the reducers function as a named function 
//
export const {changeName, changeCost} = formSlice.actions;
//Exporting the Combined Reducer, this is a single combined reducer 
//
export const formReducer = formSlice.reducer;