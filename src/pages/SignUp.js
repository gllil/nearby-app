import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Formik } from "formik";
import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { object, string, ref } from "yup";
import { auth, db } from "../firebase/config";

const SignUp = () => {
  let navigate = useNavigate();
  let validationSchema = object({
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    email: string()
      .email("Invalid Email Address")
      .required("Email is required"),
    password: string()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: string()
      .equals([ref("password"), null], "Password does not match")
      .required("Must confirm password"),
  });

  const handleFormSubmit = async (values) => {
    const email = values.email.toLowerCase();

    createUserWithEmailAndPassword(auth, email, values.password).then(
      async (res) => {
        const user = await setDoc(doc(db, "users", res.id), {
          firstName: values.firstName,
          lastName: values.lastName,
          email: email,
        });

        return user;
      }
    );
  };
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h3>Sign Up</h3>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={6}>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              handleFormSubmit(values)
                .then(() => {
                  resetForm();
                  navigate("/home", { replace: true });
                })
                .catch((err) => console.log(err));
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
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={values.firstName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Form.Text className="error">
                          {errors.firstName &&
                            touched.firstName &&
                            errors.firstName}
                        </Form.Text>
                      </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={values.lastName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Form.Text className="error">
                          {errors.lastName &&
                            touched.lastName &&
                            errors.lastName}
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
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
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Form.Text className="error">
                      {errors.confirmPassword &&
                        touched.confirmPassword &&
                        errors.confirmPassword}
                    </Form.Text>
                  </Form.Group>
                  <Button
                    className="mt-3"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign Up
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

export default SignUp;
