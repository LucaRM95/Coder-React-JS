import React from 'react';

const CartWidget = ({ contador }) => {
    return (
        <a className="nav-link" href="">
            <i class="fas fa-shopping-cart"> { contador }</i>
        </a>
    );
}

export default CartWidget;
