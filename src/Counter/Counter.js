import React, { useState } from "react";
import "./Counter.css";
import { connect } from "react-redux";
const Counter = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h2 className="title">Counter</h2>
      <div className="butt">
        <button onClick={props.decrement}>-</button>
        <span className="count">{props.count}</span>
        <button onClick={props.increment}>+</button>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { count: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "incr" }),
    decrement: () => dispatch({ type: "decr" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
