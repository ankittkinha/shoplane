import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import Endpoints from "../../api/Endpoints";
import axios from "axios";

export default function LoginPage() {

  const navigate = useNavigate();
  const [response, setResponse] = useState({
    textMessage: "",
    alertClass: ""
  });

  const removeAlert = () => {
    setResponse({
      textMessage: "",
      alertClass: ""
    });
  };

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values) => {
    axios.post(Endpoints.LOGIN_URL, values)
      .then(res => {
        let detailsObj = JSON.parse(res.config.data);
        if (res.data) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", detailsObj.username);
        }
        navigate("/");
      })
      .catch(error => {
        console.log(error);
        setResponse({
          textMessage: error.response.data,
          alertClass: "alert alert-danger"
        })
      })
    setTimeout(removeAlert, 4000)
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Username cannot be empty")
    ,
    password: Yup.string()
      .required("Password cannot be empty")
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
              <header className="text-center mb-3 form-heading">Login</header>
              <div className="mb-3">
                <Field
                  type="text"
                  className={
                    formik.touched.username && formik.errors.username
                      ? "form-control is-invalid"
                      : "form-control"
                  }
                  name="username"
                  placeholder="Username"
                />
                <ErrorMessage name="username">
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

              <div className="d-grid mb-3 mt-4">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <div className="text-center">
                <p>
                  Don't have an account? Sign up <Link to="/signup">here</Link>
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
