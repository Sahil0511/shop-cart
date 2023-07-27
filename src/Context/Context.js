import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, filterReducer } from "./Reducers";

export const CartItem = createContext();

faker.seed(100);

const Context = ({ children }) => {
  const prodArray = [...Array(21)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price({ dec: 0 }),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElements([0, 1, 4, 5, 6, 7, 8, 9, 10], 1),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElements([1, 2, 3, 4, 5], { min: 1, max: 5 }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: prodArray,
    cart: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    filterStock: false,
    filterFastDelivery: false,
    filterRatings: 0,
    searchText: "",
  });

  return (
    <>
      <CartItem.Provider
        value={{ state, dispatch, filterState, filterDispatch }}
      >
        {children}
      </CartItem.Provider>
    </>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartItem);
};
