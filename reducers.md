# REDUCERS

Reducers are pure functions that take a previous state and an action to return a new state.

```js
function reducer(state, action) {}
```

The action is an object with a type property describing what the user did. This object can also contain any other properties that our reducer might need to produce the new state.

```js
function reducer(state, action) {
  switch (action.type) {
    case "incremented_count": {
      return { count: state.count + 1 };
    }
    case "decremented_count": {
      return { count: state.count - 1 };
    }
    case "set_count": {
      return { count: action.value };
    }
    default: {
      throw error("unknown action: " + action.type);
    }
  }
}
```

## useReducer Hook

React allows us to use reducers in our components through a hook called useReducer. This hook takes a reducer function and an initial state as arguments, then returns an array with two values: the current state and a dispatch function.

`const [state, dispatch] = useReducer(reducer, { count: 0 });`
