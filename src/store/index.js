import { configureStore } from "@reduxjs/toolkit";
import { addCar, carsReducer, changeSearchTerm, removeCar } from "./slice/carsSlice";
import { changeCost, changeName, formReducer } from "./slice/fromSlice";

const store = configureStore({
    reducer: {
        cars: formReducer,
        form: carsReducer,
    }
});

export {
    addCar, changeCost, changeName, changeSearchTerm, removeCar, store
};
