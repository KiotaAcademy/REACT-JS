# FORMS

react needs to maintain it's internal state until a form is submitted.

the main purpose of a form `<form/>` in a page is to collect user input.

## state management

there is need for state management. There are two ways to manage state forms in react:

1. controlled forms
2. uncontrolled forms

### controlled forms

in a controlled form, the react manages state for all user inputs and it is a single source of truth for all user inputs.

here the user input is pushed to the component as and when it updates.

### uncontrolled forms

very close to the native html forms, the user input is pushed to the DOM. the user input is pulled into the component as when it is needed


