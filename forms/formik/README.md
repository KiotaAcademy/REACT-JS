# FORMIK

Formik is a popular library for managing form state and validation in React applications. It simplifies the process of creating and handling forms by providing a set of utilities and components that make it easier to manage form inputs, validate user input, and handle form submissions.

to install formik you - `npm i formik`

## ANATOMY OF FORMIK

```js
<formik>
    <Form> 
        <label htmlfor  = "firstName">First Name</label>
        <Field name = "firstName"/>
        <ErrorMessage name = "firstName"/>
        <button type = "submit">Submit</button>
    </Form>
</formik>
```

as you can see in the above form, we have not defined the values and those other lotta stuff - omChange, onBlur, value, we normally do in the vanilla react forms. how is that done using formik?

It internally manages the state of form values, form errors, whether a field has been "touched" (i.e., interacted with by the user), and other relevant information:

1. values - maps the fieldname, to user input value
2. errors - map the errors returned upon validation using fieldnames.
3. touched - it contains a boolean if the field has ever been used or touched or focused by user

all these fields are automatically maintained by formik.