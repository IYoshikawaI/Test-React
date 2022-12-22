import React from "react";

function NavItems() {
    return (
        <span>
            <ul className='navitemsContainer'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </span>
    )
}

function Header() {
    return (
        <header>
            <nav className='navigation'>
                <NavItems />
                <img src='logo192.png' className='image' alt='React Logo' />
            </nav>
        </header>
    )
}

export default Header;