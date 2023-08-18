# useReducer()

useReducer is an alternative to `useState` hook. it is used for managing more complex state logic within a component.

useReducer takes two arguments:

1. a reducer function - this defines how the state should be updated based on the dispatched actions
2. an initial state

it returns a new state

let say we have a counter we need to either incriment or decriment, or even multiply and divide.

to manage such kind of variables we use `useReducer`.

```js
import React, { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function Counter() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
```
