# REDUX MIDDLEWARE

redux allows us to configure middleware that runs in every call. it runs between action and reducer

you can also write your own custom middleware

redux middleware can handle various functionalities:

1. Handling async API calls
2. Logging
3. Crash reports
4. Routing

the code that logs for example:

```js
const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let results = next(action)
    console.log('next state', store.getState())
    console.groupEnd()
    return result
}
```

that is  a custom logger

## ASYNC IN REDUX

in redux action are synchrounous and normally return an object. so to handle asynchronous calls, we might need to use libraries:

1. redux-thunk - returns functions from action creators
2. redux-promise - use promises for async
3. redux-observable - use RxJs to dispatch observables
4. redux-saga - use generators

## REDUX THUNK

it is a middleware function that allows you to write asynchronous login in redux actions

Redux itself is a library for managing the state of a JavaScript application, often used with React, and it relies on synchronous actions to update the state. However, in many real-world scenarios, you need to perform asynchronous operations like making API requests or interacting with a database.

Thunks are a way to handle asynchronous actions in Redux. Instead of dispatching an action with a plain JavaScript object, you can dispatch a thunk function. The thunk function can contain asynchronous code and can dispatch other actions when the asynchronous operations are complete.

```js
// A thunk action creator
const fetchUser = (userId) => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USER_REQUEST' });

    try {
      // Perform an asynchronous operation, like an API request
      const response = await api.fetchUser(userId);

      // If the operation is successful, dispatch another action with the data
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: response.data });
    } catch (error) {
      // If there's an error, dispatch an error action
      dispatch({ type: 'FETCH_USER_FAILURE', error: error.message });
    }
  };
};

// Dispatch the thunk action somewhere in your component
dispatch(fetchUser(123));

```

to get setup for redux thunk function, you write a function that returns a function:

```js
export function loadCourses(){
    return function (dispatch){
        return `api goes in here`.then(
            dispatch(an action here)
        )
    }
}
```