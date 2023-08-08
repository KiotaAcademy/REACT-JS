# useEffect()

```js
useEffect(()=>{

}, [])
```

if the dependecy array is left out - 

if the dependecy array is empty - the useEffect will run after the initial render and every other time the component re-renders

if the dependecy array contains values the useEffect will re-render whenever any of the dependecy arrays changes between the renders.

