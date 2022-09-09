import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { auth } from "../firebase/config";

const Login = () => {
  const [pwError, setPwError] = useState(null);
  let validationSchema = object({
    email: string()
      .email("Invalid Email Address")
      .required("Email is required"),
    password: string()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    const email = values.email.toLowerCase();

    const user = await signInWithEmailAndPassword(auth, email, values.password);
    return user;
  };

  const formChange = () => {
    setPwError(null);
  };
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h3>Login</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6}>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm, setSubmitting }) => {
              handleFormSubmit(values)
                .then(() => {
                  resetForm();
                  navigate("/home", { replace: true });
                })
                .catch((err) => {
                  setPwError(err.message);
                  setSubmitting(false);
                });
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isSubmitting,
            }) => {
              return (
                <Form onSubmit={handleSubmit} onChange={formChange}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Text className="error">
                      {errors.email && touched.email && errors.email}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Text className="error">
                      {errors.password && touched.password && errors.password}
                      {pwError && pwError}
                    </Form.Text>
                  </Form.Group>

                  <Button
                    className="mt-3"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
