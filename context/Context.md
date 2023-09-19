# CONTEXT

this will help us pass data components without using props.

## declaring context

You can create a context by `React.createContext()` function which returns two components:

1. Provider
2. Consumer

so ideally you:

```js
const myContext = React.createContext()
```

### provider

this component is responsible for making shared data available within it's wrapped component team, it accepts a value prop that can be any javascript value, such as an object, array, string or even a function.

You can have multiple provider components in your applicatiom managing different set of shared data.

### consumer

the consumer component is used to consume the shared data  within a functional  component. it provides a way to access the data without having to use the useContext