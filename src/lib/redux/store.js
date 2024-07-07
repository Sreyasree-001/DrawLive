// store.js
import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {
  strokeColor: "#000000",
  clear: false,
  strokeThickness: 5,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setStrokeColor: (state, action) => {
      state.strokeColor = action.payload;
    },
    setStrokeThickness: (state, action) => {
      state.strokeThickness = action.payload;
    },
    clearCanvas: (state) => {
      // no state update needed for canvas clearing in this example
      state.clear = !state.clear;
    },
  },
});

export const {setStrokeColor, clearCanvas, setStrokeThickness} =
  boardSlice.actions;

const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
  },
});

export default store;
