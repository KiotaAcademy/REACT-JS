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

## things forbidden in Reducers

1. never mutate arguments.
2. never perform side effects
3. never call non-pure fuctions

Reducers should return an updated copy of state, reducers will then use that copy to update the store.

in redux you have only one store, and multiple reducers, all of this reducers are called when an action is dispatched, the switch statement inside the reducers, are looked into to see if it has anything to do with the incoming states and actions

this explains why the reducers return a default state by default, so that incase there is no case matched the default state is returned by default

