# REACT ARCHITECTURE

react is 100% component based

All react apps start by rendering a single root component.

how is this single react component renders to a browser?

## library vrs framework

A library is a group of related functions or classes that perform unique operations to optimize well defined tasks.

math library might have calls like:

1. max
2. min
3. floor
4. ceiling
5. log
6. trunc

react is two libraries:

1. react
2. react-dom

A framework is a collection of programming tools with a specific goal in mind.

A framework is in control of the flow of your program whilst with libraries you have full control and all you get to do is to call this libraries where you need them.

react is a library, nextjs is a framework built on top of react library.

## SPA'S (single page app)

when a web page is requested by a browser, the page downloaded includes minimal HTML and javascript. And that from then there are no more full-page requests made from the browser. i.e:

1. Gmail
2. Yahoo
3. Hotmail

## popular react tool chains

1. NextJS (`npx create-next-app@latest name-of-your-app`)
2. Create React App (CRA)

## functional programming (F(G(X)))

functional programming is all about functional composition - it means that a function returns another function that can in turn return another function.

it helps build complex apps by combining smaller functions.

## why react?

1. flexibility
2. developer experience
3. community
4. corporate investment
5. testability
6. performance

## jsx and js

when we write react, we use a lot of JSX that is to say `<div><h1 color = 'red'>this is JSX here</h1></div>`

jsx is then normally compiled to plain js `React.createElement("h1", {color: 'red'}, 'this is JSX here')`

