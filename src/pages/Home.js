import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TransactionChart from "../components/TransactionChart";
import TransactionList from "../components/TransactionList";

const Home = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="d-flex justify-content-center">
          <TransactionChart />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center">
          <TransactionList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
