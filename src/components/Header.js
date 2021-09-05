import React from 'react';
import '../components/Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <nav>
            <h3>Shopping Cart</h3>
            <input
                type="text"
                id="header-search"
                placeholder="Search products"
            />
            <ul>
                <li>About Us</li>
                <li>Products</li>
                <li>Contact Us</li>
                <li><Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>

    )
}
