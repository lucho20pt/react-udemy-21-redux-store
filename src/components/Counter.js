import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.scss";

const Counter = () => {
  // uss
  const counter = useSelector((state) => state.counter);
  // usdf
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <div className="row">
        <button onClick={incrementHandler}>Increment</button>
        <span> | </span>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
