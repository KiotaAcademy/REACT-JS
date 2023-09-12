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

## functional form in formik

```js
<Formik
    initialValues = {{username: 'jared'}}
    validate = {(values, props) => {
        // validational logic
    }}
    onSubmit{(values, actions)=>
        const uname = values.username
    }

>
    {props = (
        <form>
            <Field name="username", type = "text"/>
        </form>
    )

    }
</Formik>
```

## formik helper

1. isSubmitting - indicates if the form is inder submission
2. setSubmitting - sets a form's submission phase
3. isValid - indicates if form input is valid
4. isValidating - indicates if form is being indicated.
5. resetForm - reset the form using the initial given json data

