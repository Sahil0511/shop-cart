import { AiFillDelete } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { CartState } from "../context/Context";
import Quantity from "./Quantity";
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, currElem) => acc + Number(currElem.price), 0));
  }, [cart]);

  return (
    <>
      <div className="home">
        <div className="productContainer">
          <ListGroup>
            {cart.map((prod) => (
              <ListGroupItem key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>Rs.{prod.price}</span>
                  </Col>
                  <Col md={2}>
                    <Rating rate={prod.ratings.length} />
                  </Col>
                  <Col md={2}>
                    <Quantity
                      prod={prod}
                      quantity={prod.qty}
                      inStock={prod.inStock[0]}
                    />
                  </Col>
                  <Col>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                      }
                    >
                      <AiFillDelete style={{ fontSize: "20px" }} />
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>

        <div className="filters summary">
          <span className="title">Total: {cart.length} Items</span>
          <span style={{ fontSize: "20px", fontWeight: "700" }}>
            Total : Rs.{total}
          </span>
          <Button disabled={cart.length === 0}>Proceed to Checkout</Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
