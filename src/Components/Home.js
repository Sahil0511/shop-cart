import React from "react";
import { CartState } from "../Context/Context";
import Filter from "./Filter";
import SingleProd from "./SingleProd";

const Home = () => {
  const {
    state: { products },
    filterState: {
      filterStock,
      filterFastDelivery,
      filterRatings,
      sort,
      searchText,
    },
  } = CartState();

  const newProducts = () => {
    let filteredProd = products;
    if (sort) {
      filteredProd = filteredProd.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!filterStock) {
      filteredProd = filteredProd.filter((prod) => prod.inStock[0]);
    }

    if (filterFastDelivery) {
      filteredProd = filteredProd.filter((prod) => prod.fastDelivery);
    }

    if (filterRatings) {
      filteredProd = filteredProd.filter(
        (prod) => prod.ratings.length >= filterRatings
      );
    }

    if (searchText) {
      filteredProd = filteredProd.filter((prod) =>
        prod.name.toLowerCase().includes(searchText)
      );
    }

    return filteredProd;
  };
  return (
    <>
      <div className="home">
        <Filter />
        <div className="productContainer">
          {newProducts().map((prod, key) => (
            <SingleProd prod={prod} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
