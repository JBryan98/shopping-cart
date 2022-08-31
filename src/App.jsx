import React from "react";
import { Routes, Route } from "react-router-dom";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import ShoppingCartProvider from "./context/ShoppingCartContext";

const App = () => {
  return (
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </ShoppingCartProvider>
  );
};

export default App;
