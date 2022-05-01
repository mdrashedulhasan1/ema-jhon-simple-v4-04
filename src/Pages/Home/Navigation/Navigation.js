import React from 'react';
import './Navigation.css';
const Navigation = () => {
    return (
        <div>
            <nav className='navigation-container'>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Navigation;