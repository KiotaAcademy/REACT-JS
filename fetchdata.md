# FETCH DATA

here we can choose to use the 'fetch' api.

A sample on how to use the fetch api is:

```js
fetch (api, {mode: 'cors'})
.then((response)=> {
    response.json()
})
.then((response)=>{
    data = response[0].whateverDataYouWantToAccess
})
.catch((error) => console.log("Error"))

```

in react, to use fetch data api we normally wrap it in a `"useEffect"`.

```js
useEffect(()=>{
    fetch(api, mode)
    .then((response)=> response.json())
    .then((response)=>{
        // play around with the json data and extract whatever you want extracted
    })
    .catch((error)=>{
        console.log("Error")
    })
})
```
