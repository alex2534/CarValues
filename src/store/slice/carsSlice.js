import {createSlice, nanoid} from "@reduxjs/toolkit";

// Three components needed in a slice
// name
// initaialState
// reducers
const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        // This could also be called List
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            // Assumption:
            // action.payload === {name: 'abc', cost: 140 }
            state.data.push({name: action.payload.name, cost: action.payload.cost, id: nanoid()});
        },
        removeCar(state, action) {
            // If the id !== of the action.payload we keep the car
            // Assumption:
            // action.payload === the id of the car we want to remove
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            });
            state.data = updated;

        }

    }

});

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
