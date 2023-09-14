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

this is how we use to connect react components with redux. it has two core items:

1. `provider` - attach app to store - utilized at our app's route, it wraps our entire application
2. `connect` - creates React(container) components, to Redux store

```js
<Provider store={this.props.store}>
   <App/>
</Provider>
```

the above provider component makes our store available for all the app's child components, without us having to pass down this store explicitly

```js
export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage)
```

it wraps a component so it is connected to a redux store

we can declare which part of our store is attached to components as store, we can also declare what aspect we want as props as well.

`mapStateToProps` specifies which state you want to pass to your component as props, `mapDispatachToProps` specifies what actions you want to pass to your component.

```js
function mapStateToProps(state){
   return {
      users: state.users
   }
}
```

in the above code, we are only exposing state.users 


```js
function mapDispatchToProps(dispatch){
   return {
      actions: bindActionCreators(action, dispatch)
   }
}
```

### ways to handle mapToDispatch

1. ignore it - you can ignore this argument and don't pass it to the connect
2. wrap it manually
3. use bindActionCreators
4. Return an object

#### ignore it

```js
this.props.dispatch(loadCourses())
```

#### manually wrap in dispatch

```js
function mapDispatchToProps(dispatch){
   return {
      loadCourses: ()=> dispatch(loadCourses())
   }
}
```

#### use bindActionCreators

```js
function mapDispatchToProps(dispatch){
   return {
      actions: bindActionCreators(actions, disptach)
   }
}
```

#### return object

```js
const mapDispatchToProps = {
   incrimentCounter
}

```

