# Login-Validation-Using-Fromik-Yup-in-React.js

![image](https://github.com/Sohaib1113/Login-Validation-Using-Fromik-Yup-in-React.js/assets/101351817/c04c080b-4912-409e-8aae-36f1b8f67783)

ON SUCCESSFULL VALIDATION YOU GET A DASHBOARD AS SHOWN BELOW

![image](https://github.com/Sohaib1113/Login-Validation-Using-Fromik-Yup-in-React.js/assets/101351817/a50a4a38-2ec3-4739-905f-74e48356e404)




I have used Formik for managing form state and validation, and Yup for defining validation schemas. Here's how you could implement a login form with validation using these libraries:

Setup: First, you need to install Formik and Yup in your React project: npm install formik yup

Import: Import Formik and Yup into your component:import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

Validation Schema: Define a Yup schema to specify the validation rules for your form fields. For a login form, you might have rules for the username/email and password fields:
const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});
Form Component: Create your login form component using Formik. Within the <Formik> component, use the <Form> component to define your form structure, and use the <Field> component for each form field:
const LoginForm = () => (
  <Formik
    initialValues={{ username: '', password: '' }}
    validationSchema={validationSchema}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <div>
          <label htmlFor="username">Username or Email</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);
Usage: Finally, render your <LoginForm> component wherever you want it to appear in your application:
javascript
Copy code
function App() {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}
This setup provides a basic login form with validation using Formik and Yup in a React application. The form will display error messages if the user tries to submit it with invalid input, according to the defined validation schema.
