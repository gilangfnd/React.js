import {createSlice} from "@reduxjs/toolkit";

const searchCarsSlice = createSlice({
    name : "searchCars",
    initialState : {
        tipeDriver : "ds",
        tanggal : "sd",
        waktuJemput : "ds",
        jumlahPenumpang : "323",
    },
    reducers:{
        searchCars: (state, action) => {
            state.tipeDriver = action.payload.tipeDriver;
            state.tanggal = action.payload.tanggal;
            state.waktuJemput = action.payload.waktuJemput;
            state.jumlahPenumpang = action.payload.jumlahPenumpang;

        }
    }
});

export const { searchCars } = searchCarsSlice.actions;
export default searchCarsSlice.reducer;