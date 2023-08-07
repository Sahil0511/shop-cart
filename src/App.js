import React from "react";
import Header from "./Components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </div>
    </>
  );
};

export default App;
