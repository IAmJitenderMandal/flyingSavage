import React from 'react'
import UserImg from '../images/icons8-user-50.png'
import CartImg from '../images/icons8-shopping-cart-50.png'

let Header = () => {
    return (
        <header className="header">
            <div className="logo"><h2>Flying-Savage</h2></div>
            <nav className="navigation">
                <ul className="list">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className="login-cart">
                <div className="login">
                    <span className="userImg"><img src={UserImg} alt=""/></span>
                    <span className="loginText"><h3>Log In</h3></span>
                </div>
                <div className="cart">
                    <span className="cartImg"><img src={CartImg} alt=""/></span>
                    <span className="itemsNumber">2</span>
                </div>
            </div>
        </header>
    )
}

export default Header;