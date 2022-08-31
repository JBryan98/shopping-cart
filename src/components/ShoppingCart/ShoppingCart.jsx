import React from "react";
import "./ShoppingCart.css";
import { AiOutlineClose } from "react-icons/ai";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartItems from "../CartItems/CartItems";
import { formatCurrency } from "../../utilities/formatCurrency";
import storeItems from "../../data/items.json";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems, cartQuantity } = useShoppingCart();
  console.log(cartItems);

  return (
    <div className={isOpen ? "shopping-cart-container" : "hidden"}>
      <div className="gradient" onClick={closeCart}></div>
      <div className="cart-section">
        <div className="cart-header">
          <strong>Carrito</strong>
          <AiOutlineClose onClick={closeCart} className="close-icon" />
        </div>
        <p>{cartQuantity === 0 ? "¡El carrito esta vacío!" : null}</p>
        <div className="cart-items-container">
          {cartItems.map((item) => (
            <div key = {item.id}>
              <CartItems {...item} />
              <hr></hr>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <strong>Total: </strong>
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
