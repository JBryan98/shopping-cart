import React from "react";
import "./Products.css";
import storeItems from "../../data/items.json";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Products = () => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();

  return (
    <div className="grid-container">
      {storeItems.map((item) => (
        <div className="product-container" key={item.id}>
          <div className="product-image">
            <img src={item.imgUrl} alt={item.name} />
          </div>
          <div className="product-decription">
            <h3>{item.name}</h3>
            <h4>{formatCurrency(item.price)}</h4>
          </div>
          <div className="product-button">
            {getItemQuantity(item.id) === 0 ? (
              <button className="btn-agregar" onClick={() => increaseCartQuantity(item.id)}>Agregar al Carrito</button>
            ) : (
              <div className="cantidad">
                <button onClick={() => decreaseCartQuantity(item.id)}>
                  <AiOutlineMinus className="cantidad-icon" />
                </button>
                <div className="quantity-box">{getItemQuantity(item.id)} </div>
                <button onClick={() => increaseCartQuantity(item.id)}>
                  <AiOutlinePlus className="cantidad-icon" />
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
