import { useSelector } from "react-redux";
import classes from "./Counter.module.scss";

const Counter = () => {
  // uss
  const counter = useSelector((state) => state.counter);
  // usdf

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
