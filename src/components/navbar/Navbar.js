import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import all from "../../images/all-logo.svg"
import { useCart } from "react-use-cart";
import "./Navbar.css"
function NavBar() {
  const [click, setClick] = useState(false);
  const {items} = useCart()
  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={all} alt="" />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Главное
              </NavLink>
            </li>
            <div class="dropdown">
              <button class="dropbtn"><NavLink className='menu-link' to="/store">Меню</NavLink></button>
              <div class="dropdown-content">
                <li><NavLink to="/smuzi">Смузи</NavLink></li>
                <li> <NavLink to="/food">Здоровая еда</NavLink></li>
                <li><NavLink to="/lassi">Ласси</NavLink></li>
                <li><NavLink to="/salates">Салаты</NavLink></li>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">О нас</button>
              <div class="dropdown-content">
                <li><NavLink to="/contact">Связаться с нами</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
              </div>
            </div>
            <li className="nav-item">
              <NavLink
                exact
                to="/franchise"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                франшиза
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/basket"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <i class="fa-solid fa-cart-shopping"></i><sup>{items.length}</sup>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Войти
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/register"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Зарегистрироваться
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;




{/* 

 <li><Link to="/login">Войти</Link></li>
 <li><Link to="/register">Зарегистрироваться</Link></li>  */}