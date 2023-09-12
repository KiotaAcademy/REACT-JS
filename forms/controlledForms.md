# CONTROLLED FORMS

hese terms refer to how data input and handling are managed within HTML forms and can have implications for how data is processed and manipulated on the client side (in the browser) and the server side (on the web server).

A controlled form refers to a form element (such as a text input, checkbox, or radio button) whose value is controlled by the application's state rather than the HTML itself. This means that the form element's value is not solely determined by the user's input but is also managed by the application's logic.

```js
import React, { useState } from 'react';

function ControlledFormExample() {
  // Initialize a state variable to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Handle input changes and update the state
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the inputValue as needed (e.g., submit it to a server)
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={inputValue} // The input value is controlled by state
          onChange={handleInputChange} // Update state when input changes
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledFormExample;

```