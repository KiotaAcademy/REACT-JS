# STATES

Any exciting application you build is likely to change over the time the user is exploring it.

The changes could be as simple as toggling a dropdown menu or as complex as fetching data from an API.

React provides primitives to manipulate the state of your apps, more specifically components, to make them dynamic. In this lesson, we will learn how to use state in React.

*state is a component's memory* - we need components to remember things about themselves. components along the way may change how they appear and relate with each other.

## useState hook

this allows you to build a state in a functional component

it takes initial value as a parameter and returns an array with two elements that when destructed we get:

1. the current state value
2. a function to update the current state value

`const [timer, setTimer]= useState(0)`

so every other time the component detects a change in state, there's a re-render - the whole component is destroyed and rebuilt again with the new state values

the only thing that can trigger a re-render is a change in state.

## HOW TO STRUCTURE A STATE

Managing and structuring state effectively is by far one of the most crucial parts of building your application

## states are immutable

imagine you have a box full of toys and you want to add/delete or change the toys present inside the box, but you cannot change the toys directly from the box. Instead if you want to change the toys, you have to make a new box with updated toys.

this is react states in essence. you cannot directly update states, you have to create new states

## How States updates

states updates are asynchronous. this means that whenever you call setState function, React will apply the update in the next component render.

every other time you call a *setState* it calls a re-renders the entire component. he setState call triggers a component re-render
