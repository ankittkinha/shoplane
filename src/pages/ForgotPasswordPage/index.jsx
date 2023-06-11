import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {

    const navigate = useNavigate()

    const [response, setResponse] = useState({
        textMessage: "",
        alertClass: "",
    });

    const removeAlert = () => {
        setResponse({
            textMessage: "",
            alertClass: "",
        });
    };

    const navToLogin = () => {
        navigate("/login")
    }

    const initialValues = {
        email: "",
    };

    const handleSubmit = (values) => {
        console.log(values);
        setResponse({
            textMessage: `A password reset link has been sent to ${values.email}`,
            alertClass: "alert alert-success"
        })
        setTimeout(removeAlert, 2700)
        setTimeout(navToLogin, 3000)
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .required("Email cannot be empty")
            .email("Email must be a valid email")
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                {(formik) => {
                    return (
                        <Form className="reset-form">
                            <div className={response.alertClass}>{response.textMessage}</div>
                            <header className="reset-heading mb-4 text-center">
                                Reset Password
                            </header>
                            <div class="form-group">
                                <Field
                                    type="email"
                                    className={
                                        formik.touched.email && formik.errors.email
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    name="email"
                                    placeholder="Email"
                                />
                                <div>
                                    <ErrorMessage name="email">
                                        {(errorMessage) => (
                                            <small className="text-danger">{errorMessage}</small>
                                        )}
                                    </ErrorMessage>
                                </div>

                                <div class="form-text text-muted">
                                    Enter email linked to your account
                                </div>

                            </div>
                            <button type="submit" class="btn btn-primary w-100 mt-3 ">
                                Reset Password
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}
