import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import { Link } from "react-router-dom" 
import { ShopContext } from "../../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const {getTotalCartItem}=useContext(ShopContext)
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo-img" />
          <p>BNN's</p>
          </div>
          <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link to='/' className="Link"> Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}> <Link to='/mens' className="Link"> Mens</Link> {menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}> <Link to='/women' className="Link"> Women</Link> {menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link to='/kids' className="Link"> Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
          </ul>
          <div className="nav-login-cart">
            <Link to='/login' ><button className="login">Login</button></Link>
            <Link to='cart' ><img src={cart_icon} alt="cart-img" /></Link>
            <div className="nav-cart-count">{getTotalCartItem()}</div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
