# REDUCERS

you pass in some ingredients, it come out on the other end with some new type of ingredients. it is a function.

this function yo pass in actions, and state, it comes out with a new state.

```js
function myReducer(state, action){
    // return a new copy of state
}
```

that's how reducers are in a nutshell.

```js
function myReducer(state, action){
    switch(action.type){
        case "INCRIMENT_COUNTER":
            return {..state, counter: state.counter + 1} // object.spread to create a new copy
        default:
            return state
    }
}
```

the above reducer function is used to incriment a state.