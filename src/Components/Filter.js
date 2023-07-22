import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./styles.css";
import Rating from "./Rating";

const Filter = () => {
  const [rating, setRating] = useState("index");

  return (
    <>
      <div className="filters">
        <span className="title">Filter Products</span>

        <span>
          <Form.Check
            inline
            label="Ascending"
            type="radio"
            name="group1"
            id={`inline-1`}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Descending"
            type="radio"
            name="group1"
            id={`inline-2`}
          />
        </span>

        <span>
          <Form.Check
            inline
            label="Include Out of Stock"
            type="checkbox"
            name="group1"
            id={`inline-3`}
          />
        </span>

        <span>
          <Form.Check
            inline
            label="Fast Delivery"
            type="checkbox"
            name="group1"
            id={`inline-4`}
          />
        </span>

        <span>
          <label>Rating:</label>
          <Rating rating={rating} onSub={setRating} />
        </span>

        <Button variant="light">Clear Filters</Button>
      </div>
    </>
  );
};

export default Filter;
