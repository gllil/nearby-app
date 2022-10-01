import React from "react";
import { Button, Card } from "react-bootstrap";
import AddTransaction from "./AddTransaction";

const TransactionList = () => {
  return (
    <Card className="w-75">
      <Card.Header>
        <Card.Title>Transactions</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="text-center">
          <h6>No Transactions Yet</h6>
          <Button>Add Transaction</Button>
        </div>
      </Card.Body>
      <AddTransaction />
    </Card>
  );
};

export default TransactionList;
