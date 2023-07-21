import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer from "./Reducers";

export const CartItem = createContext();

const Context = ({ children }) => {
  const prodArray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price({ dec: 0 }),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElements([0, 2, 4, 6, 8]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: prodArray,
    cart: [],
  });

  return (
    <>
      <CartItem.Provider value={{ state, dispatch }}>
        {children}
      </CartItem.Provider>
    </>
  );
};

export default Context;

export const CartState = () => {
  return useContext(CartItem);
};
