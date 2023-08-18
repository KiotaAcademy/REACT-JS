# Redux building blocks

1. state - `var defaultState = 0`
2. reducer - that will update the state, it takes two arguments, state and action.

   ```js
   var amount (state, action){
    state = state || defaultState

    if (action.type == "increment"){
        return state + 1
    }
   }
   ```

3. store - our state is saved, we use createStore method, where we pass our reducer.

   ```js
   var store = createStore(amount);
   ```

with redux store, you can get or update. To do that you use:

`store.dispatch({type: 'increment'})` - which fire an action when writing to the store, to read from the store you can use a subscribe method.

```js
store.subscribe(function () {
  console.log("state", store.getStore());
});
```

## React-redux npm module (npm install react-redux)

it is a module done for you already to help with redux states

wrap the main component with <Provider></Provider> and pass the redux stores as parameters
