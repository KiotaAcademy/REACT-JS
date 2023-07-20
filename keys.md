# Keys

let say you want to pass some data into a component so that you can reuse this component as many times as possible.

to achieve this you use react keys

Keys are passed into the component or a DOM element as a prop.

```js
<LinkComponent key={keyValue}/>
```

keys normally work well with react props - properties

## DATA TRANSFER IN REACT

In React, data is transferred from parent components to child components via props. This data transfer is unidirectional, meaning it flows in only one direction. Any changes made to this data will only affect child components using the data, and not parent or sibling components.

to pass props into component when calling them you:

```js
export default MainFunction(){
    return (
        <>
            <ChildFunction text="Hello multiverse" color="blue"/>
        </>
    )
}
```

to recieve the aboved passed props in the child function you:

```js
function ChildFunction(props){
    return(
        <>
            <h1>{props.text} is color {props.color}</h1>
        </h1>
    )
}
```

## props destructuring

to destructure props you can either do so inside your function (as show above) or in the function definition level as shown below:

```js
function ChildFunction({text, color}){
return (
    <>{text}</>
)
}
```

to catch the error where we might fail to pass all the props in the place we call them from we can define a default prop. that is:

```js
ChildFunction.defaultProps = {
    text: 'No value passed',
    color: 'No color passed'
}
```

you can also pass this default props with the function definition that is to say:

```js
function ChildFunction ({text = "No value provided" color = "No color provided"}){

}
```

### Functions as props

you can also pass a function as a prop, you just pass the function Name.

then you can pass it to where you need to use it.
