import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const CartItem = ({ product, addIncart }) => {
  return (
    <Card className="mt-2 mb-1">
      <CardImg top src={product.smallImage} width="100%" height="150" />
      <CardBody className="text-center">
        <CardTitle>{product.productName}</CardTitle>
        <CardText className="secondary">price ${product.productPrice}</CardText>
        <Button
          color="success"
          onClick={() => {
            addIncart(product);
          }}
        >
          Add to cart
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
