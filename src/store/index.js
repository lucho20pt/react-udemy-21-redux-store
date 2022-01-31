import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: { counter: 0 },
  showCounter: true,
};

// rxslice
const counterReducer = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    showCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterReducer.reducer,
  },
});

export default store;
