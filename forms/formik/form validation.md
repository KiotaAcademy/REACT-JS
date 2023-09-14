# FORM VALIDATION

formik supposrt s two flavours of form validation:

1. form level data validation - it is specified on the <Formik> tag - this is when you need to validate all the form field validation at once
2. field level validation  - specified on the <field> tag - this is used to run validation for the specific field tag

## form field validation

specified using validate, validateScheme props on <formik>

## validation trigger points

1. onBlur events <validateOnBlur>
2. onCHange events <validareOnChange>
3. on <formik> mount/initial value changes <validateOnMount>
4. when form subission ia attempted

## validateForm()

method for form level validation

## validateField(fieldName)

method for field level validation

## isValidating()

it is used to check wether validation is already running

## displaying Validation errors

use the <ErrorMessage> component, it will only show errors if the field has been touched.
