import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";

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
