import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const SingleProd = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

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

              <Rating rate={prod.ratings.length} />
            </Card.Subtitle>

            {cart.some((p) => p.id === prod.id) ? (
              <Button
                variant="danger"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                }
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
                disabled={prod.inStock[0] === 0}
              >
                {prod.inStock[0] === 0 ? "Out of Stock" : "Add to Cart"}
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default SingleProd;
