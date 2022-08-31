import React from "react";
import storeItems from "../../data/items.json";
import { formatCurrency } from "../../utilities/formatCurrency";
import './CartItems.css'
import { MdOutlineDeleteForever } from 'react-icons/md'
import { useShoppingCart } from "../../context/ShoppingCartContext";

const CartItems = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="cart-item-details">
        {item.name} {quantity > 1 && <p>x{quantity} unidades ({formatCurrency(item.price)})</p>}
      </div>
      <div className="cart-item-price">
        {formatCurrency(item.price * quantity)}
      </div>
      <MdOutlineDeleteForever className="delete-item" onClick={() => removeFromCart(item.id)}/>
    </div>
  );
};

export default CartItems;
