import React from "react";
import { CartState } from "../context/Context";
import Filter from "./Filter";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);

  return (
    <>
      <Filter />
    </>
  );
};

export default Home;
