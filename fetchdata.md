# FETCH DATA

here we can choose to use the 'fetch' api.

A sample on how to use the fetch api is:

```js
fetch(api, { mode: "cors" })
  .then((response) => {
    response.json();
  })
  .then((response) => {
    data = response[0].whateverDataYouWantToAccess;
  })
  .catch((error) => console.log("Error"));
```

fetch() will always return a promise, that is why we use `fetch().then()`

this fetch response is returned in a raw response that is why we need to jsonfy it by `response.json()`.then you can now start to destructure it

json is an asychronous method an it returns a promise as well that is why we use a .then

in react, to use fetch data api we normally wrap it in a `"useEffect"`.

```js
useEffect(() => {
  fetch(api, mode)
    .then((response) => response.json())
    .then((response) => {
      // play around with the json data and extract whatever you want extracted
    })
    .catch((error) => {
      console.log("Error");
    });
});
```

fetch api is a modern javaScript interface for making Network requests in a web browser.

so the syntax is `fetch(api)` and then jsonfy it `response.json()`

The Fetch API supports various options for configuring the request, such as setting headers, specifying request methods (GET, POST, etc.), and sending data in the request body for methods like POST and PUT
