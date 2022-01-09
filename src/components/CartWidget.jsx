import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import CartContext from './Context/CartContext';

const CartWidget = () => {

    let [cartCount, setCartCount] = useState(0);
    const cartContext = useContext(CartContext);

    const count = cartContext.cartCountFunc();

    useEffect(() => {
        setCartCount(cartCount = count);
    }, [])

    return (
        <>
            <div id="cart">
                <Link className="nav-link" to="/carrito">
                    <i id="content_cart" className="fas fa-shopping-cart me-1"></i>
                    {count}
                </Link>
            </div>
        </>
    );
}

export default CartWidget;
