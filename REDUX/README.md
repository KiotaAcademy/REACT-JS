# REDUX

it is used to manage data. it works under three principles:

1. One immutable store - state cannot be changed directly ( the only way to change state is to emit an action)
2. action trigger changes
3. reducer updates state

data flows down, actions flow up - unidirectional dataflow in flux and redux.

## Redux flow

there are three fundamentals - Action, store and reducers with react

An action describes a user's intent, it is an object with a type property and data.

```js
{type: RATE_COURSE, rating: 5}
```

actions are normally handled by reducers, this is a function that returns new state based on the action that you passed it.

```js
function appReducer(state= defaultState, action){
    switch(action.type){
        case RATE_COURSE:
        // return new state
    }
}
```
it receives a current state and action.

once new state is returned fromm the reducer, the store is updated. React then re-renders any cmponents that are utilising the data

React components are connected to the store using a react redux library called `React-Redux`

