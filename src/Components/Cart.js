import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";

const Cart = ({ cartItem, removeItem, buyNow }) => {
  let amount = 0;
  const [bool, setBool] = useState(false);

  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.productPrice);
  });

  return (
    <Container
      className="text-center"
      style={{
        backgroundColor: "#2F363F",
        height: "90vh",
        borderRadius: "5px",
        overflow: "scroll",
      }}
    >
      <ListGroup className="mt-3">
        {cartItem.map((item) => (
          <ListGroupItem key={item.id}>
            <Row>
              <Col>
                <img height={80} src={item.tinyImage} />
              </Col>
              <Col className="text-center">
                <div className="text-primary">{item.productName}</div>
                <p>price: ${item.productPrice}</p>
                <Button color="danger" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Col>
            </Row>
          </ListGroupItem>
        ))}
      </ListGroup>
      {/* If everything is empty */}
      {cartItem.length >= 1 ? (
        <Card className="text-center mt-3 mb-3">
          <CardHeader>Grand Total</CardHeader>
          <CardBody>
            Your amount for {cartItem.length} items is {amount}
          </CardBody>
          <CardFooter>
            <Button
              color="success"
              onClick={() => {
                buyNow();
                setBool(true);
              }}
            >
              Buy now
            </Button>
          </CardFooter>
        </Card>
      ) : bool ? (
        <h2
          style={{
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="text-success"
        >
          Order placed successfully!
        </h2>
      ) : (
        <h2
          style={{
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="text-warning"
        >
          Cart is empty
        </h2>
      )}
    </Container>
  );
};

export default Cart;
