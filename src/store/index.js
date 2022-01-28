import { createStore } from "redux";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, { type, payload }) => {
  
  // rxreducer
  switch (type) {
    case "increment":
      return {
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
      };
    case "increase":
      return {
        counter: state.counter + (+payload),
      };

    default:
      return state;
  }
};


export default createStore(counterReducer);
