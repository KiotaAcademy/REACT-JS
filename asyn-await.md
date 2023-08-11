# ASYNC AWAIT

```js
async () => {
    const response = await fetch("pass your url")
    const data = await response.json()
}
```

both the fetch and response returns a promise that is why we must await for the promises.

to make those await functions, remember thay you must label the function as `async`

this is just an alternative of the `fetch().then()`
