# AXIOS

`npm install axios`

Axios is often used in web applications to interact with RESTful APIs and retrieve data from a server or send data to a server.

## axios get command

```js
const axios = require('axios');

axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

## post data

```js
const axios = require('axios');

const data = {
  username: 'exampleuser',
  password: 'examplepassword'
};

axios.post('https://api.example.com/login', data)
  .then(response => {
    console.log('Login Successful:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

```

## benefits of Axios

1. axios is simpler compared to fetch
2. axios does automatic json parsing
3. it has a better error handling.

