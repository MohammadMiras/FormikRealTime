import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const TextInput = ({ value, handleChange }) => (
  <input
    type="text"
    value={value}
    onChange={(e) => handleChange(e.target.value)}
  />
);

const App = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        mo: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .required('Email is required.')
          .email('Email is invalid.'),
        mo: Yup.string()
          .required('mo is required.')
          .email('mo is invalid.'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
      enableReinitialize
    >
      {({ setFieldValue }) => (
        <Form>
          <div>
            <Field
              type="text"
              name="email"
              onChange={({ target: { value } }) => {
                console.log(value);
                setFieldValue('email', value);
              }}
            />
            <ErrorMessage name="email">
              {(error) => <div style={{ color: '#f00' }}>{error}</div>}
            </ErrorMessage>
          </div>

          <div>
            <Field
              type="text"
              name="mo"
              onChange={({ target: { value } }) => {
                console.log(value);
                setFieldValue('mo', value);
              }}
            />
            <ErrorMessage name="mo">
              {(error) => <div style={{ color: '#f00' }}>{error}</div>}
            </ErrorMessage>
          </div>
          <input type="submit" value="Submit" />
        </Form>
      )}
    </Formik>
  );
};

export default App