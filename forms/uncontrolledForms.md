# UNCONTROLLED FORMS

Uncontrolled forms are an alternative approach to building web forms in web development, particularly in the context of HTML and JavaScript. Unlike controlled forms, which tightly control form element values through JavaScript and application state, uncontrolled forms rely more on the traditional behavior of HTML form elements and do not manage their values directly using JavaScript.

```js
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <button type="submit">Submit</button>
</form>

```

## when to use uncontrolled forms

1. read only inputs i.e file upload
2. when using non-react library to manage forms
3. converting a pre-existing codebase to react (it has fields which are not react components)
4. to reduce rerendering the form in a complex DOM