# HOOKS

these are functions that let you use react features.

All hooks prestart with the word `#use`

useState is a hook.

useEffect is a hook

## useEffect

it allows us to perform side effects on a function.

side effects include actions that are performed outside of the component's render process:

1. fetching data from API
2. subscribing to events
3. updating DOM

syntax of useEffect

```js
useEffect(()=>{
    // this useEffect will run on every render
})

useEffect(()=>{
    // this useEffect will run on mount (when the component appears)
}[])

useEffect(()=>{
    // this useEffect will run on mount and when either a or b has changed since the last render
}[a,b])
```

The useEffect hook takes two arguments: the first one is the side effect function, and the second one is an optional dependency array. The dependency array is used to specify the dependencies that the effect depends on.
