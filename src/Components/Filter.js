import React from "react";
import { Button, Form } from "react-bootstrap";
import "./styles.css";
import Rating from "./Rating";
import { CartState } from "../context/Context";

const Filter = () => {
  const {
    filterState: { filterStock, filterFastDelivery, filterRatings, sort },
    filterDispatch,
  } = CartState();

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
            onChange={() =>
              filterDispatch({ type: "FILTER_PRICE", payload: "lowToHigh" })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            label="Descending"
            type="radio"
            name="group1"
            id={`inline-2`}
            onChange={() =>
              filterDispatch({ type: "FILTER_PRICE", payload: "highToLow" })
            }
            checked={sort === "highToLow" ? true : false}
          />
        </span>

        <span>
          <Form.Check
            inline
            label="Include Out of Stock"
            type="checkbox"
            name="group1"
            id={`inline-3`}
            onChange={() => filterDispatch({ type: "FILTER_STOCK" })}
            checked={filterStock}
          />
        </span>

        <span>
          <Form.Check
            inline
            label="Fast Delivery"
            type="checkbox"
            name="group1"
            id={`inline-4`}
            onChange={() => filterDispatch({ type: "FILTER_FASTDELIVERY" })}
            checked={filterFastDelivery}
          />
        </span>

        <span>
          <label>Rating:</label>
          <Rating
            rate={filterRatings}
            onSub={(index) =>
              filterDispatch({ type: "FILTER_RATINGS", payload: index + 1 })
            }
            style={{ cursor: "pointer" }}
          />
        </span>

        <Button
          variant="light"
          onClick={() => filterDispatch({ type: "CLEAR_ALL_FILTERS" })}
        >
          Clear Filters
        </Button>
      </div>
    </>
  );
};

export default Filter;
