import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.scss";

const Counter = () => {
  // uss
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.show);
  // usdf
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = () => {
    dispatch({ type: "increase", payload: 5 });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "showCounter" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div className="row">
        <button onClick={decrementHandler}>Decrement</button>
        <span> | </span>
        <button onClick={increaseHandler}>Increase + 5</button>
        <span> | </span>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
