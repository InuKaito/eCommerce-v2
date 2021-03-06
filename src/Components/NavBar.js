import React from 'react';
import { Link } from 'react-router-dom';
import '../SCSS/Nav.scss'

function NavBar() {
    return (
        <nav id="navbar">
            <div class="container">
                <h1 class="logo"><span class="text-primary">GunPla-Y</span></h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;

