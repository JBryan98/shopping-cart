import React from "react";
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Navbar = () => {
  const {openCart, cartQuantity} = useShoppingCart()
  return (
    <div className="navbar-container">
      <div className="logo">
        <img
          src="https://media.istockphoto.com/vectors/gaming-pc-design-gaming-desktop-computer-vector-design-custom-gaming-vector-id1179213187?k=20&m=1179213187&s=612x612&w=0&h=rNbDvpJohcJXmKH8cBbWD3sFsEZvMjmkKowoA14Y7To="
          alt="logo"
        />
      </div>
      <ul>
        <li><NavLink to="/" className="Navlink">Store</NavLink></li>
        <li><NavLink to="/about" className="Navlink">About</NavLink></li>
      </ul>
      <div className="cart" onClick={openCart}>
        <AiOutlineShoppingCart className="cart-icon"/>
        <div className="contador">
          <strong>{cartQuantity}</strong>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
