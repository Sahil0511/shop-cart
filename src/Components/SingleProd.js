import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const SingleProd = ({ prod }) => {
  return (
    <>
      <div className="products">
        <Card>
          <Card.Img variant="top" src={prod.image} alt={prod.name} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>Rs.{prod.price}</span>
              {prod.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>2 days delivery</div>
              )}

              <Rating rating={prod.rating} />
            </Card.Subtitle>
            <Button variant="danger">Remove from Cart</Button>
            <Button disabled="!prod.inStock">
              {prod.inStock ? <div>Add to Cart</div> : <div>Out of Stock</div>}
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SingleProd;
