import { createStore } from "redux";

const initialState = {
  counter: 0,
  show: true,
};

const counterReducer = (state = initialState, { type, payload }) => {
  // rxreducer
  switch (type) {
    case "increment":
      return {
        counter: state.counter + 1,
        show: state.show,
      };
    case "decrement":
      return {
        counter: state.counter - 1,
        show: state.show,
      };
    case "increase":
      return {
        counter: state.counter + +payload,
        show: state.show,
      };
    case "showCounter":
      return {
        counter: state.counter,
        show: !state.show,
      };

    default:
      return state;
  }
};

export default createStore(counterReducer);
