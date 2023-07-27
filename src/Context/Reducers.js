import React from "react";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart.filter((c) => c.id !== action.payload.id)],
      };
    case "INC_QUANTITY":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            return item.id === action.payload.id
              ? item.qty < action.payload.inStock[0]
                ? (item.qty += 1) && item
                : (alert("Max limit"), item)
              : item;
          }),
        ],
      };
    case "DEC_QUANTITY":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            return item.id === action.payload.id
              ? item.qty > 1
                ? (item.qty -= 1) && item
                : item
              : item;
          }),
        ],
      };
    case "PRICE_QUANTITY":
      return {
        ...state,
        cart: [
          ...state.cart.map((item) => {
            return item.qty > 1
              ? item.qty * Number(action.payload.price)
              : item;
          }),
        ],
      };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_PRICE":
      return {
        ...state,
        sort: action.payload,
      };
    case "FILTER_STOCK":
      return {
        ...state,
        filterStock: !state.filterStock,
      };
    case "FILTER_FASTDELIVERY":
      return {
        ...state,
        filterFastDelivery: !state.filterFastDelivery,
      };
    case "FILTER_RATINGS":
      return {
        ...state,
        filterRatings: action.payload,
      };
    case "FILTER_SEARCH":
      return {
        ...state,
        searchText: action.payload,
      };
    case "CLEAR_ALL_FILTERS":
      return {
        filterStock: false,
        filterFastDelivery: false,
        filterRatings: 0,
      };

    default:
      return state;
  }
};

const Reducers = () => {
  return <></>;
};

export default Reducers;
