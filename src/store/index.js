import {configureStore} from "@reduxjs/toolkit";
import {addCar, carsReducer, changeSearchTerm, removeCar} from "./slice/carsSlice";
import {changeCost, changeName, formReducer} from "./slice/formSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer

    }
});

export {
    addCar,
    changeCost,
    changeName,
    changeSearchTerm,
    removeCar,
    store
};
