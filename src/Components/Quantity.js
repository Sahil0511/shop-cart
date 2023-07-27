import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import React from "react";
import { Button } from "react-bootstrap";
import "./styles.css";
import { CartState } from "../context/Context";

const Quantity = ({ quantity, prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div>
        <Button
          style={{ margin: "10px" }}
          onClick={() => dispatch({ type: "DEC_QUANTITY", payload: prod })}
        >
          <AiFillMinusCircle />
        </Button>
        <span>{quantity}</span>
        <Button
          style={{ margin: "10px" }}
          onClick={() => dispatch({ type: "INC_QUANTITY", payload: prod })}
        >
          <AiFillPlusCircle />
        </Button>
      </div>
    </>
  );
};

export default Quantity;
