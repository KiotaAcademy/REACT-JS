# STATES AND PROPS

## PROPS

to pass props into functional components, you just pass it as an argument, that is:

```javascript
function MyApp(props) {
    <{props.title}/>
}

```

you can access other properties by just `props.property`

you can also deconstruct the props in the function definition.

`function MyApp({ title }) {}`

## STATES

in functional components, we are going to use react hooks to achieve states.

in ReactJS, states are used to manage and store the dynamic data of a component. They allow components to have their internal state and handle changes to that state

need for state include:

1. Dynamic and interactive user interfaces: ReactJS is commonly used for building user interfaces that respond to user interactions and update dynamically. States provide a way to manage and track the changing data within a component, allowing you to update the UI based on user input or other events.
2. Component re-rendering: ReactJS uses a virtual DOM (Document Object Model) to efficiently update the user interface. When a component's state changes, React automatically re-renders only the affected parts of the UI. This efficient rendering process helps improve performance. Without states, it would be challenging to track and update the data that drives the UI.
3. Maintaining component-specific data: Each component in React can have its own state, allowing you to encapsulate and manage data specific to that component. By maintaining component-specific states, you can create reusable and modular components that can be easily composed and combined to build complex user interfaces.
4. Asynchronous operations: States are particularly useful when dealing with asynchronous operations, such as fetching data from an API or handling user input. Asynchronous operations may take time to complete, and states allow you to update the UI based on the loading or success/failure status of these operations
5. Stateful behavior: Some components need to remember and preserve certain information across multiple renders. For example, a form component may need to remember the values entered by the user until they are submitted. States provide a way to store and update this kind of stateful behavior.

