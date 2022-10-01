import React from "react";
// import { doc, setDoc } from "firebase/firestore";
import { Formik } from "formik";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
// import { auth, db } from "../firebase/config";
const AddContact = () => {
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  let validationSchema = object({
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    email: string()
      .email("Invalid Email Address")
      .required("Email is required"),
    phone: string()
      .matches(phoneRegExp, "*Phone number is not valid")
      .required("*Phone number required"),
    role: string().required("Role is required"),
  });
  const handleFormSubmit = async (values) => {
    // const email = values.email.toLowerCase();
  };
  return (
    <Card>
      <Card.Header>
        <Card.Title className="text-center">Add Contact</Card.Title>
      </Card.Header>
      <Card.Body>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            role: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            handleFormSubmit(values);
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
                  <Col md={12} lg={6}>
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
                  <Col md={12} lg={6}>
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
                        {errors.lastName && touched.lastName && errors.lastName}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} lg={6}>
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
                  </Col>
                  <Col md={12} lg={6}>
                    <Form.Group>
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Form.Text className="error">
                        {errors.phone && touched.phone && errors.phone}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} lg={6}>
                    <Form.Group>
                      <Form.Label>Role</Form.Label>
                      <Form.Select
                        type="text"
                        name="role"
                        value={values.role}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <option>Choose One</option>
                        <option>Buyer</option>
                        <option>Seller</option>
                        <option>Buyers Agent</option>
                        <option>Listing Agent</option>
                        <option>Title</option>
                      </Form.Select>
                      <Form.Text className="error">
                        {errors.role && touched.role && errors.role}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>

                <Button className="mt-3" type="submit" disabled={isSubmitting}>
                  Add Contact
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default AddContact;
