import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Endpoints from "../../api/Endpoints";

export default function SignupPage() {

  const [response, setResponse] = useState({
    textMessage: "",
    alertClass: ""
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const removeAlert = () => {
    setResponse({
      textMessage: "",
      alertClass: ""
    });
  };

  const handleSubmit = (values) => {
    axios.post(Endpoints.SIGNUP_URL, values)
      .then(res => {
        setResponse({
          textMessage: "Registration Successful, Thank You",
          alertClass: "alert alert-success"
        })
      })
      .catch(error => {
        console.log(error)
        setResponse({
          textMessage: "Registration Unsuccessful",
          alertClass: "alert alert-danger"
        })
      })
    setTimeout(removeAlert, 4000)
  };



  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First name cannot be empty")
      .min(3, "First name should be atleast 3 characters"),
    lastName: Yup.string()
      .required("Last name cannot be empty")
      .min(3, "Last name should be atleast 3 characters"),
    email: Yup.string()
      .required("Email cannot be empty")
      .email("Email must be a valid email"),
    password: Yup.string()
      .required("Password cannot be empty")
      .min(6, "Password should be atleast 6 characters")
      .max(15, "Password cannot exceed 20 characters"),
    confirmPassword: Yup.string()
      .required("Password cannot be empty")
      .min(6, "Password should be atleast 6 characters")
      .max(15, "Password cannot exceed 20 characters")
      .oneOf([Yup.ref('password')], 'Your passwords do not match.')
  });

  return (
    <div>
      <Navbar />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form className="login-form-out">
              <div className={`${response.alertClass} text-center`}>
                {response.textMessage}
              </div>
              <header className="text-center mb-3 form-heading">Sign Up</header>
              <div className="mb-3">
                <Field
                  type="text"
                  className={
                    formik.touched.firstName && formik.errors.firstName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="firstName"
                  placeholder="First Name"
                />
                <ErrorMessage name="firstName">
                  {(errorMessage) => (
                    <small className="text-danger">{errorMessage}</small>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <Field
                  type="text"
                  className={
                    formik.touched.lastName && formik.errors.lastName
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="lastName"
                  placeholder="Last Name"
                />
                <ErrorMessage name="lastName">
                  {(errorMessage) => (
                    <small className="text-danger">{errorMessage}</small>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <Field
                  type="email"
                  className={
                    formik.touched.email && formik.errors.email
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="email"
                  placeholder="Email Address"
                />
                <ErrorMessage name="email">
                  {(errorMessage) => (
                    <small className="text-danger">{errorMessage}</small>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <Field
                  type="password"
                  className={
                    formik.touched.password && formik.errors.password
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password">
                  {(errorMessage) => (
                    <small className="text-danger">{errorMessage}</small>
                  )}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <Field
                  type="password"
                  className={
                    formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <ErrorMessage name="confirmPassword">
                  {(errorMessage) => (
                    <small className="text-danger">{errorMessage}</small>
                  )}
                </ErrorMessage>
              </div>

              <div className="d-grid mb-3 mt-4">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="text-center">
                <p>
                  Already have an account? Log In <Link to="/login">here</Link>
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
