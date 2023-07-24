import React from "react";
import { CartState } from "../context/Context";
import Filter from "./Filter";
import SingleProd from "./SingleProd";

const Home = () => {
  const {
    state: { products },
  } = CartState();

  // console.log(products, "hello");
  console.log(products);
  return (
    <>
      <div className="home">
        <Filter />
        <div className="productContainer">
          {products.map((prod) => (
            <SingleProd prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
