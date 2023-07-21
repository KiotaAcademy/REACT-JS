# REACT ROUTER

## client-side routing

Client-side routing is the type of routing where Javascript takes over the duty of handling the routes in an application

Client-side routing helps in building single-page applications (SPAs) without refreshing as the user navigates.

For example, when a user clicks a navbar element, the URL changes and the view of the page is modified accordingly, within the client.

## NPM install react-router-dom

to install a react-router-dom you run `npm install react-router-dom`

then in your main.js/App.js you wrap your component this way

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```