import { createSlice, nanoid } from "@reduxjs/toolkit";

//Three components needed in a slice
//name
//initaialState
//reducers
const carsSlice = createSlice({
    name: 'cars',
    initialState:{
        searchTerm: '',
        cars: []
    },
    reducers:{
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            state.cars.push({
                name: action.payload,
                cost: action.payload.cost,
                id: nanoid(),
            });
        },
        removeCar(state, action){
            const updated = state.cars.filter((car) => {
                //if the car has a diferent id we remove, othere wise keep it.
                return car.id !== action.payload;
            });
            state.cars = updated;
        }
        
    }

});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;