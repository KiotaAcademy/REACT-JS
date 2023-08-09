# CONTEXT API

The Context API in React is a feature that allows you to manage the global state of your application without the need to pass data through multiple levels of components using props.

It provides a way to share data and functionality across different components, regardless of where they are located in the component tree.

## createContext

this 'create context' - It takes in any value, be it a number, string, or object, which can be referred to as the default value of the context, and returns a context object that can be used to pass down data to components

to use createContext you:

`import { createContext } from "react"`

```js
import { createContext } from "react";

const product = createContext({
  product: [],
  addToCart: () => {},
  delivery: "",
});
```

we can as well

```js
const ShopContext = createContext(null);
```

## useContext

This hook is used to consume data from a context object created by createContext. We can use this hook inside our component to retrieve the data that we need. This hook accepts the context object as an argument

## ContextObject.Provider

The context object comes with the Provider component that accepts a prop called value, which is the context value that’s going to be passed down to the components no matter how deeply they’re nested. In other words, a way to “provide” the context value to these components
